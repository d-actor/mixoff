class Api::MixoffsController < ApplicationController
  before_action :set_mixoff, except: [ :index, :create ]

  def index
    render json: Mixoff.all
  end

  def show
    render json: @mixoff
  end

  def create
    mixoff = Mixoff.new(mixoff_params)
    if mixoff.save
      render json: mixoff
    else
      render json: { errors: "Error creating mixoff" }, status: 422
    end
  end

  def update
    if @mixoff.update(mixoff_params)
      render json: @mixoff
    else
      render json: { errors: "Error updating mixoff" }, status: 422
    end
  end

  def destroy
    @mixoff.destroy
  end

  private

  def set_mixoff
    @mixoff = Mixoff.find(params[:id])
  end

  def mixoff_params
    params.require(:mixoff).permit(:title, :description, :recurring, :track_limit)
  end
end

