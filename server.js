import express from "express"
import { handler } from "./build/handler.js"
import path from 'path';

const app = express();
const port = 3000;

// const __dirname = path.resolve();
// const projectRoot = path.resolve(__dirname);
// console.log('프로젝트 루트 디렉토리:', projectRoot);

app.use(handler);
// app.use('/src', express.static(path.join(__dirname, 'src')));



// app.get("/expressroute" , (req,res) => {
//     res.send("This's an express route!");
// });

app.listen(port, () => {
    console.log(`server open ${port}`);
});


