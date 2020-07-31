import React, {  useState } from "react"
import Page from "./Page"
import Axios from "axios"

function CreatePost() {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("/create-post", { title, body, token: localStorage.getItem("complexappToken") })
      console.log("New post was created.")
    } catch (e) {
      console.log("There was a problem.")
    }
  }

  return (
    <Page title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea onChange={e => setBody(e.target.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  )
}

export default CreatePost
