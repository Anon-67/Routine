class AddTestToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :test, :datetime
  end
end
