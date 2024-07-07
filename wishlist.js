// let wishItems ;
// onLoad();


// function onLoad() {
//     let wishItemsStr = localStorage.getItem('wishItems');
//     wishItems = wishItemsStr  ? JSON.parse(wishItemsStr ) : [];
//     itemContainerOfHomePage();
//     displayWishIcon();
    
//   }

function displayWishIcon() {
    let wishItemCountElement = document.querySelector('.wish-item-count');
//     if (wishItems.length > 0) {
//         wishItemCountElement.style.visibility = 'visible';
//         wishItemCountElement.innerText = wishItems.length;
//     } else {
//         wishItemCountElement.style.visibility = 'hidden';
//     }
}

function addToWish(itemId) {
//     if (!wishItems.includes(itemId)) {
//         wishItems.push(itemId);
//         localStorage.setItem('wishItems', JSON.stringify(wishItems));
//         displayWishIcon();
        itemContainerOfHomePage();
//     }
}

function itemContainerOfHomePage() {
    let containerelement = document.querySelector('.items-container');

    if (!containerelement) {
        return;
    }

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
            <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image"/>
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">${item.current_price} Taka </span>
                    <span class="original-price"> ${item.original_price} Taka</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                <button class="add-to-wishlist heart-icon" onclick="addToWish(${item.id});"> ♡ Add to Wishlist</button>
            </div>
        `;
    });

    containerelement.innerHTML = innerHTML;
}
