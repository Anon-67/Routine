class Event < ApplicationRecord
    validates :start, :body, :end, presence: :true
    belongs_to :user
end
