<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La formación virtual en el SENA


    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Definición

    p(data-aos="fade") La formación profesional Integral se centra en generar competencias que le permitan al egresado integrar tecnologías, plantear y solucionar creativamente problemas para lograr eficacia en el saber hacer, además brindarle movilidad en la estructura ocupacional.
    p(data-aos="fade") En este orden de ideas, las competencias se desarrollan de manera permanente en el proceso formativo, su punto de partida lo constituye el proyecto de vida personal del Aprendiz, estas se contextualizan en el marco de un Programa de Formación y se evidencian en los entornos sociales y productivos en el cual el Aprendiz interviene mediante sus desempeños.

    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Características
    
    p(data-aos="fade") La educación virtual hace referencia a los procesos de enseñanza-aprendizaje-evaluación que se llevan a cabo a partir de la interacción de sus actores en un ambiente mediado por las tecnologías de la información y comunicación -TIC.
    p.mb-5(data-aos="fade") En este sentido, el SENA desde su oferta de formación virtual posibilita a los aprendices la interacción en un ambiente de aprendizaje en donde contarán con el acompañamiento y orientación de sus instructores, así como también, la opción de ajustar sus horarios de estudio según convenga a sus necesidades y acorde con el cronograma de trabajo propuesto.
    
    H4.mb-4 A continuación, se destacan las principales características de esta modalidad:

    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3  Ventajas
    
    p.mb-5(data-aos="fade") De acuerdo con el Ministerio de Educación Nacional, la formación virtual tiene múltiples fortalezas entre ellas, que se ajusta a las necesidades y tiempos de los aprendices, permitiéndoles realizar un proceso educativo en cualquier momento y lugar. En este sentido, facilita el acceso a la educación a las personas que se encuentran en zonas de difícil acceso, trabajan y requieren una mayor flexibilidad de horarios.
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/icono1.svg', alt='')
          
        p.text-1.text-center Permite llegar a las regiones más apartadas, traspasar fronteras, apoyar a las personas que tienen menos recursos económicos con educación de alta calidad. 

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/icono2.svg', alt='')
        
        p.text-1.text-center Favorece el desarrollo de competencias en el uso de la tecnología, el aprendizaje autónomo, el trabajo en equipo y la posibilidad de conocer experiencias e intercambiar con compañeros de diferentes regiones, generando habilidades adicionales para ingresar al mercado laboral con mayor facilidad.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/icono3.svg', alt='')
          
        p.text-1.text-center Facilita el acceso a nuevos objetos de conocimiento: materiales interactivos y dinámicos que propician la comprensión de diversos temas.   

    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4  Recursos para la formación

    p(data-aos="fade") Para participar en la formación titulada y a distancia con experticia y pertinencia, es necesario reconocer conceptos institucionales propios de la modalidad. En este caso, socializamos los siguientes: 
    
    
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5  Evaluación

    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6  Oportunidades de formación e inserción laboral
    
    p(data-aos="fade") El egresado SENA es por definición una persona con una formación integral, es decir, que además de ser un gran profesional, formado con los más altos estándares del mercado mundial, también es una persona formada en valores y en habilidades blandas.
    p(data-aos="fade") El SENA tiene el espacio para que el egresado siga vinculado con la Entidad de una manera activa a través de:
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
