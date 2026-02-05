document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your order request has been received. We will contact you shortly.");
  this.reset();
});
