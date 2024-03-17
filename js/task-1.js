const totalItem = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${totalItem.length}`);

totalItem.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
