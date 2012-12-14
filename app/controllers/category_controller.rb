# coding: utf-8
class CategoryController < ApplicationController
  
  def data
    datas = []
    rs = Category.all
    datas = rs.collect{|u| {
      :id => u.id.to_s,
      :parentid => u.parent_id||"-1",
      :label => u.name,
      :leaf => u.leaf,
      :icon => (u.leaf == '1')? view_context.image_path("document.png") : view_context.image_path("folder.png"),
    }}
    render :text => datas.to_json
  end
  
  def new
    @category = Category.new
    @category.parent_id = params[:current_id] if params[:current_leaf].to_s == "0"
    @category.parent_id = params[:parent_id] if params[:current_leaf].to_s == "1"
    @category.leaf = params[:leaf]
    1.times { @category.examinations.build }
  end
  
  def create
    @category = Category.new(params[:category])
    if @category.save
      respond_to do |format|
        format.html { redirect_to category_data_path }
        format.js
      end
    else
      render "new"
    end
  end
  
  def edit
    @category = Category.find(params[:id])
    @category.parent_id = params[:current_id] if params[:current_leaf].to_s == "0"
    @category.parent_id = params[:parent_id] if params[:current_leaf].to_s == "1"
    @category.leaf = params[:leaf]
  end
end
