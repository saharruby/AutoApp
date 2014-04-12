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
    query_url = "/guide?category=" + params[:category] + '&price_range=' + params[:price_range] +
                      '&country=' + params[:country] + "&engine=" + params[:engine] + "&limit=" + params[:limit]
    query_url += "&start=" + params[:start] if params[:start]
    binding.pry
    respond_with Net::HTTP.get URI.parse(HOST + query_url)
  end

  def versionDetails
    # binding.pry
    respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:model_id] + '/versions/' +  params[:version_id] + '/')  if params[:model_id]
  end

end
