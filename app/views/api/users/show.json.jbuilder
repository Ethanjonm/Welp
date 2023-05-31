json.user do
    json.extract! @user, :id, :email, :fname, :lname, :zip_code, :created_at, :updated_at
end
  