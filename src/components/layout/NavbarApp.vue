<template>
  <div class="d-block">
    <vs-navbar v-model="active" padding-scroll shadow center-collapsed>
      <div>
        <h1>Convertidor a sha512</h1>
      </div>
      <template #right>
        <change-theme />
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChangeTheme from "./ChangeTheme";
export default {
  name: "NavbarApp",
  components: { ChangeTheme },
  data: () => ({
    active: true,
  }),
  computed: {
    ...mapState("control", ["activeSidebar"]),
  },
  methods: {},
};
</script>
