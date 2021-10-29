<template>
  <footer class="footer text-center w-100 py-3">
    <span>
      &copy; Derechos reservedos
      <a href="https://avaldigitallabs.com/" target="_blank" rel="noopener"
        >ADL</a
      >
      @ {{ new Date().getFullYear() }}
    </span>
  </footer>
</template>

<script>
export default {
  props: {
    aditionalClass: {
      type: String,
      default: () => "",
    },
  },
};
</script>
