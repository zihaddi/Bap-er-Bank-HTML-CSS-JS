

//deposit button clicked
const depositButton = document.getElementById("btnDeposite");
depositButton.addEventListener('click',function()
{
  const depositInput = document.getElementById('depositInput');
  const currentdepositeValue = depositInput.value

   if(isNaN(currentdepositeValue)  == true  )
   {
         alert('Wrong Input Type For Deposite')
   }
   else if(currentdepositeValue== '' )
   {
          alert('Given Null Input')
   }
   else
   {
    const depositeBox = document.getElementById("depositeValue")
    const previousDepositeValue = depositeBox.innerText
    depositeBox.innerText = (parseInt(currentdepositeValue) +  parseInt(previousDepositeValue)).toString()
    let depositeValue = depositInput.value
  
    let balance = document.getElementById('Balance');
    let balanceAmount = parseInt(balance.innerText)
    balance.innerText =  (balanceAmount + parseInt(depositeValue)).toString()
    depositInput.value = ''
   }
   
})