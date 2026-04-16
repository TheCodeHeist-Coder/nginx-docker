import express, {} from 'express';
const app = express();
app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});
app.listen(4000, () => {
    console.log(`Srever is runnning at port: 4000`);
});
//# sourceMappingURL=index.js.map