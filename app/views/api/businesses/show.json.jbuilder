json.business do
    json.extract! @business, :id, :name :city, :state, :zip_code, :created_at, :updated_at
end