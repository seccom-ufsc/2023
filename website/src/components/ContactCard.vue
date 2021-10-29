<template>
  <a target="_blank" :href="contact.link" style="text-decoration: none">
    <v-card raised class="pa-10">
        <v-icon :color="this.$vuetify.theme.isDark ? '#fff' : this.$vuetify.theme.themes.light.primary" size="60">{{contact.icon}}</v-icon>
    </v-card>
  </a>
</template>

<script>
export default {
  props: ['contact'],
}
</script>
