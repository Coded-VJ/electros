# electros
# Electros – Indian Consumer Electronics Store

**A Full-Flow Consumer Electronics E-Commerce Web Application**

Electros is a web-based consumer electronics storefront developed using HTML, Tailwind CSS, and Vanilla JavaScript. Inspired by modern Indian D2C electronics brands like Noise, it brings product discovery, side-by-side device comparison, wishlist management, login-gated checkout, payment simulation, and end-to-end order tracking together on a single platform.

## Live Demo

* **GitHub Pages URL:** `https://coded-vj.github.io/electros/`

## Features

* **Product Catalog & Discovery:** Browse 30 electronics products across 6 categories (Smartwatches, Earbuds, Headphones, Monitors, Laptop Accessories, and Mobile Accessories) priced in ₹ (INR).
* **Search, Filters & Color Variants:** Search products in real time, filter by category, check live stock availability badges (*In Stock*, *Low Stock*, *Out of Stock*), and switch color options.
* **Side-by-Side Device Comparison:** Select up to 3 devices to compare specifications, pricing, stock status, and finishes in a structured comparison table.
* **User Authentication:** Simulated Indian mobile number (+91) OTP login and demo sign-in with persistent session management via `localStorage`.
* **Volts (Wishlist):** Save favorite gadgets using custom Volt lightning toggles and manage saved items from the account dashboard.
* **Shopping Cart & Warranty Add-Ons:** Add or update items in a slide-out cart drawer with optional extended warranty/accidental damage protection and automatic 18% GST calculation.
* **Login-Gated Checkout & Payment Simulation:** Restricts payment to signed-in users via a sign-in prompt, supports promotional discount codes, and simulates UPI (with a realistic QR code interface), Card, and Cash on Delivery (COD) payments without real transactions.
* **Order History & End-to-End Tracking:** View past orders, reorder items, and track shipments across a 5-stage delivery timeline (*Order Confirmed* to *Delivered*).
* **Verified Buyer Reviews:** Restricts product reviews exclusively to customers who have purchased that specific item.
* **Customer Support & UML Documentation:** Raise support/warranty tickets linked to past orders and inspect system architecture diagrams in `DIAGRAMS.md`.

## Technologies Used

* HTML5
* Tailwind CSS
* JavaScript (ES6+)
* Browser `localStorage` (Client-Side Persistence)
* GitHub Pages (Hosting)

## Project Structure

```text
your-repo-name/
│
├── index.html          # Main storefront, category filters, compare & quick-view
├── login.html          # User authentication (+91 OTP & demo login)
├── checkout.html       # Shipping details, warranty add-ons, login gate & UPI QR payment
├── profile.html        # User account dashboard (My Orders, My Volts, My Reviews)
├── support.html        # End-to-end order tracking & customer support tickets
├── data.js             # Product catalog dataset (30 items across 6 categories)
├── DIAGRAMS.md         # Use-Case, Sequence, State Machine, Activity & Class diagrams
└── README.md           # Project documentation
``` 

## Installation and Setup 
  
1. Clone this repository:
```text
git clone [https://github.com/](https://github.com/)<https://coded-vj.github.io/electros/>.git
```
2.Open the project directory:
```text
cd <electros>
```
3.Launch the application in your browser:
Double-click index.html to open it directly in any web browser, or
Open the folder in VS Code and click Go Live 

## Important Notes
This is an academic project developed as part of the Software Development Fundamentals (SDF) course.

OTP verification, UPI QR scanning, payment processing, and delivery stage progression are simulated for demonstration purposes.

Product listings, pricing, stock counts, and offers use demonstration data.

No real financial or payment transactions are processed.

## Developed By


Vaishnavi J

B.Tech – Mathematics and Computing

