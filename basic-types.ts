export {};
function GetAllBooks() {
  let books = [
    { title: " First book ", author: "Mahdi Hassani", available: true },
    { title: " Second book ", author: "Alireza Hassani", available: false },
    { title: " Third book ", author: "Zainab Hassani", available: true },
  ];

  return books;
}

function LogFirstBook(books: any): void {
  let numOfBooks:number = books.length;

  let firstAvailable:any = "";
  for (let currentBook of books) {
    if (currentBook.available === true) {
      firstAvailable = currentBook;
      break;
    }
  }

  console.log(" Number of the books ", numOfBooks);
  console.log(" First available books ", firstAvailable);
}

const books = GetAllBooks();
LogFirstBook(books);
