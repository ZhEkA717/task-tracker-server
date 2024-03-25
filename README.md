# CRUD API NodeJS 
## MINI TASK TRACKER
### Endpoint `tasks`:
- **GET** `/tasks` is used to get all tasks
    - Server should answer with `status code` **200** and all tasks records
- **GET** `tasks/{taskId}` 
    - Server should answer with `status code` **200** and record with `id === taskId` if it exists
    - Server should answer with `status code` **400** and corresponding message if `taskId` is invalid (not `uuid`)
    - Server should answer with `status code` **404** and corresponding message if record with `id === taskId` doesn't exist
- **POST** `/tasks` is used to create record about new task and store it in database
    - Server should answer with `status code` **201** and newly created record
- **PUT** `/tasks/{taskId}` is used to update existing user
    - Server should answer with` status code` **200** and updated record
    - Server should answer with` status code` **400** and corresponding message if `taskId` is invalid (not `uuid`)
    - Server should answer with` status code` **404** and corresponding message if record with `id === taskId` doesn't exist
- **DELETE** `/tasks/{taskId}` is used to delete existing task from database
    - Server should answer with `status code` **204** if the record is found and deleted
    - Server should answer with `status code` **400** and corresponding message if `taskId` is invalid (not `uuid`)
    - Server should answer with `status code` **404** and corresponding message if record with `id === taskId` doesn't exist

## Start server
### To run in development mode
- npm run start:dev
### To run run in production mode
- npm run start:prod