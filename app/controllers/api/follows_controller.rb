class Api::FollowsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, except: [ :index_friends ]
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

  private
    def set_user
      @user = User.find(params[:user_id])
    end
end

