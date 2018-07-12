class Playlist < ApplicationRecord
  belongs_to :user
  belongs_to :mixoff, optional: true
end
