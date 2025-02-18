This is a Node.js + Express API for managing users, patients, and heart rate data. It allows user registration, login, patient management, and heart rate tracking.
Setup & Run Instructions

1️⃣ Prerequisites

Install Node.js (v14+ recommended)

Install MongoDB and ensure it is running locally or use MongoDB Atlas

Create a .env file in the project root and add

 Assumptions & Decisions

No authentication system, only basic email-password validation.

Patients do not have user accounts.

MongoDB is used for data persistence.


 Other Information

Frameworks/Libraries Used:

Express.js (API framework)

Mongoose (MongoDB ORM)

dotenv (Environment variables)

bcryptjs (Password hashing)

Error Handling:

400 for missing/invalid input

401 for authentication failures

500 for server errors
