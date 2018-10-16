class Api::PlaylistsController < ApplicationController
  before_action :set_user
  before_action :set_playlist, except: [ :index, :create ]

  def index
    render json: Playlist.all
  end

  def show
    render json: @playlist
  end

  #need to create for user, then add mixoff foreign key
  def new
    playlist = @user.playlists.new(playlist_params)
    if playlist.save
      render json: playlist
      create
    else
      render json: { errors: "Error creating creating playlist" }, status: 422
    end
  end

  def create
    playlist = @user.playlists.new(playlist_params)
    if playlist.save
      render json: playlist
    else
      render json: { errors: "Error creating playlist" }, status: 422
    end
  end

  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: { errors: "Error updating playlist" }, status: 422
    end
  end

  def destroy
    @playlist.destroy
  end

  private
    def set_user
      if current_user
        @user = current_user
      else
        @user = User.find(params[:user_id])
      end
    end

    def set_mixoff
      @mixoff = Mixoff.find(params[:mixoff_id])
    end

    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    def playlist_params
      params.require(:playlist).permit(:name, :spotify_id, :url, :mixoff_id)
    end
end

