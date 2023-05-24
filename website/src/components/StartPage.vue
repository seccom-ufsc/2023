<template>
  <v-container id="start-page">
    <v-col class="d-flex align-center flex-column" style="min-height: 90vh">
      <v-row class="d-flex align-center mobile-flex-column">
        <div class="text-h1 roboto-mono" v-text="'SECCOM'"></div>
        <div class="text-h1 blue-text-must-click roboto-mono" v-text="2023"></div>
      </v-row>
      <v-col class="d-flex flex-column justify-center">
        <v-row class="flex-grow-0 text-h5 roboto-mono">Semana Acadêmica da Computação e Sistemas</v-row>
        <v-row class="flex-grow-0 text-h5 roboto-mono">De XX de setembro a XX de outubro</v-row>

        <v-row class="flex-grow-0 roboto-mono my-8">A SECCOM (Semana Acadêmica da Computação da UFSC) 2023 ocorre no período entre XX/9 e X/10 nas dependências do Departamento de Informática e Estatística (INE) da UFSC.<br>A organização da SECCOM é responsabilidade conjunta do PET Computação, do CALICO (Centro Acadêmico Livre da Computação) e de graduandos de Ciência da Computação da UFSC.<br>O tema da SECCOM este ano está em construção.<br>A programação da SECCOM incluirá minicursos/oficinas, competições e palestras. Mais detalhes estarão disponíveis em breveno link da Programação. A organização do evento já está em andamento!</v-row>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'StartPage',

  data: () => ({
  })
}
</script>

<style lang="scss">
  .blue-text-must-click {
    color: #474793;
  }

  div.row .roboto-mono, div.col .roboto-mono{
    font-family: 'Roboto Mono', monospace !important;
  }

  @media (max-aspect-ratio: 1/1) {
    .mobile-flex-column {
      flex-direction: column;
    }

    .mobile-hide {
      display: none;
    }
  }
</style>
