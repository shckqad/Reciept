//Design A page that includes three items with prices including VAT and Total Charge.

//include 5% discount on sub totals


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
el.textContent = 'Grand Total = $ ' + total;
