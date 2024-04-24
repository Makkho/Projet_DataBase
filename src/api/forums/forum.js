import { mw } from "@/api/mw"
import { createForum, readForums } from "@/db/crud"

const handle = mw(async (req, res) => {
  // Read (collection) => GET /todos
  if (req.method === "GET") {
    const forums = await readForums()

    res.send(forums)

    return
  }

  // Create (item) => POST /todos
  if (req.method === "POST") {
    const city = req.body.city.trim()
    const type = req.body.city.trim()
    const adress = req.body.city.trim()
    const nom = req.body.city.trim()
    const postalcode = req.body.city.trim()
    const country = req.body.city.trim()


    if (!city) {
      res.status(422).send({ error: "missing city argument" })

      return
    }

    const newForum = await createForum({city, type, adress, nom, postalcode, country })

    res.send(newForum)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
