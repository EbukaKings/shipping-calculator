function eventkey(presskey) {
    if (event.key === 'enter') {
calculateTotal();
}
};


 function calculateTotal() {
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value);
    if (cost < 40) {
        cost = cost + 10;
    }
    document.querySelector('.js-page-cost').innerHTML = `$${cost}`;

}

