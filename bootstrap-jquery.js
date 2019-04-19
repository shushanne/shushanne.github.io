$(function(){
    $(".fa-search").on("click",function() {
    $(".input").toggleClass("active");
});
});



function toggleChevron(e) {
    $(e.target)
        .prev(".heading")
        .find("i.updown")
        .toggleClass("fa-chevron-down fa-chevron-up");
}
$(".accordion").on("hidden.bs.collapse", toggleChevron);
$(".accordion").on("shown.bs.collapse", toggleChevron);




$(function(){ 
       
   $("#storageCounterOne").on("click",function(){
       incrementCounter(0); 
       $(".countOne").html(getCounter(0));
   }); 
   $("#storageCounterTwo").on("click",function(){ 
       incrementCounter(1); 
       $(".countTwo").html(getCounter(1));
   }); 
   $("#storageCounterThree").on("click",function(){
       incrementCounter(2); 
       $(".countThree").html(getCounter(2));
   }); 
});

function count(){
        $(".countOne").html(getCounter(0));
        $(".countTwo").html(getCounter(1));
        $(".countThree").html(getCounter(2));
}
count();

function incrementCounter(index){
    if(typeof(Storage) !== "undefined"){
        const key = `click_counter_${index}`
        if(localStorage.getItem(key)){
            localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)
        }else{
            localStorage.setItem(key, 1)
        }
    }
    else{
        $(".fa-eye").html("Your browser doesn't support Local Storage");
    }
}

function getCounter(index){
    if(typeof(Storage) !== "undefined"){
        return localStorage.getItem(`click_counter_${index}`) || 0
    }
    else{
        $(".fa-eye").html("Your browser doesn't support Local Storage");
        return 0
    }
}




