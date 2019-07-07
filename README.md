# Meat Service

Based on this [course](https://www.udemy.com/nodejs-rest-pt/learn/lecture/9815628#overview)

* Create JS files and keep watching for need modifications
```
tsc -w
```

## Endpoints

* Get All Users
```
curl -X GET \
  http://localhost:3000/users \
  -H 'Accept: */*' 
```

* Get User by Id
```
curl -X GET \
  http://localhost:3000/users/:id \
  -H 'Accept: */*' 
```

* Partial Update of Users
```
curl -X PATCH \
  http://localhost:3000/users/:id \
  -H 'Accept: */*' \
  -H 'Content-Type: application/merge-patch+json' \
  -d 
  '{
    "name": "Peter Benjamin Parker"
   }'
```