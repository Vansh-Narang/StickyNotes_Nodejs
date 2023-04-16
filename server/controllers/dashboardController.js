exports.dashboard = async (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Dashboard of our App"
    };
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    })
    //index file rendering which is in views folder
}