const test_controller = (req ,res) =>{
    try{
        res.status(200).send({
            success:  true,
            message : "Hello World"
        })
    }
    catch(error) {
        res.status(404).send({
            success : false,
            message :"Wrong"
        })
    }
}

module.exports = test_controller;