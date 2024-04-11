# Ghar.com

"Ghar.com" simplifies property transactions by allowing builders to list properties for rent/sale and users to express interest by submitting a token amount. It's a seamless platform ensuring transparency and efficiency for both parties involved in the process.

## Installation steps

- clone the repository

  ```bash
    git clone https://github.com/dhruv-p-prajapati/Ghar.com
  ```

### Client (React App)

- Install dependencies

  ```bash
    npm install
  ```

- Start the React app

  ```bash
    npm run dev
  ```

### Server (JSON-Server)

- Navigate to the server directory:

  ```bash
    cd ./server
  ```

- Install dependencies

  ```bash
    npm install
  ```

- Start the JSON-Server

  ```bash
    npm start
  ```

## Functionalities

### Normal User

- Login and Registration: Users can access their accounts by logging in or register for a new account if they're new to the platform.

- View Listings: Users have the ability to explore all available property listings featured on the platform.

- Individual Property Page: Detailed information about each property, including descriptions, images, prices, and amenities, is accessible to users on individual property pages.

- Saved Property: Users can personalize their experience by adding properties to their saved list, viewing their saved properties, and removing properties from their saved list. This feature requires user to be logged in.

- Profile: Each user has a dedicated profile page where they can view and manage their personal information. This includes the ability to read and update their profile details. This feature requires user to be logged in.

- Rent/Buy Property: Users can express their interest in renting or buying a property by submitting a request form for the desired property by giving token amount decided by builder. This feature requires user to be logged in.

- Currently Own Property: Users can monitor the status of their property requests, including pending, rejected, or accepted statuses, for properties they've expressed interest in renting or buying. This feature requires user to be logged in.

### Builder

- Login and Registration: builder can log in to their accounts or register for a new account if they're new to the platform.

- Property CRUD : Builders can list their properties for rent or sale, including property details, images, pricing, etc. and can also read, update and delete their own property listing.

- Manage Applications: Builders can view all applications submitted by users for their listed properties and take action on each application such as accept or reject request.

- Profile: Each builder has a dedicated profile page where they can view and manage their personal information. This includes the ability to read and update their profile details.

### Admin

- Property verification: Admin can view all property listings and mark properties as verified or unverified.
- Property Management: Admin can view and delete property of any builders.
- User Accounts: Admin can view and delete users.
- User/Builder Queries: Admin can view all the queries submitted by users/builders.
