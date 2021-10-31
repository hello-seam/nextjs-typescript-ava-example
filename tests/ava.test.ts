import test from "ava"
import fixture from "../nextjs-fixture"

test("api endpoint", async (t) => {
  const { axios } = await fixture(t)
  const { data: res } = await axios.get("/api/hello")
  t.deepEqual(res, { name: "John Doe" })
})
