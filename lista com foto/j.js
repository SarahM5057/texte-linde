document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

    toggleDarkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleDarkModeButton.classList.toggle("dark-mode");

        document.querySelectorAll(".list-section").forEach(section => {
            section.classList.toggle("dark-mode");
        });

        document.querySelectorAll("input[type='text']").forEach(input => {
            input.classList.toggle("dark-mode");
        });

        document.querySelectorAll("li").forEach(li => {
            li.classList.toggle("dark-mode");
        });

        document.querySelectorAll("h2").forEach(h2 => {
            h2.classList.toggle("dark-mode");
        });
    });

    const forms = [
        {formId: 'main-dishes-form', inputId: 'main-dishes-input', listId: 'main-dishes-list'},
        {formId: 'side-dishes-form', inputId: 'side-dishes-input', listId: 'side-dishes-list'},
        {formId: 'desserts-form', inputId: 'desserts-input', listId: 'desserts-list'}
    ];

    forms.forEach(({formId, inputId, listId}) => {
        const form = document.getElementById(formId);
        const input = document.getElementById(inputId);
        const list = document.getElementById(listId);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (input.value.trim()) {
                const li = document.createElement('li');
                li.textContent = input.value;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remover';
                removeButton.addEventListener('click', () => li.remove());
                li.appendChild(removeButton);
                list.appendChild(li);
                input.value = '';
                input.focus();
            }

            
        });
    });
});

document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    // Criar um novo item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = `<h2>${title}</h2>`;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.innerHTML = `
        <div><strong>Descrição:</strong></div>
        <div>${description}</div>
        <div><strong>Imagem:</strong></div>
        <img src="${image}" alt="${title}">
    `;

    const button = document.createElement('button');
    button.textContent = 'Visualizar';
    button.addEventListener('click', function() {
        contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.addEventListener('click', function() {
        itemDiv.remove(); // Remove o item da lista
    });

    const minimizeButton = document.createElement('button');
    minimizeButton.textContent = 'Minimizar';
    minimizeButton.addEventListener('click', function() {
        contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
        minimizeButton.textContent = minimizeButton.textContent === 'Minimizar' ? 'Expandir' : 'Minimizar';
    });

    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(button);
    itemDiv.appendChild(minimizeButton);
    itemDiv.appendChild(deleteButton);
    itemDiv.appendChild(contentDiv);
    document.getElementById('list').appendChild(itemDiv);

    // Limpar o formulário
    document.getElementById('itemForm').reset();
});

/*Sarah Magno Santos 2°D -Infonet- n°36*/