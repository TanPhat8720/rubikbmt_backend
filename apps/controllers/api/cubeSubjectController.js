var express = require("express");
var router = express.Router();
var CubeSubject = require("./../../entities/cubesubject");
var CubeSubjectService = require("./../../services/cubeSubjectService");
router.post("/addCubeSubject", async function (req, res) {
    var { name } = req.body;
    var cubeSubject = new CubeSubject();
    cubeSubject.name = name;
    var cubeSubjectService = new CubeSubjectService();
    var result = await cubeSubjectService.addCubeSubject(cubeSubject);
    res.json({
        message: "CubeSubject added successfully",
        cubeSubject: result,
    });
});
router.get("/getCubeSubjects", async function (req, res) {
    var cubeSubjectService = new CubeSubjectService();
    var result = await cubeSubjectService.getCubeSubjects();
    res.json({
        message: "CubeSubjects fetched successfully",
        cubeSubjects: result,
    });
});
module.exports = router;