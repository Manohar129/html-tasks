
let products = JSON.parse(localStorage.getItem('styleHubItems')) || [
    { id: 1, name: "Classic Blazer", price: 4999, category: "Men", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500" },
    { id: 2, name: "Silk Dress", price: 3200, category: "Women", image: "https://images.unsplash.com/photo-1572804013307-597758e99d88?w=500" },
    { id: 3, name: "Cotton Set", price: 1500, category: "Kids", image: "https://images.unsplash.com/photo-1519702465767-9b7c8fa2ee7c?w=500" },
    { id: 4, name: "Urban Hoodie", price: 2200, category: "Men", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" }
];

window.onload = () => updateDisplay(products);

function showSection(name) {
    document.getElementById('storeView').style.display = (name === 'store') ? 'block' : 'none';
    document.getElementById('adminView').style.display = (name === 'admin') ? 'block' : 'none';
}


function filterByCategory(cat) {
   
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === cat) btn.classList.add('active');
    });

    if (cat === 'All') {
        updateDisplay(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        updateDisplay(filtered);
    }
}


function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    updateDisplay(filtered);
}


function addProduct() {
    const name = document.getElementById('pName').value;
    const price = document.getElementById('pPrice').value;
    const cat = document.getElementById('pCategory').value;
    const image = document.getElementById('pImage').value || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500";

    if(!name || !price) return alert("Please enter name and price.");

    const newProduct = { id: Date.now(), name, price, category: cat, image };
    products.push(newProduct);
    saveAndRefresh();
    

    document.getElementById('pName').value = '';
    document.getElementById('pPrice').value = '';
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('styleHubItems', JSON.stringify(products));
    updateDisplay(products);
}


function updateDisplay(itemsArray) {
    const store = document.getElementById('productDisplay');
    const table = document.getElementById('adminTableBody');

    store.innerHTML = itemsArray.map(p => `
        <div class="product-card">
            <div class="badge">${p.category}</div>
            <img src="${p.image}">
            <div class="p-details">
                <h3>${p.name}</h3>
                <p style="color: var(--primary); font-weight: bold;">₹${p.price}</p>
                <button class="buy-btn">Add to Cart</button>
            </div>
        </div>
    `).join('');

    table.innerHTML = itemsArray.map(p => `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>₹${p.price}</td>
            <td><button onclick="deleteProduct(${p.id})" style="color:red; background:none; border:none; cursor:pointer;">Remove</button></td>
        </tr>
    `).join('');
}