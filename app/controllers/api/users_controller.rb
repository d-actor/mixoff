class Api::UsersController < ApplicationController
  def index
    all = User.all.select do |user|
      user.id != current_user.id
    end
    render json: all
  end

  def show
    #todo
  end
end

