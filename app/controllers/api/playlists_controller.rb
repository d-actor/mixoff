class Api::PlaylistsController < ApplicationController
  before_action :set_user
  before_action :set_mixoff, only: [ :create ]
  before_action :set_playlist, except: [ :index, :create ]

  def index
    render json: Playlist.all
  end

  def show
    render json: @playlist
  end

  def new
    playlist = @user.playlists.new(playlist_params)
  end

  def create
    playlist = @mixoff.playlists.new(playlist_params)
    binding.pry
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
      params.require(:playlist).permit(:name, :spotify_id, :url)
    end
end

