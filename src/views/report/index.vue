<template>
  <!-- <div id="viewer-host">
    <JSViewer v-bind:report="{ Uri: 'report.rdlx-json' }"></JSViewer>
  </div> -->
  <div id="designer-host">
    <JSDesigner v-bind:report="{id: 'report.rdlx-json', displayName: 'my report' }"></JSDesigner>
  </div>
</template>
<script>
import { Designer } from "@grapecity/activereports-vue";
export default {
  components: {
    JSDesigner: Designer
  },
}
</script>
<style src="../../../node_modules/@grapecity/activereports/styles/ar-js-ui.css"></style>
<style src="../../../node_modules/@grapecity/activereports/styles/ar-js-viewer.css" ></style>
<style>
#viewer-host {
  width: 100%;
  height: 100vh;
}
#designer-host {
  width: 100%;
  height: 100vh;
}
</style>
