# 🛍️ Item Listing Web App



## 🚀 Live Demo

👉 [Click here to view the live project](https://list-products-lac.vercel.app/)

## 📸 Enquiry Email Screenshot

Here’s an example of the enquiry email sent using **EmailJS**:

![EmailJS Enquiry Email Screenshot](https://raw.githubusercontent.com/reet9065/list_products/refs/heads/main/src/assets/Emailtemplate_screenshot.jpeg)

## 📂 Project Features

### ✅ Core Features

- **Add Item Page**
  - A form to add new items with the following fields:
    - Item Name
    - Item Type (e.g., Shirt, Pant, Shoes, Sports Gear, etc.)
    - Item Description
    - Item Cover Image
    - Additional Images
  - Displays a success message on successful addition.

- **View Items Page**
  - Displays all items with their name and cover image.
  - Clickable items open a detailed modal view.

- **Item Detail Modal**
  - Shows full description
  - Displays images in a carousel
  - Includes an "Enquire" button to send an email

### ⭐ Bonus Features Implemented

- ✅ **Email Integration using [EmailJS](https://www.emailjs.com/)**  
  On clicking **"Enquire"**, an email is sent with the product name and user's email directly — no backend needed.


## 📦 Tech Stack

- **Frontend**: React (Vite)
- **Email**: [EmailJS](https://emailjs.com)
- **Deployment**: [Vercel](https://vercel.com)


## 🛠 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/reet9065/list_products.git
   cd list_products
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Visit: `http://localhost:5173`

## 📧 Email Enquiry Implementation (via EmailJS)

Used **EmailJS** to send enquiry emails from the frontend only.

* When the user clicks on **"Enquire"**, they are asked for their email.
* An email is sent to a predefined static email address with:

  * User’s email
  * Product name

> ✅ No backend needed — fully handled on the client using EmailJS.
