'use strict';

async function addCart(id, quantity) {
    console.log('addCart Running');
    let res = await fetch('/products/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ id, quantity })
    });
    let json = await res.json();
    console.log(json);
    document.getElementById('cart-quantity').innerText = `(${json.quantity})`;
}