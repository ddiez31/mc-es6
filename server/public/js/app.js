(() => {
    const app = {
        //todo
        donnees: null,
        init() {
            this.getTasks();
        },
        getTasks() {
            fetch('/database/tasks.json')
                .then(res => res.json())
                .then(data => {
                    this.donnees = data.taches;
                    this.sendTache();
                });
        },
        sendTache() {
            this.donnees.map(tasks => {
                document.getElementById('list').innerHTML += `<li>${tasks.content}</li>`
            })
        }
    };
    app.init();
})();