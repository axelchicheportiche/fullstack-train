const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

router.post("");

router.post("/", stuffCtrl.createThings);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/:id", stuffCtrl.getOneThing);
router.get("/", stuffCtrl.getAllThing);

module.exports = router;
