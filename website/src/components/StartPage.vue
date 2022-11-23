<template>
  <v-container id="start-page">
    <v-col class="d-flex align-center flex-column" style="min-height: 90vh">
      <v-row class="d-flex align-center mobile-flex-column">
        <div class="text-h1 roboto-mono" v-text="'SECCOM'"></div>
        <div class="text-h1 blue-text-must-click roboto-mono" v-text="2022"></div>
      </v-row>
      <v-col class="d-flex flex-column justify-center">
        <v-row class="flex-grow-0 text-h5 roboto-mono">Semana Acadêmica da Computação e Sistemas</v-row>
        <v-row class="flex-grow-0 text-h5 roboto-mono">De 29 de novembro a 02 de dezembro</v-row>

        <v-row class="flex-grow-0 roboto-mono my-8">A SECCOM (Semana Acadêmica da Computação da UFSC) 2022 ocorre no período entre 29/11 e 02/12 nas dependências do Departamento de Informática e Estatística (INE) da UFSC.<br>Pela primeira vez a organização da SECCOM é responsabilidade conjunta do PET Computação, do CALICO (Centro Acadêmico Livre da Computação) e do PPGCC (Programa de Pós-Graduação em Ciência da Computação) da UFSC. A intenção é agregar as semanas acadêmicas da graduação e da pós-graduação do INE em um único evento.<br>O tema da SECCOM este ano será “A Computação Volta às Aulas Presenciais: Você Conhece os Laboratórios do INE?”. A ideia, trazida pelos alunos do PET, CALICO e PPGCC, é que o evento permita que os atuais alunos dos nossos cursos, muitos deles conhecendo a UFSC e o nosso departamento, de forma presencial, apenas este ano, devido à pandemia, tenham contato com os laboratórios do INE (seus objetivos, suas pesquisas e seus integrantes, dentre outras informações) e descubram o que fazemos no INE em termos de pesquisa.<br>A programação da SECCOM não está limitada ao tema recém descrito. Ela inclui também minicursos, defesas de trabalhos em nível de pós-graduação e palestras internacionais. Mais detalhes estão disponíveis no link da Programação. Desejamos a todos os participantes um ótimo evento!</v-row>
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
