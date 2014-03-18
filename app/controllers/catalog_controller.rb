class CatalogController < ApplicationController
  HOST = 'http://m.auto.co.il/autoAPI.svc'
  respond_to :json

  def index
    respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers") unless params[:id]
    respond_with Net::HTTP.get URI.parse(HOST + "/manufacturers/" + params[:id] + "/models") if params[:id]
  end

  def version
    respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:id] + "/versions") if params[:id]
  end

  def gallery
    respond_with Net::HTTP.get URI.parse(HOST + "/galleries/" + params[:id]) if params[:id]
  end

def videos
    respond_with Net::HTTP.get URI.parse(HOST + "/videos/" + params[:id]) if params[:id]
end

def competitors
    respond_with Net::HTTP.get URI.parse(HOST + "/competitors/" + params[:id]) if params[:id]
end

def used
  # raise params.inspect
    respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:id] + "/used") unless params[:usedId]
    # respond_with Net::HTTP.get URI.parse(HOST + "/models/" + params[:id] + "/used/" + params[:usedId])
end

  # def show
  #    respond_with Net::HTTP.get URI.parse(HOST + "/articles/" + params[:id])
  # end

end