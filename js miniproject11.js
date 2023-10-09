
// [SABSE PHLE ELEMENT ACCESS KARENGE (.JS) ME]
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

// BUTTON KE UPPER EVENTLISTENER ADD KARENGE(ek eventlistener chaiye (to add)

btn.addEventListener("click",function(){
    let item = document.createElement("li");   //jo bhi work add krenge wo list ke jaisa add hote jayega 
    item.innerText = (inp.value);  //<li> jo create hua hai ,input me jo value enter krenge wo <li> me add hote jayega
    item.style.backgroundColor=getrandomcolor();

     // jis Task ko (.js) ke help se add kr rhe hai uske bagal me "delete" button aana chaiye 
     let delbtn = document.createElement("button");
     delbtn.innerText="Delete";            //delbtn ke andar "Delete" likha hua hoga
     delbtn.classList.add("delete");       //"delete" naam ka ek class denge delete button ko 
     item.appendChild(delbtn); //item add hone ke baad 'delbtn' bhi append(means add) ho jayega

 


    ul.appendChild(item); //<ul> ke andar "item" ko add(append) krna chahte hai as a child 
    inp.value="";        //jaise item add hoga uske baad input blank ho jayega

    //[Delete btn work-->] "Delete button click krne pe, added work remove ho jayega "
    ul.addEventListener("click",function(event){
        if(event.target.nodeName == "BUTTON"){       //nodename means which type of element [here type is :button]
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("deleted");
        }
    });

});

//  Since Ye  existing Task ko hi remove kr skta hai ,Task which are added through (.js)  can't be removed by this code
// after clicking of 'delete' button, Task should be removed 
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement; // Here 'this' mean delbtn ke parent Element.
//         console.log(par);
//         par.remove();
//     })

// }

function getrandomcolor(){
    let red=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let color = `rgb(${red},${blue},${green})`;
    return color;
  }

