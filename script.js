const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')

// Rules and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})