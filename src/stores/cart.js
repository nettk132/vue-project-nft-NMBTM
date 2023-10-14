import { ref } from 'vue';

import swal from 'sweetalert';

export const cart = ref([]);

export function addToCart(item) {
    const foundItem = cart.value.find(product => product.title === item.title);
    if (foundItem) {
     

          swal({
            position: 'top-center',
            text: "คุณได้เพิ่มสินค้าไปแล้ว",
            icon: "error",
            
            showConfirmButton: false,
            timer: 1500
          });
        if (foundItem.quantity < 1) {
            foundItem.quantity += 1;
        }
    } else {
        swal({
            position: 'top-center',
            text: "เพิ่มสินค้าเรียบร้อยแล้ว",
            icon: "success",
           
            showConfirmButton: false,
            timer: 1500
          });
        cart.value.push({ ...item, quantity: 1 });
    }
    console.log(cart.value)
}
export function totalItemsInCart() {
    return cart.value.reduce((acc, item) => acc + item.quantity, 0);
}

