# coding: utf-8
class Category < ActiveRecord::Base
  attr_accessible :name, :leaf, :parent_id
  validates_presence_of :name, :leaf
  
  has_many :examinations
  accepts_nested_attributes_for :examinations
end
