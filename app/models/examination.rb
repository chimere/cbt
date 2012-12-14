class Examination < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :category
  has_many :ex_warnings
  accepts_nested_attributes_for :ex_warnings
end
