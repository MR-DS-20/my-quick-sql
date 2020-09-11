# my-quick-sql
A simple Library to help quickly build CRUD applications using Express and MySQL
---
[Link] https://github.com/MR-DS-20/my-quick-sqls
---

## Getting Started

* Create a connection object to be used throughout the app. 

```
import {Connection} from "my-quick-sql";
import { ConnectionConfig } from "mysql";

const creds:ConnectionConfig = {host:'127.0.0.1',port:3306,user:'root',password:"dbpassword!",database:"dbName"}
const connection = new Connection(creds)
```

* Create a Table object that represents a table in your MySQL schema

```
import { Table} from "my-quick-sql";

const exampleTable = new Table(

    "dbName",
    "table_name"

    //dbName and table_name must match MySQL database as they will be used in query string
)
```

* Create query objects

```
import { QueryBuilders} from "my-quick-sql";

const whereClause = new QueryBuilders.Where('field_name','LIKE','"%String to Search%"')

const likeStringQuery = new QueryBuilders.Select(['*'],exampleTable,whereClause)

const selectFieldQuery = new QueryBuiders.Select(['field_name','field_name2'],exampleTable)

```

* Run a Query
```
const result = connection.connect(likeStringQuery.buildQuery(), (err,result)=>{
    if(err){
        
        /**
         * Takes express response object, db engine errror object and otional message, status code. If process.env.ENVIRONMENT set to 'dev'
         * db err object will be returned, otherwise message string will be returned
         */
        functions.errorResponse(res, err, 'Error message string',500)
    }else{
        
        console.log(result)
    }
})
```
