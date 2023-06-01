import { useState,useEffect } from "react"
import apiClient from "../services/api-client"

interface Game{
    id:number,
    name: string
}
interface fetchGamesResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {

const [games,setGames] = useState([])
const [error,setError] = useState()
useEffect(()=>{
    apiClient.get("/games")
    .then(res =>console.log(res))
}, [])

  return (
    <>
    </>
  )
}

export default GameGrid