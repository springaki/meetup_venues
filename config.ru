require 'rubygems'
require 'sinatra'
require 'haml'
require './meetup_venues.rb'

run MeetupVenues::Application

