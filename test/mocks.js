const getLinksDirectory = [
    {
      URL: 'https://es.pikipedia.org/wiki/Markdown',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://es.wikipedia.org/wiki/Markdon',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://ndejs.org/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://developers.google.com/v81/',
      Text: 'motor de JavaScript V8 de Chrome',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://platzi.com/',
      Text: 'platzi',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md'
    },
    {
      URL: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
      Text: 'Uso de callbacks.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md'
    },
    {
      URL: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
      Text: 'Consumo de Promesas.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md'
    },
    {
      URL: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
      Text: 'Creación de Promesas.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md'
    }
  ]
  
  const validateLinksDirectory = [
    {
      URL: 'https://es.pikipedia.org/wiki/Markdown',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'Error en el servidor, no se encuentra la pagina => FetchError: request to https://es.pikipedia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.pikipedia.org'
    },
    {
      URL: 'https://es.wikipedia.org/wiki/Markdon',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'FAIL',
      statusNumber: 404
    },
    {
      URL: 'https://ndejs.org/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'Error en el servidor, no se encuentra la pagina => FetchError: request to https://ndejs.org/ failed, reason: getaddrinfo ENOTFOUND ndejs.org'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://developers.google.com/v81/',
      Text: 'motor de JavaScript V8 de Chrome',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'FAIL',
      statusNumber: 404
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://platzi.com/',
      Text: 'platzi',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
      Text: 'Uso de callbacks.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
      Text: 'Consumo de Promesas.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
      Text: 'Creación de Promesas.',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      status: 'OK',
      statusNumber: 200
    }
  ]
  
  const statsLinksDirectory = [
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      Unique: 5,
      Total: 6
    },
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      Unique: 4,
      Total: 4
    }
  ]
  
  const statsValidateLinksDirectory = [
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      Unique: 5,
      Total: 6,
      Broken: 4
    },
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/prueba.md',
      Unique: 4,
      Total: 4,
      Broken: 0
    }
  ]
  
  // archivo markdown
  
  const getLinksFile = [
    {
      URL: 'https://es.pikipedia.org/wiki/Markdown',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://es.wikipedia.org/wiki/Markdon',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://ndejs.org/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://developers.google.com/v81/',
      Text: 'motor de JavaScript V8 de Chrome',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md'
    }
  ]
  
  const validateLinksFile = [
    {
      URL: 'https://es.pikipedia.org/wiki/Markdown',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'Error en el servidor, no se encuentra la pagina => FetchError: request to https://es.pikipedia.org/wiki/Markdown failed, reason: getaddrinfo ENOTFOUND es.pikipedia.org'
    },
    {
      URL: 'https://es.wikipedia.org/wiki/Markdon',
      Text: 'Markdown',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'FAIL',
      statusNumber: 404
    },
    {
      URL: 'https://ndejs.org/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'Error en el servidor, no se encuentra la pagina => FetchError: request to https://ndejs.org/ failed, reason: getaddrinfo ENOTFOUND ndejs.org'
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'OK',
      statusNumber: 200
    },
    {
      URL: 'https://developers.google.com/v81/',
      Text: 'motor de JavaScript V8 de Chrome',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'FAIL',
      statusNumber: 404
    },
    {
      URL: 'https://nodejs.org/es/',
      Text: 'Node.js',
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      status: 'OK',
      statusNumber: 200
    }
  ]
  
  const statsLinksFile = [
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      Unique: 5,
      Total: 6
    }
  ]
  
  const statsValidateLinksFile = [
    {
      File: '/mnt/c/Users/Laboratoria2/bog001-md-links/test/test_directory/README.md',
      Unique: 5,
      Total: 6,
      Broken: 4
    }
  ]
  
  module.exports = {
    getLinksDirectory,
    validateLinksDirectory,
    statsLinksDirectory,
    statsValidateLinksDirectory,
    getLinksFile,
    validateLinksFile,
    statsLinksFile,
    statsValidateLinksFile,
  };