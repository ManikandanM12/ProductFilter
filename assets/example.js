// var button=document.querySelectorAll(".btn");
// var searchInput=document.getElementById("Search");
// var boxes=document.querySelectorAll(".box")

// //Search product by Search input
//  searchInput.addEventListener("keyup",(event)=>{
//    var data=event.target.value.toLowerCase().trim()
//   boxes.forEach(box=>{
//     const item=box.dataset.item
//     if(item.includes(data)){
//         box.style.display="block"
//     }
//     else{
//         box.style.display="none"
 
//     }
//   })
//   button.forEach((button)=>{
//     button.classList.remove("btn_clicked")
// })
//    button[0].classList.add("btn_clicked")
   
// })

// //Search product by button
// button.forEach((button)=>{
//     button.addEventListener("click",(event)=>{
//         event.preventDefault();
//         setActive(event);
//         var btnFilter=event.target.dataset.filter
//         boxes.forEach(box=>{
           
//         if(btnFilter=="all"){
//             box.style.display="block"
//         }else{
//              var boxFilter=box.dataset.item
//              if(boxFilter===btnFilter){
//                 box.style.display="block"
//             }else{
//                 box.style.display="none"
//             }
//         }
           
//         })
//     })
  
    
    
// })

// function setActive(event){
//     button.forEach((button)=>{
//         button.classList.remove("btn_clicked")
//     })
//     event.target.classList.add("btn_clicked")
// }


