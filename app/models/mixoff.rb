class Mixoff < ApplicationRecord
  acts_as_followable
  has_many :playlists
end

