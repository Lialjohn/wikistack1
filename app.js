const { db, User, Page } = require('./models')
const morgan = require('morgan')
const Express = require('express')
const app = Express()

// const { routes } = require('./views')
const wikiRouter = require('./routes/wiki')
app.use(morgan("dev"))

app.use(Express.urlencoded({ extended: false }));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use('/wiki', wikiRouter)


async function init() {
  await db.sync({force:true})
  // const user = await User.create()
  // const page = await Page.create()

}

init()

app.listen(3000, () => {
  console.log('listening')
})