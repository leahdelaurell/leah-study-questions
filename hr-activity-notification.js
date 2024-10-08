/**
 * 
 * @param {*} expenditure 
 * @param {*} d 
 * @returns 
 */
function activityNotifications(expenditure, d) {
    if (expenditure?.length < d) {
        return 0
    }
    
    let notification = 0
    for (let i=d; i<expenditure.length; i++) {
        const trail = expenditure.slice(i-d, i)
        trail.sort((a,b) => a-b)
        let median = 0
        if (d%2 === 0) {
            const _lowVal = Math.floor(d/2)
            median = (trail[_lowVal] + trail[_lowVal+1]) / 2
        } else {
            median = trail[Math.floor(d/2)]
        }
        if (expenditure[i] >= 2*median) {
            notification++
        }
    }
    return notification
}