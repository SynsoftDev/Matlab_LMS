// this is a simple wrapper around a table that maps an id to a latex string
// it's used to communicate between the mathquill embed registration callback
// defined in main.js and the insertWrappedMath method in math-input.vue
//
// as only ids can be passed to the mathquill's embed callback function, the
// callback uses getLatex to convert an id to a latex string which is embedded
// in a newly created+embedded span

let latexTab = []

// return the latex string associated with an id
export function getLatex(id) {
  return latexTab[id]
}

// add a new latex string entry in the table and return the id that refers to the
// corresponding table entry
export function setLatex(latex) {
  let id = latexTab.length
  latexTab.push(latex)
  return id
}
