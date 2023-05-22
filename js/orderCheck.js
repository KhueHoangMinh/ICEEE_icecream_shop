// js code to check for errors, display them, and animations at order.html page

function validate() {
    // get the input values
    const delivery = document.getElementById("delivery").checked
    const pickup = document.getElementById("pickup").checked
    const deliveryAddress = document.getElementById("delivery-address").value
    const billingAddress = document.getElementById("billing-address").value
    const deliveryPost = document.getElementById("delivery-postcode").value
    const billingPost = document.getElementById("billing-postcode").value
    const number = document.getElementById("number").value
    const email = document.getElementById("email").value
    const card = document.getElementById("card").checked
    const cash = document.getElementById("cash").checked
    const cardType = document.getElementById("card-type").value
    const nameOnCard = document.getElementById("nameoncard").value
    const cardNumber = document.getElementById("cardnumber").value
    const expiry = document.getElementById("expiry").value
    const cvv = document.getElementById("cvv").value
    // errors check
    var errors = [];								
    var result = true;				

    if(!delivery && !pickup) errors.push('order-type_1')
    if(delivery) {
        if(deliveryAddress == "") errors.push('delivery-address_1')
        if(deliveryPost == "") {
            errors.push('delivery-postcode_1')
        } else {
            if(!/^\d+$/.test(deliveryPost) || deliveryPost.length != 4) errors.push('delivery-postcode_2')
        }
    }
    if(billingAddress == "") errors.push('billing-address_1')
    if(billingPost == "") {
        errors.push('billing-postcode_1')
    } else {
        if(!/^\d+$/.test(billingPost) || billingPost.length != 4) errors.push('billing-postcode_2')
    }
    if(number == "") errors.push('number_1')
    if(email == "") errors.push('email_1')
    if(!card && !cash) errors.push('payment-method_1')
    if(card) {
        if(cardType == ""){
            errors.push("card-type_1")
        } else {
            if(nameOnCard == "") errors.push("nameoncard_1")
            if(cardNumber == "") {
                errors.push("cardnumber_1")
            } else {
                switch(cardType) {
                    case "visa":
                        if(cardNumber.length != 16 || !/^\d+$/.test(cardNumber)) errors.push('cardnumber_2')
                        break
                    case "master":
                        if(cardNumber.length != 16 || !/^\d+$/.test(cardNumber)) errors.push('cardnumber_2')
                        break
                    case "express":
                        if(cardNumber.length != 15 || !/^\d+$/.test(cardNumber)) errors.push('cardnumber_3')
                        break
                }
            }
            if(expiry == "") {
                errors.push("expiry_1")
            } else {
                if(expiry[2] != '-' || !/^\d$/.test(expiry[0])|| !/^\d$/.test(expiry[1])|| !/^\d$/.test(expiry[3])|| !/^\d$/.test(expiry[4])) {
                    errors.push('expiry_2')
                } else {
                    if(expiry[0] != '0' && expiry[0] != '1') {
                        errors.push('expiry_3')
                    }
                    if(expiry[0] == '0' && expiry[1] == '0') {
                        errors.push('expiry_3')
                    } else if(expiry[0] == '1' && !['0','1','2'].includes(expiry[1])) {
                        errors.push('expiry_3')
                    }
                }
            }
            if(cvv == "") {
                errors.push("cvv_1")
            } else {
                if(!/^\d+$/.test(cvv)) errors.push('cvv_2')
            }
        }
    }

    var checkEmail = false
    for(var i = 1; i < email.length-1; i++) {
        if(email[i] == '@') {
            checkEmail = true
            break
        }
    }
    if(!checkEmail) errors.push('email_2')

    var checkNameOnCard = true
    for(var i = 0; i < nameOnCard.length; i++) {
        if(
            !/^[A-Za-z]+$/.test(nameOnCard[i]) && nameOnCard[i] != " ") {
            checkNameOnCard = false
        }
    }

    if(!checkNameOnCard) errors.push('nameoncard_2')

    
    // if there are errors, display them
   if(errors.length > 0) {
    result = false
    // clear error message to avoid duplication when resubmit but there are still errors
    document.getElementById("order-type-err").innerHTML = ""
    document.getElementById("delivery-address-err").innerHTML = ""
    document.getElementById("billing-address-err").innerHTML = ""
    document.getElementById("delivery-postcode-err").innerHTML = ""
    document.getElementById("billing-postcode-err").innerHTML = ""
    document.getElementById("number-err").innerHTML = ""
    document.getElementById("email-err").innerHTML = ""
    document.getElementById("payment-method-err").innerHTML = ""
    document.getElementById("card-type-err").innerHTML = ""
    document.getElementById("nameoncard-err").innerHTML = ""
    document.getElementById("cardnumber-err").innerHTML = ""
    document.getElementById("expiry-err").innerHTML = ""
    document.getElementById("cvv-err").innerHTML = ""
    for(var i = 0; i < errors.length; i++) {
        // insert error messages for different error codes
        switch(errors[i]) {
            case 'order-type_1':
                document.getElementById("order-type-err").appendChild(document.createTextNode("Order type is required."))
                break

            case 'delivery-address_1':
                document.getElementById("delivery-address-err").appendChild(document.createTextNode("Delivery address is required."))
                break
                
            case 'billing-address_1':
                document.getElementById("billing-address-err").appendChild(document.createTextNode("Billing address is required."))
                break

            case 'delivery-postcode_1':
                document.getElementById("delivery-postcode-err").appendChild(document.createTextNode("Post code is required."))
                break
                    
            case 'billing-postcode_1':
                document.getElementById("billing-postcode-err").appendChild(document.createTextNode("Post code is required."))
                break
                
            case 'number_1':
                document.getElementById("number-err").appendChild(document.createTextNode("Contact number is required."))
                break
                
            case 'email_1':
                document.getElementById("email-err").appendChild(document.createTextNode("Email is required."))
                break
                
            case 'payment-method_1':
                document.getElementById("payment-method-err").appendChild(document.createTextNode("Payment method is required."))
                break
                
            case 'card-type_1':
                document.getElementById("card-type-err").appendChild(document.createTextNode("Card type is required."))
                break
                
            case 'nameoncard_1':
                document.getElementById("nameoncard-err").appendChild(document.createTextNode("Name on card is required."))
                break

            case 'cardnumber_1':
                document.getElementById("cardnumber-err").appendChild(document.createTextNode("Card number is required."))
                break
                
            case 'expiry_1':
                document.getElementById("expiry-err").appendChild(document.createTextNode("Expiry date is required."))
                break
                
            case 'cvv_1':
                document.getElementById("cvv-err").appendChild(document.createTextNode("CVV is required."))
                break
                
            case 'delivery-postcode_2':
                if(!errors.includes('delivery-postcode_1')) document.getElementById("delivery-postcode-err").appendChild(document.createTextNode("Post code must be 4 digits."))
                break
                    
            case 'billing-postcode_2':
                if(!errors.includes('billing-postcode_1')) document.getElementById("billing-postcode-err").appendChild(document.createTextNode("Post code must be 4 digits."))
                break

            case 'email_2':
                if(!errors.includes('email_1')) {
                    document.getElementById("email-err").appendChild(document.createTextNode("Invalid email address (e.g. example@example.com)."))
                }
                break
                
            case 'nameoncard_2':
                if(!errors.includes('nameoncard_1')) {
                    document.getElementById("nameoncard-err").appendChild(document.createTextNode("Name on card must only contain alphabetical characters."))
                }
                break

            case 'cardnumber_2':
                if(!errors.includes('cardnumber_1')) {
                    document.getElementById("cardnumber-err").appendChild(document.createTextNode("VISA and Master card number must has 16 digits."))
                }
                break

            case 'cardnumber_3':
                if(!errors.includes('cardnumber_1')) {
                    document.getElementById("cardnumber-err").appendChild(document.createTextNode("American Express card number must has 15 digits."))
                }
                break

            case 'expiry_2':
                if(!errors.includes('expiry_1')) {
                    document.getElementById("expiry-err").appendChild(document.createTextNode("Expiry date must be in the mm-yy format."))
                }
                break
                
            case 'expiry_3':
                if(!errors.includes('expiry_1')) {
                    document.getElementById("expiry-err").appendChild(document.createTextNode("Invalid expiry month."))
                }
                break

            case 'cvv_2':
                if(!errors.includes('cvv_1')) {
                    document.getElementById("cvv-err").appendChild(document.createTextNode("CVV must includes only digits."))
                }
                break
            
        }
    }
   }
   return result;
}

