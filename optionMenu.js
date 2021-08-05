const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
var books = ["Peace of pie","Maths by RD sharma","7 Habits of successful people"]
function menu (){

    readline1.question(`1 Show all books\n2 Add Book\n3 Quite\nSelect Option\n\n`, function (opt){
        if(opt === "1"){
            for(let i = 0; i < books.length; i++){
                if(i == books.length - 1){
                    console.log(`name: ${books[i]}\n`)
                } else{
                    console.log(`name: ${books[i]}`)
                }
            }
            menu()
    
        } else if(opt === "2"){
            readline1.question(`Enter book name\n`,function (book_name){
                books.push(book_name)
                // console.log(book_name)
                menu()
            })
        } else if(opt === "3"){
            readline1.question(`Are you sure you want to quit - press Y to quit\n\n`,function (ans){
                if(ans === "Y"){
                    readline1.close()
                } else{
                    menu()
                }
            })
        }else {
            console.log(`You have selected an invalid entry so please press 1, 2 or 3\n`)
            menu()
        } 
})
}
readline1.on("close", function (){
    console.log("Bye Bye")
})
menu()