import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pedals: [
      { pedal_id: 'compressor', title: 'Compressor', separator: true },
      { pedal_id: 'deep_six', title: 'Walrus Deep Six', width: 2.6, height: 4.93 },
      { pedal_id: 'bloom', title: 'Jackson Audio Bloom', width: 2.652, height: 4.875 },
      { pedal_id: 'cali76', title: 'Origin Effects Cali76', width: 2.6, height: 5.59 },
      { pedal_id: 'pulp', title: 'JHS Pulp\'N\'Peel', width: 2.72, height: 4.87 },
      { pedal_id: 'cmat_deluxe_comp', title: 'CMAT Mods Deluxe Compressor', width: 2.96, height: 4.78 },
      { pedal_id: 'bondi_2026', title: 'Bondi Effects 2026 Compressor', width: 2.773, height: 4.7 },
      { pedal_id: 'keeley_compressor', title: 'Keeley Compressor', width: 2.58, height: 4.3 },
      { pedal_id: 'octaver', title: 'Octaver', separator: true },
      { pedal_id: 'tc_octaver', title: 'TC Electronic Sub\'N\'Up', width: 2.83, height: 4.8 },
      { pedal_id: 'pog2', title: 'EHX POG2', width: 5.75, height: 4.75 },
      { pedal_id: 'chorus', title: 'Chorus', separator: true },
      { pedal_id: 'analogworm_triangle', title: 'Analogworm Triangle Chorus', width: 2.6, height: 4.9 },
      { pedal_id: 'julianna', title: 'Walrus Julianna', width: 2.85, height: 4.87 },
      { pedal_id: 'emperor', title: 'JHS Emperor', width: 2.85, height: 4.93 },
      { pedal_id: 'warpedvinyl', title: 'Chase Bliss Warped Vinyl', width: 2.85, height: 4.85 },
      { pedal_id: 'reflector', title: 'Old Blood Noise Endeavors Reflector', width: 2.87, height: 4.96 },
      { pedal_id: 'univibe', title: 'Univibe', separator: true },
      { pedal_id: 'unicorn', title: 'JHS Unicorn', width: 2.8, height: 4.9 },
      { pedal_id: 'spatial_delivery', title: 'EarthQuakerDevices Spatial Delivery', width: 2.5, height: 4.87 },
      { pedal_id: 'boost', title: 'Boost', separator: true },
      { pedal_id: 'desire_boost', title: 'Lotus Pedal designs Desire Boost', width: 2.9, height: 4.87 },
      { pedal_id: 'ep', title: 'Xotic Effects EP Boost', width: 2, height: 3.7 },
      { pedal_id: 'emissary', title: 'Walrus Emissary Boost', width: 2.6, height: 4.93 },
      { pedal_id: 'rcbooster', title: 'Xotic Effects RC Booster', width: 2.66, height: 4.42 },
      { pedal_id: 'acbooster', title: 'Xotic Effects AC Booster', width: 2.5, height: 4.3 },
      { pedal_id: 'light_drive', title: 'Light drive', separator: true },
      { pedal_id: 'emdrive', title: 'Emerson Custom EM-Drive', width: 2.5, height: 4.3 },
      { pedal_id: 'paramount', title: 'Emerson Custom Paramount', width: 2.5, height: 4.3 },
      { pedal_id: 'scarlettlove', title: 'Selah Scarlett Love', width: 4.3, height: 2.5 },
      { pedal_id: 'lgw', title: 'Mad Professor Little Green Wonder', width: 2.5, height: 4.4 },
      { pedal_id: 'morning_glory', title: 'JHS Morning Glory', width: 2.85, height: 4.87 },
      { pedal_id: 'superbolt', title: 'JHS Superbolt', width: 2.72, height: 4.87 },
      { pedal_id: 'ocd', title: 'Fulltone OCD', width: 2.5, height: 4.5 },
      { pedal_id: 'blues_driver', title: 'BOSS Blues Driver', width: 2.875, height: 5.125 },
      { pedal_id: 'timmy', title: 'Paul Cochraine Timmy', width: 2.65, height: 4.54 },
      { pedal_id: 'dude', title: 'J.Rockett Audio Designs', width: 2.3, height: 4 },
      { pedal_id: 'breakers', title: 'Bondi Effects Breakers', width: 2.83, height: 4.78 },
      { pedal_id: 'mid_drive', title: 'Mid drive', separator: true },
      { pedal_id: 'plumes', title: 'EarthQuakerDevices Plumes', width: 2.5, height: 4.87 },
      { pedal_id: 'voyager', title: 'Walrus Voyager', width: 2.6, height: 4.77 },
      { pedal_id: 'ts_mini', title: 'Ibanez Tube Screamer Mini', width: 2, height: 3.65 },
      { pedal_id: 'ts_9', title: 'Ibanez TS9', width: 3, height: 4.9 },
      { pedal_id: 'ts_808', title: 'Ibanez TS808', width: 2.9, height: 4.89 },
      { pedal_id: 'mayflower', title: 'Walrus Mayflower', width: 2.6, height: 4.77 },
      { pedal_id: 'kilt_1', title: 'JHS Kilt v1', width: 3.86, height: 4.7 },
      { pedal_id: 'kilt_2', title: 'JHS Kilt v2', width: 2.85, height: 4.87 },
      { pedal_id: 'kingoftone', title: 'Analog.Man King Of Tone', width: 4.7, height: 4 },
      { pedal_id: 'princeoftone', title: 'Analog.Man Prince Of Tone', width: 2.5, height: 4.65 },
      { pedal_id: 'sickas', title: 'Bondi Effects Sick As', width: 4.7, height: 3.7 },
      { pedal_id: 'fulldrive', title: 'Fulltone Full-drive 3', width: 4.81, height: 4 },
      { pedal_id: 'brokenarrow', title: 'Jackson Audio Broken Arrow', width: 2.652, height: 4.875 },
      { pedal_id: 'distortion', title: 'Distortion', separator: true },
      { pedal_id: 'ironhorse', title: 'Walrus Iron Horse', width: 2.79, height: 4.84 },
      { pedal_id: 'tumnus', title: 'Wampler Tumnus Deluxe', width: 2.6, height: 4.93 },
      { pedal_id: 'archer', title: 'J.Rockett Archer Ikon', width: 2.3, height: 4 },
      { pedal_id: '1981', title: '1981 DRV', width: 3.52, height: 4.3 },
      { pedal_id: 'trem', title: 'Tremolo', separator: true },
      { pedal_id: 'flint', title: 'Strymon Flint', width: 4, height: 4.5 },
      { pedal_id: 'whirl', title: 'Cusack Tap-A-Whirl Tremolo', width: 4.7, height: 4.04 },
      { pedal_id: 'gravitas', title: 'Chase Bliss Gravitas', width: 2.85, height: 4.85 },
      { pedal_id: 'monument', title: 'Walrus Monument', width: 2.68, height: 4.87 },
      { pedal_id: 'noir', title: 'Analogworm Noir Tremolo', width: 2.65, height: 4.65 },
      { pedal_id: 'volume', title: 'Volume', separator: true },
      { pedal_id: 'mini_volume', title: 'Dunlop Volume Mini', width: 2.97, height: 6 },
      { pedal_id: 'delay', title: 'Delay', separator: true },
      { pedal_id: 'd1', title: 'Walrus D1', width: 2.85, height: 4.87 },
      { pedal_id: 'timeline', title: 'Strymon Timeline', width: 6.75, height: 5.1 },
      { pedal_id: 'capistan', title: 'Strymon El Capistan', width: 4, height: 4.5 },
      { pedal_id: 'arp87', title: 'Walrus ARP-87', width: 2.6, height: 4.77 },
      { pedal_id: 'cc_deluxe', title: 'MXR Carbon Copy Deluxe', width: 5, height: 3.81 },
      { pedal_id: 'analogdelaymini', title: 'Ibanez Analog Delay Mini', width: 2, height: 3.65 },
      { pedal_id: 'reverb', title: 'Reverb', separator: true },
      { pedal_id: 'bigsky', title: 'Strymon BigSky', width: 6.75, height: 5.1 },
      { pedal_id: 'r1', title: 'Walrus R1', width: 2.85, height: 4.87 },
      { pedal_id: 'wet', title: 'Neunaber WET', width: 2.8, height: 4.5 },
      { pedal_id: 'rv_5', title: 'BOSS RV-5', width: 2.875, height: 5.125 },
      { pedal_id: 'tempus', title: 'GFI Specular Tempus', width: 4.72, height: 3.66 },
      { pedal_id: 'slo', title: 'Walrus SLO', width: 2.6, height: 4.77 },
      { pedal_id: 'fathom', title: 'Walrus Fathom', width: 2.6, height: 4.77 },
      { pedal_id: 'afterneath', title: 'EarthQuakerDevices Afterneath', width: 2.62, height: 4.87 },
      { pedal_id: 'darkworld', title: 'Chase Bliss DarkWorld', width: 2.85, height: 4.85 },
      { pedal_id: 'cabsim', title: 'Cabsim', separator: true },
      { pedal_id: 'acs1', title: 'Walrus ACS1', width: 2.85, height: 4.87 },
      { pedal_id: 'synth', title: 'Synth', separator: true },
      { pedal_id: 'c4', title: 'C4 Synth', width: 2.75, height: 4.5 },
      { pedal_id: 'multi', title: 'Multieffect', separator: true },
      { pedal_id: 'mobius', title: 'Strymon Mobius', width: 6.75, height: 5.1 },
      { pedal_id: 'misc', title: 'Miscellaneous', separator: true },
      { pedal_id: 'poly', title: 'TC Electronic Polytune2', width: 2, height: 3.66 },
      { pedal_id: 'quartz', title: 'Selah Quartz V3', width: 2.85, height: 4.87 },
      { pedal_id: 'controller', title: 'Controller', separator: true },
      { pedal_id: 'bypass_looper', title: '12-ch Bypass Looper', width: 12, height: 5 },
      { pedal_id: 'dmc8', title: 'Disaster Area Designs DMC8', width: 10, height: 2.65 },
      { pedal_id: 'dpc8', title: 'Disaster Area Designs DPC8', width: 10, height: 2.88 },
      { pedal_id: 'dmc4', title: 'Disaster Area Designs DMC4', width: 4.7, height: 3.7 },
      { pedal_id: 'aux3', title: 'Analog Endeavours AUX3', width: 4.78, height: 2.76 },
      { pedal_id: 'power', title: 'Power supply', separator: true },
      { pedal_id: 'gamma', title: 'Phonograph Gamma', width: 3.3, height: 6.8, rotate: 'left' }
    ],
    setup: [

    ]
  },
  mutations: {
    addPedalToSetup: (state, pedal) => state.setup.push(pedal),
    removePedalFromSetup: (state, id) => state.pedals = state.pedals.filter(pedal => pedal.id === id)
  },
  actions: {
  },
  modules: {
  }
})
