class Event < ApplicationRecord
    validates :start, :body, :end_time, presence: :true
    belongs_to :user
end
