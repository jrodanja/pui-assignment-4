$(document).ready(function(){
    $("#btn1").click(function(){
        $("#text1").text("3-pack: Itsy Bitsy Pack O' Buns");
        $("#price").text("$850/dozen");
    $("#walnutpic1").attr("src","https://cdn.shopify.com/s/files/1/1621/8799/products/CINNAMON_ROLLS_900x.jpg?v=1490921416");
        
    });
    $("#btn2").click(function(){
        $("#text1").text("6-pack: The OG");
        $("#price").text("$1,700/dozen");
        $("#walnutpic1").attr("src","http://2.bp.blogspot.com/-uqmAFlvdCUo/UwK-epbL2SI/AAAAAAAACf8/py-m00Lr3Ds/s1600/DSC_0946.JPG");
        
    });
    $("#btn3").click(function(){
        $("#text1").text("12-pack: Fam Bam");
        $("#price").text("$2,400/dozen");
        $("#walnutpic1").attr("src","http://fresh-spot.com/wp-content/uploads/2015/08/IMG_6276.jpg");
    });
});

// Shoppping Cart Functions //

var cart = [];

var Item = function(name, price, count) {
    //item name, price, count
    this.name = name
    this.price = price
    this.count = count
};


// saveCart() // uses localStorage to save cart info
function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    //console.log(shoppingCart);
    
}

// addItemToCart(name, price, count)
function addItemToCart(name, price, count) {
    // check to see if that item is already in cart
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    } 
    // if not, proceed to add new items 
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

// removeItemFromCart(name) // removes one item from cart by name
function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}

// removeItemFromCartAll(name) // removes all item names 
function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

// clearCart() // return nothing 
function clearCart() {
    cart = [];
    saveCart();
}

function displayCart() {
    var cartArray = listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<li>"
            +cartArray[i].name
            +" "+cartArray[i].count
            +" <button class='delete-item' data-name='"
            +cartArray[i].name+"'>X</button>" 
            +"</li>"
    }
    $("#show-cart").html(output);
}  

console.log(cart);


// countCart() // return total count 
function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}

console.log( countCart());

// totalCart() // return total cost 
function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost;
}

console.log(totalCart());

// listCart() // return array of all items 
function listCart() {
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

// saveCart() // uses localStorage to save cart info
function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    //console.log(shoppingCart);
    
}

// loadCart() // loads cart info from localStorage 
function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
displayCart();

var array = listCart();
console.log("hello"+ array);

function loadingShoppingCart() {
    loadCart();
//    var array = listCart();
//    var newDiv = document.createElement("div");
//    var newText = array[0].name;
//    newDiv.appendChild(newText);
//    document.getElementById("shop").appendChild(newDiv);
    
//    displayCart();
    var a = document.getElementById("shop");
    a.innerHTML = "HTML change";

}

function bunLoad () {
    var array = listCart();
    var output = "";
    for (i=0; i<array.length; i++)
        {
            output += "<li>"
            +array[i].name
            +" "+array[i].count
            +" <button class='delete-item' data-name='"
            +array[i].name+"'>X</button>" 
            +"</li>"
        }
    $("#bun").html(output);
}

var count = 0;
 $("#add-to-cart-apple").click(function(event){
    event.preventDefault();
    var name = $(this).attr("data-name");
    console.log("This is name" + " " +name);
    var price = $(this).attr("data-price");
    console.log("This is price" + " " + price);
    
    var cartItem = {name, price, count};
    count = count +1;
    var cartArray = JSON.parse(localStorage.getItem("shoppingCart")) || []
    cartArray.push(cartItem);
    localStorage.setItem("shoppingCart",JSON.stringify(cartArray));
    
    console.log(cartItem);
    
    //addItemToCart(name, price, 1);
    //displayCart();
});



function dothis () {
    var name = document.getElementsByClassName("add-to").dataname;
    var price = document.getElementsByClassName("add-to").dataprice;
    var count = 2;
    var item = {"name": name, "price": price, "count": count};
    var arr = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    arr.push(item);
    localStorage.setItem("shoppingCart",JSON.stringify(arr));
}



function onclick (){
    console.log("onclick");
}