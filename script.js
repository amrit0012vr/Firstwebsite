function showMessage() {
    const msg = document.getElementById('message');
    msg.classList.toggle('hidden');
}
document.getElementById('toggleButton').addEventListener('click', showMessage);

document.getElementById('colorButton').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.style.color = msg.style.color === 'blue' ? 'red' : 'blue';
});

document.getElementById('hideButton').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.classList.add('hidden');
});

document.getElementById('showButton').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.classList.remove('hidden');
});

document.getElementById('changeTextButton').addEventListener('click', () => {
    const msg = document.getElementById('message');
    msg.textContent = msg.textContent === 'Hello, World!' ? 'Welcome to the interactive site!' : 'Hello, World!';
});