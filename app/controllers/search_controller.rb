class SearchController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json

  def index
    # used = %w[true false].include?(params[:used]) ? params[:used] : "false"
    # respond_with Net::HTTP.get URI.parse(HOST + "/search?manufacturer=" + params[:id] + "/models?used=" + used) if params[:id] #unless params[:id]
    respond_with Net::HTTP.get URI.parse(HOST + "/search?manufacturer=" + params[:id]) if params[:id] #unless params[:id]
  end

  def home
    # used = %w[true false].include?(params[:used]) ? params[:used] : "false"
    # respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:id]  + "?used=" + used)  if params[:id]
    respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:id] )  if params[:id]
  end

  def guide
    respond_with Net::HTTP.get URI.parse(HOST + "/guide?" + params[:id] )  if params[:id]
  end

  def versionDetails
    # binding.pry
    respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:model_id] + '/versions/' +  params[:version_id] + '/')  if params[:model_id]
  end

end