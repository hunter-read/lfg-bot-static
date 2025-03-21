const App = {
  template: '#app-template',
  data: () => ({
    selectedGames: [],
    games: [
      {header: 'Most Popular'},
      {text: 'D&D 5th Edition', value: '5e'},
      {text: 'D&D 5th Edition (2024)', value: '5e 2024'},
      {text: 'D&D 3.5 Edition', value: '3.5'},
      {text: 'Pathfinder 2nd Edition', value: 'PF2e'},
      {text: 'Pathfinder 1st Edition', value: 'PF1e'},
      {text: 'Call of Cthulhu', value: 'CoC'},
      {text: 'Cyberpunk (RED or 2020)', value: 'Cyberpunk'},
      {text: 'Warhammer 40K', value: '40K'},
      {text: 'World of Darkness', value: 'WoD'},
      {text: 'Flexible / Other', value: 'Flexible'},
      {divider: true},
      {header: 'Less Popular'},
      {text: 'Basic Role-Playing', value: 'BRP'},
      {text: 'Chronicles of Darkness', value: 'CofD'},
      {text: 'Dungeon Crawl Classics', value: 'DCC'},
      {text: 'Dungeon World', value: 'DW'},
      {text: 'D&D Original Edition', value: 'ODND'},
      {text: 'D&D Advanced', value: 'ADND'},
      {text: 'D&D Basic/Expert', value: 'BX'},
      {text: 'D&D 2nd Edition', value: 'DND2e'},
      {text: 'D&D 3rd Edition', value: '3e'},
      {text: 'D&D 4th Edition', value: '4e'},
      {text: 'Fate Core', value: 'Fate'},
      {text: 'GURPS', value: 'GURPS'},
      {text: 'Monster of the Week', value: 'MotW'},
      {text: 'Mutants & Masterminds 3rd Edition', value: 'MM3'},
      {text: 'Numenera', value: 'Numenera'},
      {text: 'Old School Renaissance', value: 'OSR'},
      {text: 'Savage Worlds', value: "SavageWorlds"},
      {text: 'Shadowrun (Any Edition)', value: "Shadowrun"},
      {text: 'Starfinder', value: 'Starfinder'},
      {text: 'Star Wars RPG', value: 'SWRPG'},
      {text: 'Stars Without Numbers', value: 'SWN'},
      {divider: true},
      {header: 'Old r/LFG game tags (Will add additional tag to ensure compatibility)'},
      {text: 'Deadlands Classics', value: 'DLC'},
      {text: 'Deadlands Reloaded', value: 'DLR'},
      {text: 'Earthdawn', value: 'Earthdawn'},
      {text: 'Feast of Legends', value: 'Feast'},
      {text: 'Fellowship', value: 'FWS'},
      {text: 'Legend of the Five Rings', value: 'L5R'},
      {text: 'Monster Crawl Classics', value: 'MCC'},
      {text: 'Savage Worlds Adventure Edition', value: 'SWADE'},
      {text: 'Savage Worlds Deluxe', value: 'SWD'},
      {text: 'Shadowrun 3rd Edition', value: 'SR3'},
      {text: 'Shadowrun 4th Edition', value: 'SR4'},
      {text: 'Shadowrun 5th Edition', value: 'SR5'},
      {text: 'Shadowrun 6th Edition', value: 'SR6'},
    ],
    selectedDays: [],
    days: [
      {text: 'Monday', value: 'mon'},
      {text: 'Tuesday', value: 'tue'},
      {text: 'Wednesday', value: 'wed'},
      {text: 'Thursday', value: 'thu'},
      {text: 'Friday', value: 'fri'},
      {text: 'Saturday', value: 'sat'},
      {text: 'Sunday', value: 'sun'},
      {text: 'Include posts missing Day of Week', value: 'no-day'},
    ],
    selectedTimezone: [],
    timezones: [
      'GMT-11',
      'GMT-10',
      'GMT-9',
      'GMT-8',
      'GMT-7',
      'GMT-6',
      'GMT-5',
      'GMT-4',
      'GMT-3',
      'GMT-2',
      'GMT-1',
      'GMT',
      'GMT+1',
      'GMT+2',
      'GMT+3',
      'GMT+4',
      'GMT+5',
      'GMT+6',
      'GMT+7',
      'GMT+8',
      'GMT+9',
      'GMT+10',
      'GMT+11',
      'GMT+12',
      'Include posts missing Timezone',
    ],
    selectedKeywords: [],
    keywords: [],
    selectedFlair: ['plw', 'gmplw'],
    flairs: [
      {text: 'GM and player(s) wanted', value: 'gmplw'},
      {text: 'Player(s) wanted', value: 'plw'},
      {text: 'GM wanted', value: 'gmw'}
    ],
    selectedLocation: '',
    locations: [
      {text: 'Online Only', value: ''},
      {text: 'Both Online and Offline', value: 'off'},
      {text: 'Offline Only', value: '=off'}
    ],
    selectedNSFW: '',
    nsfw: [
      {text: 'Exclude all NSFW', value: ''},
      {text: 'Include NSFW', value: 'nsfw'},
      {text: 'Only NSFW', value: '=nsfw'}
    ],
    selectedAge: '',
    ages: [
      {text: 'Any', value: ''},
      {text: 'No age limits', value: 'anyage'},
      {text: '18+', value: '18+'},
      {text: '21+', value: '21+'},
    ],
    selectedPbp: '',
    pbp: [
      {text: 'Include Play-by-Post', value: ''},
      {text: 'Exclude all Play-by-Post', value: '-pbp'},
      {text: 'Only Play-by-Post', value: 'pbp'},
    ],
    selectedOneShot: '',
    oneShot: [
      {text: 'Include One-shots', value: ''},
      {text: 'Exclude all One-shots', value: '-oneshot'},
      {text: 'Only One-shots', value: 'oneshot'},
    ],
    selectedVtt: [],
    vtt: [
      {text: 'Theater of the Mind', value: 'theater_mind'},
      {text: 'Roll20', value: 'roll20'},
      {text: 'Above VTT', value: 'abovevtt'},
      {text: 'Fantasy Grounds', value: 'fg'},
      {text: 'Foundry VTT', value: 'foundry'},
      {text: 'Sigil', value: 'sigil'},
      {text: 'TablePlop', value: 'tableplop'},
      {text: 'TaleSpire', value: 'talespire'},
      {text: 'Tabletop Simulator', value: 'tts'},
      {text: 'Owlbear Rodeo', value: 'owlbear'},
    ],
    selectedIdentity: [],
    identities: [
      {text: 'LGBTQ+', value: 'lgbtq'},
      {text: 'Feminine or Woman', value: 'fem'},
      {text: 'People of Color', value: 'poc'},
      {text: 'Accessible', value: 'accessible'},
    ],
    sendToReddit: function () {
      const url = 'https://www.reddit.com/message/compose/?to=LFG_Notify_Bot&subject=Subscribe&message='
      let message =`${this.selectedGames.join(' ')}`;
      const tz_index = this.selectedTimezone.indexOf('Include posts missing Timezone');
      if (tz_index !== -1){
        this.selectedTimezone[tz_index] = 'no-tz';
      }
      if (this.selectedTimezone.length > 0) { message += `  \n${this.selectedTimezone.join(' ')}`};
      if (this.selectedDays.length > 0) {     message += `  \n${this.selectedDays.join(' ')}`};
      if (this.selectedFlair.length > 0) {    message += `  \n${this.selectedFlair.join(' ')}`};
      if (this.selectedLocation != '') {      message += `  \n${this.selectedLocation}`};
      if (this.selectedVtt.length > 0) {      message += `  \n${this.selectedVtt.join(' ')}`};
      if (this.selectedNSFW != '') {          message += `  \n${this.selectedNSFW}`};
      if (this.selectedAge != '') {           message += `  \n${this.selectedAge}`};
      if (this.selectedPbp != '') {           message += `  \n${this.selectedPbp}`};
      if (this.selectedOneShot != '') {       message += `  \n${this.selectedOneShot}`};
      if (this.selectedIdentity.length > 0) { message += `  \n${this.selectedIdentity.join(' ')}`};
      if (this.selectedKeywords.length > 0) { message += `  \n${this.selectedKeywords.map(item => `[${item}]`).join(' ')}`};
      window.open(url + encodeURIComponent(message));
    }
  })
}
new Vue({
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  render: h => h(App)
}).$mount('#app')