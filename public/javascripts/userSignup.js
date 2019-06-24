var firstname = document.getElementsByName('firstname');
var lastname = document.getElementsByName('lastname');
var email = document.getElementsByName('email');
var phoneNo = document.getElementsByName('phone');
var password = document.getElementsByName('password');
var profile = document.getElementById("selectProgram");

axios.post('http://localhost:3000/signup',{
    firstname : firstname,
    lastname : lastname,
    email : email,
    phoneNo : phoneNo,
    
})
