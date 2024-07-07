let bagItems;
let wishCount = 0;
let wishItems = [];
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    let wishItemsStr = localStorage.getItem('wishItems');
    wishItems = wishItemsStr ? JSON.parse(wishItemsStr) : [];

    itemContainerOfHomePage();
    displayBagIcon();
    
  }

//add to bag code
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItems.length;
    } else {
      bagItemCountElement.style.visibility = 'hidden';
    }
    
  }


function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
    itemContainerOfHomePage();
  }
  

  function addTowish(itemId) {
    wishItems.push(itemId);
    localStorage.setItem('wishItems', JSON.stringify(wishItems));
    wishCount++;
    document.querySelector('.wish-item-count').innerText = wishCount;
    itemContainerOfHomePage();
}


// for each item show code
function itemContainerOfHomePage(){
    let containerelement= document.querySelector('.items-container');
    
    if(!itemContainerOfHomePage){
      return;
    }

      let innerHTML='';
      items.forEach(item =>{
          innerHTML+=`
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
            <button class="add-to-wishlist" onclick="addTowish(${item.id});" > ♡ Add to Wishlist</button>
          </div>
    `
      })

    containerelement.innerHTML= innerHTML;

}

function profileFront(){
    document.addEventListener('click', function (e) {
      var profileContainer = document.querySelector('.profile-container');
      var dropdownMenu = document.querySelector('.dropdown-menu');
      if (!profileContainer.contains(e.target)) {
          dropdownMenu.style.display = 'none';
      } else {
          dropdownMenu.style.display = 'block';
      }
    });
  }
  profileFront();