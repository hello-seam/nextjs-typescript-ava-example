import withDb from "lib/with-db"

export default withDb((req, res) => {
  const { name } = req.body
  req.db.users.push({ name })
  res.status(200).json({ status: "ok" })
})
