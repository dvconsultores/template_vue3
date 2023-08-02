export default {
  data() {
    return {
      isMobile: undefined,
      isXMobile: undefined,
    }
  },
  mounted() {
    this._isMobile()
    
    // resize listener
    window.addEventListener("resize", this._isMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this._isMobile);
  },
  methods: {
    _isMobile() {
      if (window.innerWidth <= 880) { this.isMobile = true }
      else { this.isMobile = false}
      if (window.innerWidth <= 430) { this.isXMobile = true }
      else { this.isXMobile = false}
    },
  }
}
