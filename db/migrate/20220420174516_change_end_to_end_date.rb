class ChangeEndToEndDate < ActiveRecord::Migration[6.1]
  def change
    rename_column :events, :end, :end_time
  end
end
