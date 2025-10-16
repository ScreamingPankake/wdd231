document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector('#thankyou-message');
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    const { fullName, formEmail, phoneNumber } = savedData;
    message.textContent = `Thank you for contacting us, ${fullName}! We will get back to you at ${formEmail} or ${phoneNumber}.`;
    localStorage.removeItem("formData");
  } else {
    message.textContent = "Thank you for contacting us!";
  }
});