json.business do
    json.extract! @business,
    :id,
    :name,
    :city,
    :state,
    :zip_code,
    :price_range,
    :category,
    :phone_number,
    :latitude,
    :longitude,
    :created_at,
    :updated_at
end


