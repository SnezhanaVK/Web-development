import './styles.css'
// Получаем ссылки на необходимые элементы
const input = document.getElementById('str');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Функция для добавления нового элемента в список
function addTask() {
    const taskText = input.value;
    if (taskText.trim() === '') {
        alert('Введите текст задачи!');
;
    }

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <label class="container">
            <input type="checkbox" class="Checkbox">
            <label class="text">${taskText}</label>
            <input class="styled" type="button" value="X" onclick="deleteTask(this)">
            <input class="edit-button" type="button" value="Edit" onclick="editTask(this)">
            <br><label class="data"><sub>${new Date().toLocaleDateString()}</sub></label> </br>
        </label>
    `;
    taskList.appendChild(newTask);

    // Очищаем поле ввода после добавления задачи
    input.value = '';
}

// Функция для удаления задачи
function deleteTask(taskElement) {
    taskElement.closest('li').remove();
}

// Функция для редактирования задачи
function editTask(taskElement) {
    const taskText = taskElement.closest('li').querySelector('.text');
    input.value = taskText.textContent;
    taskText.contentEditable = 'true';
    taskText.focus();
}

// Функция для сохранения изменений в задаче
taskList.addEventListener('input', (event) => {
    if (event.target.classList.contains('text')) {
        event.target.blur();
        event.target.contentEditable = 'false';
        addTask();
    }
});

// Функция для сортировки по дате создания записи
function sortByDate() {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
        const dateA = new Date(a.querySelector('.data').textContent);
        const dateB = new Date(b.querySelector('.data').textContent);
        return dateA - dateB;
    });
    tasks.forEach(task => taskList.appendChild(task));
}

// Обработчик клика на кнопку "Создать"
addButton.addEventListener('click', addTask);

// Обработчик клика на кнопку удаления задачи
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('styled')) {
        deleteTask(event.target);
    }
});

// Добавьте кнопку для сортировки по дате создания записи
const sortButton = document.createElement('button');
sortButton.textContent = 'Сортировать по дате';
sortButton.onclick = sortByDate;
document.body.appendChild(sortButton);