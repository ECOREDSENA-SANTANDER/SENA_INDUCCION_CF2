export default {
  global: {
    componenteFormativo: 'Formación virtual en el SENA',
    descripcionCurso:
      'El SENA cuenta con formación profesional virtual la cual tiene características especiales para su desarrollo, así mismo, conozca las diferentes oportunidades de formación e inserción laboral que ofrecemos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La formación virtual en el SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ventajas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recursos para la formación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Evaluación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Oportunidades de formación e inserción laboral',
            hash: 't_1_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación',
      referencia:
        'Acuerdo 007 de 2012 [Servicio Nacional de Aprendizaje SENA]. Por el cual se adopta el reglamento del aprendiz SENA. Mayo 3 de 2012',
      tipo: 'PDF',
      descarga: '/downloads/Reglamento_Aprendiz_Acuerdo.pdf',
    },
    {
      tema: 'Formación ',
      referencia:
        'SENA, (2013). Proyecto Educativo Institucional [Ebook]. Retrieved 3 June 2021, from https://hdl.handle.net/11404/3253.',
      tipo: 'PDF',
      descarga: '/downloads/PEI_SENA.pdf',
    },
    {
      tema: 'Formación ',
      referencia:
        'Amorós, A. (2011). Desarrollo e implementación de la formación por proyectos en el SENA [Ebook]. Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ).',
      tipo: 'PDF',
      descarga: '/downloads/Desarrollo_implementacion_formacion_proyectos.pdf',
    },
    {
      tema: 'Formación ',
      referencia:
        'Zapata, L. (2018). El instructor y la formación por proyectos en el SENA. Rutas De formación: Prácticas Y Experiencias, 5, 63–70. https://doi.org/10.24236/24631388.n5.2017.1308',
      tipo: 'PDF',
      descarga: '/downloads/Instructor_y_formacion_poryectos_SENA.pdf',
    },
    {
      tema: 'Formación ',
      referencia:
        'SENA, (2014). Gestión de proyectos de formación desde la ingeniería pedagógica. ',
      tipo: 'PDF',
      descarga: '/downloads/Gestion_proyectos_formacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aula virtual',
      significado:
        'Entorno telemático en el cual el aprendiz tiene acceso a la red (intranet o internet) para desarrollar un proceso de aprendizaje. Permite la consulta de la documentación de estudio, el desarrollo de actividades de aprendizaje y la utilización de herramientas de interacción como foros de discusión y correo electrónico, entre otros',
    },
    {
      termino: 'TIC',
      significado:
        'Las Tecnologías de la Información y la Comunicación tomaron fuerza en el mundo a partir del siglo XX. Una época colmada de cambios tecnológicos, de la creación de la Internet (1969) de los avances en cibernética, informática, telecomunicaciones y otras ciencias. <br>Sin embargo, su auge se ha evidenciado en el S. XXI, en el cual los sujetos encuentran cada vez más, la necesidad de tecnología para llevar a cabo sus actividades diarias.<br>Las TIC han permeado el ámbito empresarial, bancario, comercial, de ocio y en general la mayoría de los espacios de interacción y comunicación de la humanidad, siendo la educación uno de los ambientes que más ha sacado provecho de estos desarrollos.',
    },
  ],
  referencias: [
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co: Familia Sena – Egresados.',
    },
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co: Observatorio Laboral y ocupacional.',
    },
    {
      referencia:
        'SENA. (2018). Página oficial www.sena.edu.co: Internacionalización SENA.',
    },
    {
      referencia:
        'SENA (2003). Metodología para evaluar y certificar competencias laborales.',
    },
    {
      referencia:
        '[Imagen de convenios con instituciones de educación superior 2016]. ',
      link:
        'http://www.sena.edu.co/es-co/comunidades/egresados/Paginas/default.aspx',
    },
    {
      referencia: '[Imagen de fondo emprender 2018]. ',
      link: 'http://www.fondoemprender.com/SitePages/Home.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'María Cecilia Aroca Díaz',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Marisol Báez Solano',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Frankli Gómez Cardona',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-pedagogo',
          centro: 'Centro de Tecnologías Agroindustriales - Regional Valle',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carla Liliana Sequera Vargas',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
