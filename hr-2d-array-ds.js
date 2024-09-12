/**
 * 
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * 
 * @param arr 
 * @returns highest hourglass
 */
function hourglassSum(arr) {
    let starting = [0,0]
    const hourglass = []
    
    while (hourglass.length !== 16) {
        let _currHourglass = 0
        const startH = starting[0]
        const startW = starting[1]
        const endH = startH + 3
        const endW = startW + 3
        if (endW > arr[0].length) {
            // reset the starting position
            starting = [startH+1, 0]
            continue
        }
        
        for (let i = startH; i < endH; i++) {
            if (i === startH+1) {
                // add the middle only for middle of hourglass
                _currHourglass += arr[i][startW+1]
            } else {
                for (let j = startW; j < endW; j++) {
                    _currHourglass += arr[i][j]
                }   
            }
        }
        hourglass.push(_currHourglass)
        starting = [startH, startW+1]
    }
    
    hourglass.sort((a, b) => b-a)
    return hourglass[0]

}