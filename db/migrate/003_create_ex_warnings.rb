class CreateExWarnings < ActiveRecord::Migration
  def change
    create_table :ex_warnings do |t|
      t.string :warning
      t.integer :time
      t.integer :examination_id
    end
  end
end
