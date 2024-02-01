const express = require("express");
const auth = require('auth')
const router = express.Router();


const stuffCtrl = require("../controllers/stuff");

router.post("");

router.post("/", auth, stuffCtrl.createThings);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.get("/", auth, stuffCtrl.getAllThing);

module.exports = router;
