

function storedata(key, value) {
    localStorage.setItem(key, value);
}

storedata("mydata", JSON.stringify(mydata));
let storedProduct;
function display() {
     storedProduct = JSON.parse(localStorage.getItem("mydata"));
    console.log(storedProduct);

    if (storedProduct) {
        document.getElementById("givedata").innerHTML = storedProduct
            .map((item) => {
                return `
                    <div class="data-card">
                        <div><img src="${item.url}" height="200px" width="200px"></div>
                    
                        <h2>${item.name}</h2>
                        <p>Price: &#8377${item.price}</p>
                        <button onClick="display2(${item.id})">Add to cart</button>
                        
                    </div>
                `;
            })
            .join(""); // Use join to convert array to string
    }
}

let array=[];

 function display2(id){


    let selectedItem = storedProduct.find((item) => item.id === id);
    console.log(selectedItem)


    let inCart= array.some((item)=>item.id===id);
    if(!inCart){
        array.push(selectedItem)
        alert(`${selectedItem.name} hass been added to cart`)

        document.getElementById("count").innerHTML=array.length

    

        localStorage.setItem("array", JSON.stringify(array));

    
    }else{
        alert(`${selectedItem.name} already added to cart`)
    }


    

   
console.log(array)
        
    
 
}
