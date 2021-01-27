module Api
  class TrainingsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      training = Training.new(trainings_params)

      if training.save
        render json:
          TrainingSerializer.new(training).serializable_hash.to_json
      else
        render json: {
          error: training.error.full_messages,
          status: 422,
        }
      end
    end

    def destroy
      training = Training.find(params[:id])

      if training.destroy
        head :no_content
      else
        render json: {
          error: training.error.full_messages,
          status: 422,
        }
      end
    end

    private

      def trainings_params
        params.require(:training).permit(:date, :distance, :time, :user_id)
      end
  end
end
