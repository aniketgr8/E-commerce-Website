function paymentSuccessful(e){
    e.preventDefault();
    alert("Payment Successful! Redirecting to Shop...")
    window.location.replace("./project.html");
}