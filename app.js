const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#name, #email, #msg, #subject');

    inputs.forEach(input => {
        input.value = '';
    });
});