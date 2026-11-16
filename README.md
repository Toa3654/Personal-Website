# Cannon Rivera Personal Website

A full-stack personal portfolio and service-booking website built with React, TypeScript, Spring Boot, and MongoDB.

This project was created to showcase my software development skills, professional background, certifications, drone services, and web development services while also functioning as a real application with user accounts, bookings, contact forms, profile management, email functionality, and payment integration.

## Features

### Personal Portfolio

The website includes information about my education, certifications, skills, and professional interests.

It includes dedicated pages for:

- About Me
- Academics
- Certifications
- Services
- Drone Services
- Drone Learning
- Website Building
- Booking
- User Profile

### User Authentication

Users can create an account and log in to the website.

Authentication includes:

- User registration
- User login
- User logout
- Session-based authentication
- Logged-in navigation
- Protected booking functionality
- User profile access

The backend uses Spring Boot sessions so user authentication is not handled only by the frontend.

### User Profiles

Logged-in users can view and manage their profile information.

Profile information includes:

- First name
- Last name
- Email
- Phone number

Users can edit their information directly from the profile page.

### Service Booking System

Logged-in users can book services directly through the website.

Available services include:

- Hunting Recovery
- Drone Learning
- Real Estate Photography
- Website Building

Booking information includes:

- Selected service
- Date
- Preferred time
- Customer information
- Additional information
- Payment status

The booking system uses React DatePicker to prevent users from selecting past dates.

User information such as name, email, and phone number is automatically pulled from the logged-in user's account.

### Payment Integration

The application integrates with the Square Payments API.

Square Sandbox is used during development so payments can be tested without processing real money.

The payment system includes:

- Square Web Payments integration
- Secure server-side payment processing
- Sandbox testing
- Payment status tracking
- Square payment IDs
- Backend-controlled pricing

Payment credentials are stored on the backend rather than exposed through React.

### Contact Form

The website includes a contact form that allows visitors to submit:

- Name
- Email
- Phone number
- Message

Contact submissions are saved to MongoDB.

The backend can also send email notifications when a contact form is submitted.

### Email Integration

Spring Boot Mail is used to send emails through SMTP.

Email functionality can be used for:

- Contact form notifications
- Booking confirmations
- Payment confirmations
- Future booking updates

### MongoDB Database

MongoDB is used to store application data.

Collections include:

- Users
- Bookings
- Contacts

MongoDB repositories are implemented using Spring Data MongoDB.

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- React DatePicker
- HTML
- CSS
- Fetch API

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Spring Boot Mail
- REST APIs
- HTTP Sessions

### Database

- MongoDB

### External Services

- Square Payments API
- Gmail SMTP

## Project Architecture

```text
React Frontend
        |
        | HTTP Requests
        |
        v
Spring Boot REST API
        |
        +---- User Service
        |
        +---- Booking Service
        |
        +---- Contact Service
        |
        +---- Payment Service
        |
        +---- Email Service
        |
        v
MongoDB

Spring Boot
        |
        +---- Square Payments API
        |
        +---- SMTP Email Server
```

## Backend Structure

```text
src/main/java/com/example/websitebackend/

config/
    SquareConfig.java

controllers/
    UserController.java
    BookingController.java
    ContactController.java
    PaymentController.java

models/
    User.java
    Booking.java
    Contact.java

models/enums/
    Services.java
    PaymentStatus.java

repositories/
    UserRepository.java
    BookingRepository.java
    ContactRepository.java

services/
    UserService.java
    BookingService.java
    ContactService.java
    PaymentService.java
    EmailService.java
```

## Frontend Structure

```text
src/

assets/

components/
    Navbar.tsx
    Footer.tsx

pages/
    Home.tsx
    About.tsx
    Academics.tsx
    Certificates.tsx
    Services.tsx
    Booking.tsx
    Login.tsx
    Signup.tsx
    Profile.tsx
    DroneLearning.tsx
    WebsiteBuilding.tsx

services/
    bookingService.ts
    contactService.ts
    UpdateProfile.ts

styles/

App.tsx
```

## API Examples

### Create User

```http
POST /personalwebsite/users/add
```

### Login

```http
POST /personalwebsite/users/login
```

### Current Session

```http
GET /personalwebsite/users/session/current
```

### Logout

```http
POST /personalwebsite/users/logout
```

### Create Booking

```http
POST /personalwebsite/bookings/add
```

### Get Bookings By Email

```http
GET /personalwebsite/bookings/email/{email}
```

### Submit Contact Form

```http
POST /personalwebsite/contacts/add
```

### Create Payment

```http
POST /personalwebsite/payments/create
```

## Environment Variables

Sensitive credentials should not be committed to GitHub.

The backend uses environment variables for services such as Square and email.

Example:

```properties
square.access-token=${SQUARE_ACCESS_TOKEN}
square.location-id=${SQUARE_LOCATION_ID}

spring.mail.username=${MAIL_USERNAME}
spring.mail.password=${MAIL_PASSWORD}
```

The frontend can use non-secret Square values through Vite environment variables.

Example:

```text
VITE_SQUARE_APP_ID=your_square_application_id
VITE_SQUARE_LOCATION_ID=your_square_location_id
```

## Running the Project

### Backend

Make sure MongoDB is running locally.

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Frontend

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Future Improvements

Planned or possible future improvements include:

- Admin dashboard
- User booking history
- Booking cancellation and rescheduling
- Service availability checking
- Role-based authorization
- Portfolio project management
- Image uploads
- Revenue analytics
- Booking status notifications
- Improved payment workflow
- Production deployment

## Purpose

The purpose of this project is to demonstrate full-stack development skills through a real-world application.

The project demonstrates experience with:

- Frontend development
- Backend development
- REST API design
- Database integration
- Authentication
- Session management
- CRUD operations
- Third-party API integration
- Payment processing
- Email services
- Form validation
- Application architecture
- User account management

## Author

**Cannon Rivera**

Software Development

Associate of Applied Science in Software Development  
Indian Hills Community College

Bachelor's Degree in Software Development  
Bellevue University

Certifications include:

- AWS Certified Cloud Practitioner
- FAA Part 107 Remote Pilot Certificate
- Private Pesticide Applicator Certification
