// Interface is like a contract to define the types
export {}
interface Book {
    id: number,
    title: string,
    author: string,
    category: string,
    page?: number
}

let myBook: Book = {
    id: 1,
    title:" Some book title",
    author: "Mahdi Hassai",
    category: "Science",
    page: 25
}

console.log(myBook);