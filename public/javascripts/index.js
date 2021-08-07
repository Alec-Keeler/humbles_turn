const checkBtn = document.getElementById('check-btn');
const container = document.getElementById('info-container')

checkBtn.addEventListener('click', async(e) => {
    const startFetch = await fetch(`https://ti4-game-data.appspot.com/data?key=scptbutts`)
        .then(function(res) {
            res.json().then(function(data) {
                console.log(data);
                if (data.turn === 'Yellow') {
                    container.innerHTML = "Yes!"
                    if (container.classList.contains('red')) {
                        container.classList.remove('red')
                    }
                    container.classList.add('green')
                } else {
                    container.innerHTML = "Not yet"
                    if (container.classList.contains('green')) {
                        container.classList.remove('green')
                    }
                    container.classList.add('red')
                }

            })
        })
})