Todo App (Backend)

## Run app
```
git clone https://github.com/Prakhar301101/CRUD-Todo.git
cd CRUD-api
npm install

Replace process.env.PORT in the index.js file with your desired PORT 
Replace process.env.MONGODB_URL in the index.js file with your mongoDb cluster link 

```

### Endpoints 

#### Task Services

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|http://localhost:8000/api/tasks | Create new Task |
|`GET`|http://localhost:8000/api/tasks | Get all Tasks |
|`GET`|http://localhost:8000/api/tasks/{taskId} | Get Task by Id |
|`PUT`|http://localhost:8000/api/tasks/{taskId} | Update Task by Id |
|`DELETE`|http://localhost:8000/api/tasks/{taskId} | Delete Task by Id |