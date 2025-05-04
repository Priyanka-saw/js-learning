const listItem = document.getElementsByClassName('list-item');


const myLi = document.querySelectorAll('li')
console.log(myLi);

myLi.forEach(function (li) {
    li.style.color = 'red'  
  })
  
  const myarray = Array.from(myLi)
  console.log(myarray);

  myarray.forEach(function (listConversion) {
        listConversion.style.color = 'blue'
  })