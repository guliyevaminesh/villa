const blogpost = document.querySelector('.blogpost')

function blogPost(){
    blogpost.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) => {
        const post = document.createElement('div')
        post.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <button onclick = "removeBasket(${index})">Add to Basket</button>
        `
    })
}