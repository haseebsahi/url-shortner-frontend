# URL Shortener Frontend

This is the frontend application for the URL shortener project built using Angular. It allows users to shorten long URLs and track their usage.

## Features

- **Shorten URLs**: Users can enter a long URL and receive a shortened version.
- **View Analytics**: Users can see how many times their shortened URLs have been accessed.
- **Redirection**: Users can click on a shortened URL to be redirected to the original URL.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Angular CLI (version 17 or higher)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:

   ```
   cd url-shortener/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
ng serve
```

The application will be available at `http://localhost:4200`.

### API Integration

The frontend communicates with the backend API. Ensure that the backend server is running and accessible. The API endpoints used are:

- `POST /shorten`: To shorten a long URL.
- `GET /:shortId`: To redirect to the original URL.
- `GET /analytics/:shortId`: To fetch the analytics for a shortened URL.

### Building for Production

To build the application for production, run:

```
ng build --prod
```

The output will be in the `dist/` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
