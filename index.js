function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i=0, l=rankedLists.length ; i<l; i++){
    let children = rankedLists[i].children ;

    for (let j=0, l= children.length; j<l; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node= document.getElementById('grand-node');
  let newnode = node.children[0];

  while (newnode){
    node= newnode;
    newnode = node.children[0];
  }

  return node;
}
