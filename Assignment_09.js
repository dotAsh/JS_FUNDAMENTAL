// Function to find the oldest book
function findOldestBook(books) {
    let oldestBook = books[0]
    for(let i = 1;i<books.length;i++){
        if(books[i].year < oldestBook.year){
            oldestBook = books[i]
        }
    }
    return oldestBook;
}

// Function to find the author with the most books
function findAuthorWithMostBooks(books) {
    const authorsBookCount = {};
    for(let i = 0;i<books.length;i++){
        authorsBookCount[books[i].author] = (authorsBookCount[books[i].author] || 0) + 1;
    }

    // author with the maximum count
    let maxBookCountAuthor = null;
    let maxCount = 0;
    for (let author in authorsBookCount) {
        if (authorsBookCount[author] > maxCount) {
            maxBookCountAuthor = author;
            maxCount = authorsBookCount[author];
        }
    }
    return maxBookCountAuthor;
}

// Function to find books by a specific author
function findBooksByAuthor(books, authorName) {
    let authorsBook = []
    for(let i = 0;i<books.length;i++){
        if(books[i].author === authorName){
            authorsBook.push(books[i]);
        }
    }
    return authorsBook;
}


function countBooksByGenre(books) {
    const genreCounts = {};
    for(let i = 0;i<books.length;i++){
        genreCounts[books[i].genre] = ( genreCounts[books[i].genre] || 0) + 1;
    }
    return genreCounts;
}

//  data
const books = [
    { title: "Book 1", author: "Author A", year: 1990, genre: "Science Fiction" },
    { title: "Book 2", author: "Author B", year: 1985, genre: "Mystery" },
    { title: "Book 3", author: "Author A", year: 2005, genre: "Science Fiction" },
    { title: "Book 4", author: "Author C", year: 1998, genre: "Fantasy" },
];

// Test 
console.log("Oldest Book:", findOldestBook(books));
console.log("Author with Most Books:", findAuthorWithMostBooks(books));
console.log("Books by Author A:", findBooksByAuthor(books, "Author A"));
console.log("Count of Books by Genre:", countBooksByGenre(books));
