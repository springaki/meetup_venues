require 'bundler'
Bundler.require

class Application < Sinatra::Application
  get '/' do
    'MeetupVenues'
  end
end
