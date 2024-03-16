const Todolist = [{name : 'make dinner', duedate: '2024-03-22'},
{name : 'wash dishes', duedate: '2024-04-24'}];


renderTodo();


function renderTodo() {
    let todoHTML = '';
    


    for (let i = 0; i < Todolist.length; i++ ){
        const todoObject = Todolist[i];
        const { name}  = todoObject;
        const { duedate } = todoObject;

        const html = `
         <div>${name}</div>
         <div>${duedate}</div>
        <button onclick="Todolist.splice(${i}, 1);
        renderTodo();
        " class="del-btn">DELETE</button>`;

        todoHTML += html;
    }
  

    document.querySelector('.cont').innerHTML = todoHTML;
}

function addtodo() {
    const inele = document.querySelector('.input-ele');
    const name = inele.value;

    const dateinp = document.querySelector('.date-inp');
    const duedate = dateinp.value;

    Todolist.push({
        name: name, duedate: duedate
    });
  

    inele.value = '';
   
    renderTodo();
    


}