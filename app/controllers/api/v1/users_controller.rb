module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        users = User.all

        render json: UserSerializer.new(users, options).serializable_hash.to_json
      end

      def show
        user = User.find(params[:id])

        render json: UserSerializer.new(user, options).serializable_hash.to_json
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: UserSerializer.new(user).serializable_hash.to_json
        else
          render json: {
            error: user.errors.full_messages,
            status: 422,
            success: 0
          }
        end
      end

      def update
        user = User.find(params[:id])

        if user.update(user_params)
          render json: UserSerializer.new(user, options).serializable_hash.to_json
        else
          render json: {
            error: user.errors.full_messages,
            status: 422,
            success: 0
          }
        end
      end

      def destroy
        user = User.find(params[:id])

        if user.destroy
          head :no_content
        else
          render json: {
            error: user.errors.full_messages,
            status: 422,
            success: 0
          }
        end
      end

      private

        def user_params
          params.require(:user).permit(:name, :email, :password,
                                        :password_confirmation)
        end

        def options
          @options ||= { include: %i[trainings] }
        end
    end
  end
end
