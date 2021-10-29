<template>
  <v-container id="start-page">
    <v-col class="d-flex align-center flex-column" style="min-height: 90vh">
      <v-row class="d-flex align-center mobile-flex-column">
        <div class="text-h1 roboto-mono" v-text="'SECCOM'"></div>
        <div class="text-h1 blue-text-must-click roboto-mono" v-text="2020"></div>
      </v-row>
      <v-col class="d-flex flex-column justify-center">
        <v-row class="flex-grow-0 text-h5 roboto-mono">Semana Acadêmica da Computação e Sistemas</v-row>
        <v-row class="flex-grow-0 text-h5 roboto-mono">De 5 a 9 de outubro</v-row>
        
        <v-row class="flex-grow-0 roboto-mono my-8">A SECCOM é um evento acadêmico que visa incrementar a experiência universitária das graduações em Ciência da Computação e Sistemas de Informação, trazendo palestras e oficinas de conteúdos além dos vistos durante a graduação. Esta edição será online e ocorrerá nos dias 5 a 9 de Outubro, com seus eventos ocorrendo majoritariamente no período da tarde. Você pode assistir as transmissões ao vivo no <a href="https://www.youtube.com/channel/UCva2-CmrvppJlf8jSAK61vw">canal no Youtube da SECCOM</a></v-row>
        
        <v-row class="flex-grow-0 roboto-mono my-8">Com a pandemia, fica mais do que evidente a necessidade de investimento público em ciência e divulgação científica, seja para combater redes de desinformação quanto para propor soluções para as mais variadas questões humanas e tecnológicas. Nesse sentido, a edição 2020 da SECCOM se dará em torno da importância da Ciência como um todo, da Ciência da Computação, e do uso consciente/correto de dados para processamento. Esta edição será também uma homenagem a John Conway, um dos matemáticos cientistas mais carismáticos e importantes do mundo contemporâneo, que pesquisou e popularizou a teoria de Autômatos Celulares e o qual infelizmente perdemos para a Covid-19.</v-row>
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
