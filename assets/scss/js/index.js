const blogs = document.querySelector('.blogs');

let page = 1
let limit = 3
function recentBlogs(){

    let skip = (page -1) * limit

    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}&skip=${skip}`)
    .then(res =>{
        db =res.data
        db.map(item => {
            const place = document.createElement('div')
            place.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <button onclick = "addtoBasket(${item.id})">Add to Basket</button>
            `
            blogs.appendChild(place)
        })
        page++
    })
}
recentBlogs()

function addtoBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
    
}