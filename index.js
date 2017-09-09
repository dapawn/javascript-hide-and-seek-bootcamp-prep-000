const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("index.html", options).then(dom => {console.log(dom.serialize())});

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function increaseRankBy (n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i=0; i<rankedLists.length; i++) {
    for (let j=0; j<rankedLists[i].children.length; j++) {
      rankedLists[i].children[j].innerHTML = (parseInt(rankedLists[i].children[j].innerHTML) + n).toString();
    }
  }
}


function deepestChild() {
  let current = document.getElementById("grand-node").children;
  console.log(current.toString())
  let next = []

  while (current) {
    if (current.length === 0) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
    current = current.children
  }
  return current
}

deepestChild()
