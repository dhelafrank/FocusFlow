const path = require("path");

class RenderModel {
  constructor(app) {
    this.app = app;
  }

  renderView(viewName, data) {
    return (req, res) => {
      res.render(viewName, data);
    };
  }

  initializeRoutes() {
    this.app.get("/", this.renderView("index", { title: "Home" }));
    this.app.get("/auth", this.renderView("auth", { title: "Authentication" }));
    this.app.get("/demo", this.renderView("demo", { title: "Demo Page" }));
    this.app.get("/history", this.renderView("history", { title: "History" }));
    this.app.get("/post", this.renderView("post", { title: "Post" }));
    this.app.get("/profile", this.renderView("profile", { title: "Profile" }));
    this.app.get("/signup", this.renderView("signup", { title: "Signup" }));
    this.app.get("/task-category", this.renderView("task-category", { title: "Task Category" }));
  }
}

module.exports = RenderModel;