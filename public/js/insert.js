document.addEventListener('DOMContentLoaded', () => {
    const initializeFileDrop = (dropAreaId, inputId) => {
        const dropArea = document.getElementById(dropAreaId);
        const inputElement = document.getElementById(inputId);

        if (!dropArea || !inputElement) return;

        // Evento de dragover
        dropArea.addEventListener('dragover', e => {
            e.preventDefault();
            dropArea.classList.add('drag-over');
        });

        // Evento de dragleave
        dropArea.addEventListener('dragleave', e => {
            e.preventDefault();
            dropArea.classList.remove('drag-over');
        });

        // Evento de drop
        dropArea.addEventListener('drop', e => {
            e.preventDefault();
            dropArea.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file) {
                inputElement.files = e.dataTransfer.files;
                const fileName = file.name;
                dropArea.querySelector('.drop-text-insert').textContent = fileName;
            }
        });

        dropArea.addEventListener('click', e => {
            e.preventDefault();
            inputElement.click();
        });

        inputElement.addEventListener('change', e => {
            const file = e.target.files[0];
            if (file) {
                const fileName = file.name;
                dropArea.querySelector('.drop-text-insert').textContent = fileName;
            }
        });
    };

    initializeFileDrop('catalog-drop', 'catalog');
    initializeFileDrop('background-drop', 'background');
});

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('select');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            this.classList.add('open');
        });

        selectElement.addEventListener('blur', function () {
            this.classList.remove('open');
        });
    }
});
