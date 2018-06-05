class Api::SpotifyController < ApplicationController
  before_action :spotify_auth
  before_action :set_user

  def playlists
    playlists = @user.playlists
  end

  private
    def spotify_auth
      RSpotify.authenticate("#{<ENV['SPOTIFY_CLIENT_ID']>}", "#{<ENV["SPOTIFY_CLIENT_SECRET"]>}")
    end

    def set_user
      @user = RSpotify.user.find('danltactor')
    end
end