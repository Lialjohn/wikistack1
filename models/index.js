const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
})

const slugify = (title) => {
  return title.replace(/\s+/g, '_').replace(/\W+/g, '')
}
 
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})

Page.beforeValidate(page => page.slug = slugify(page.title))

module.exports = { db, User, Page }


