// @ts-nocheck
// Write solution code here to dynamically add the form fields 

// Save the order details on clicking the submit button

let orderDetails=[];
let orderId = 0;
function validateForm(){
    let orderId = document.querySelector("#orderId").value;
    let name = document.querySelector("#name").value;
    let emailId = document.querySelector("#emailId").value;
    let number = document.querySelector("#number").value;
    let date = document.querySelector("#date").value;

    if(orderId == null || orderId== 0){
        let userElemnt = document.querySelector("#orderId");
        userElemnt.style.border="2px solid red";
        document.querySelector("#orderIdSpan").innerHTML="order Id cannot be blank";
        z
    }

   if(name == null || name=="")
    {
        document.querySelector("#nameSpan").innerHTML="name field cannot be blank";
        
    }

    if(emailId == null || emailId==""){
        document.querySelector("#emailIdSpan").innerHTML="emailId field cannot be blank"
        
    }
    if(number == null || number== 0){
        document.querySelector("#numberSpan").innerHTML="number field cannot be blank"
        
    }
    if(date == null || date==""){
        document.querySelector("#dateSpan").innerHTML="date field cannot be blank"
        
    }
    if(address == null || address==""){
        document.querySelector("#addressSpan").innerHTML="address field cannot be blank"
        
    }
else{
    let order = {
        "orderId":orderId,
        "name":name,
        "emailId":emailId,
        "number":number,
        "date":date,
        "address":address
    };
    orderId = orderId+1;
    orderDetails.push(order);
    console.log(orderDetails)
  
  return false;
}
}
let arr = [];
function displayOrder($event){

event.preventDefault();
      

        let div = document.getElementById("main");
        let category = document.createElement("input");
        category.setAttribute("type", "text")
        category.setAttribute("placeholder", "Category Name")
        category.setAttribute("id", "in1");
        div.appendChild(category);

       
        let item = document.createElement("input");
        item.setAttribute("type", "text")
        item.setAttribute("placeholder", "Item Name");
        item.setAttribute("id", "in2");
        div.appendChild(item);
        
        
    
        let price = document.createElement("input");
        price.setAttribute("type", "number")
        price.setAttribute("placeholder", "Price");
        price.setAttribute("id", "in3");
        div.appendChild(price);

        
        let quantity = document.createElement("input");
        quantity.setAttribute("type", "number")
        quantity.setAttribute("placeholder", "Quantity");
        quantity.setAttribute("id", "in4");
        div.appendChild(quantity);

        let amount = document.createElement("input");
        amount.setAttribute("type", "number")
        amount.setAttribute("placeholder", "Amount");
        amount.setAttribute("id", "in5");
        div.appendChild(amount);

        let one = document.createElement("div");
        btn.appendChild(one);
        let btntext = document.createTextNode("Total Amount:");
        btn.appendChild(btntext);
        let btn6 = document.createElement("button");
        btn.appendChild(btn6);


}


    /* function validityCategory(category) {
        if(category == null || category=="") {
            alert("cannot be empty");
        }
} */

function demo(){

    let obj = {
        category:document.getElementById("in1").value,
        item:document.getElementById("in2").value,
        price:document.getElementById("in3").value,
        quantity:document.getElementById("in4").value,
        amount:document.getElementById("in5").value
    }
    store(obj)
}

function store(obj) {

    arr.push(obj);
    arr.forEach(item=>{
        alert("Total amount to be paid: $"+item.amount);
    })

}


