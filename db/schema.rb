# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 3) do

  create_table "categories", :force => true do |t|
    t.string  "name"
    t.integer "parent_id"
    t.string  "leaf",      :limit => 1
  end

  create_table "ex_warnings", :force => true do |t|
    t.string  "warning"
    t.integer "time"
    t.integer "examination_id"
  end

  create_table "examinations", :force => true do |t|
    t.string  "ex_code"
    t.string  "ex_type",          :limit => 1
    t.string  "eval_type",        :limit => 1
    t.string  "used",             :limit => 1
    t.string  "score_type",       :limit => 1
    t.integer "num_choice"
    t.integer "score_min"
    t.integer "score_max"
    t.string  "choice_lang",      :limit => 1
    t.string  "random_choice",    :limit => 1
    t.string  "timer_type",       :limit => 1
    t.integer "duration"
    t.string  "skip",             :limit => 1
    t.string  "back",             :limit => 1
    t.string  "change",           :limit => 1
    t.string  "display_time",     :limit => 1
    t.string  "display_answer",   :limit => 1
    t.text    "finish_text"
    t.string  "finish_condition", :limit => 1
    t.text    "explanation"
    t.integer "category_id"
  end

end
