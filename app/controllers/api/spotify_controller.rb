class Api::SpotifyController < ApplicationController
  before_action :spotify_auth
  before_action :set_user
  # before_action :set_playlist, only: [ :playlist_tracks ]

  def playlists
    playlists = @user.playlists
    render json: playlists
  end

  def playlist_tracks
    playlist = RSpotify::Playlist.find(@user, params[:id])
    tracks = playlist.tracks
    render json: tracks
  end

  private
    def spotify_auth
      RSpotify.authenticate(ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_CLIENT_SECRET'])
    end

    def set_user
      @user = RSpotify::User.find(current_user.spotify_name)
    end

   # def set_playlist
   #   @playlist = RSpotify.find(@user, params[:id])
   # end
end
