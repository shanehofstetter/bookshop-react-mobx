# frozen_string_literal: true

class TranslationsController < ApplicationController
  def show
    locale = params[:locale]
    locale = locale.split('-').first
    render json: I18n.t('.', locale: locale)
  end
end
