# Patient Management System

A full-stack Patient Management System developed using Angular and ASP.NET Core Web API.

## Technologies

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core

### Database
- SQL Server

### Authentication
- JWT Authentication
- Angular Route Guard
- HTTP Interceptor

## Features

- User Login
- JWT Authentication
- Logout
- Authorization
- Protected Routes
- Patient Management
- Create Patient
- View Patients
- Edit Patient
- Delete Patient
- REST API Integration
- SQL Server Integration

## Patient CRUD

The application supports complete CRUD operations:

1. Create a patient
2. View patient list
3. Edit patient details
4. Delete a patient

## Authentication Flow

The application uses JWT authentication.

Login:

Angular Login
     ↓
ASP.NET Core Login API
     ↓
JWT Token
     ↓
Angular stores token
     ↓
HTTP Interceptor
     ↓
Authorization Header
     ↓
Protected API

## Application Architecture

Angular
   ↓
ASP.NET Core Web API
   ↓
Entity Framework Core
   ↓
SQL Server

## API Endpoints

### Authentication

POST `/api/Auth/login`

### Patients

GET `/api/Patients`

GET `/api/Patients/{id}`

POST `/api/Patients`

PUT `/api/Patients/{id}`

DELETE `/api/Patients/{id}`

## Key Angular Concepts Used

- Components
- Services
- Dependency Injection
- Routing
- Route Guards
- Template-driven Forms
- HTTP Client
- HTTP Interceptor
- API Integration
- TypeScript

## Key .NET Concepts Used

- ASP.NET Core Web API
- Controllers
- Dependency Injection
- Entity Framework Core
- LINQ
- REST APIs
- JWT Authentication
- Authorization
- HTTP Status Codes
- SQL Server


