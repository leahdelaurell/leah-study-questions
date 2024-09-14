/**
 * https://www.hackerrank.com/challenges/torque-and-development/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=graphs
 * 
 * 
 * This is not correct and I need to look into it more.
 * 
 * @param n number of cities
 * @param c_lib cost of library
 * @param c_road cost of road
 * @param cities array to cities
 * @returns 
 */

/*
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n number of cities
 *  2. INTEGER c_lib cost of library
 *  3. INTEGER c_road cost of road
 *  4. 2D_INTEGER_ARRAY cities array to cities
 */

function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
      return n * c_lib
  }
  const routes = mapRoute(cities)

  let roads = 0
  let library = 0
  for(let route of Object.values(routes)) {
      if (route.visited) continue
      roads += dfs(routes, route, 0)-1
      // need to add a library if hit all the routes
      library++
  }
  
  return (library*c_lib) + (roads*c_road)
}

function mapRoute(cities) {
  const routes = {}
  for (let _cities of cities) {
      const [c1, c2] = _cities
      if (routes[c1]) {
          routes[c1].cities.push(c2)
      } else {
          routes[c1] = {
              cities: [c2],
              visited: false
          }
      }
      
      if (routes[c2]) {
          routes[c2].cities.push(c1)
      } else {
          routes[c2] = {
              cities: [c1],
              visited: false
          }
      }
  }
  return routes
}

function dfs(routes, route, roads) {
  if (route.visited) return roads
  route.visited = true
  for (let cities of route.cities) {
      roads += dfs(routes, routes[cities], roads)
  }
  return roads + 1
}