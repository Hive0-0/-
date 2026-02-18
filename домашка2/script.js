let box = document.querySelectorAll(".clickbox");

box.forEach(function(clickbox){
    clickbox.addEventListener("click", function(){
        if(clickbox.style.backgroundColor === "lightblue"){
            clickbox.style.backgroundColor = "green";
            clickbox.style.margin = '2vw';
            console.log("change color");
        }
        else{
            clickbox.style.backgroundColor = "lightblue";
            clickbox.style.margin = '1vw';
        }
    });
});