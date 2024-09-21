/**
 * https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * 
 * @param input 
 */
function processData(input) {
    const steps = input.split('\n')
    let output = []
    for (let i=1; i < steps.length; i++) {
        const step = steps[i]
        const [action, num] = step.split(' ')
        if (action === '1') {
            output.push(num)
        } else if (action === '2') {
            output = output.slice(1)
        } else if (action === '3') {
            console.log(output[0])
        }
    }
} 