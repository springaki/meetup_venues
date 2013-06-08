require 'bundler'
Bundler.require

module MeetupVenues
  class Application < Sinatra::Application
    get '/' do
      haml :index
    end

    get '/screen.css' do
      scss :screen
    end
  end
end
