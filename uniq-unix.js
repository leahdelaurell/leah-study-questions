const fs = require('node:fs/promises');
/**
 * Implement a function that works similarly (but not identically) to the UNIX `uniq` command. 
 * Given a list of lines that may contain duplicates, the function returns a list of unique lines 
 * along with their frequencies (number of occurrences).
 * 
 * Assuming that lines is a list of words seperated by spaces
 * 
 * Descending by occurrence count.
 * Ascending by line first appeared (input index corresponds to line number)
 */
function uniq(lines, ascending = false) {
  const uniqueLines = {}

  for (let i= 0; i<lines.length; i++) {
    const word = lines[i]
    if (uniqueLines[word]) {
      uniqueLines[word] = {
        ...uniqueLines[word],
        count: uniqueLines[word].count+1
      }
    } else {
      uniqueLines[word] = {
        word: lines[i],
        count: 1,
        index: i
      }
    }
  }
  

  // prints the list in a nice way
  const list = Object.values(uniqueLines).sort((a, b) => {
    // if descending order
    if (!ascending) {
      return a.count - b.count
    } else {
      return a.index - b.index
    }
  }).map((value) => {
    return `${value.word} ${value.count}`
  })
  return list.join('\n')
}


// Timed it out and the one above is faster by 0.5 ms 
// function uniq(lines) {
//   console.time('lines');
//   const uniqueLines = {}
//   // seperate words by split lines
//   const splitLin = lines.split('\n')
//   let linArr = []
//   splitLin.forEach((word) => {
//     const _wordSplit = word.split(' ')
//     linArr = linArr.concat(_wordSplit)
//   })

//   for (let word of linArr) {
//     if (word.includes('.')) {
//       word = word.replace('.', '')
//     }
//     if (uniqueLines[word]) {
//       uniqueLines[word]++
//     } else {
//       uniqueLines[word] = 1
//     }
//   }
  
//   const list = Object.keys(uniqueLines).map((key) => {
//     return `${key} ${uniqueLines[key]}`
//   })
//   console.timeEnd('lines');
//   return list.join('\n')
// }

const list = uniq(['apples', 'apples', 'banana', 'pear', 'banana'], false)
console.log(list)


// if we need a file to read in
async function uniqFile(inputFile) {
  const uniqueLines = {}
  let data
  try {
    data = await fs.readFile(inputFile, 'utf8')
  } catch(err) {
    console.log(err)
  }
  console.log(data)
  for (let word of data) {
    if (uniqueLines[word]) {
      uniqueLines[word]++
    } else {
      uniqueLines[word] = 1
    }
  }
  const list = Object.keys(uniqueLines).map((key) => {
    return `${key} ${uniqueLines[key]}`
  })
  return list.join('\n')
}

// try {
//   const list = await uniqFile('./leah.txt')
//   console.log(list)
// } catch(err) {
//   console.log(err)
// }