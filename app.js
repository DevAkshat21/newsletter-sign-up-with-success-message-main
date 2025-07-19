document.addEventListener('DOMContentLoaded', () => {
  const signup = document.getElementById('sign-up');
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const confirmation = document.getElementById('conformation-message');

  if (!form || !emailInput || !signup || !confirmation || !errorMessage) {
    console.error("Missing elements in the DOM");
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!isValid) {
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = 'red';
    } else {
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = 'var(--primary-color)';
      signup.style.display = 'none';
      confirmation.style.display = 'block';
    }
  });
});
