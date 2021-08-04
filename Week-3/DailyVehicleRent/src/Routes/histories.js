const historyRouter = require("express").Router();

const historyController = require("../Controllers/histories");

historyRouter.post("/", historyController.addNewHistory);
historyRouter.get("/", historyController.getAllHistories);
historyRouter.get("/:id", historyController.getHistoryById);
historyRouter.patch("/", historyController.updateHistoryStatus);
historyRouter.delete("/", historyController.deleteHistory);
module.exports = historyRouter;