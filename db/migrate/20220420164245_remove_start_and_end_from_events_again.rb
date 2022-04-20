class RemoveStartAndEndFromEventsAgain < ActiveRecord::Migration[6.1]
  def change
    remove_columns :events, :start, :end
  end
end
