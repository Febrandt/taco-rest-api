![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

# TACO REST API
Rest Api for "Tabela Brasileira de Composição de Alimentos" - TACO

## DOCUMENTATION

The database used is MariaDB, stored locally. 

## Endpoint: `GET /items/search/:name`

### Description
This endpoint allows users to search for a taco table item by its name. The `name` parameter is passed in the URL.

### Result
The result is a JSON response containing the following fields:

| Field       | Type         | Null | Key | Default | Extra |
|-------------|--------------|------|-----|---------|-------|
| index       | int(11)      | NO   | PRI | NULL    |       |
| name        | varchar(255) | NO   |     | NULL    |       |
| calories    | int(11)      | NO   |     | NULL    |       |
| proteins    | float        | NO   |     | NULL    |       |
| fats        | float        | NO   |     | NULL    |       |
| carbs       | float        | NO   |     | NULL    |       |
| fibers      | float        | YES  |     | 0       |       |
| cholesterol | int(11)      | NO   |     | 0       |       |
| calcium     | int(11)      | NO   |     | 0       |       |
| magnesium   | int(11)      | NO   |     | 0       |       |
| manganese   | float        | YES  |     | 0       |       |
| phosphorus  | int(11)      | YES  |     | 0       |       |
| iron        | float        | YES  |     | 0       |       |
| sodium      | int(11)      | YES  |     | 0       |       |
| potassium   | int(11)      | YES  |     | 0       |       |
| copper      | float        | YES  |     | 0       |       |
| zinc        | float        | YES  |     | 0       |       |
| retinol     | int(11)      | YES  |     | 0       |       |
| thiamine    | float        | YES  |     | 0       |       |
| riboflavin  | float        | YES  |     | 0       |       |
| pyridoxine  | float        | YES  |     | 0       |       |
| niacin      | float        | YES  |     | 0       |       |
| vitamin_c   | float        | YES  |     | 0       |       |

# API Documentation

## Endpoint: `POST /public/create`

### Description
This endpoint allows users to create a new public item by sending the required data in the request body.

### Request

#### Headers
- `Content-Type: application/json`

#### Body Parameters
The request body must be a JSON object containing the following fields:

| Field    | Type         | Null | Key | Default | Extra          |
|----------|--------------|------|-----|---------|----------------|
| index    | int(11)      | NO   | PRI | NULL    | auto_increment |
| name     | varchar(255) | NO   |     | NULL    |                |
| calories | int(11)      | NO   |     | NULL    |                |
| proteins | float        | NO   |     | NULL    |                |
| fats     | float        | NO   |     | NULL    |                |
| carbs    | float        | NO   |     | NULL    |                |
| fibers   | float        | YES  |     | 0       |                |

## Endpoint: `GET /public/search/:name`

### Description
This endpoint allows users to search for a public item by its name. The `name` parameter is passed in the URL.