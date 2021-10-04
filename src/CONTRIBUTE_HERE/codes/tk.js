export const code = `
  const array = [1,2,3,4,5,6,7,8,9,10]
  const chunk = (list, step) => {
    for (let i=0; i<list.length-step+1; i++){
      console.log(list.slice(i, step+i))
    }
  }

  chunk(array, 3)  // --> [1,2,3], [4,5,6], [7,8,9], [10]
`

