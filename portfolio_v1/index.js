// parallax fade in up effect on scrolling the window 

/* let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        const content = entry.target.querySelector('#project_1_content')
        if (entry.isIntersecting) {
            if(!content.classList.contains('animate-fade-in-up')) {
                content.classList.add('animate-fade-in-up')
                console.log('2');
            } else {
                content.classList.remove('animate-fade-in-up')
                console.log('3');
            }
        }  
        
        content.classList.remove('animate-fade-in-up')
    })
})

observer.observe(document.querySelector('#project_1'))

const button = document.querySelector('#contact_btn')
const title = document.querySelector('#project_1_content')
button.addEventListener('click', () => {    
    if(!title.classList.contains('animate-fade-in-up')) {
        title.classList.add('animate-fade-in-up')
        console.log('2');
    } else {
        title.classList.remove('animate-fade-in-up')
        console.log('3');
    }
}) */
