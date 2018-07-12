class AddTrackLimitToMixoff < ActiveRecord::Migration[5.1]
  def change
    add_column :mixoffs, :track_limit, :integer
  end
end
