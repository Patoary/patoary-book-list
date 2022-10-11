const titel = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const addBtn = document.querySelector('.addBtn');
const bookList = document.querySelector('#book-list');


addBtn.addEventListener('click', function(e){
    e.preventDefault();
   const newRow = document.createElement('tr');
   
   // add title
   const newTitle = document.createElement('th');
   newTitle.innerHTML = titel.value;
   newRow.appendChild(newTitle);

    // add author 
     const newAuthor = document.createElement('th');
     newAuthor.innerHTML = author.value;
     newRow.appendChild(newAuthor);

     // add year
     const addNewYear = document.createElement('th');
     addNewYear.innerHTML = year.value;
     newRow.appendChild(addNewYear);

     // to display ui
    bookList.appendChild(newRow);


});