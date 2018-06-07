Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'spotify/playlists', to: "spotify#playlists"
    get 'spotify/tracks/:id', to: "spotify#playlist_tracks"
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
