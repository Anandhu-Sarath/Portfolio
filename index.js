const nameFiled = document.getElementById("name");
const emailFiled = document.getElementById("email");
const subjectFiled = document.getElementById("subject");
const messageFiled = document.getElementById("message");
const formfield = document.getElementById("form");

formfield.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

let error = (elm,message) => {
    elm.style.border = "2px solid red";
    elm.nextElementSibling.innerText =message;
}

let success = (elm,message) => {
    elm.style.border = "2px solid green";
    elm.nextElementSibling.innerText =message;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate(){
    const nameValue = nameFiled.value.trim();
    const emailValue = emailFiled.value.trim();
    const subjectValue = subjectFiled.value.trim();
    const messageValue = messageFiled.value.trim(); 
    let nameVerified=false,emailVerified=false,subjectVerified=false,messageVerified=false;
    if(nameValue.length > 3){
        success(nameFiled,"");
        nameVerified=true;
    }else{
        error(nameFiled,"Name should be atleast 3 characters")
    }

   if(!validateEmail(emailValue)){
        error(emailFiled,"Email format is incorrect");
   }else{
       success(emailFiled,"");
       emailVerified=true;
   }

   if(subjectValue.length < 8){
    error(subjectFiled,"Subject should be atleast 8 characters")
   }else{
       success(subjectFiled,"")
       subjectVerified=true;
   }

   if(messageValue.length < 10){
    error(messageFiled,"Subject should be atleast 10 characters")
   }else{
       success(messageFiled,"")
       messageVerified=true;
   }

   if(nameVerified&&emailVerified&&subjectVerified&&messageVerified){
       sendMail();
   }
}


function sendMail(params){
    const tempParams ={
     from_name:document.getElementById('email').value,
     to_name:document.getElementById('name').value,
     message:document.getElementById('subject').value,
    };
 
 emailjs.send('service_4dvp773','template_kld1wsg',tempParams,"qPpajdvdgcFW7Qvkn")
 .then(function(res){
   console.log('sucsess', res.status);
   alert("Sucess, Mail has sent!")
 })
 }