# Car Market Web App

Welcome to the Car Market web application! This project allows users to buy, sell, and explore cars. It's built using modern technologies and follows best practices for authentication, authorization, and database management.
## Live Preview [https://car-eco.vercel.app/Listing-details/27](https://car-hptf07h1w-medhatjachours-projects.vercel.app/)

![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/1.png?raw=true)
![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/2.png?raw=true)
![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/3.png?raw=true)
![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/4.png?raw=true)
![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/5.png?raw=true)

## Features

- **React Components with Shadcn UI:**
  - We've used Shadcn UI components to create a beautiful and consistent user interface. These components are designed to be easily integrated into any React project.
  
- **Routing with React Router:**
  - We've implemented client-side routing using `react-router-dom`. This allows seamless navigation between different views within the app.

- **Image Storage with Firebase:**
  - Car images are stored securely in Firebase Cloud Storage. Firebase provides a reliable and scalable solution for user-generated content like photos or videos.

- **Authentication and Authorization with Clerk:**
  - Clerk is our chosen authentication and user management platform. It offers a complete suite of embeddable UIs, flexible APIs, and admin dashboards. Users can sign up, log in, and manage their profiles using Clerk components.

- **Database Management with Drizzle ORM and Neon Postgres:**
  - We've integrated Drizzle ORM with Neon Postgres, a fully managed serverless Postgres solution. Drizzle ORM natively supports both the Neon serverless driver (over HTTP or WebSockets) and the traditional postgres/pg drivers. You can query the Neon database directly from serverless environments or long-running servers.

## Getting Started

1. **Clone the Repository:**
```bash
git clone https://github.com/medhatjachour/car-eco.git
cd car-eco
```

2. **Install Dependencies:**
```bash
npm install 
```

3. **Set Up Firebase:**
- Create a Firebase project and set up Firebase Authentication and Cloud Storage.
- Add your Firebase configuration to your environment variables.

4. **Set Up Clerk:**
- Sign up for Clerk and configure your Clerk dashboard.
- Add your Clerk API keys to your environment variables.

5. **Set Up Neon Postgres:**
- If using the Neon serverless driver, configure your Neon database URL.
- If using the traditional postgres/pg drivers, use the connection string from your Xata database settings.

6. **Run the App:**
```bash
npm run dev 
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
