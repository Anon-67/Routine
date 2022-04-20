class TaskSerializer < ActiveModel::Serializer
  attributes :id, :body, :completed, :due_date
  has_one :user
end
