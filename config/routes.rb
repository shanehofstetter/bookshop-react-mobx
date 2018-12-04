Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show, :create]
    end
  end

  get 'locales/:locale/translation', to: 'translations#show'

  root to: 'pages#root'
  get '*unmatched_route', to: 'pages#root', constraints: ->(request) do
    # needed for react-router to work
    !request.xhr? && request.format.html?
  end

  mount ActionCable.server => '/cable'
end
