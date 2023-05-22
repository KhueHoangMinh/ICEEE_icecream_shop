// js code for errors check in register.html page. structured the same as orderCheck.js

function validate() {
	
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password= document.getElementById("password").value
    const rePassword = document.getElementById("re-password").value
    const flavour = document.getElementById("flavour").value
    const genderMale = document.getElementById("gender-male").checked
    const genderFemale = document.getElementById("gender-female").checked
    const genderOther = document.getElementById("gender-other").checked
    const cone = document.getElementById("cone").checked
    const cup = document.getElementById("cup").checked
    const pop = document.getElementById("pop").checked

    var errors = [];								
    var result = true;				

    if(username == "") errors.push('username_1')
    if(email == "") errors.push('email_1')
    if(password == "") errors.push('password_1')
    if(password.length < 9) errors.push('password_2')
    if(rePassword == "") errors.push('re-password_1')
    if(flavour == "") errors.push('flavour_1')
    if(!genderMale && !genderFemale && !genderOther) errors.push('gender_1')
    if(!cone && !cup && !pop) errors.push('type_1')

    if(password != rePassword) errors.push('re-password_2')

    var checkEmail = false
    for(var i = 1; i < email.length-1; i++) {
        if(email[i] == '@') {
            checkEmail = true
            break
        }
    }
    if(!checkEmail) errors.push('email_2')

   if(errors.length > 0) {
    result = false
    document.getElementById("username-err").innerHTML = ""
    document.getElementById("email-err").innerHTML = ""
    document.getElementById("password-err").innerHTML = ""
    document.getElementById("re-password-err").innerHTML = ""
    document.getElementById("flavour-err").innerHTML = ""
    document.getElementById("gender-err").innerHTML = ""
    document.getElementById("type-err").innerHTML = ""
    document.getElementById("password-err").innerHTML = ""
    document.getElementById("re-password-err").innerHTML = ""
    document.getElementById("email-err").innerHTML = ""
    for(var i = 0; i < errors.length; i++) {
        switch(errors[i]) {
            case 'username_1':
                const message1 = document.createTextNode("Username is required.")
                document.getElementById("username-err").appendChild(message1)
                break
                
            case 'email_1':
                const message2 = document.createTextNode("Email is required.")
                document.getElementById("email-err").appendChild(message2)
                break
                
            case 'password_1':
                const message3 = document.createTextNode("Password is required.")
                document.getElementById("password-err").appendChild(message3)
                break
                
            case 're-password_1':
                const message4 = document.createTextNode("Retyping password is required.")
                document.getElementById("re-password-err").appendChild(message4)
                break
                
            case 'flavour_1':
                const message5 = document.createTextNode("Pick a flavour.")
                document.getElementById("flavour-err").appendChild(message5)
                break
                
            case 'gender_1':
                const message6 = document.createTextNode("Gender is required.")
                document.getElementById("gender-err").appendChild(message6)
                break
                
            case 'type_1':
                const message7 = document.createTextNode("Choose at least one.")
                document.getElementById("type-err").appendChild(message7)
                break
                
            case 'password_2':
                if(!errors.includes('password_1')) {
                    const message8 = document.createTextNode("Password must have at least 9 characters.")
                    document.getElementById("password-err").appendChild(message8)
                }
                break
                
            case 're-password_2':
                if(!errors.includes('re-password_1')) {
                    const message9 = document.createTextNode("Passwords must match.")
                    document.getElementById("re-password-err").appendChild(message9)
                }
                break
                
            case 'email_2':
                if(!errors.includes('email_1')) {
                    const message10 = document.createTextNode("Invalid email (e.g. example@example.com).")
                    document.getElementById("email-err").appendChild(message10)
                }
                break
            
            
        }
    }
   }
   return result;
}