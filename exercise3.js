//Exercise 3: The Object Context Challenge
const display = document.querySelector('#count-display');
const CounterApp = {
count: 0,
increment: function() {
// increment this.count, update the display span
    this.count++;
    display.textContent = this.count;
},
decrement: function() {
// decrement this.count, update the display span
    this.count--;
    display.textContent = this.count;
}
};
// Attach increment to #inc-btn using .bind()
const inc_Btn = document.querySelector('#inc-btn');
inc_Btn.addEventListener('click', CounterApp.increment.bind(CounterApp));

// Attach decrement to #dec-btn using .bind()
const dec_Btn = document.querySelector('#dec-btn');
dec_Btn.addEventListener('click', CounterApp.decrement.bind(CounterApp));
