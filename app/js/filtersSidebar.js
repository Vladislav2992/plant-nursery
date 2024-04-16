(function () {
    let filters = document.querySelectorAll('.filter')

    if (filters) {
        filters.forEach(filter => { 
            filter.addEventListener('click', ()=> filter.classList.toggle('active'))
        })
    }
})();