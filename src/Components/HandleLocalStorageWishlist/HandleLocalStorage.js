const getWishListBooks = ()=>{
     const books = localStorage.getItem('wishlist-books');
     if(books){
         return JSON.parse(books);
     }
     return [];

}

const saveWishlistBooks = (id)=>{
     const wishlistbooks = getWishListBooks();
const exits = wishlistbooks.find(book=>book.id===id);
if(!exits){
 wishlistbooks.push(id);
 localStorage.setItem('wishlist-books',JSON.stringify(wishlistbooks));
}
}
export {getWishListBooks,saveWishlistBooks}