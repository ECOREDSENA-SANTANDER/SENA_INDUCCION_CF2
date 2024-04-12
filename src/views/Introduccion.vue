<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-9(data-aos="fade-right")
        .cajon.color-primario.p-4.py-md-5.pe-lg-5.mb-4.mb-lg-0
          p.mb-0.pe-lg-5 Conocer la caracterización de la formación virtual en el SENA le permitirá a usted como aprendiz hacer uso de los recursos dispuestos para su formación, comprender el compromiso que ha adquirido para su proceso formativo y explorar las diferentes oportunidades de formación que le brinda el SENA, además de las oportunidades de inserción al mercado laboral colombiano.
      .col-lg-3.col-md-7.col-10(data-aos="fade-left")
        .img-esp
          img(src='@/assets/curso/temas/intro.png', alt='')
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
