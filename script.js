//Design A page that includes three items with prices including VAT and Total Charge.

//include 5% discount on sub totals

/*
var price = 10;
var quantity = 1;
var total = (price * quantity);

var el = document.getElementById('total2');
el.textContent = '$' + total;

var price = 100;
var quantity = 1;
var total = (price * quantity);

var el = document.getElementById('total3');
el.textContent = '$' + total;

var price = 20;
var quantity = 1;
var total = (price * quantity);


var el = document.getElementById('total1');
el.textContent = '$' + total;

var total1 = 20;
var total2 = 10;
var total3 = 100;
var total = (total1 + total2) + total3;

var el = document.getElementById('Subtotal');
el.textContent = 'Subtotal: ' + ' $' + total;

var discount1 = (20 * 0.05);
var discount2 = (10 * 0.05);
var discount3 = (100 * 0.05);
var total = (discount1 + discount2) + discount3;

var el = document.getElementById('discount');
el.textContent = 'Discount(5%): ' + ' -$' + total;

var vat1 = (20 * 0.125);
var vat2 = (10 * 0.125);
var vat3 = (100 * 0.125);
var total = (vat1 + vat2) + vat3;

var el = document.getElementById('VAT');
el.textContent = 'TAX(12.5%): ' + ' $' + total;


var x = 20;
var y = 10;
var z = 100;
var discounts = 6.5;
var tax = 16.25;
var total = (x + y + z) - discounts + tax;

var el = document.getElementById('gtoa');
el.textContent = 'Grand Total = $ ' + total; */



var price1;
var quantity1;
var total1;

price1 = 20;
quantity1 = 1;
total1 = price1 * quantity1;

var el = document.getElementById('total1');
el.textContent = '$' + total1;

var price2;
var quantity2;
var total2;

price2 = 10;
quantity2 = 1;
total2 = price2 * quantity2;

var el = document.getElementById('total2');
el.textContent = '$' + total2;

var price3;
var quantity3;
var total3;

price3 = 100;
quantity3 = 1;
total3 = price3 * quantity3;

var el = document.getElementById('total3');
el.textContent = '$' + total3;


var subTotal = (total1 + total2) + total3;

var el = document.getElementById('Subtotal');
el.textContent = 'Subtotal: $' + subTotal;

var discount = (subTotal * 0.05);

var el = document.getElementById('discount');
el.textContent = 'Discount(5%): -$' + discount;

var vat = (subTotal * 0.125);

var el = document.getElementById('VAT');
el.textContent = 'TAX(12.5%): $' + vat;

var grandTotal = (subTotal + vat) - discount;

var el = document.getElementById('gtoa');
el.textContent = 'Order Total: $' + grandTotal;
