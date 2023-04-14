const { lazy } = require("react");

//Get homePage
exports.homePage = async (req, res) => {
    const locals = {
        title: "Notes App",
        description: "Sticky Notes App"
    };
    res.render('index', {
        locals,
        layout: '../views/layouts/frontpage'
    })
    //index file rendering which is in views folder
}
//get about
exports.about = async (req, res) => {
    const locals = {
        title: "About ",
        description: ""
    };
    res.render('about', locals)
    //about file rendering which is in views folder
}