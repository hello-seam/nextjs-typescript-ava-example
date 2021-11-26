let globalDb = { users: [] }

export const withDb = (next) => (req, res) => {
  if (!req.db) req.db = globalDb
  return next(req, res)
}

export default withDb
