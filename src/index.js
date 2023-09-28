import express from 'express';

const app = express();
app.use(express.json()) 
app.use(express.static(".")) 

import cors from 'cors';
app.use(cors());

app.listen(8080); 


import rootRoutes from './Routes/rootRoutes.js';
app.use("/api",rootRoutes)

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc  from 'swagger-jsdoc';

const options = {
    definition: {
        info: {
            title: "api",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

