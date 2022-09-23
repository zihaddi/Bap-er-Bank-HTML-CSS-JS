

//deposit button clicked
const withdrawButton = document.getElementById("btnWithdraw");
withdrawButton.addEventListener('click',function()
{
 
  const withdrawInput = document.getElementById('withdrawInput');
  const currentwithdrawValue = withdrawInput.value

  if(isNaN(currentwithdrawValue)  == true  )
  {
          alert('Wrong Input Type For Withdraw')
  }
  else if(currentwithdrawValue== '' )
  {
           alert('Given Null Input')
  }
  else
  {
          const withdrawBox = document.getElementById("withdrawValue")
          const previouswithdrawValue = withdrawBox.innerText
          withdrawBox.innerText = (parseInt(currentwithdrawValue) +  parseInt(previouswithdrawValue)).toString()
          let withdrawValue = withdrawInput.value

          let balance = document.getElementById('Balance');
          let balanceAmount = parseInt(balance.innerText)
          balance.innerText =  (balanceAmount - parseInt(withdrawValue)).toString()
          withdrawInput.value = ''
   }
})