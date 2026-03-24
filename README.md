# URL Shortener (CodeAlpha Task 1)

## 🚀 Features

- Shorten long URLs
- Generate unique short codes
- Redirect using short URL
- MongoDB database integration

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## 📦 Installation

1. Clone the repository:

```
git clone https://github.com/Shadaatamer/CodeAlpha_URLShortener.git
```

2. Install dependencies:

```
npm install
```

3. Create a `config.env` file in the root folder:

```
DATABASE=your_mongodb_connection_string
PORT=3000
```

4. Run the server:

```
npm start
```

## 📌 API Endpoints

### Create Short URL

- **POST** `/`
- Body:

```
{
  "originalUrl": "https://example.com"
}
```

### Redirect

- **GET** `/:code`
- Redirects to the original URL

