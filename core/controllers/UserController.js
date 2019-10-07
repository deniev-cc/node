module.exports = (app) => {

    const { axios } = app.libs
    const UserModel = app.models.Student

    class UserController
    {
        all(req, res)
        {
            
        }

        one()
        {

        }

        update()
        {

        }

        delete()
        {

        }
    }

    return new UserController(app)

}