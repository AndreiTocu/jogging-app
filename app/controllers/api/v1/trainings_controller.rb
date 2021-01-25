module Api
  module V1
    class TrainingsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        training = Training.new(trainings_params)

        if training.save
          render json: TrainingSerializer.new(training).serializer_json
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
end
