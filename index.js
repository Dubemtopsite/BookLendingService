
function LendingService(){
	let bookLibrary = [];
	let addNewBook = function(newBook){
		bookLibrary.push(newBook);
		//console.log(newBook);
	}
	let printOutBook = function(){
		for (let item in bookLibrary) {
			console.log('\n'+bookLibrary[item].title);
		}
	}
	let processLendBook = function(bookName){
		if(doBookExist(bookName)){
			if(!isBookLended(bookName)){
				markBookAsLend(bookName);
				console.log('\nYour book \"'+ bookName +'\" is avaliable for lenidng but remember to return it when done');
			}else{
				console.log('\nSorry the book with the title \"'+ bookName +'\" has been taken by another person');
			}
		}else{
			console.log('\nSorry the book with the title \"'+ bookName +'\" you requested is not avaliable. You can check next time');
		}
	}
	let returnBook = function(bookName){
		if(doBookExist(bookName)){
			if(isBookLended(bookName)){
				unmarkBookAsLend(bookName);
				console.log('\nThanks for returning your book');
			}else{
				console.log('\nSorry the book with the title \"'+ bookName +'\" was not rented out');
			}
		}else{
			console.log('\nSorry the book with the title \"'+ bookName +'\" is not ours');
		}
	}
	let doBookExist = function(bookName){
		for (let item in bookLibrary) {
			if(bookLibrary[item].title.toLowerCase() === bookName.toLowerCase()){
				return true;
			}
		}
	}
	let isBookLended = function(bookName){
		for (let item in bookLibrary) {
			if(bookLibrary[item].title.toLowerCase() === bookName.toLowerCase() && bookLibrary[item].isLendOut === true){
				return true;
			}
		}
	}
	let markBookAsLend = function(bookName){
		for (let item in bookLibrary) {
			if(bookLibrary[item].title.toLowerCase() === bookName.toLowerCase()){
				bookLibrary[item].isLendOut = true;
			}
		}
	}
	let unmarkBookAsLend = function(bookName){
		for (let item in bookLibrary) {
			if(bookLibrary[item].title.toLowerCase() === bookName.toLowerCase()){
				bookLibrary[item].isLendOut = true;
			}
		}
	}
	return{
		addBook: addNewBook,
		openLibrary: printOutBook,
		lendBook: processLendBook,
		returnBackBook: returnBook
	}
}

let lendingServiceObj = new LendingService();
lendingServiceObj.addBook({'title': 'In Africa Biafra dies', isLendOut: false});
lendingServiceObj.addBook({'title': 'Once upon a time in Africa', isLendOut: false});
lendingServiceObj.addBook({'title': 'Rich dad, poor dad', isLendOut: false});
lendingServiceObj.addBook({'title': 'The secret of riches', isLendOut: false});
console.log('\n*************Avaliable Books*************');
lendingServiceObj.openLibrary();

console.log('\n*************You can lend book within those avaliable*************');
lendingServiceObj.lendBook('In Africa Biafra dies');
lendingServiceObj.lendBook('Enginnering mathematics by K.A Stroud');
//lendingServiceObj.openLibrary();
lendingServiceObj.lendBook('The secret of riches');
lendingServiceObj.lendBook('In Africa Biafra dies');
//lendingServiceObj.printOutBook;
console.log('\n*************Please return our book*************');
lendingServiceObj.returnBackBook('The secret of riches');
lendingServiceObj.returnBackBook('In Africa Biafra dies');
lendingServiceObj.returnBackBook('Java for expert');
lendingServiceObj.returnBackBook('Rich dad, poor dad');











