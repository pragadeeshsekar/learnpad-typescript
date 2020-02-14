/* Delete first element on page and confirm
   Normal for loop runs faster & it does not wait for promise result 
   Hence i used async and await , which worked exactly what i was looking for */ 
const delCheck = async (check : any) {
  for (var obj in check) {
    await element.all(by.tagName('basic').get(1).click().then(() => {
      element(by.buttonText('Delete');
      element(by.buttonText('Confirm');
    });
  }
}

// Range function in typescript
// eg : range(1, 3) ==> [1,2]
function range(start, end) {
  return Array(end - start).fill().map((_, idx) => start + idx)
}

// get count of basic tags present & delete them sequentially 
element.all(by.tagName('basic')).count().then((cnt) => {
  var check = range(1, cnt)
  delCheck(check);
});




