class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    #todo
  end
end
