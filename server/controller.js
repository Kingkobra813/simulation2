module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get("db");

        dbInstance
            .get_houses()
            .then(houses => {
                res.status(200).send(houses);
            })
            .catch(err => res.status(500).send(err));
    },

    makeHome: (req, res) => {
        const dbInstance = req.app.get("db")
        const { name, address, city, state, zip } = req.body;
        console.log(req.body)
        dbInstance
            .make_home([name, address, city, state, zip])
            .then(home => {
                res.status(200).send(home)
            })
            .catch(err => {
                console.log("error in", err);
                res.status(500).send(err);
            });
    },

    deleteHome: (req, res) => {
        const dbInstance = req.app.get("db")
        const { id } = req.params

        dbInstance.delete_home([id]).then(home => {
            res.status(200).send("deleted");
        });
    },
}