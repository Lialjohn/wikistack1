const router = require('express').Router()
const { Page } = require("../models");
const { addPage } = require("../views");


router.get('/', (req, res) => {
  res.send('sdkjfgasdjf')
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

router.post('/', async (req, res, next) => {
  const title = req.body.title
  const content = req.body.content
  const page = new Page({
    title,
    content
  })
  try {
    await page.save();
    console.log(page)
    res.redirect('/wiki/');
  } catch (error) { 
    next(error)
    res.send('fffff')
  }
});

module.exports = router