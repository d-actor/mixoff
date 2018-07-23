class Api::FollowsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [ :create, :destroy ]
  before_action :set_mixoff, only: [ :follow_mixoff, :unfollow_mixoff, :index_members ]
  respond_to :js

  def create
    current_user.follow(@user)
  end

  def destroy
    current_user.stop_following(@user)
  end

  def index_friends
    friends = User.find(current_user.follows.ids)
    render json: friends
  end

  def follow_mixoff
    current_user.follow(@mixoff)
  end

  def unfollow_mixoff
    current_user.stop_following(@mixoff)
  end

  #index members of a mixoff
  def index_members
    render json: @mixoff.followers
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end

    def set_mixoff
      @mixoff = Mixoff.find(params[:mixoff_id])
    end
end

