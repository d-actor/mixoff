class AddSpotifyNameToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :spotify_name, :string
  end
end
