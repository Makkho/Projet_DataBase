import { mw } from "@/api/mw";
import { createForum, readForums } from "@/db/crud";

const handle = mw(async (req, res) => {

  if (req.method === "GET") {
    const forums = await readForums();

    res.send(forums);

    return;
  }

  if (req.method === "POST") {
    const city = req.body.city.trim();
    const type = req.body.type.trim();
    const address = req.body.address.trim();
    const nom = req.body.nom.trim();
    const postalcode = req.body.postalcode.trim();
    const country = req.body.country.trim();

    if (!city) {
      res.status(422).send({ error: "missing city argument" });

      return;
    }

    const newForum = await createForum({
      city,
      type,
      address,
      nom,
      postalcode,
      country,
    });

    res.send(newForum);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;
