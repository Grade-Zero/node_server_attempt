import { boot } from './server'

boot().then((app) => {
  app.listen(4000, function () {
    console.log('Choices is running on port 4000')
  })
})
