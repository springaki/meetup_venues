require 'bundler'
Bundler.require

require 'yaml'
require 'json'

class Database
  attr_reader :data

  def initialize(path)
    @data = Dir[File.join(path, '*.yaml')].map do |yaml_path|
      YAML.load_file(yaml_path)
    end
  end
end


module MeetupVenues
  class Application < Sinatra::Application
    attr_reader :json

    configure do
      data_path = File.join(File.dirname(__FILE__) ,'data')
      database = Database.new(data_path)
      @@json = JSON.dump(database.data)
      p @@json
    end

    get '/' do
      haml :index
    end

    get '/css/screen.css' do
      scss :screen
    end

    get '/data.json' do
      content_type :json
      @@json
    end
  end
end
