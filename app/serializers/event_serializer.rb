class EventSerializer < ActiveModel::Serializer
  attributes :id, :body, :start, :end_time
  has_many :users

  # def usersToDisplay
  #   self.object.users.where.not(id: session[:user_id])
  # end
end
