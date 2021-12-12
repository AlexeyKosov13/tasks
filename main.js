let tasks =  {
    id: 123,
    title: 'задача 3',
    text: 'Delectus minima aspernatur animi possimus vel optio. Deserunt dolore amet laudantium veniam, explicabo itaque tempora soluta quasi!',
};

(function getTasks(arr) {
    let task = document.createElement('div');
    task.classList.add('task');

    let title = document.createElement('h2');
    title.textContent = arr.id;
    title.classList.add('task_title');

    let text = document.createElement('p');
    text.textContent = arr.text;
    text.classList.add('task_text');
    //console.log(title);

    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'Delete';
    btn.classList.add('btn_del');
    let body = document.querySelector('.container_tasks');
    let task_block = body.appendChild(task);
    task_block.appendChild(title);
    task_block.appendChild(text);
    task_block.appendChild(btn);

    let form = document.querySelector('.form_tasks');
    let taskget = document.querySelectorAll('.task');
//=================================

    let addTask = function(form){
        let task = document.createElement('div');
    task.classList.add('task');

    let title = document.createElement('h2');
    title.textContent = form[0].value;
    title.classList.add('task_title');

    let text = document.createElement('p');
    text.textContent = form[1].value;
    text.classList.add('task_text');
    console.log(title);

    let btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'Delete';
    btn.classList.add('btn_del');
    let body = document.querySelector('.container_tasks');
    let task_block = body.appendChild(task);
    task_block.appendChild(title);
    task_block.appendChild(text);
    task_block.appendChild(btn);
    }
    
    let titleUser = document.querySelector('#title').value;
    console.log(titleUser);
    let textUser  = document.querySelector('#text').value;
    let submit = document.querySelector('.btn_subm');
    submit.addEventListener('click', () => {
        addTask(form);
    });

    btn.addEventListener('click', () => {
        taskget[1].parentNode.removeChild(taskget[1]);
    })
   
    

}(tasks))