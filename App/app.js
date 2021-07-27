const budgetList = []


const addBtn = document.querySelector('#new-button')
const budgetArea = document.querySelector('.budget-area')


addBtn.addEventListener('click', ()=>{
    const title = document.querySelector('#expense-info').value
    const amount = parseFloat(document.querySelector('#expense-amount').value)

    balance = amount

    const budgetPage = `
    <button id="all-budgets">All budgets</button>
    <h1>Budget for: ${title}</h1>
    <h2>Monthly budget: $${amount}</h2>
    <ul class="budget-items">
                
    </ul>
    <div class="create-budget-item">
        <input type="text" name="new-expense" id="new-expense" placeholder="Add new expense">
        <input type="text" name="expense-amount" id="expense-amount" placeholder="Amount($)">
        <button id="new-button">Add</button>
    </div>
    <h3>Remaining balance: $<span id="remaining-balance"></span><h3>  `

    const modify = document.querySelector('.budget-area')
    modify.innerHTML = budgetPage

    const remBal = document.querySelector('#remaining-balance')
    remBal.innerHTML = balance
    const newBtn = document.querySelector('#new-button')


}