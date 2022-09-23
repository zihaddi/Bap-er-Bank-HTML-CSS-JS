var submitButton = document.getElementById('btnSubmit');
submitButton.addEventListener('click',function()
{
   const userField = document.getElementById('username')
   const user = userField.value;

   const passField = document.getElementById('password')
   const pass = passField.value;

   if(user == "zihad"  && pass == '1234')
   {
    window.location.href = 'bank.html'
   }
   else
   {
    alert('Funck You!!')
   }
})