class RemoveTestFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :test
  end
end
