import { createServer } from "http"
import { parse } from "url"
import next from "next"
import axios from "axios"
import getPort from "get-port"

export async function getServerFixture(t) {
  const app = next({
    dev: true,
  })
  const handle = app.getRequestHandler()
  const port = await getPort()

  let server
  await app.prepare().then(() => {
    server = createServer((req, res) => {
      const parsedUrl = parse(req.url || "/", true)
      handle(req, res, parsedUrl)
    })
    server.listen(port)
  })

  t.teardown(() => {
    if (server) server.close()
  })

  const serverURL = `http://127.0.0.1:${port}`

  const customAxios = axios.create({
    baseURL: serverURL,
  })

  // Simplify axios errors
  customAxios.interceptors.response.use(
    (res) => res,
    (err) =>
      err.request && err.response
        ? Promise.reject({
            url: err.request.path,
            status: err.response.status,
            statusText: err.response.statusText,
            response: err.response.data,
            headers: err.response.headers,
          })
        : Promise.reject(err)
  )

  return {
    port,
    serverURL,
    axios: customAxios,
  }
}

export default getServerFixture
