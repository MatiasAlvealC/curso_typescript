import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json")
const resultados: Matches = require("../data/resultados.json")

export function getClub(code: string): string {
  const club =  clubs.clubs.find(club => club.code === code)
  if (!club) {
    throw new Error(`No existe el equipo: ${code}`)
  }
  return club.name
}

export function getResultados(eq1: string, eq2: string): Match {
  const match = resultados.Matches.find(match => {
    return eq1 === match.team1 && eq2 === match.team2
  })
  if (!match) {
    throw new Error(`No existe un partido entre ${eq1} y ${eq2} este año`)
  }
  return match
}