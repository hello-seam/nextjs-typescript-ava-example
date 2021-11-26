import withDb from "lib/with-db"

export default withDb((req, res) => {
  res.status(200).send(req.db.users)
})
