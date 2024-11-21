const open = document.getElementById("abrir_dialog");
const close = document.getElementById("fechar_dialog");
const dialog = document.querySelector("dialog");

open.onclick = function () {
    dialog.showModal();  // Corrigido: Usando 'showModal()' para abrir o diálogo como modal
};

close.onclick = function () {
    dialog.close(); // Usando 'close()' para fechar o diálogo
};
