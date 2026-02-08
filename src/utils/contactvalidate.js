// utils/validations/contactValidation.js

export const validateContactForm = (data) => {
  const errors = {};

  // Name
  if (!data.name || data.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  // Phone
  const phoneRegex = /^[6-9]\d{9}$/; // India standard
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.phone = "Enter a valid 10-digit phone number";
  }

  // Subject (optional but length check)
  if (data.subject && data.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }

  // Message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};
