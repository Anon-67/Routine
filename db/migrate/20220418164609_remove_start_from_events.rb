class RemoveStartFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :start
  end
end
