class AddUrlAndMixoffIdToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :url, :string
    add_column :playlists, :mixoff_id, :integer
    add_column :playlists, :user_id, :integer
  end
end
