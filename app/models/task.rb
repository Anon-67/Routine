class Task < ApplicationRecord
  validates :body, :due_date, presence: :true
  belongs_to :user
end
