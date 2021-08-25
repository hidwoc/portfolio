# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
Skill.destroy_all
Social.destroy_all
Admin.destroy_all

hsc =
  Admin.create!(
    username: 'hidwoc',
    email: 'heidischoi@gmail.com',
    password: 'sem97',
    title: 'Software Engineer / Fullstack Developer',
    bio:
      'Whether I’m perfecting my kimchi recipe or building a full stack application, I approach each challenge with meticulous planning and creative problem-solving. As a software engineer, I am able to leverage this mindset to create apps that free up our time and energy to pursue what makes us truly happy in life - in my case, a well-balanced lifestyle and the joy of seeing a thoughtfully designed product at work.',
    resume:
      'https://docs.google.com/document/d/1524Tci-_-r1fvdBa0-ZcNqS4hT_5p20hLgivBYXWpxo/edit?usp=sharing',
    img: '/assets/images/CHOI.HEIDI.Face.jpeg',
  )

puts "#{Admin.count} admins created"
email =
  Social.create!(
    link: 'heidischoi@gmail.com',
    icon: '/assets/graphics/envelope.svg',
    admin: hsc,
  )
github =
  Social.create!(
    link: 'https://github.com/hidwoc',
    icon: '/assets/graphics/github.svg',
    admin: hsc,
  )
linkedin =
  Social.create!(
    link: 'https://www.linkedin.com/in/heidischoi/',
    icon: '/assets/graphics/linkedin.svg',
    admin: hsc,
  )
instagram =
  Social.create!(
    link: 'https://www.instagram.com/hidwoc/',
    icon: '/assets/graphics/instagram.svg',
    admin: hsc,
  )
twitter =
  Social.create!(
    link: 'https://twitter.com/hid_woc',
    icon: '/assets/graphics/twitter.svg',
    admin: hsc,
  )
facebook =
  Social.create!(
    link: 'https://www.facebook.com/heidi.choi.524',
    icon: '/assets/graphics/facebook.svg',
    admin: hsc,
  )

puts "#{Social.count} socials created"

react =
  Skill.create!(
    name: 'React',
    category: 'Frontend',
    icon: '/assets/skills/react.svg',
    admin: hsc,
  )
node =
  Skill.create!(
    name: 'Node.js',
    category: 'Frontend',
    icon: '/assets/skills/nodejs.png',
    admin: hsc,
  )
js =
  Skill.create!(
    name: 'Javascript',
    category: 'Frontend',
    icon: '/assets/skills/javascript.svg',
    admin: hsc,
  )
html =
  Skill.create!(
    name: 'HTML',
    category: 'Frontend',
    icon: '/assets/skills/html.svg',
    admin: hsc,
  )
css =
  Skill.create!(
    name: 'CSS',
    category: 'Frontend',
    icon: '/assets/skills/css.png',
    admin: hsc,
  )
netlify =
  Skill.create!(
    name: 'Netlify',
    category: 'Frontend',
    icon: '/assets/skills/netlify.svg',
    admin: hsc,
  )
airtable =
  Skill.create!(
    name: 'Airtable',
    category: 'Frontend',
    icon: '/assets/skills/airtable.svg',
    admin: hsc,
  )
# axios = Skill.create!(name: 'Axios', category: 'Frontend', icon: '', admin: hsc)
rails =
  Skill.create!(
    name: 'Rails',
    category: 'Backend',
    icon: '/assets/skills/rails.png',
    admin: hsc,
  )
mongodb =
  Skill.create!(
    name: 'MongoDB',
    category: 'Backend',
    icon: '/assets/skills/mongoDB.png',
    admin: hsc,
  )
# mongoose =
#   Skill.create!(name: 'Mongoose', category: 'Backend', icon: '', admin: hsc)
express =
  Skill.create!(
    name: 'Express',
    category: 'Backend',
    icon: '/assets/skills/express.png',
    admin: hsc,
  )
# insomnia =
#   Skill.create!(name: 'Insomnia', category: 'Backend', icon: '', admin: hsc)
ruby =
  Skill.create!(
    name: 'Ruby',
    category: 'Backend',
    icon: '/assets/skills/ruby.svg',
    admin: hsc,
  )
sql =
  Skill.create!(
    name: 'SQL',
    category: 'Backend',
    icon: '/assets/skills/sql.png',
    admin: hsc,
  )
postgresql =
  Skill.create!(
    name: 'PostgreSQL',
    category: 'Backend',
    icon: '/assets/skills/postgresql.png',
    admin: hsc,
  )
heroku =
  Skill.create!(
    name: 'Heroku',
    category: 'Backend',
    icon: '/assets/skills/heroku.svg',
    admin: hsc,
  )
postman =
  Skill.create!(
    name: 'Postman',
    category: 'Backend',
    icon: '/assets/skills/postman.svg',
    admin: hsc,
  )
github =
  Skill.create!(
    name: 'Github',
    category: 'Other',
    icon: '/assets/skills/git.png',
    admin: hsc,
  )
excel =
  Skill.create!(
    name: 'Microsoft Excel',
    category: 'Other',
    icon: '/assets/skills/excel.svg',
    admin: hsc,
  )
gsuite =
  Skill.create!(
    name: 'GSuite',
    category: 'Other',
    icon: '/assets/skills/google.svg',
    admin: hsc,
  )
slack =
  Skill.create!(
    name: 'Slack',
    category: 'Other',
    icon: '/assets/skills/slack.svg',
    admin: hsc,
  )
zoom =
  Skill.create!(
    name: 'Zoom',
    category: 'Other',
    icon: '/assets/skills/zoom.svg',
    admin: hsc,
  )

puts "#{Skill.count} skills created"

Project.create!(
  name: "What's For Dinner?",
  description:
    'An application for the health conscious, yet underprepared home cook that consumes a third-party API that matches recipes with ingredients on hand. Calculates calories and nutritional value for a single serving.',
  techstack: 'HTML / CSS / JS / Edamam API',
  site: 'https://whats-for-dinner-flamingos.netlify.app/',
  repo: 'https://github.com/hidwoc/Whats-For-Dinner',
  img: '/assets/videos/WhatsForDinner.mov',
  admin: hsc,
)
Project.create!(
  name: 'JaduFinances',
  description:
    'Finance tracking application for my small business. Displays expenses and sales by month as a table and a donut chart.',
  techstack: 'React / React Chart.js / Airtable API',
  site: 'https://jadufinances.netlify.app/',
  repo: 'https://github.com/hidwoc/jadu-finances',
  img: '/assets/videos/JaduFinances.mov',
  admin: hsc,
)
Project.create!(
  name: 'SPF',
  description:
    'Fullstack ecommerce website for sunblocks built with a team of 3 developers with full CRUD functionality and authentication.',
  techstack: 'React / MongoDB / Github',
  site: 'https://spf-hidwoc.netlify.app/',
  repo: 'https://github.com/hidwoc/SPF/tree/main',
  img: '/assets/videos/SPF.mov',
  admin: hsc,
)
Project.create!(
  name: 'Jadu Mart',
  description:
    'Fullstack shopping application with full CRUD functionality and authentication that updates inventory when orders are placed and conditionally renders options when an admin user is logged in.',
  techstack: 'React / Ruby on Rails',
  site: 'https://jadumart.netlify.app/',
  repo: 'https://github.com/hidwoc/jadu-mart/tree/main',
  img: '/assets/videos/JaduMart.mov',
  admin: hsc,
)

puts "#{Project.count} projects created"
