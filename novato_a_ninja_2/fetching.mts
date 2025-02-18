//  fetching de datos en TypeScript

const API_URL = "https://api.github.com/search/repositories?q=javascript"

const response = await fetch(API_URL)


if (!response.ok) {
  throw new Error('Request failed')
}

type APIResponse = {
  items: object[]
}

const data = await response.json() as APIResponse

const repos = data.items.map( repo => {
  console.log(repo)
})
