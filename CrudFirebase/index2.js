import {saveTask, saveTaskM, saveTaskE, getTask, getTaskE, getTaskM} from "./firebase2.js";
window.addEventListener("DOMContentLoaded", async (e) => {

    const querySnapshot =  await getTask()
    const querySnapshotE =  await getTaskE()
    const querySnapshotM =  await getTaskM()
    
    querySnapshot.forEach(doc => {
        console.log(doc.data())
    })
    
    querySnapshotE.forEach(doc => {
        console.log(doc.data())
    })

    querySnapshotM.forEach(doc => {
        console.log(doc.data())
    })
    


})

const taskFormC = document.getElementById('taskformC')
const taskFormE = document.getElementById('taskformE')
const taskFormM = document.getElementById('taskformM')

taskFormC.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = taskFormC['taskTitleC']
    const description = taskFormC['taskCDescription']

    saveTask(title.value, description.value)

    taskFormC.reset()

    
})

taskFormE.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = taskFormE['taskNombreE']
    const apellidos = taskFormE['taskEApellidos']

    saveTaskE(nombre.value, apellidos.value)

    taskFormE.reset()

})

taskFormM.addEventListener('submit', (e) => {
    e.preventDefault()

    const IdMatricula = taskFormM['taskIdmatricula']
    const IdEstudiante = taskFormM['taskIdEstudiante']
    const IdClase = taskFormM['taskIdClase']

    saveTaskM(IdMatricula.value, IdEstudiante.value, IdClase.value)

    taskFormM.reset()

    

})