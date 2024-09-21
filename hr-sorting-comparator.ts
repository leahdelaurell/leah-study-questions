/**
 * 
 * https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * 
 * @param input 
 */

function processData2(input) {
    const players = input.split('\n').slice(1).map((player) => {
        const [name, score] = player.split(' ')
        return {
            name,
            score
        }
    })


    players.sort((a, b) => {
        if (Number(a.score) > Number(b.score)) {
            return -1
        } else if (Number(a.score) < Number(b.score)) {
            return 1
        } else {
            if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            }
            return 0    
        }
        
    })

    console.log(players.map((_player) => `${_player.name} ${_player.score}`).join('\n'))
} 