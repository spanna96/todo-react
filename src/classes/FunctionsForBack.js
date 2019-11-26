export const getTodos = async () => 
fetch('http://localhost:3001/todos/get-todos')
.then(response => response.json())

export async function addingToArr(item) {
    let response = await fetch('http://localhost:3001/todos/add-todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item)
      });

    let text = await response.json(); // прочитать тело ответа как текст
    return text;
};

export async function deleteEl(item) {
    let response = await fetch('http://localhost:3001/todos/delete-todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item),
      });

    let index =  await response.json(); 
    return index;
};

export async function updateEl(item){
    let response = await fetch('http://localhost:3001/todos/update-todo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(item),
      });

    let index =  await response.json(); 

   
};