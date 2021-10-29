<template>
  <div
    class="
      container-custom
      mx-auto
      h-100
      d-flex
      flex-column
      justify-content-center
    "
  >
    <div class="row my-3">
      <div class="col-4 d-flex align-items-center py-2">
        <small class="mr-2 text-primary1">Prefijo</small>
        <vs-switch v-model="enabledPrefixComponent">
          <template #off> Desactivado </template>
          <template #on> Activado </template>
        </vs-switch>
      </div>
      <div class="col-8">
        <vs-input
          v-if="enabledPrefixComponent"
          v-model="prefixComponent"
          type="text"
          name="user"
          label-placeholder="Prefijo"
          state="primary"
          class="input-theme border-custom"
          aria-label="Usuario"
        />
      </div>
    </div>

    <div class="row my-4">
      <div class="col-12">
        <vs-input
          v-model="payload"
          type="text"
          name="user"
          label-placeholder="Entrada"
          state="primary"
          class="input-theme border-custom"
          aria-label="Usuario"
        />
      </div>
    </div>

    <div class="row my-3 d-flex justify-content-center">
      <vs-button :disabled="!payload" @click="covertPayload"
        >Convertir</vs-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import crypto from "crypto";

export default {
  name: "Index",
  components: {},
  computed: {
    ...mapState("main", ["prefix", "enabledPrefix"]),
  },
  mounted() {
    this.prefixComponent = this.prefix;
    this.enabledPrefixComponent = this.enabledPrefix;
  },
  data: () => ({
    payload: "",
    prefixComponent: "",
    result: "",
    enabledPrefixComponent: false,
    show: false,
  }),
  watch: {
    payload() {
      if (this.show) {
        this.show = false;
      }
    },
  },
  methods: {
    ...mapMutations("main", ["SET_PREFIX", "ENABLE_PREFIX"]),
    covertPayload() {
      if (this.enabledPrefixComponent) {
        this.SET_PREFIX(this.prefixComponent);
        this.ENABLE_PREFIX(this.enabledPrefixComponent);
      }
      const input = this.enabledPrefixComponent
        ? `${this.prefixComponent}${this.payload}`
        : this.payload;
      this.result = crypto.createHash("sha512").update(input).digest("base64");
      this.show = true;
      const el = document.createElement("textarea");
      el.value = this.result;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      this.$swal({
        icon: "success",
        title: "Copiado a tu porta papeles",
        text: this.result,
        timer: 10000,
      });
    },
  },
};
</script>
