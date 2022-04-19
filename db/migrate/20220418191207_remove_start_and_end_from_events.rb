class RemoveStartAndEndFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_columns :events, :start_date, :start_time, :end_date, :end_time
  end
end
