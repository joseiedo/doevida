<p align="center">
    <img width="200" src="./public/doevida-v2.svg" alt="Logo DoeVida">
</p>

This is a Next.js project built with TypeScript, MongoDB, and TailwindCSS.

## Getting Started

1. Create your MongoDB cluster (you can use [Atlas](https://www.mongodb.com/cloud/atlas/register)).
2. Fill the `DATABASE_URI` variable with your MongoDB database URI in the `.env` file.
3. Install the dependencies and run the development server.

```
   npm install
   npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### About the API

This project retrieves data from the gov.br website and utilizes a free cluster from Atlas for database storage. Keep in mind that this API may experience downtime. While it's suitable for study purposes, it's not recommended for production use unless you save the data on your side.

If you want to integrate this API into your project, update `{url}` to https://doevida.vercel.app/.

### Endpoints

#### [GET] List Blood Centers by region

ROUTE: `{url}/api/v1/hemocentros`

EXAMPLE RESPONSE:

```json
[
  {
    "_id": "65749b70558fe0ca135ed7fb",
    "name": "Nordeste",
    "bloodCenters": [
      {
        "name": "Fundação de Hematologia e Hemoterapia da Bahia - HEMOBA",
        "contact": {
          "address": {
            "type": "ADDRESS",
            "content": "Ladeira do Hospital Geral, s/n - 2º andar - Brotas"
          },
          "postalCode": {
            "type": "POSTALCODE",
            "content": "40286-240 - Salvador/BA"
          },
          "phone": {
            "type": "PHONE",
            "content": "(71) 3116-5690"
          },
          "email": {
            "type": "EMAIL",
            "content": "direg.hemoba@hemoba.ba.gov.br"
          }
        }
      }
    ]
  }
]
```
