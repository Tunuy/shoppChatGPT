// Отримуємо кнопки "Додати до кошика"
const addToCartButtons = document.getElementsByClassName('add-to-cart');

// Отримуємо кнопку кошика та вікно кошика
const cartButton = document.getElementById('cart-btn');
const cart = document.getElementById('cart');

// Отримуємо таблицю з товарами у кошику
const cartItems = document.getElementById('cart-items');

// Отримуємо загальну вартість замовлення
const cartTotal = document.getElementById('cart-total');

// Кількість товарів у кошику
let cartCount = 0;

// Оброблюємо клік на кнопці "Додати до кошика"
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    // Отримуємо дані про товар з атрибутів кнопки
    const name = this.getAttribute('data-name');
    const price = this.getAttribute('data-price');

    // Додаємо товар у таблицю з товарами у кошику
    const newRow = cartItems.insertRow(-1);
    const nameCell = newRow.insertCell(0);
    const priceCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const totalCell = newRow.insertCell(3);

    nameCell.innerHTML = name;
    priceCell.innerHTML = `$${price}`;
    quantityCell.innerHTML = '1';
    totalCell.innerHTML = `$${price}`;

    // Збільшуємо лічильник товарів у кошику
    cartCount++;

    // Оновлюємо кількість товарів у кошику на кнопці кошика
    document.getElementById('cart-count').innerHTML = cartCount;

    // Обчислюємо загальну вартість замовлення
    const cartTotalValue = parseFloat(cartTotal.innerHTML.slice(7)) + parseFloat(price);
    cartTotal.innerHTML = `Всього: $${cartTotalValue}`;

    // Показуємо вікно кошика
    cart.style.display = 'block';
  });
}

// Оброблюємо клік на кнопці кошика
cartButton.addEventListener('click', function() {
  toggleCart();
});

// Оброблюємо клік на кнопці "Оформити замовлення"
document.getElementById('checkout-btn').addEventListener('click', function() {
  alert('Дякуємо за замовлення!');
  clearCart();
});

// Сховати або показати вікно кошика
function toggleCart() {
  if (cart.style.display === 'block') {
    cart.style.display = 'none';
  } else {
    cart.style.display = 'block';
  }
}

// Очистити кошик
function clearCart() {
  while (cartItems.rows.length > 1) {
    cartItems.deleteRow