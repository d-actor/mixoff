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

  def create

  end

  def update
  end

  def destroy
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end

    def set_mixoff
      @mixoff = Mixoff.find(params[:mixoff_id])
    end

    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    def playlist_params
      params.require(:playlist).permit(:user_id, :mixoff_id, :name, :spotify_id)
    end
end

