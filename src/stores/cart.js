import { ref } from 'vue';

export const cart = ref([]);

export function addToCart(item) {
    const foundItem = cart.value.find(product => product.title === item.title);
    if (foundItem) {
        if (foundItem.quantity < 1) {
            foundItem.quantity += 1;
        }
    } else {
        cart.value.push({ ...item, quantity: 1 });
    }
    console.log(cart.value)
}
export function totalItemsInCart() {
    return cart.value.reduce((acc, item) => acc + item.quantity, 0);
}