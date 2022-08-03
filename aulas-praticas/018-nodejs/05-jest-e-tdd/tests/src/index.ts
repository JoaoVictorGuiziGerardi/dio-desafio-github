import { app } from './app'

const port = process.env.PORT || 5000;
console.log(port);

app.listen(port, () => {
  console.log(`Server on port ${port} \nhttp://localhost:${port}`)
})
