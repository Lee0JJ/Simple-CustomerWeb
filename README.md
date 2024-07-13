## Prerequisites

Before you begin, ensure you have the following installed:

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js and npm](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (or another supported database)

## Backend Setup

1. Navigate to the /WebAPI directory: `cd WebAPI`
2. Restore NuGet packages: `dotnet restore`
3. Update the appsettings.json file with your database connection string

"ConnectionStrings": {
  "DefaultConnection": "YourConnectionStringHere"
}

4. Apply migrations and update the database: `dotnet ef database update`
5. Run the backend server: `dotnet run`

## Frontend Setup

1. Navigate to the react-ui directory: `cd client`
2. Install npm packages: `npm install`
3. Start the React development server: `npm start`

## Running the Application

1. The .NET Core API server will be running on https://localhost:5118
2. The React frontend will be running on http://localhost:3000.