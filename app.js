const app = new Vue({
    el: '#app',
    data: {
        searchTerm: '',
        results: null,
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

app.results = [
    {
      "word": "keyboard",
      "phonetic": "/ˈkiːbɔːd/",
      "phonetics": [
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkibɔɹd/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
          "license": {
            "name": "BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          }
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [
            "electronic keyboard"
          ],
          "antonyms": []
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To type on a computer keyboard.",
              "synonyms": [],
              "antonyms": [],
              "example": "Keyboarding is the part of this job I hate the most."
            }
          ],
          "synonyms": [],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/keyboard"
      ]
    }
  ]