const Meaning = Vue.component('meaning', {
    props: ['sentence'],
    template: `
        <li>{{ sentence }}</li>
    `
})

const Results = Vue.component('results', {
    props: ['partOfSpeech', 'definitions', 'synonyms', 'antonyms'],
    template: `
        <div>
            <div class="part-of-speech-container">
                <p>{{ partOfSpeech }}</p>
                <div></div>
                <hr>
            </div>
            <p class="meaning">Meaning</p>
            <ul>
            <meaning v-for="definition in definitions" v-bind:sentence="definition.definition"></meaning>
            </ul>
            <p v-if="synonyms.length" class="syno-anto-container"><span class="syno-anto-span">Synonyms</span> <span class="syno-anto-content">{{ synonyms.join(', ') }}</span></p>
            <p v-if="antonyms.length" class="syno-anto-container"><span class="syno-anto-span">Antonyms</span> <span class="syno-anto-content">{{ antonyms.join(', ') }}</span></p>
        </div>
    `
});