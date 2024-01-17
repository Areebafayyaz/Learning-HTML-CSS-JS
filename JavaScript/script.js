console.log('Javascript is rad')
var number = 10;
var string = 'Hello there!';
var isRad = true;

if(number == 10){
    console.log('yeah buddy')
}
else{
    console.log('No buddy')
}

// document.getElementById('box').innerHTML= number+1;



for(var i=0; i < 10; i++ )
console.log(i);

var groceries = ['Milk', 'Eggs', 'Pasta'];



function listGroceries(){
    for(var i=0; i< groceries.length; i++){
    console.log(groceries[i])}
}
listGroceries();
document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});