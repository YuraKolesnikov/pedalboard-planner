<template>
  <div>
    <div class="pedals">
      <div v-for="pedal in pedals" class="pedal-wrapper">
        <Pedal :pedal="pedal" />
      </div>
    </div>
    <Pedalboard />
  </div>
</template>

<script>
import Pedal from '@/components/Pedal/Pedal'
import Pedalboard from '@/components/Pedalboard/Pedalboard'

export default {
  components: {
    Pedal,
    Pedalboard
  },
  data() {
    return {
      pedals: [
        { id: 'deep_six', title: 'Walrus Deep Six', width: 2.6, height: 4.93 },
        { id: 'bloom', title: 'Jackson Audio Bloom', width: 2.652, height: 4.875 },
        { id: 'cali76', title: 'Origin Effects Cali76', width: 2.6, height: 5.59 },
        { id: 'pulp', title: 'JHS Pulp\'N\'Peel', width: 2.72, height: 4.87 },
        { id: 'cmat_deluxe_comp', title: 'CMAT Mods Deluxe Compressor', width: 2.96, height: 4.78 },
        { id: 'bondi_2026', title: 'Bondi Effects 2026 Compressor', width: 2.773, height: 4.7 },
        { id: 'keeley_compressor', title: 'Keeley Compressor', width: 2.58, height: 4.3 },
        { id: 'tc_octaver', title: 'TC Electronic Sub\'N\'Up', width: 2.83, height: 4.8 },
        { id: 'pog2', title: 'EHX POG2', width: 5.75, height: 4.75 },
        { id: 'analogworm_triangle', title: 'Analogworm Triangle Chorus', width: 2.6, height: 4.9 },
        { id: 'julianna', title: 'Walrus Julianna', width: 2.85, height: 4.87 },
        { id: 'emperor', title: 'JHS Emperor', width: 2.85, height: 4.93 },
        { id: 'warpedvinyl', title: 'Chase Bliss Warped Vinyl', width: 2.85, height: 4.85 },
        { id: 'reflector', title: 'Old Blood Noise Endeavors Reflector', width: 2.87, height: 4.96 },
        { id: 'unicorn', title: 'JHS Unicorn', width: 2.8, height: 4.9 },
        { id: 'spatial_delivery', title: 'EarthQuakerDevices Spatial Delivery', width: 2.5, height: 4.87 },
        { id: 'desire_boost', title: 'Lotus Pedal designs Desire Boost', width: 2.9, height: 4.87 },
        { id: 'ep', title: 'Xotic Effects EP Boost', width: 2, height: 3.7 },
        { id: 'emissary', title: 'Walrus Emissary Boost', width: 2.6, height: 4.93 },
        { id: 'rcbooster', title: 'Xotic Effects RC Booster', width: 2.66, height: 4.42 },
        { id: 'acbooster', title: 'Xotic Effects AC Booster', width: 2.5, height: 4.3 },
        { id: 'emdrive', title: 'Emerson Custom EM-Drive', width: 2.5, height: 4.3 },
        { id: 'paramount', title: 'Emerson Custom Paramount', width: 2.5, height: 4.3 },
        { id: 'scarlettlove', title: 'Selah Scarlett Love', width: 4.3, height: 2.5 },
        { id: 'lgw', title: 'Mad Professor Little Green Wonder', width: 2.5, height: 4.4 },
        { id: 'morning_glory', title: 'JHS Morning Glory', width: 2.85, height: 4.87 },
        { id: 'superbolt', title: 'JHS Superbolt', width: 2.72, height: 4.87 },
        { id: 'ocd', title: 'Fulltone OCD', width: 2.5, height: 4.5 },
        { id: 'blues_driver', title: 'BOSS Blues Driver', width: 2.875, height: 5.125 },
        { id: 'timmy', title: 'Paul Cochraine Timmy', width: 2.65, height: 4.54 },
        { id: 'dude', title: 'J.Rockett Audio Designs', width: 2.3, height: 4 },
        { id: 'breakers', title: 'Bondi Effects Breakers', width: 2.83, height: 4.78 },
        { id: 'plumes', title: 'EarthQuakerDevices Plumes', width: 2.5, height: 4.87 },
        { id: 'voyager', title: 'Walrus Voyager', width: 2.6, height: 4.77 },
        { id: 'ts_mini', title: 'Ibanez Tube Screamer Mini', width: 2, height: 3.65 },
        { id: 'ts_9', title: 'Ibanez TS9', width: 3, height: 4.9 },
        { id: 'ts_808', title: 'Ibanez TS808', width: 2.9, height: 4.89 },
        { id: 'mayflower', title: 'Walrus Mayflower', width: 2.6, height: 4.77 },
        { id: 'kilt_1', title: 'JHS Kilt v1', width: 3.86, height: 4.7 },
        { id: 'kilt_2', title: 'JHS Kilt v2', width: 2.85, height: 4.87 },
        { id: 'kingoftone', title: 'Analog.Man King Of Tone', width: 4.7, height: 4 },
        { id: 'princeoftone', title: 'Analog.Man Prince Of Tone', width: 2.5, height: 4.65 },
        { id: 'sickas', title: 'Bondi Effects Sick As', width: 4.7, height: 3.7 },
        { id: 'fulldrive', title: 'Fulltone Full-drive 3', width: 4.81, height: 4 },
        { id: 'brokenarrow', title: 'Jackson Audio Broken Arrow', width: 2.652, height: 4.875 },
        { id: 'ironhorse', title: 'Walrus Iron Horse', width: 2.79, height: 4.84 },
        { id: 'tumnus', title: 'Wampler Tumnus Deluxe', width: 2.6, height: 4.93 },
        { id: 'archer', title: 'J.Rockett Archer Ikon', width: 2.3, height: 4 },
        { id: '1981', title: '1981 DRV', width: 3.52, height: 4.3 },
        { id: 'flint', title: 'Strymon Flint', width: 4, height: 4.5 },
        { id: 'whirl', title: 'Cusack Tap-A-Whirl Tremolo', width: 4.7, height: 4.04 },
        { id: 'gravitas', title: 'Chase Bliss Gravitas', width: 2.85, height: 4.85 },
        { id: 'monument', title: 'Walrus Monument', width: 2.68, height: 4.87 },
        { id: 'noir', title: 'Analogworm Noir Tremolo', width: 2.65, height: 4.65 },
        { id: 'mini_volume', title: 'Dunlop Volume Mini', width: 2.97, height: 6 },
        { id: 'd1', title: 'Walrus D1', width: 2.85, height: 4.87 },
        { id: 'timeline', title: 'Strymon Timeline', width: 6.75, height: 5.1 },
        { id: 'capistan', title: 'Strymon El Capistan', width: 4, height: 4.5 },
        { id: 'arp87', title: 'Walrus ARP-87', width: 2.6, height: 4.77 },
        { id: 'cc_deluxe', title: 'MXR Carbon Copy Deluxe', width: 5, height: 3.81 },
        { id: 'analogdelaymini', title: 'Ibanez Analog Delay Mini', width: 2, height: 3.65 },
        { id: 'bigsky', title: 'Strymon BigSky', width: 6.75, height: 5.1 },
        { id: 'r1', title: 'Walrus R1', width: 2.85, height: 4.87 },
        { id: 'wet', title: 'Neunaber WET', width: 2.8, height: 4.5 },
        { id: 'rv_5', title: 'BOSS RV-5', width: 2.875, height: 5.125 },
        { id: 'tempus', title: 'GFI Specular Tempus', width: 4.72, height: 3.66 },
        { id: 'slo', title: 'Walrus SLO', width: 2.6, height: 4.77 },
        { id: 'fathom', title: 'Walrus Fathom', width: 2.6, height: 4.77 },
        { id: 'afterneath', title: 'EarthQuakerDevices Afterneath', width: 2.62, height: 4.87 },
        { id: 'darkworld', title: 'Chase Bliss DarkWorld', width: 2.85, height: 4.85 },
        { id: 'acs1', title: 'Walrus ACS1', width: 2.85, height: 4.87 },
        { id: 'c4', title: 'C4 Synth', width: 2.75, height: 4.5 },
        { id: 'mobius', title: 'Strymon Mobius', width: 6.75, height: 5.1 },
        { id: 'poly', title: 'TC Electronic Polytune2', width: 2, height: 3.66 },
        { id: 'quartz', title: 'Selah Quartz V3', width: 2.85, height: 4.87 },
        { id: 'bypass_looper', title: '12-ch Bypass Looper', width: 12, height: 5 },
        { id: 'dmc8', title: 'Disaster Area Designs DMC8', width: 10, height: 2.65 },
        { id: 'dpc8', title: 'Disaster Area Designs DPC8', width: 10, height: 2.88 },
        { id: 'dmc4', title: 'Disaster Area Designs DMC4', width: 4.7, height: 3.7 },
        { id: 'aux3', title: 'Analog Endeavours AUX3', width: 4.78, height: 2.76 },
      ]
    }
  }
}
</script>

<style lang="scss">
.pedals {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: teal;
}

.pedal-wrapper {
  padding: 10px;
}
</style>
