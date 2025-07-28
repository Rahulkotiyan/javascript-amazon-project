import { renderOrderSummary } from "./checkouts/orderSummary.js";
import { renderPaymentSummary } from "./checkouts/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';
import { loadCart } from "../data/cart.js";

async function loadPage(){
    
    await loadProductsFetch();

  const value = await new Promise((resolve) => {
      loadCart(() => {
        resolve('value3');
      });
    });

    renderOrderSummary();
    renderPaymentSummary();

   
}
loadPage()


/*
Promise.all([
  loadProductsFetch(),

    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then((values)=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });

}).then((value)=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve;
        });
    });

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/