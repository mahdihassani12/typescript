export {};
function GetAllBooks() {
  let books = [
    {
      id: 1,
      title: " First book ",
      author: "Mahdi Hassani",
      available: true,
      category: Category.Children,
    },
    {
      id: 2,
      title: " Second book ",
      author: "Alireza Hassani",
      available: false,
      category: Category.Fiction,
    },
    {
      id: 3,
      title: " Third book ",
      author: "Zainab Hassani",
      available: true,
      category: Category.Peotry,
    },
    {
      id: 4,
      title: " Fourth book ",
      author: "Abbass Hassani",
      available: false,
      category: Category.Fiction,
    },
  ];

  return books;
}

function LogFirstBook(books: any): void {
  let numOfBooks: number = books.length;

  let firstAvailable: any = "";
  for (let currentBook of books) {
    if (currentBook.available === true) {
      firstAvailable = currentBook;
      break;
    }
  }

  console.log(" Number of the books ", numOfBooks);
  console.log(" First available books ", firstAvailable);
}

enum Category {
  Peotry,
  Histry,
  Story,
  Science,
  Fiction,
  Children,
}

function GetBookTitlesWithCategory(CategoryFilter: Category = Category.Fiction): Array<string> {
  console.log(" Getting books in category: ", Category[CategoryFilter]);
  const books = GetAllBooks();
  const filteredTitles: string[] = [];

  for (let currentBook of books) {
    if (currentBook.category === CategoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }

  return filteredTitles;
}

function LogBookTitles(titles: string[]) {
  for (let title of titles) {
    console.log(title);
  }
}

function GetBookById(id: number) {
  const books = GetAllBooks();
  return books.filter((book) => book.id === id)[0];
}

function CreateCustomerID(name:string, id: number): string {
    return name + id;
}

function CreateCustomer (name: string, age? :number, city? :string): void {
    console.log(" Customer name ", name);

    if(age) {
        console.log(" Customer age ", age);
    }

    if(city) {
        console.log(" Customer city ", city);
    }
}

function CheckOutBooks(...booksId: number[]) :void {
    for(let i = 0; i <booksId.length; i++ ) {
        console.log(booksId[i]);
    }
}

// *******************************************************

CheckOutBooks(1);
// CreateCustomer("Mahdi", 25, "Herat");
// let MyID: string = CreateCustomerID("Mahdi", 10);
// console.log(MyID);

// const FictionBooks = GetBookTitlesWithCategory(Category.Fiction);
// FictionBooks.forEach((val, idx, arr) => console.log(++idx + " - " + val));
