class Api::SongsController < ApplicationController
  before_action :set_song, only: [:update, :destroy]

  def index
    render json: Song.All
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render json: { errors: song.errors }, status: :unprocessable_entity
    end
  end

  def update
    song = Song.find(params[:id])
    render json: song
  end

  def destroy
    Song.find(params[:id]).destroy
    render json: {message: 'Song deleted.'}
  end

  private
    def song_params
      params.require(:title)
    end 

    def set_song
      @song = Song.find(params[:id])
    end
end
