

function finalamount(action){
    let inputElement = document.getElementById('inpt')
    
    let amount = parseFloat(inputElement.value)

    let incomeValueElement = document.getElementById('incomeValue');
    let expenseValueElement = document.getElementById('expenseValue');
    let profitValueElement = document.getElementById('profitValue');

    let income = parseFloat(incomeValueElement.innerText) ;
    let expense = parseFloat(expenseValueElement.innerText) ;
    let profit = parseFloat(profitValueElement.innerText) ;

    if(!isNaN(amount)){
        if(action === 'income'){
            income += amount
            profit += amount
        }else if(action === 'expense'){
            expense += amount
            profit -= amount
        }else if(action === 'reset'){
            income = 0;
            expense = 0;
            profit = 0;
        }
        incomeValueElement.innerText = income.toFixed()
        expenseValueElement.innerText = expense.toFixed()
        profitValueElement.innerText  = profit.toFixed()
    }
    else{alert('please, Enter right amount')}

}



















