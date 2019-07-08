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

* Create User
```
curl -X POST \
  http://localhost:3000/users \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Tony Stark",
	"email": "tony@marvel.com",
	"password": "jarvis"
}'
```

* Fully Update of Users
```
curl -X PUT \
  http://localhost:3000/users/5d21293cfa9d3e2cb6301e28 \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Diana Prince",
    "email": "diana@dc.com"
}'
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

* Delete one User
```
curl -X DELETE \
  http://localhost:3000/users/5d22444cf2b4ae3fc370b9d9 \
  -H 'Accept: */*' \
```