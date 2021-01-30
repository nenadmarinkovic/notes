import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"
import { useParams, Link } from "react-router-dom"
import LoadingDotsIcon from "./LoadingDotsIcon"
import StateContext from "../StateContext"

function ProfileFollowing(props) {
  const appState = useContext(StateContext)
  const { username } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()

    async function fetchNotes() {
      try {
        const response = await Axios.get(`/profile/${username}/following`, { cancelToken: ourRequest.token })
        setNotes(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem.")
      }
    }
    fetchNotes()
    return () => {
      ourRequest.cancel()
    }
  }, [username])

  if (isLoading) return <LoadingDotsIcon />

  return (
    <div className="list-group">
      {notes.length > 0 &&
        notes.map((follower, index) => {
          return (
            <Link key={index} to={`/profile/${follower.username}`} className="no-border list-group-item list-group-item-action">
              {follower.username}
            </Link>
          )
        })}
      {notes.length === 0 && appState.user.username === username && <p className="lead text-muted text-center">You aren&rsquo;t following anyone yet.</p>}
      {notes.length === 0 && appState.user.username !== username && <p className="lead text-muted text-center">{username} isn&rsquo;t following anyone yet.</p>}
    </div>
  )
}

export default ProfileFollowing
