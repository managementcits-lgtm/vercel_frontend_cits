export const validateCareerForm = (formData) => {
  const fullName = formData.get("full_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const cgpa = formData.get("cgpa");
  const year = formData.get("year_of_passing");
  const skills = formData.get("skills");
  const resume = formData.get("resume");

  // Full name
  if (!fullName || fullName.trim().length < 3) {
    return "Please enter a valid full name (min 3 characters).";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Enter a valid email address.";
  }

  // Phone
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return "Enter a valid 10-digit phone number.";
  }

  // Skills
  if (!skills || skills.trim().length === 0) {
    return "Please enter your skills.";
  }

  // CGPA
  if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    return "CGPA must be between 0 and 10.";
  }

  // Year
  const currentYear = new Date().getFullYear();
  if (year < 1990 || year > currentYear + 1) {
    return "Enter a valid year of passing.";
  }

  // Resume exists
  if (!resume || resume.size === 0) {
    return "Please upload your resume.";
  }

  // Resume type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(resume.type)) {
    return "Upload PDF or DOC/DOCX file only.";
  }

  // Resume size
  if (resume.size > 2 * 1024 * 1024) {
    return "Resume must be under 2MB.";
  }

  // ✅ All validations passed
  return null;
};
