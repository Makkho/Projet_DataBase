import {ForumModel} from "./models/ForumModel.js"
export const createForum = async (input) => {
  const newForum = new ForumModel(input)

  await newForum.save()

  return newForum
}
export const readForums = async () => await ForumModel.find()
export const readForum = async (forumId) => await ForumModel.findById(forumId)
export const updateForum = async (
  forumId,
  input
) => {
  
  const updatedForum = await ForumModel.findByIdAndUpdate(forumId, input, {
    returnDocument: "after",
  })

  return updatedForum
}
export const deleteForum = async (forumId) => {
  const forum = await ForumModel.findOneAndDelete({ _id: forumId })

  if (!forum) {
    return null
  }

  return forum
}
