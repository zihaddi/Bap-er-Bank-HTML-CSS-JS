

function Operation()
{
  const Input = document.getElementById(arguments[0]);
  const currentValue = Input.value

  if(isNaN(currentValue)  == true  )
  {
          alert('Wrong Input Type For Withdraw')
  }
  else if(currentValue== '' )
  {
           alert('Given Null Input')
  }
  else
  {
          const Box = document.getElementById(arguments[1])
          const previousValue = Box.innerText
          Box.innerText = (parseInt(currentValue) +  parseInt(previousValue)).toString()
          let Value = Input.value

          let balance = document.getElementById(arguments[2]);
          let balanceAmount = parseInt(balance.innerText)
          if(arguments[0] == 'withdrawInput')
          {
            balance.innerText =  (balanceAmount - parseInt(Value)).toString()
          }
          else
          {
            balance.innerText =  (balanceAmount + parseInt(Value)).toString()
          }
          Input.value = ''
   }
}

const withdrawButton = document.getElementById("btnWithdraw");
withdrawButton.addEventListener('click',function()
{
  const withdrawInput = 'withdrawInput'
  const withdrawValue = "withdrawValue"
  const Balance = 'Balance'
  Operation(withdrawInput,withdrawValue,Balance)
})

const depositButton = document.getElementById("btnDeposite");
depositButton.addEventListener('click',function()
{
  const depositInput = 'depositInput'
  const depositValue = "depositeValue"
  const Balance = 'Balance'
  console.log(Operation(depositInput, depositValue,Balance))
})