class CreateExaminations < ActiveRecord::Migration
  def change
    create_table :examinations do |t|
      t.string :ex_code
      t.string :ex_type, :limit => 1
      t.string :eval_type, :limit => 1
      t.string :used, :limit => 1
      t.string :score_type, :limit => 1
      t.integer :num_choice
      t.integer :score_min
      t.integer :score_max
      t.string :choice_lang, :limit => 1
      t.string :random_choice, :limit => 1
      t.string :timer_type, :limit => 1
      t.integer :duration
      t.string :skip, :limit => 1
      t.string :back, :limit => 1
      t.string :change, :limit => 1
      t.string :display_time, :limit => 1
      t.string :display_answer, :limit => 1
      t.text :finish_text
      t.string :finish_condition, :limit => 1
      t.text :explanation
      t.integer :category_id
    end
  end
end
