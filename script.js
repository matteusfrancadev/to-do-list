const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('.list')

let array = []

const value = () => {
    if (input.value == '' || input.value.length < 3 ) {
        alert('Não foi possível adicionar tarefa')
    }

    else {
        array.push({
            tarefa: input.value,
            concluida: false
        })
        tasks()
        input.value = ('')
    }
}

const tasks = () => {
    let newLi = ''

    array.forEach((task, index) => {

        newLi = newLi + `
        <li class="list-item ${task.concluida && 'done'}" >
            <img src="checked.png" onclick = 'confirmTask(${index})'>
            <p>${task.tarefa}</p>
            <img src="trash.png" onclick = 'deleted(${index})'>
        </li>
        `
    })
    list.innerHTML = newLi

}

const deleted = (index) => {
    array.splice(index , 1) 

    tasks()
}

const confirmTask = (index) => {
    array[index].concluida = !array[index].concluida 
    
    tasks()
}


button.addEventListener('click', value)