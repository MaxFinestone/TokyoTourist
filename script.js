function SendMail() {
  // Get input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email_id").value;
  var message = document.getElementById("message").value;

  // Check if any of the required fields is empty
  if (fullName === "" || email === "" || message === "") {
    alert("Please fill out all required fields.");
    return; // Exit the function and prevent email sending
  }

  // Prepare parameters for sending the email
  var params = {
    from_name: fullName,
    email_id: email,
    message: message,
  };

  // Send the email (you can add your email sending logic here)
  emailjs.send("service_c89586e", "template_b70rlc8", params);

  // Clear the input fields
  document.getElementById("fullName").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";

  alert("Email sent successfully!");
}

