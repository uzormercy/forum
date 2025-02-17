const routes = (app) => {
  app.get("/", (req, res) =>
    res.send({ status: 200, message: "Welcome to the FORUM" })
  );

  app.all("*", (req, res) =>
    res.status(404).send({
      status: 404,
      message: "Oops the url has been moved or doesn't exist",
    })
  );
};

export default routes;
