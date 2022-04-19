class AddStartTimeAndEndTimeToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :start, :string
    add_column :events, :end, :string
  end
end
