function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (i=0, l=rankedLists.length ; i<l; i++){
    let children = rankedLists[i].children ;

    for ( j=0, l= children.length; j<l; j++){
      let children[j].innerHTML = parseInt(children[j].innerHTML + n);
    }
  }
}
