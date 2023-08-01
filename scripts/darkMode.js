const toggler = document.getElementById('toggler')

const toggleMode = () => {
    document.body.classList.toggle('darkMode')
}

toggler.addEventListener('change', toggleMode)

// Loads theme according to user's system theme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleMode()
    toggler.checked = true
}
