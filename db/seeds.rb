# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
Skill.destroy_all
Admin.destroy_all

hsc = Admin.create!(username: 'hidwoc', email: 'heidischoi@gmail.com', password: '', title: 'Software Engineer / Fullstack Developer', bio: 'Whether I’m perfecting my kimchi recipe or building a full stack application, I approach each challenge with meticulous planning and creative problem-solving. As a software engineer, I am able to leverage this mindset to create apps that free up our time and energy to pursue what makes us truly happy in life - in my case, a well-balanced lifestyle and the joy of seeing a thoughtfully designed product at work.', linkedin: 'https://www.linkedin.com/in/heidischoi/', resume: '', github: 'https://github.com/hidwoc/portfolio/tree/main', instagram: 'https://www.instagram.com/hidwoc/', facebook: 'https://www.facebook.com/heidi.choi.524', twitter: 'https://twitter.com/hid_woc')

puts "#{Admin.count} admins created"

js = Skill.create!(name: 'Javascript', category: 'Frontend', icon: '')
react = Skill.create!(name: 'React', category: 'Frontend', icon: '')
node = Skill.create!(name: 'Node.js', category: 'Frontend', icon: '')
netlify = Skill.create!(name: 'Netlify', category: 'Frontend', icon: '')
html = Skill.create!(name: 'HTML', category: 'Frontend', icon: '')
airtable = Skill.create!(name: 'Airtable', category: 'Frontend', icon: '')
axios = Skill.create!(name: 'Axios', category: 'Frontend', icon: '')
ruby = Skill.create!(name: 'Ruby', category: 'Backend', icon: '')
rails = Skill.create!(name: 'Rails', category: 'Backend', icon: '')
mongodb = Skill.create!(name: 'MongoDB', category: 'Backend', icon: '')
mongoose = Skill.create!(name: 'Mongoose', category: 'Backend', icon: '')
express = Skill.create!(name: 'Express', category: 'Backend', icon: '')
insomnia = Skill.create!(name: 'Insomnia', category: 'Backend', icon: '')
postman = Skill.create!(name: 'Postman', category: 'Backend', icon: '')
heroku = Skill.create!(name: 'Heroku', category: 'Backend', icon: '')
github = Skill.create!(name: 'Github', category: 'Other', icon: '')
excel = Skill.create!(name: 'Microsoft Excel', category: 'Other', icon: '')
gsuite = Skill.create!(name: 'GSuite', category: 'Other', icon: '')
# express = Skill.create!(name: 'express', category: 'Backend', icon: '')

puts "#{Skill.count} skills created"

Project.create!(name: "What's For Dinner?", description: 'A health conscious recipe finding app', techstack: "HTML / JS / API", site: 'https://whats-for-dinner-flamingos.netlify.app/', repo: 'https://github.com/hidwoc/Whats-For-Dinner', img: '')
Project.create!(name: "JaduFinances", description: 'A small business finance tracking application', techstack: "React / Airtable", site: 'https://jadufinances.netlify.app/', repo: 'https://github.com/hidwoc/jadu-finances', img: '')
Project.create!(name: "SPF", description: 'A sunblock ecommerce website built with a team of 3 developers', techstack: "React / MongoDB / Github", site: 'https://spf-sth.netlify.app/', repo: '', img: '')
Project.create!(name: "Jadu Mart", description: 'A mock shopping application for my small business that accounts for inventory', techstack: "React / Ruby on Rails", site: 'https://jadumart.netlify.app/', repo: 'https://github.com/hidwoc/jadu-mart/tree/main', img: '')

puts "#{Project.count} projects created"