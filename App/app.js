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

    newBtn.addEventListener('click', ()=>{
        newExpense = document.querySelector('#new-expense').value
        expenseAmount = parseFloat(document.querySelector('#expense-amount').value)
        balance -=expenseAmount
        const item = document.querySelector('.budget-items')
        item.insertAdjacentHTML('beforeend', 
        '<li class="budget-list">' + '<div>' + newExpense + '</div>' + '<div>' + '$' + expenseAmount + '<div>' + '</li>')
    })

    newBtn.addEventListener('click', ()=>{
        remBal.innerHTML = balance
    })

    const allLi = document.querySelectorAll('.budget-list')
    newBtn.addEventListener('click', ()=>{
        arrayEntry = {
            name: title,
            items: allLi,
            balLeft: balance
        }
        budgetList.push(arrayEntry)
        console.log(budgetList)
    })

    const allBuds = document.querySelector('#all-budgets')

    allBuds.addEventListener('click', ()=>{
        const page = `
            <div class="create-budget">
                <label for="expense-info" class="input-label">Expense Title</label>
                <input type="text" name="expense-info" id="expense-info">
                <label for="expense-amount" class="input-label">Amount</label>
                <input type="text" name="expense-amount" id="expense-amount" >
                <button id="new-button">New Budget</button>
            </div>`
        budgetArea.innerHTML = page
        budgetArea.insertAdjacentHTML('afterend',`<section class="budget-area" id="saved-notes"></section>`)      
    })

    allBuds.addEventListener('click',()=>{
        const notes = document.querySelector('#saved-notes')
        for (let i=0;i<budgetList;i++){
            notes.innerHTML = `<div>
                <h1>${budgetList[i].name}</h1>
                <h2>${budgetList[i].balLeft}</h2>
            </div>`
        }
    })

})