// function for display additional inputs depends on other inputs
function displayInputs() {
    const deliveryAddress = document.getElementById("delivery-address-label")
    const deliveryAddressErr = document.getElementById("delivery-address-err")
    const deliveryInputs = document.getElementById("delivery-address-inputs")
    const sameAddr = document.getElementById("same-addr-label")
    deliveryInputs.style.transition = "0.2s ease-in-out"
    sameAddr.style.transition = "0.2s ease-in-out"

    const cardDetails = document.getElementById("card-details")
    cardDetails.style.transition = "0.2s ease-in-out"


    const delivery = document.getElementById("delivery")
    const card = document.getElementById("card")
    const pickup = document.getElementById("pickup")
    const cash = document.getElementById("cash")

    
    if(delivery.checked) {
        deliveryInputs.style.display = "block"
        sameAddr.style.display = "block"
        deliveryInputs.style.opacity = "1"
        sameAddr.style.opacity = "1"
    } else {
        deliveryInputs.style.display = "none"
        deliveryInputs.style.opacity = "0"
        sameAddr.style.display = "none"
        sameAddr.style.opacity = "0"
    }

    
    if(card.checked) {
        cardDetails.style.display = "block"
        cardDetails.style.opacity = "1"
    } else {
        cardDetails.style.display = "none"
        cardDetails.style.opacity = "0"
    }

    const sameAddrBox = document.getElementById("same-addr")
    sameAddrBox.addEventListener("click", () => {
        if(sameAddrBox.checked) {
            document.getElementById("billing-address").value = document.getElementById("delivery-address").value 
            document.getElementById("billing-postcode").value = document.getElementById("delivery-postcode").value 
        }
    })

    const deliveryAddressInput = document.getElementById("delivery-address")
    const billingAddressInput = document.getElementById("billing-address")
    const deliveryPost = document.getElementById("delivery-postcode")
    const billingPost = document.getElementById("billing-postcode")
    deliveryAddressInput.addEventListener("change", (e)=>{
        if(sameAddrBox.checked) billingAddressInput.value = e.target.value
    })
    deliveryPost.addEventListener("change", (e)=>{
        if(sameAddrBox.checked) billingPost.value = e.target.value
    })

    function updateOrderType() {
        if(delivery.checked) {
            deliveryInputs.style.display = "block"
            sameAddr.style.display = "block"
            setTimeout(()=>{
                deliveryInputs.style.opacity = "1"
                sameAddr.style.opacity = "1"
            },100)
        } else {
            deliveryInputs.style.display = "none"
            deliveryInputs.style.opacity = "0"
            sameAddr.style.display = "none"
            sameAddr.style.opacity = "0"
        }
    }

    function updatePaymentMethod() {
        if(card.checked) {
            cardDetails.style.display = "block"
            setTimeout(()=>{
                cardDetails.style.opacity = "1"
            },100)
        } else {
            cardDetails.style.display = "none"
            cardDetails.style.opacity = "0"
        }
    }

    delivery.addEventListener("click", () => {
        updateOrderType()
    })
    card.addEventListener("click", () => {
        updatePaymentMethod()
    })
    pickup.addEventListener("click", () => {
        updateOrderType()
    })
    cash.addEventListener("click", () => {
        updatePaymentMethod()
    })
}

displayInputs()