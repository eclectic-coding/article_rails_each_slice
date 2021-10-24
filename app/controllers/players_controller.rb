class PlayersController < ApplicationController

  def index
    @players = Player.all
    # Use take() to test frontend
    # @players = Player.take(10)
  end

end
