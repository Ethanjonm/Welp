# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ethan = User.create!(email: "ethan@gmail.com", password: "password", fname: "Ethan", lname: "Mercado", zip_code: "10011" )
User.create!(email: "billy@gmail.com", password: "password", fname: "Billy", lname: "Mays", zip_code: "10011" )
User.create!(email: "joey@gmail.com", password: "password", fname: "Joey", lname: "Wheeler", zip_code: "10011" )
User.create!(email: "jerry@gmail.com", password: "password", fname: "Jerry", lname: "Mouse", zip_code: "10011" )
User.create!(email: "tom@gmail.com", password: "password", fname: "Tom", lname: "Cat", zip_code: "10011" )


Business.create!(name: "Best Burgers", city: "Manhattan", state: "NY", zip_code: "10011", user_id: ethan.id, phone_number: "555-555-5555", category: "Bugers", price_range: 3, rating: 4)
Business.create!(name: "Good Food", city: "Manhattan", state: "NY", zip_code: "10011", user_id: ethan.id, phone_number: "555-555-5555", category: "Bugers", price_range: 4, rating: 2)
Business.create!(name: "Please Eat", city: "Manhattan", state: "NY", zip_code: "10011", user_id: ethan.id, phone_number: "555-555-5555", category: "Bugers", price_range: 1, rating: 1)
Business.create!(name: "Food House", city: "Manhattan", state: "NY", zip_code: "10011", user_id: ethan.id, phone_number: "555-555-5555", category: "Bugers", price_range: 5, rating: 4)
Business.create!(name: "Munch", city: "Manhattan", state: "NY", zip_code: "10011", user_id: ethan.id, phone_number: "555-555-5555", category: "Bugers", price_range: 2, rating: 5)

