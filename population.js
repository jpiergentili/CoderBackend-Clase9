import mongoose from "mongoose";
import courseModel from "./models/course.model.js";
import studentModel from "./models/student.model.js";

const uri = 'mongodb+srv://javypier1:Q1w2e3r4@jp-backend-coder01.bavi18s.mongodb.net/'

const main = async () =>{
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

/*     await studentModel.create({
        first_name: 'Javier',
        last_name: 'Piergentili'
    }) */
    
/*     await courseModel.create({
        title: 'ReactJS',
        description: 'Frontend developer with ReactJS',
        difficulty: 4,
        proffessor: 'Alex Marin'
    }) */

/*     //almaceno en memoria el estudiante que traigo de la base de datos
    const student = await studentModel.findOne({_id:'6467d2fc2326d4d04fea68a0'}) //id del estudiante

    //accedo a la prop courses del estudiante y le pusheo el curso cuyo array saco de la DB
    student.courses.push({course: '6467d54bca2ddca363ba8ed6'}) //id del curso

    //actualizo en la DB el estudiante con las modificaciones que se hicieron en memoria
    const result = await studentModel.updateOne({_id:'6467d2fc2326d4d04fea68a0'}, student) */

    const student = await studentModel.findOne({_id:'6467d2fc2326d4d04fea68a0'})
    console.log(JSON.stringify(student, null, '\t'));
}

main()