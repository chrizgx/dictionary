const app = new Vue({
    el: '#app',
    data: {
        searchTerm: '',
        results: '',
        world: 'hello',
        updateStatus: false
    },
    methods: {
      update: async function(searchTerm) {
        document.getElementById("searchButton").blur();
        this.updateStatus = true;
        await new Promise(resolve => setTimeout(resolve, 50));
        await fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(response => response.json())
        .then(text => this.results=text);
        // if (!this.results.length) {
        //   this.results = [{}];
        // }
        this.updateStatus = false;
      }
    }
});

app.update('Welcome');