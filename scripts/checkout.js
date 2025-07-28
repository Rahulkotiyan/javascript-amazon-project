import { renderOrderSummary } from "./checkouts/orderSummary.js";
import { renderPaymentSummary } from "./checkouts/paymentSummary.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
