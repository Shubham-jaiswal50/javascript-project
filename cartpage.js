let storedCart;

window.onload = function () {
    storedCart = JSON.parse(localStorage.getItem("array")) || []; 

    if (storedCart.length > 0) {
        renderitem();
    } else {
        document.getElementById("displayData").innerHTML = "No data found!";
        document.getElementById("total").innerHTML = "0";
    }
};

function delete12(id) {
    // Filter out the item with the matching id
    storedCart = storedCart.filter((item) => item.id !== id);

    // Update the localStorage
    localStorage.setItem("array", JSON.stringify(storedCart));

    // Re-render the updated cart
    renderitem();
}

function renderitem() {
    let total = 0;
    let displayArea = document.getElementById("displayData"); 

    if (storedCart.length > 0) {
        displayArea.innerHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
                ${storedCart
                    .map((item) => {
                        total += item.price;
                        return `
                            <tr>
                                <td>${item.name}</td>
                                
                                <td>$${item.price}</td>
                                 <td><select id="quantity" class="quantity-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select></td>
                                <td><button onclick="delete12(${item.id})">Remove</button></td>

                            </tr>
                        `;
                    })
                    .join("")}
            </table>
        `;
    } else {
        displayArea.innerHTML = "No data found!";
    }

    
    document.getElementById("total").innerHTML = `Total: $${total}`;

    let myans=document.getElementById("quantity").value
    console.log(myans)
}