import express, {type Request,type Response } from 'express';
const app = express();


const replicaApp = process.env.APP_NAME;

app.get("/", (req: Request, res: Response) => {
    
    return res.json({ message: `Nginx is on the way ? in ${replicaApp}` });
    
})


app.listen(4000, () => {
    console.log(`Srever of ${replicaApp} is runnning at port: 4000`)
})