const express = require("express");

const router = express.Router();
const CrudController= require("../controller/CrudController")

// invoice & payment

router.post("/create",CrudController.Create);
router.get("/read",CrudController.Read);
router.get("/readById/:id",CrudController.ReadByID);
router.post("/update/:id",CrudController.Update);
router.get("/delete/:id",CrudController.Delete);

module.exports = router;