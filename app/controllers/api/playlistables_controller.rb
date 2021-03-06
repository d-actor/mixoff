class Api::PlaylistablesController < ApplicationController
  before_action :set_playlistable, only: [ :update, :destroy, :show ]

  def index
    owner_table = params[:owner_type].tableize
    owner_id = params[:owner_id]
    playlists = Playlistable.joins("SELECT playlists.* FROM playlistables
                                    INNER JOIN playlists ON playlists.id = playlistables.playlist_id
                                    INNER JOIN #{owner_table} ON #{owner_table}.id = playlistables.owner_id
                                    WHERE playlistables.owner_id = #{owner_id}")
    render json: playlists
  end

  def friend_index
    friend_playlists = Playlistable.joins("SELECT playlists.* FROM playlistables
                                           INNER JOIN playlists ON playlists.id = playlistables.playlist_id
                                           INNER JOIN users ON users.id = playlistables.owner_id
                                           WHERE playlistables.owner_id = #{@owner.id}")
    render json: friend_playlists

  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def playlistable_params
    params.require(:playlistable).permit(:playlist_id, :owner_id, :owner_type)
  end

  def set_playlistable
    @playlistable = Playlistable.find(params[:id])
  end
end

