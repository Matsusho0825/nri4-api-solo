const { setupExpressServer } = require("./server");

const PORT = 3000;
const app = setupExpressServer();
console.log(PORT);
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
