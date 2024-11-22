const todos = [
    {
        id: 1,
        text: 'Learn HTML'
    },
    {
        id: 2,
        text: 'Learn CSS'
    },
    {
        id: 3,
        text: 'Learn JavaScript'
    },
]

const renderedTodos = todos.map((todo) => {
    return `<li>${todo.text}</li>`
}).join('');



document.querySelector('.todos_elements').innerHTML = renderedTodos;