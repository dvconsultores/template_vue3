import variables from "@/mixins/variables"

export default (app) => {
  // Make sure to pick a unique name for the flag
  // so it won't conflict with any other mixin.
  if (!app.variables) {
    app.variables = true

     // Set up your mixin then
    app
      .mixin(variables)
  }
}
