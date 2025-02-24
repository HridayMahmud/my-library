const getReadedBooks = ()=>{
 const readedbooks = localStorage.getItem('all-books');
 if(readedbooks){
     return JSON.parse(readedbooks);
 }
 return [];

}

const saveReadBooks = (id)=>{
const settedBooks = getReadedBooks();
const exits = settedBooks.find(book=>book.id===id);
if(!exits){
     settedBooks.push(id);
     localStorage.setItem('all-books',JSON.stringify(settedBooks));
     console.log('added successfully');
}
}
export {getReadedBooks,saveReadBooks} ;                                                              