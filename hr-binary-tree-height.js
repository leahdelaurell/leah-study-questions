/**
 * https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
 * 
 * @returns height of binary tree
 */

function main() {
    const findEdges = (edge, depth) => {
        let leftDepth = 0
        let rightDepth = 0
        if (edge.left) {
            leftDepth = findEdges(edge.left, depth+1)
        }

        if (edge.right) {
            rightDepth = findEdges(edge.right, depth+1)
        }

        if (!edge.left && !edge.right) {
            return depth
        }

        return leftDepth > rightDepth ? leftDepth : rightDepth
    }
    const height = findEdges(root, 0)
    return height
}