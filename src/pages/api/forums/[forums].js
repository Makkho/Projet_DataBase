import { mw } from "@/api/mw";
import { deleteForum, readForum, updateForum } from "@/db/crud";

const handle = mw(async (req, res) => {
  const { forumId } = req.query;

  // Read (item) => GET /forums/:forumId
  if (req.method === "GET") {
    const forum = await readForum(forumId);

    if (!forum) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.send(forum);

    return;
  }

  // Update (item) => PATCH /forums/:forumId
  if (req.method === "PATCH") {
    const description = req.body.description?.trim();
    const { isDone } = req.body;
    const updatedForum = await updateForum(forumId, { description, isDone });

    if (!updatedForum) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.send(updatedForum);

    return;
  }

  // Delete (item) => DELETE /forums/:forumId
  if (req.method === "DELETE") {
    const ForumToBeDelete = await deleteForum(forumId);

    if (!ForumToBeDelete) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.send(ForumToBeDelete);

    return;
  }

  res.status(404).send({ error: "Not found" });
});
export default handle;
