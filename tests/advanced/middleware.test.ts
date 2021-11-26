import test from "ava"
import fixture from "nextjs-ava-fixture"

test("advanced middleware for shared state between endpoints", async (t) => {
  const db = { users: [{ name: "User 1" }] }
  const sharedDbMw = (next) => (req, res) => {
    req.db = db
    return next(req, res)
  }
  const { axios } = await fixture(t, { middlewares: [sharedDbMw] })
  const { data: res1 } = await axios.get("/api/advanced/list-users")
  t.deepEqual(res1, [{ name: "User 1" }])
  await axios.post("/api/advanced/add-user", { name: "User 2" })
  const { data: res2 } = await axios.get("/api/advanced/list-users")
  t.deepEqual(res2, [{ name: "User 1" }, { name: "User 2" }])
})
