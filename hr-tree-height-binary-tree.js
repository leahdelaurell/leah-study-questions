/**
 * https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
 * 
 * 
 * For some reason this was failing on hacker rank, but I was reading there was an issue with 
 * javascript... but still concered my code is wrong
 * @param {*} root 
 * @returns 
 */
function treeHeight(root) {
//   console.log(root.right.right)
  const height = searchTree(root, 0)
  return `${height}`
}

function searchTree(node) {
  // if no node then we can return the height bc we have hit the bottom
  if (!node.right && !node.left) {
      return 1
  }
  
  let leftSideHeight
  let rightSideHeight
  if (node.left) {
      leftSideHeight = searchTree(node.left)
  }
  
  if (node.right) {
      rightSideHeight = searchTree(node.right)
  }
//   console.log('left', leftSideHeight)
//   console.log('right', rightSideHeight)
  if (leftSideHeight > rightSideHeight) {
      return leftSideHeight + 1
  } else {
      return rightSideHeight + 1
  }
}