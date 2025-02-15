import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json")
const resultados: Matches = require("../data/resultados.json")

function getClub(code: string): Club {
  const club =  clubs.clubs.find(club => club.code === code)
  if (!club) {
    throw new Error("No existe este equipo")
  }
  return club
}

export function getResultados(eq1: string, eq2: string): Match {
  const match = resultados.Matches.find(match => {
    return eq1 === match.team1 && eq2 === match.team2
  })
  if (!match) {
    throw new Error("No existe este partido este año")
  }
  return match
}