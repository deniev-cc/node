module.exports = (app) => {

    class Student
    {
        all()
        {
            return [1,2,3]
        }    
    }

    return new Student(app)
}