var button=document.querySelectorAll(".btn")
var boxes=document.querySelectorAll(".box");
var searchInput=document.getElementById("Search")

//search by input
searchInput.addEventListener("keyup",(event)=>{
  var searchData=event.target.value.toLowerCase().trim()
   boxes.forEach(box=>{
     var boxData=box.dataset.item 
      if(boxData.includes(searchData)){
     box.style.display="block"
   }
   else{
     box.style.display="none"
   
   }})
   button.forEach((btn)=>{
    btn.classList.remove("btn_clicked")
})
button[0].classList.add("btn_clicked")

})

//serach by buttons
button.forEach(button=>{
    button.addEventListener("click",(event=>{
        event.preventDefault();
    setActive(event)

    const btnFilter=button.dataset.filter
 boxes.forEach(box=>{
    
if(btnFilter=="all"){
    box.style.display="block";

}
else{
    var boxFilter=box.dataset.item
    if(boxFilter==btnFilter){
        box.style.display="block"
    }
    else{
        box.style.display="none"
    }
}
})


    }))
})

function setActive(event){
    button.forEach((btn)=>{
        btn.classList.remove("btn_clicked")
    })
    event.target.classList.add("btn_clicked")
}


console.log(boxFilter);
