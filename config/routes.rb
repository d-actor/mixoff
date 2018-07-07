Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    # spotify routes
    get 'spotify/playlists', to: "spotify#playlists"
    get 'spotify/tracks/:id', to: "spotify#playlist_tracks"

    # follow routes
    post 'follows/create', to: "follows#create"
    delete 'follows/destroy', to: "follows#destroy"
    get '/friends', to: "follows#index_friends"

    # user routes
    get 'users', to: "users#index"

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
