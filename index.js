const server = require("./server.js");
const accountsRouter = require("./accounts/accountsRouter");

const PORT = process.env.PORT || 4000;

server.use("/api/accounts", accountsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong."
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
