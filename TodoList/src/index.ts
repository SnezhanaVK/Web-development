import './styles.css';

const input: HTMLInputElement = document.getElementById('str') as HTMLInputElement;
const addButton: HTMLButtonElement = document.getElementById('add') as HTMLButtonElement;
const taskList: HTMLUListElement = document.getElementById('taskList') as HTMLUListElement;

function addTask(): void {
    const taskText: string = input.value;
    if (taskText.trim() === '') {
        alert('Введите текст задачи!');
    }

    const newTask: HTMLLIElement = document.createElement('li');
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

    input.value = '';
}

function deleteTask(taskElement: HTMLElement): void {
    taskElement.closest('li')?.remove();
}

function editTask(taskElement: HTMLElement | null): void {
    if (taskElement) {
        const taskText: HTMLElement | null = taskElement.closest('li')?.querySelector('.text')!;
        if (taskText) {
            input.value = taskText.textContent || '';
            taskText.contentEditable = 'true';
            taskText.focus();
        }
    }
}

function sortByDate(): void {
    const tasks: HTMLLIElement[] = Array.from(taskList.children) as HTMLLIElement[];
    tasks.sort((a, b) => {
        const dateA: Date = new Date(a.querySelector('.data')?.textContent || '');
        const dateB: Date = new Date(b.querySelector('.data')?.textContent || '');
        return dateA.getTime() - dateB.getTime();
    });
    tasks.forEach(task => taskList.appendChild(task));
}

// Обработчик клика на кнопку "Создать"
addButton.addEventListener('click', addTask);

// Обработчик клика на кнопку удаления задачи
taskList.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('styled')) {
        deleteTask(event.target as HTMLElement);
    }
});

// Добавьте кнопку для сортировки по дате создания записи
const sortButton: HTMLButtonElement = document.createElement('button');
sortButton.textContent = 'Сортировать по дате';
sortButton.onclick = sortByDate;
document.body.appendChild(sortButton);

