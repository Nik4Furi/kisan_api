# <h1 id="kisan_api"> kisan_api ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/kisan_api) </h1>
### Kisan_api, is a hackthon 2k23 solution, 
#### kisan_api , is a plateform where the farmers, merchants and the lanlorda are communicating each other
- **Farmers** can get the job easily and lease the land from the landlords, and get the equiments or machnary to work with them easily help of the government schemes or merchants.
- **Landlords**, who want to lease their property and want more improvments in their lands
- **Merchants**, who are government certified and supply the machianry equipments to help for the farmers
  So this api is used to mdke simply life of the farmers.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >kisan_api Looka Like</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#apiRef" >API References</a></p>
####   <p><a href="#features" >Features</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/kisan_api?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/kisan_api?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/kisan_api)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/kisan_api?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/kisan_api) 

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/kisan_api)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/kisan_api)

## <h2 id="looks" >kisan_api Looks Like</h2>

### Authentications the users

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/226381650-79f97144-7ff3-46d4-a085-048585a5011e.png" width="400" height="" alt="kisan_api_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/226381715-7b215eaa-10d3-4714-8fac-3b945e3608c0.png" width="500" height="" alt="kisan_api_link"/>  
</p>

<p text-align=left>

  <img src="https://user-images.githubusercontent.com/91304976/226383645-294bbd55-05da-4ed9-a55b-53a707306f57.png" width="400" height="" alt="kisan_api_home"/>  
 
</p>

#### Home and about contents
<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/226497265-eab3262b-5b58-4013-857e-62bf490f5bbe.png" width="400" height="" alt="kisan_api_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/226497274-8e91493d-ead9-4a8f-94e3-e0f6b549d039.png" width="500" height="" alt="kisan_api_link"/>  
</p>



### CRUD Operations of Merchants/Landlords

<p text-align=left>
  <img src="(https://user-images.githubusercontent.com/91304976/226383003-02a52a9b-4fed-4bb3-9eec-4b01798f889b.png" width="400" height="" alt="kisan_api_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/226383028-91da73b5-98b2-471b-ae81-0ff17de1d69b.png" width="500" height="" alt="kisan_api_link"/>  
</p>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/226383257-48ebef75-515a-4804-9391-a9257d0cf9cc.png" width="400" height="" alt="kisan_api_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/226383280-28f68868-c63c-4a92-b8e0-9fa2eed1d0bf.png" width="500" height="" alt="kisan_api_link"/>  
</p>
 
<a href="#kisan_api">Go Home </a>


## <h2 id="stack" >Tech Stack </h2>

**Client:** React, Bootstrap 
**Server:** NodeJS, ExpressJS, MongoDB 

<a href="#kisan_api">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

#### To run this project, you ensure that all basic requirements are indeed into your PC, such as mongodb, and nodejs is already install your PC. 
##### If not plz refer this videos  <a href="https://www.youtube.com/results?search_query=install+node+js+" target="_blank" rel="noopener noreferrer">Install node js</a>,<a href="https://www.youtube.com/results?search_query=install+mongodb" target="_blank" rel="noopener noreferrer">Install mongoDB</a>  ,or you did it yourselves👍.

Clone the project

```bash
  git clone https://github/Nik4Furi/kisan_api
```

Go to the project directory

```bash
  cd kisan_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start (start for only time)

  npm run dev (Run or restart server, whenever you save any file(js))
```

<a href="#kisan_api">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables for basic ideas.Also you can see **.env.example** file for whole idea of environment variables.

Version Configurations
 
`VERSION` = v1

Server Configurations

`PORT` = 8000
`URL` = http://localhost

Database configurations

`DB_URI`   

<a href="#kisan_api">Go Home </a>



## <h2 id="apiRef">API Reference </h2>

### Authentications Reference

#### Register the users

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `POST` | Register the users and providing their roles.like farmers or others |

#### Login the users

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `POST` | Login the register the users |

#### Get the info of login users

```http
  GET /api/auth/getUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | `GET` | **Token is required**.Give the info of the login the users |



### Merchants/Landlords References

#### Adding a new content

```http
  POST /api/files/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `POST` | Add the content by the admin person |


#### Fetch the content which is inserted

```http
  GET /api/files/fetch
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | `GET` | Fetching all the contents |

#### Delete the contents

```http
  DELETE /api/files/delete/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `DELETE` | **id is required**, Deleting the contents |

#### Update  the contents

```http
  PATCH /api/files/update/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `PATCH` | **id is required**, Updating the contents |




## <h2 id="features">Features </h2>

- Farmers easily interact with the landlords and marchants.
- Landlords can find the farmers for providing lease the lands.
- Marchants can sell their mahinary and also help them to work easily.

<a href="#kisan_api">Go Home </a>