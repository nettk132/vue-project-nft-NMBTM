import { reactive } from 'vue';

export const orders = reactive({ list: [] });

export function addOrder(orderItems) {
    const newOrder = {
        id: orders.list.length + 1, 
        items: orderItems
    };
    orders.list.push(newOrder);
}

