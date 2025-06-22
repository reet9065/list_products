// src/utils/email.js
// Stub implementation - would be replaced with EmailJS
export const sendEnquiryEmail = (userEmail, itemDetails, imageUrl) => {
  console.log('Sending enquiry email:');
  console.log('User Email:', userEmail);
  console.log('Item Details:', itemDetails);
  console.log('Image URL:', imageUrl);
  
  // In a real implementation:
  // return emailjs.send(...)
  
  return Promise.resolve();
};