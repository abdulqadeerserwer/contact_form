class UI {
  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert mt-4 ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.contact-info');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 8000);
  }

  clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }
}

// Event Listener submit form
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    phone = document.getElementById('phone').value,
    subject = document.getElementById('subject').value,
    message = document.getElementById('message').value;

  const ui = new UI();

  // Validate
  if (
    name === '' ||
    email === '' ||
    subject === '' ||
    phone === '' ||
    message === ''
  ) {
    // Error alert
    ui.showAlert('Please fill in all fields', 'alert-danger');
  } else {
    // Show success
    ui.showAlert('Thanks for filling out our form!', 'alert-success');

    // Clear fields
    //    ui.clearFields();
  }

  e.preventDefault();
});
