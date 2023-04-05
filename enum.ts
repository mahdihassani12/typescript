// In typescript, an enum is a way to define a set of named constant like days of the week...
// Tuples are special type of an array in which you define each item type

export {};
function GetAllBooks() {
  let books = [
    {
      title: " First book ",
      author: "Mahdi Hassani",
      available: true,
      category: Category.Children,
    },
    {
      title: " Second book ",
      author: "Alireza Hassani",
      available: false,
      category: Category.Fiction,
    },
    {
      title: " Third book ",
      author: "Zainab Hassani",
      available: true,
      category: Category.Peotry,
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

function GetBookTitlesWithCategory(CategoryFilter: Category): Array<string> {
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

function LogBookTitles(titles: string[]){
    for(let title of titles){
        console.log(title);
    }
}

const PeotryBook = GetBookTitlesWithCategory(Category.Peotry);
LogBookTitles(PeotryBook);