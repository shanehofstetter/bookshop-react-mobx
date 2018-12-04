# frozen_string_literal: true

module Api
  module V1
    class BooksController < ApiController
      def index
        render json: Book.all
      end

      def show
        render json: Book.find(params[:id])
      end

      def create
        @book = Book.new(book_params)

        if @book.save
          ActionCable.server.broadcast 'books', book: @book.as_json, action: 'created'
          render json: @book
        else
          render json: @book.errors, status: :unprocessable_entity
        end
      end

      protected

      def book_params
        params.require(:book).permit(:title, :description, :isbn)
      end
    end
  end
end
