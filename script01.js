// Assignment 01    

// - Create an HTML page with five elements (e.g., `<div>` or `<p>`) each containing some content.
// - Use JavaScript to remove the elements sequentially with delays. The first element should be removed after 2 seconds, the second after 5 seconds, the third after 8 seconds, the fourth after 11 seconds, and the fifth after 14 seconds.
// console.log(document.body.childNodes)
function deleteWithDelay(index){
    var dltElement = document.body;
        if(dltElement.childNodes[index]){
            var removeElement = dltElement.childNodes[index];
            removeElement.remove();
        }
}

setTimeout(function(){
    deleteWithDelay(5);
},3000);

setTimeout(function(){
    deleteWithDelay(6);
},6000);

setTimeout(function(){
    deleteWithDelay(7);
},8000);

setTimeout(function(){
    deleteWithDelay(8);
},10000);




































