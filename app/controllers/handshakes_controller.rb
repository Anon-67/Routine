class HandshakesController < ApplicationController
  before_action :set_handshake, only: [:show, :update, :destroy]

  # GET /handshakes
  def index
    @handshakes = Handshake.all

    render json: @handshakes
  end

  # GET /handshakes/1
  def show
    render json: @handshake
  end

  # POST /handshakes
  def create
    @handshake = Handshake.new(handshake_params)

    if @handshake.save
      render json: @handshake, status: :created, location: @handshake
    else
      render json: @handshake.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /handshakes/1
  def update
    if @handshake.update(handshake_params)
      render json: @handshake
    else
      render json: @handshake.errors, status: :unprocessable_entity
    end
  end

  # DELETE /handshakes/1
  def destroy
    @handshake.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_handshake
      @handshake = Handshake.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def handshake_params
      params.require(:handshake).permit(:user_id, :conversation_id)
    end
end
