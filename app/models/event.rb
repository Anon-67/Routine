class Event < ApplicationRecord
    validates :start, :body, :end_time, presence: :true
    has_many :invitations, dependent: :destroy
    has_many :users, through: :invitations
end
