let menu_button = document.getElementsByClassName('minimenu');
let item = menu_button.length;

for(let i = 0; i < item; i++){
   
   menu_button[i].addEventListener('click', function() {
      document.body.children[0].children[1].classList.toggle('open');
   });
}
for(let i = 0; i < item; i++){
    menu_button[i].addEventListener('click', function(){
        this.classList.toggle('minimenu_open');
    });
}

let wishlist =  document.getElementsByClassName('wishlist');
let item_number = wishlist.length;
for(let i = 0; i < item_number; i++){
    wishlist[i].addEventListener('click', function(){
        this.classList.toggle('heart');
    });
}