Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do

    # spotify routes
    get 'spotify/playlists', to: "spotify#playlists"
    get 'spotify/tracks/:id', to: "spotify#playlist_tracks"

    # follow routes
    #   users
    post 'follows/create', to: "follows#create"
    post 'follows/destroy', to: "follows#destroy"
    get '/friends', to: "follows#index_friends"
    #   mixoffs
    post 'follows/mixoff', to: "follows#follow_mixoff"
    post 'follows/unfollow_mixoff', to: "follows#unfollow_mixoff"
    get '/mixoff/:mixoff_id/members', to: "follows#index_members"

    # user routes
    get 'users', to: "users#index"

    # mixoff routes
    resources :mixoffs

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

