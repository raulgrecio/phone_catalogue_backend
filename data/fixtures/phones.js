// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongodb = require('mongodb')
const Double = mongodb.Double
const Timestamp = mongodb.Timestamp

module.exports = [
  {
    model: 'Xiaomi Redmi Note 8 Pro 128GB+6GB RAM',
    brand: 'Xiaomi',
    price: new Double(199.0),
    description:
      "<div><p>¿Buscas un terminal liviano? Si la respuesta es 'sí', te encantará este ligero móvil de Xiaomi.</p><p>Si buscas un teléfono manejable, este Xiaomi cuenta con una pantalla de formato reducido de solo 6,53 pulgadas (16.59 cm) y una resolución de FHD+ (2340x1080), que permite que el móvil se pueda usar cómodamente. Dentro de su carcasa tiene un microprocesador fabricado por MediaTek de 8 núcleos.</p><p> Amplía fácilmente la capacidad multimedia de tu móvil a través de soporte Bluetooth v5.0 para que puedas sincronizar el móvil con el coche, y conexiones de audio de tipo Bluetooth y Estéreo 3.5mm. Este teléfono tiene una cámara 64 Mpx, con una apertura f/1.89 y 4K (3840x2160) píxeles de resolución para vídeo para que puedas sacar instantáneas básicas; además dispone de cámara frontal de 20 Mpx, Full HD (1920x1080) píxeles para vídeo y f/2.0 de apertura para poder hacer retratos. Podrás conectarte a redes de tipo Wi-Fi, así como acceso a redes móviles 4g (LTE), 3g (UMTS) y 2g (GSM).</p><p>Es fácil de manejar gracias a sus únicamente 199,8 gramos, para unas dimensiones de 16,135 x 7,64 x 0,879 cm. Es posible utilizar dos tarjetas SIM gracias a su dual-SIM. Incorpora otras prestaciones como conectividad NFC, sensor biométrico de tipo huella y posicionamiento gracias a A-GPS, BeiDou (BDS), GLONASS, GPS y GALILEO con los mejores mapas.</p></div>",
    colors: [
      {
        name: 'Gris mineral',
        color: '#848c97'
      },
      {
        name: 'Blanco nácar',
        color: '#d4d4d4'
      },
      {
        name: 'Verde bosque',
        color: '#435643'
      },
      {
        name: 'Azul oscuro',
        color: '#516588'
      }
    ],
    images: [
      'https://cdn.phonehouse.es/res/products-image/4/2/3/5/5/423559-2770588.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/4/2/3/5/5/423559-2321067.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/4/2/3/5/5/423559-2770588.jpg?&w=380&h=380&trim=auto&auto=format'
    ],
    featured: [
      {
        icon: 'memory',
        name: 'Procesador',
        value: 'MediaTek Helio G90T 8 núcleos'
      },
      {
        icon: 'cellphone-screenshot',
        name: 'Pantalla',
        value: '6.53 " / 16,59 cm'
      },
      {
        icon: 'camera-outline',
        name: 'Cámara',
        value: 'Principal: 64 Mpx Selfie: 20 Mpx'
      },
      {
        icon: 'battery-medium',
        name: 'Batería',
        value: '4500 mAh'
      },
      {
        icon: 'harddisk',
        name: 'Memoria interna',
        value: '128 GB'
      },
      {
        icon: 'cube-scan',
        name: 'RAM',
        value: '6GB'
      }
    ],
    sections: [
      {
        name: 'Pantalla',
        features: [
          {
            name: 'Tamaño de pantalla',
            value: '6.53 " / 16,59 cm'
          },
          {
            name: 'Resolución pantalla',
            value: 'FHD+ (2340x1080)'
          },
          {
            name: 'Protección pantalla',
            value: 'Gorilla Glass 5'
          }
        ]
      },
      {
        name: 'Cámara',
        features: [
          {
            name: 'Resolución cámara principal',
            value: '64 Mpx'
          },
          {
            name: 'Apertura cámara principal',
            value: 'f/1.89'
          },
          {
            name: 'Angulo cámara principal',
            value: '79 º'
          },
          {
            name: 'Tamaño sensor principal',
            value: '1/1.7 (7.6x5.7mm)'
          },
          {
            name: 'Tecnología cámara principal',
            value: 'Superpíxel'
          },
          {
            name: 'Flash cámara principal',
            value: 'Flash de tono único'
          },
          {
            name: 'Resolución video cámara principal',
            value: '4K (3840x2160) pixels'
          },
          {
            name: 'Slowmotion',
            value: 'FullHD a 120fps, HD a 960fps/'
          },
          {
            name: 'Resolución cámara principal secundaria',
            value: '8 Mpx'
          },
          {
            name: 'Apertura cámara principal secundaria',
            value: 'f/2.2'
          },
          {
            name: 'Angulo cámara principal secundaria',
            value: '120 º'
          },
          {
            name: 'Resolución cámara tercera',
            value: '2 Mpx'
          },
          {
            name: 'Resolución cámara cuarta',
            value: '2 Mpx'
          },
          {
            name: 'Resolución cámara frontal',
            value: '20 Mpx'
          },
          {
            name: 'Apertura cámara frontal',
            value: 'f/2.0'
          },
          {
            name: 'Resolución video cámara frontal',
            value: 'Full HD (1920x1080) pixels'
          }
        ]
      },
      {
        name: 'Memoria y almacenamiento',
        features: [
          {
            name: 'Memoria RAM',
            value: '6GB'
          },
          {
            name: 'Memoria interna',
            value: '128 GB'
          }
        ]
      },
      {
        name: 'Procesador',
        features: [
          {
            name: 'Fabricante procesador',
            value: 'MediaTek'
          },
          {
            name: 'Modelo procesador',
            value: 'Helio G90T'
          },
          {
            name: 'Núcleos procesador',
            value: '8'
          },
          {
            name: 'Velocidad de procesador',
            value: '2,05 GHz'
          },
          {
            name: 'Procesador Gráfico',
            value: 'Mali G76 MC4'
          }
        ]
      },
      {
        name: 'Sistema Operativo',
        features: [
          {
            name: 'Sistema operativo móvil',
            value: 'Android'
          },
          {
            name: 'Versión sistema operativo',
            value: 'Pie (9.0)'
          },
          {
            name: 'Capa de personalización Android',
            value: 'MIUI'
          },
          {
            name: 'Tienda de aplicaciones',
            value: 'Google Play'
          }
        ]
      },
      {
        name: 'Batería',
        features: [
          {
            name: 'Capacidad batería',
            value: '4500 mAh'
          },
          {
            name: 'Carga rápida',
            value: 'Si'
          }
        ]
      },
      {
        name: 'USB',
        features: [
          {
            name: 'Tipo de conexiones',
            value: 'Tipo C'
          }
        ]
      },
      {
        name: 'Sensores',
        features: [
          {
            name: 'Sensores',
            value: 'Acelerómetro, Giroscopio, Luz, Proximidad'
          },
          {
            name: 'Sistema seguridad biométrico',
            value: 'Huella'
          }
        ]
      },
      {
        ul: {
          name: 'Redes',
          features: [
            {
              name: '4G/LTE',
              value:
                '1700MHz (B4), 1800MHz (B3), 1900MHz (B2), 2100MHz (B1), 2600MHz (B7), 700MHz (B28), 800MHz (B20), 850MHz (B5), 900MHz (B8)'
            },
            {
              name: '3G/UMTS',
              value: '1700MHz (B4), 1900MHz (B2), 2100MHz (B1), 850MHz (B5), 900MHz (B8)'
            },
            {
              name: '2G/GSM',
              value: '1800MHz, 1900MHz, 850MHz, 900MHz'
            },
            {
              name: 'Tipo SIM 1',
              value: 'Nano-SIM'
            },
            {
              name: 'Tipo SIM 2',
              value: 'Nano-SIM'
            }
          ]
        }
      },
      {
        name: 'Conectividad',
        features: [
          {
            name: 'Wi-Fi',
            value: 'a, ac, b, Dual-Band (2.4GHz y 5GHz), g, n, Wifi Direct'
          },
          {
            name: 'Bluetooth',
            value: 'v5.0'
          },
          {
            name: 'NFC',
            value: 'Sí'
          },
          {
            name: 'Infrarrojos',
            value: 'Si'
          },
          {
            name: 'Geolocalización',
            value: 'A-GPS, BeiDou (BDS), GALILEO, GLONASS, GPS'
          }
        ]
      },
      {
        name: 'Audio',
        features: [
          {
            name: 'Conector audio',
            value: 'Bluetooth, Estéreo 3.5mm'
          }
        ]
      },
      {
        name: 'Características físicas',
        features: [
          {
            name: 'Alto en cm',
            value: '16.135 cm'
          },
          {
            name: 'Ancho en cm',
            value: '7.64 cm'
          },
          {
            name: 'Profundo en cm',
            value: '0.879 cm'
          },
          {
            name: 'Peso',
            value: '199.8 g'
          }
        ]
      }
    ],
    created_at: new Timestamp('2020-11-07T12:56:59.301Z'),
    updated_at: new Timestamp('2014-11-07T12:56:59.301Z')
  },
  {
    model: 'Apple iPhone X 64GB',
    brand: 'Apple',
    price: new Double(289.0),
    description:
      '<div><p>Con el móvil de Apple disfrutarás del procesador de alta potencia, pantalla de gran tamaño y además podrás hacer fotos de calidad gracias a su cámara de altas prestaciones. </p><p>Este terminal tiene una cámara principal de altas prestaciones de 12 Mpx, con una apertura f/1.8 y 4K (3840x2160) píxeles de resolución para vídeo con una apertura f/1.8; también cuenta con cámara frontal de 7 Mpx, Full HD (1920x1080) píxeles para vídeo y f/2.2 de apertura para selfies más naturales. Si te gustan los móviles con pantalla grande, éste te va a encantar: tiene una pantalla amplia de 5,8 pulgadas (14.73 cm) de diagonal con una resolución de (2436x1125) que brinda una imagen ampliada. Su hardware destaca por un poderoso microprocesador desarrollado por Apple de 6 núcleos que consigue unas buenas prestaciones. Equipa una batería de 2716 mAh de capacidad, que podrás cargar con su tecnología de carga inalámbrica de alimentación, además de tener conectividad de tipos Lightning y Qi.</p> <p>Puedes ampliar sus capacidades utilizando soporte Bluetooth v5.0 para sincronizarlo con tu coche, y conexiones para sonido de tipo Bluetooth y Lightning. Conéctate a redes de tipo Wi-Fi, y también tendrás acceso a redes móviles 4g (LTE), 3g (UMTS) y 2g (GSM). Puedes usar dos tarjetas SIM gracias a que cuenta con dual-SIM. </p><p>Se trata de un teléfono con un peso ideal, de apenas 174 gramos a pesar de contar con una pantalla por encima de la media, con unas medidas de 14,36 cm de alto, 7,09 cm de ancho y 0,77 cm de grosor. Ha sido diseñado con más capacidades como sensor biométrico de tipo facial para desbloquear el móvil con rapidez, conectividad NFC, posicionamiento por GPS, GALILEO, Quasi-Zenith (QZSS), GLONASS y A-GPS y tieneuna superficie resistente al agua gracias a que cumple conla norma IP67.</p></div>',
    colors: [
      {
        name: 'Gris espacial',
        color: '#000000'
      },
      {
        name: 'Plata',
        color: '#BEBEBE'
      }
    ],
    images: [
      'https://cdn.phonehouse.es/res/product450/resource_359190.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/viewone450/resource_359194.jpg?&w=380&h=380&trim=auto&auto=format'
    ],
    featured: [
      {
        icon: 'memory',
        name: 'Procesador',
        value: 'Apple A11 Bionic, Motor neuronal, Coprocesador de movimiento M11 6 núcleos'
      },
      {
        icon: 'cellphone-screenshot',
        name: 'Pantalla',
        value: 'OLED 5.8 " / 14,73 cm'
      },
      {
        icon: 'camera-outline',
        name: 'Cámara',
        value: 'Principal: 12 Mpx Selfie: 7 Mpx'
      },
      {
        icon: 'battery-medium',
        name: 'Batería',
        value: 'Li-ion 2716 mAh'
      },
      {
        icon: 'harddisk',
        name: 'Memoria interna',
        value: '64 GB'
      },
      {
        icon: 'cube-scan',
        name: 'RAM',
        value: '3GB'
      }
    ],
    sections: [
      {
        name: 'Pantalla',
        features: [
          {
            name: 'Tamaño de pantalla',
            value: '5.8 " / 14,73 cm'
          },
          {
            name: 'Resolución pantalla',
            value: '(2436x1125)'
          },
          {
            name: 'Tipo de pantalla',
            value: 'OLED'
          },
          {
            name: 'Densidad de pixeles pantalla',
            value: '458 ppp'
          }
        ]
      },
      {
        name: 'Cámara',
        features: [
          {
            name: 'Resolución cámara principal',
            value: '12 Mpx'
          },
          {
            name: 'Apertura cámara principal',
            value: 'f/1.8'
          },
          {
            name: 'Estabilizador cámara principal',
            value: 'Óptico (OIS)'
          },
          {
            name: 'Flash cámara principal',
            value: 'Flash True Tone'
          },
          {
            name: 'Resolución video cámara principal',
            value: '4K (3840x2160) pixels'
          },
          {
            name: 'Slowmotion',
            value: 'FullHD a 240fps/'
          },
          {
            name: 'Resolución cámara principal secundaria',
            value: '12 Mpx'
          },
          {
            name: 'Apertura cámara principal secundaria',
            value: 'f/2.4'
          },
          {
            name: 'Resolución cámara frontal',
            value: '7 Mpx'
          },
          {
            name: 'Apertura cámara frontal',
            value: 'f/2.2'
          },
          {
            name: 'Tecnología cámara frontal',
            value: 'Modo Retrato, Animoji, Modo ráfaga'
          },
          {
            name: 'Flash cámara frontal',
            value: 'Retina Flash'
          },
          {
            name: 'Resolución video cámara frontal',
            value: 'Full HD (1920x1080) pixels'
          }
        ]
      },
      {
        name: 'Memoria y almacenamiento',
        features: [
          {
            name: 'Memoria RAM',
            value: '3GB'
          },
          {
            name: 'Memoria interna',
            value: '64 GB'
          }
        ]
      },
      {
        name: 'Procesador',
        features: [
          {
            name: 'Fabricante procesador',
            value: 'Apple'
          },
          {
            name: 'Modelo procesador',
            value: 'A11 Bionic, Motor neuronal, Coprocesador de movimiento M11'
          },
          {
            name: 'Núcleos procesador',
            value: '6'
          },
          {
            name: 'Procesador Gráfico',
            value: 'Apple GPU'
          }
        ]
      },
      {
        name: 'Sistema operativo',
        features: [
          {
            name: 'Sistema operativo móvil',
            value: 'iOS'
          },
          {
            name: 'Versión sistema operativo',
            value: 'iOS 11'
          },
          {
            name: 'Tienda de aplicaciones',
            value: 'App Store'
          }
        ]
      },
      {
        name: 'Batería',
        features: [
          {
            name: 'Capacidad batería',
            value: '2716 mAh'
          },
          {
            name: 'Tecnología batería',
            value: 'Li-ion'
          },
          {
            name: 'Carga inalámbrica (Qi)',
            value: 'Si'
          },
          {
            name: 'Carga rápida',
            value: 'Si'
          }
        ]
      },
      {
        name: 'USB',
        features: [
          {
            name: 'Tipo de conexiones',
            value: 'Lightning, Qi'
          }
        ]
      },
      {
        name: 'Sensores',
        features: [
          {
            name: 'Sensores',
            value: 'Acelerómetro, Barómetro, Giroscopio, Luz, Magnetómetro (Hall)'
          },
          {
            name: 'Sistema seguridad biométrico',
            value: 'Facial'
          }
        ]
      },
      {
        name: 'Redes',
        features: [
          {
            name: '4G/LTE',
            value:
              '1700MHz (B4), 1800MHz (B3), 1900MHz (B2), 2100MHz (B1), 2600MHz (B7), 700MHz (B12), 700MHz (B28), 800MHz (B20), 850MHz (B5), 900MHz (B8)'
          },
          {
            name: '3G/UMTS',
            value: '1700MHz (B4), 1900MHz (B2), 2100MHz (B1), 850MHz (B5), 900MHz (B8)'
          },
          {
            name: '2G/GSM',
            value: '1800MHz, 1900MHz, 850MHz, 900MHz'
          },
          {
            name: 'Tipo SIM 1',
            value: 'Nano-SIM'
          }
        ]
      },
      {
        name: 'Conectividad',
        features: [
          {
            name: 'Wi-Fi',
            value: 'ac, b, Dual-Band (2.4GHz y 5GHz), g, n'
          },
          {
            name: 'Bluetooth',
            value: 'v1.0, v1.1, v1.2, v2.0, v2.1, v3.0, v4.0, v4.1, v4.2, v5.0'
          },
          {
            name: 'NFC',
            value: 'Sí'
          },
          {
            name: 'Geolocalización',
            value: 'A-GPS, GALILEO, GLONASS, GPS, Quasi-Zenith (QZSS)'
          }
        ]
      },
      {
        name: 'Audio',
        features: [
          {
            name: 'Conector audio',
            value: 'Bluetooth, Lightning'
          },
          {
            name: 'Número de altavoces',
            value: '2'
          },
          {
            name: 'Número de micrófonos',
            value: '2'
          }
        ]
      },
      {
        name: 'Características físicas',
        features: [
          {
            name: 'Grado de protección IP',
            value: 'IP67'
          },
          {
            name: 'Alto en cm',
            value: '14.36 cm'
          },
          {
            name: 'Ancho en cm',
            value: '7.09 cm'
          },
          {
            name: 'Profundo en cm',
            value: '0.77 cm'
          },
          {
            name: 'Peso',
            value: '174 g'
          }
        ]
      }
    ],
    created_at: new Timestamp('2020-11-07T12:56:59.301Z'),
    updated_at: new Timestamp('2014-11-07T12:56:59.301Z')
  },
  {
    model: 'Samsung Galaxy S7',
    brand: 'Samsung',
    price: new Double(149.0),
    description:
      '<div>El Samsung Galaxy S7 Negro ofrece diversidad de novedades:<br><br>- Acabado en vidrio que consigue un diseño único.<br>- Mejoras importantes en ambas cámaras, mayor resolución y una apertura de F1.7.<br>- Carga ultrarrápida, con la que cargarás el móvil un 83% en 30 minutos, más rápido que en modelos anteriores. Además de carga inalámbrica.<br>- Pantalla Quad HD (1440 x 2560) Super AMOLED de 5,1" con la que podrás disfrutar de una nitidez increíble.<br>- Seguridad mejorada gracias a la detección de huellas dactilares y KNOX Enabled App proporciona seguridad adicional para aislar y cifrar de forma segura tus datos confidenciales<br>- Arquitectura de 64 bits con la que podrás realizar multitud de tareas a gran velocidad.<br>- Android v6.0 (Marshmallow)<br>- Bluetooth v4.2<br>- Cámaras de 12 mpx la trasera y 5 mpx la delantera para realizar selfies o videollamadas.<br>- Batería de litio de 3000 mAh<br>- Memoria de 32Gb ampliable por micro SD hasta 200GB<br>- Samsung Pay (Visa, MasterCard certificado)<br>- IP68 certificado - resistente al polvo y al agua hasta 1.5 metros y 30 minutos.<br><br>-Otras características:<br>- S-Voice <br>- OneDrive (115 GB almacenamiento en la nube)<br>- Cancelacion de ruido en el micro<br>- MP4/DivX/XviD/WMV/H.264 reproductor<br>- MP3/WAV/WMA/eAAC+/FLAC reproductor<br>- Editor Foto/video <br>- Editor Document</div>',
    colors: [
      {
        name: 'Negro',
        color: '#000000'
      },
      {
        name: 'Oro',
        color: '#d5aa2a'
      },
      {
        name: 'Plata',
        color: '#BEBEBE'
      },
      {
        name: 'Blanco',
        color: '#ffffff'
      },
      {
        name: 'Oro rosa',
        color: '#E6BAAD'
      }
    ],
    images: [
      'https://cdn.phonehouse.es/res/product450/resource_330846.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/viewone450/resource_1536887.jpg?&w=380&h=380&trim=auto&auto=format'
    ],
    featured: [
      {
        icon: 'memory',
        name: 'Procesador',
        value: 'Samsung Exynos 8890 8 núcleos'
      },
      {
        icon: 'cellphone-screenshot',
        name: 'Pantalla',
        value: 'AMOLED 5.1 " / 12,95 cm'
      },
      {
        icon: 'camera-outline',
        name: 'Cámara',
        value: 'Principal: 12 Mpx Selfie: 5 Mpx'
      },
      {
        icon: 'battery-medium',
        name: 'Batería',
        value: 'Li-ion 3000 mAh'
      },
      {
        icon: 'harddisk',
        name: 'Memoria interna',
        value: '32 GB'
      },
      {
        icon: 'cube-scan',
        name: 'RAM',
        value: '4GB'
      }
    ],
    sections: [
      {
        name: 'Pantalla',
        features: [
          {
            name: 'Tamaño de pantalla',
            value: '5.1 " / 12,95 cm'
          },
          {
            name: 'Resolución pantalla',
            value: 'QHD (2560x1440)'
          },
          {
            name: 'Tipo de pantalla',
            value: 'AMOLED'
          },
          {
            name: 'Densidad de pixeles pantalla',
            value: '577 ppp'
          },
          {
            name: 'Protección pantalla',
            value: 'Gorilla Glass 4'
          }
        ]
      },
      {
        name: 'Cámara',
        features: [
          {
            name: 'Resolución cámara principal',
            value: '12 Mpx'
          },
          {
            name: 'Apertura cámara principal',
            value: 'f/1.7'
          },
          {
            name: 'Estabilizador cámara principal',
            value: 'Óptico (OIS)'
          },
          {
            name: 'Flash cámara principal',
            value: 'Flash LED'
          },
          {
            name: 'Resolución video cámara principal',
            value: '4K (3840x2160) pixels'
          },
          {
            name: 'Slowmotion',
            value: '4K a 30fps/'
          },
          {
            name: 'Resolución cámara frontal',
            value: '5 Mpx'
          },
          {
            name: 'Apertura cámara frontal',
            value: 'f/1.7'
          }
        ]
      },
      {
        name: 'Memoria y almacenamiento',
        features: [
          {
            name: 'Memoria RAM',
            value: '4GB'
          },
          {
            name: 'Memoria interna',
            value: '32 GB'
          },
          {
            name: 'Memoria disponible aprox. para el usuario',
            value: '24.5 GB'
          }
        ]
      },
      {
        name: 'Procesador',
        features: [
          {
            name: 'Fabricante procesador',
            value: 'Samsung'
          },
          {
            name: 'Modelo procesador',
            value: 'Exynos 8890'
          },
          {
            name: 'Núcleos procesador',
            value: '8'
          },
          {
            name: 'Velocidad de procesador',
            value: '4x2.3 GHz & 4x1.6 GHz'
          },
          {
            name: 'Procesador Gráfico',
            value: 'Mali-T880'
          }
        ]
      },
      {
        name: 'Sistema Operativo',
        features: [
          {
            name: 'Sistema operativo móvil',
            value: 'Android'
          },
          {
            name: 'Capa de personalización Android',
            value: 'TouchWiz'
          },
          {
            name: 'Tienda de aplicaciones',
            value: 'Google Play'
          }
        ]
      },
      {
        name: 'Batería',
        features: [
          {
            name: 'Capacidad batería',
            value: '3000 mAh'
          },
          {
            name: 'Tecnología batería',
            value: 'Li-ion'
          },
          {
            name: 'Carga inalámbrica (Qi)',
            value: 'Si'
          },
          {
            name: 'Carga rápida',
            value: 'Qualcomm Quick Charge 2.0'
          }
        ]
      },
      {
        name: 'USB',
        features: [
          {
            name: 'Tipo de conexiones',
            value: 'Micro USB, Qi'
          },
          {
            name: 'Velocidad USB',
            value: 'USB 2.0'
          }
        ]
      },
      {
        name: 'Sensores',
        features: [
          {
            name: 'Sensores',
            value: 'Acelerómetro, Barómetro, Giroscopio, Luz, Magnetómetro (Hall), Pulsómetro'
          },
          {
            name: 'Sistema seguridad biométrico',
            value: 'Huella'
          }
        ]
      },
      {
        name: 'Redes',
        features: [
          {
            name: '4G/LTE',
            value:
              '1700MHz (B4), 1800MHz (B3), 1900MHz (B2), 2100MHz (B1), 2300MHz (B40), 2600MHz (B7), 700MHz (B12), 800MHz (B20), 850MHz (B5), 900MHz (B8)'
          },
          {
            name: '3G/UMTS',
            value: '1700MHz (B4), 1900MHz (B2), 2100MHz (B1), 850MHz (B5), 900MHz (B8)'
          },
          {
            name: '2G/GSM',
            value: '1800MHz, 1900MHz, 850MHz, 900MHz'
          },
          {
            name: 'SAR en cabeza',
            value: '0.406 W/kg'
          },
          {
            name: 'SAR en cuerpo',
            value: '1.48 W/kg'
          },
          {
            name: 'Tipo SIM 1',
            value: 'Nano-SIM'
          }
        ]
      },
      {
        name: 'Conectividad',
        features: [
          {
            name: 'Wi-Fi',
            value: 'ac, b, Dual-Band (2.4GHz y 5GHz), g, n, Wifi Direct'
          },
          {
            name: 'Bluetooth',
            value: 'v1.0, v1.1, v1.2, v2.0, v2.1, v3.0, v4.0, v4.1, v4.2'
          },
          {
            name: 'NFC',
            value: 'Sí'
          },
          {
            name: 'Geolocalización',
            value: 'A-GPS, BeiDou (BDS), GLONASS, GPS'
          }
        ]
      },
      {
        name: 'Audio',
        features: [
          {
            name: 'Conector audio',
            value: 'Bluetooth, Estéreo 3.5mm'
          }
        ]
      },
      {
        name: 'Características físicas',
        features: [
          {
            name: 'Grado de protección IP',
            value: 'IP68'
          },
          {
            name: 'Alto en cm',
            value: '14.24 cm'
          },
          {
            name: 'Ancho en cm',
            value: '6.96 cm'
          },
          {
            name: 'Profundo en cm',
            value: '0.79 cm'
          },
          {
            name: 'Peso',
            value: '152 g'
          }
        ]
      }
    ],
    created_at: new Timestamp('2020-11-07T12:56:59.301Z'),
    updated_at: new Timestamp('2014-11-07T12:56:59.301Z')
  },
  {
    model: 'Samsung Galaxy A51 5G',
    brand: 'Samsung',
    price: new Double(299.0),
    description:
      '<div>Descubre el nuevo Samsung Galaxy A51 5G. Conectividad 5G, pantalla Infinity-O de 6.5", cuatro cámaras traseras, procesador Octa-Core, batería de larga duración y carga rápida de 15W.<br>Con la velocidad ultrarrápida de la red de nueva generación 5G juega, comparte, navega y realiza múltiples tareas como nunca antes en tu teléfono móvil. Experimenta latencias muy bajas y mantente siempre conectado con tu móvil Galaxy A51 5G. Rapidez y potencia para todo lo que hagas.<br>Sumérgete a fondo en los contenidos de tu teléfono. Su pantalla Infinity-O con tecnología Super AMOLED optimiza la simetría visual, minimiza los marcos y maximiza cada pulgada de espacio. Juega y visualiza tu contenido favorito en tu Galaxy A51 5G sin interrupciones, con la pantalla panorámica FHD + de 6.5".<br>Descubre su cámara cuádruple y haz capturas como un profesional desde tu smartphone. Fotografía cada detalle, guarda cada momento y amplía tu mundo con sus cuatro cámaras. Cámara principal de 48MP, cámara Ultra gran angular de 123° y 12MP, cámara macro mejorada de 5MP y cámara de profundidad de 5MP con Live Focus. Dispara y guarda cada imagen de tu vida en tu teléfono móvil con la mejor calidad.<br>Vive cada día a tope con tu Galaxy A51 5G a tu lado con su batería de 4.500 mAh. Llénalo de energía a toda velocidad con su carga rápida de 15W. El potente procesador Octa-Core y sus 6GB de RAM te dan la ventaja y el rendimiento que necesitas en cada partida, para que juegues a gran velocidad y con gráficos de alta calidad. Con 128GB de memoria interna, ampliables hasta a 1TB mediante tarjeta microSD, guarda mucho menos y elimina menos en tu teléfono.</div>',
    colors: [
      {
        name: 'Negro',
        color: '#000000'
      },
      {
        name: 'Blanco',
        color: '#ffffff'
      },
      {
        name: 'Rosa',
        color: '#be2d83'
      }
    ],
    images: [
      'https://cdn.phonehouse.es/res/products-image/8/8/7/9/8/887989-2862539.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/8/8/7/9/8/887989-2853576.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/8/8/7/9/8/887989-2853574.jpg?&w=380&h=380&trim=auto&auto=format'
    ],
    featured: [
      {
        icon: 'memory',
        name: 'Procesador',
        value: '8 núcleos'
      },
      {
        icon: 'cellphone-screenshot',
        name: 'Pantalla',
        value: 'Super AMOLED 6.5 " / 16,51 cm'
      },
      {
        icon: 'camera-outline',
        name: 'Cámara',
        value: 'Principal: 48 Mpx Selfie: 32 Mpx'
      },
      {
        icon: 'battery-medium',
        name: 'Batería',
        value: '4500 mAh'
      },
      {
        icon: 'harddisk',
        name: 'Memoria interna',
        value: '128 GB'
      },
      {
        icon: 'cube-scan',
        name: 'RAM',
        value: '6GB'
      }
    ],
    sections: [
      {
        name: 'Pantalla',
        features: [
          {
            name: 'Tamaño de pantalla',
            value: '6.5 " / 16,51 cm'
          },
          {
            name: 'Resolución pantalla',
            value: 'FHD+ (2400x1080)'
          },
          {
            name: 'Tipo de pantalla',
            value: 'Super AMOLED'
          }
        ]
      },
      {
        name: 'Cámara',
        features: [
          {
            name: 'Resolución cámara principal',
            value: '48 Mpx'
          },
          {
            name: 'Apertura cámara principal',
            value: 'f/2.0'
          },
          {
            name: 'Resolución cámara principal secundaria',
            value: '12 Mpx'
          },
          {
            name: 'Apertura cámara principal secundaria',
            value: 'f/2.2'
          },
          {
            name: 'Resolución cámara tercera',
            value: '5 Mpx'
          },
          {
            name: 'Apertura cámara tercera',
            value: 'f/2.2'
          },
          {
            name: 'Resolución cámara cuarta',
            value: '5 Mpx'
          },
          {
            name: 'Apertura cámara cuarta',
            value: 'f/2.4'
          },
          {
            name: 'Resolución cámara frontal',
            value: '32 Mpx'
          },
          {
            name: 'Apertura cámara frontal',
            value: 'f/2.2'
          }
        ]
      },
      {
        name: 'Memoria y almacenamiento',
        features: [
          {
            name: 'Memoria RAM',
            value: '6GB'
          },
          {
            name: 'Memoria interna',
            value: '128 GB'
          },
          {
            name: 'Memoria disponible aprox. para el usuario',
            value: '105.3 GB'
          },
          {
            name: 'Lector de tarjetas',
            value: 'Secure Digital (microSD)'
          },
          {
            name: 'Capacidad tarjeta de memoria',
            value: '1TB'
          }
        ]
      },
      {
        name: 'Procesador',
        features: [
          {
            name: 'Núcleos procesador',
            value: '8'
          }
        ]
      },
      {
        name: 'Sistema Operativo',
        features: [
          {
            name: 'Sistema operativo móvil',
            value: 'Android'
          },
          {
            name: 'Tienda de aplicaciones',
            value: 'Google Play'
          }
        ]
      },
      {
        name: 'Batería',
        features: [
          {
            name: 'Capacidad batería',
            value: '4500 mAh'
          }
        ]
      },
      {
        name: 'USB',
        features: [
          {
            name: 'Tipo de conexiones',
            value: 'Tipo C'
          }
        ]
      },
      {
        name: 'Sensores',
        features: [
          {
            name: 'Sensores',
            value: 'Acelerómetro, Giroscopio, Luz, Magnetómetro (Hall), Proximidad'
          },
          {
            name: 'Sistema seguridad biométrico',
            value: 'Huella'
          }
        ]
      },
      {
        name: 'Redes',
        features: [
          {
            name: '5G',
            value: 'Si'
          },
          {
            name: 'Tipo SIM 1',
            value: 'Nano-SIM'
          },
          {
            name: 'Tipo SIM 2',
            value: 'Nano-SIM'
          },
          {
            name: 'SIM 2 inutiliza MicroSD',
            value: 'Si'
          }
        ]
      },
      {
        name: 'Conectividad',
        features: [
          {
            name: 'Wi-Fi',
            value: 'ac, b, Dual-Band (2.4GHz y 5GHz), g, n, Wifi Direct'
          },
          {
            name: 'Bluetooth',
            value: 'v5.0'
          },
          {
            name: 'NFC',
            value: 'Sí'
          },
          {
            name: 'Geolocalización',
            value: 'BeiDou (BDS), GALILEO, GLONASS, GPS'
          }
        ]
      },
      {
        name: 'Audio',
        features: [
          {
            name: 'Conector audio',
            value: 'Estéreo 3.5mm'
          }
        ]
      },
      {
        name: 'Características físicas',
        features: [
          {
            name: 'Alto en cm',
            value: '15.89 cm'
          },
          {
            name: 'Ancho en cm',
            value: '7.36 cm'
          },
          {
            name: 'Profundo en cm',
            value: '0.87 cm'
          },
          {
            name: 'Peso',
            value: '187 g'
          }
        ]
      }
    ],
    created_at: new Timestamp('2020-11-07T12:56:59.301Z'),
    updated_at: new Timestamp('2014-11-07T12:56:59.301Z')
  },
  {
    model: 'Xiaomi Mi 9 Lite 64GB+6GB RAM',
    brand: 'Xiaomi',
    price: new Double(229.0),
    description:
      "<div><p>¿Necesitas un teléfono que pese poco? Si la respuesta es 'sí', seguro que te interesa este liviano móvil de Xiaomi. </p><p>Si buscas un teléfono más manejable, Xiaomi te presenta un modelo de tamaño reducido, pues dispone de una pantalla de formato reducido de solo 6,39 pulgadas (16.23 cm) con una resolución de FHD+ (2340x1080), que no ocupa espacio en tu bolsillo. En su interior alberga un procesador fabricado por Qualcomm de 8 núcleos, para que puedas utilizar el terminal en las situaciones más habituales. Disfruta de la carga inalámbrica que incorpora este móvil para alimentar su batería de 4030 mAh de capacidad , y tiene conexión de tipo Tipo C. Este Xiaomi tiene una cámara 48 Mpx para que puedas sacar instantáneas básicas; además cuenta con cámara frontal de 32 Mpx y f/2.0 de apertura que podrás usar en las videollamadas.</p><p>Equipado con la nueva tecnología 5g para que disfrutes de velocidades de vértigo de conexión nunca antes vistas, además de conectividad Wi-Fi. Puedes ampliar sus capacidades usando Bluetooth v5.0 para usarlo con tus altavoces compatibles, y conector de audio (Estéreo 3.5mm). Dispone lector de tarjetas Secure Digital (microSD). </p><p>Tiene otras prestaciones como sensores biométricos de tipo huella y facial y posicionamiento gracias a GLONASS, BeiDou (BDS), GPS, A-GPS y GALILEO con los mapas más detallados. Su ligereza es una de las características destacadas gracias a sus apenas 179 gramos, para unas dimensiones de 15,68 x 7,45 x 0,86 cm.</p></div>",
    colors: [
      {
        name: 'Azul boreal',
        color: '#5978b9'
      },
      {
        name: 'Gris onyx',
        color: '#848c97'
      },
      {
        name: 'Blanco perla',
        color: '#cceeed'
      }
    ],
    images: [
      'https://cdn.phonehouse.es/res/products-image/4/2/3/2/4/423240-2763105.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/4/2/3/2/4/423240-2313179.jpg?&w=380&h=380&trim=auto&auto=format',
      'https://cdn.phonehouse.es/res/products-image/4/2/3/2/4/423240-2763104.jpg?&w=380&h=380&trim=auto&auto=format'
    ],
    featured: [
      {
        icon: 'memory',
        name: 'Procesador',
        value: 'Qualcomm Snapdragon 710 8 núcleos'
      },
      {
        icon: 'cellphone-screenshot',
        name: 'Pantalla',
        value: 'Super AMOLED 6.39 " / 16,23 cm'
      },
      {
        icon: 'camera-outline',
        name: 'Cámara',
        value: 'Principal: 48 Mpx Selfie: 32 Mpx'
      },
      {
        icon: 'battery-medium',
        name: 'Batería',
        value: 'LiPo 4030 mAh'
      },
      {
        icon: 'harddisk',
        name: 'Memoria interna',
        value: '64 GB'
      },
      {
        icon: 'cube-scan',
        name: 'RAM',
        value: '6GB'
      }
    ],
    sections: [
      {
        name: 'Pantalla',
        features: [
          {
            name: 'Tamaño de pantalla',
            value: '6.39 " / 16,23 cm'
          },
          {
            name: 'Resolución pantalla',
            value: 'FHD+ (2340x1080)'
          },
          {
            name: 'Tipo de pantalla',
            value: 'Super AMOLED'
          },
          {
            name: 'Densidad de pixeles pantalla',
            value: '403 ppp'
          }
        ]
      },
      {
        name: 'Cámara',
        features: [
          {
            name: 'Resolución cámara principal',
            value: '48 Mpx'
          },
          {
            name: 'Resolución cámara principal secundaria',
            value: '8 Mpx'
          },
          {
            name: 'Resolución cámara tercera',
            value: '2 Mpx'
          },
          {
            name: 'Resolución cámara frontal',
            value: '32 Mpx'
          },
          {
            name: 'Apertura cámara frontal',
            value: 'f/2.0'
          }
        ]
      },
      {
        name: 'Memoria y almacenamiento',
        features: [
          {
            name: 'Memoria RAM',
            value: '6GB'
          },
          {
            name: 'Memoria interna',
            value: '64 GB'
          },
          {
            name: 'Lector de tarjetas',
            value: 'Secure Digital (microSD)'
          },
          {
            name: 'Capacidad tarjeta de memoria',
            value: '256GB'
          }
        ]
      },
      {
        name: 'Procesador',
        features: [
          {
            name: 'Fabricante procesador',
            value: 'Qualcomm'
          },
          {
            name: 'Modelo procesador',
            value: 'Snapdragon 710'
          },
          {
            name: 'Núcleos procesador',
            value: '8'
          }
        ]
      },
      {
        name: 'Sistema Operativo',
        features: [
          {
            name: 'Sistema operativo móvil',
            value: 'Android'
          },
          {
            name: 'Capa de personalización Android',
            value: 'MIUI'
          },
          {
            name: 'Tienda de aplicaciones',
            value: 'Google Play'
          }
        ]
      },
      {
        name: 'Batería',
        features: [
          {
            name: 'Capacidad batería',
            value: '4030 mAh'
          },
          {
            name: 'Tecnología batería',
            value: 'LiPo'
          },
          {
            name: 'Amperaje',
            value: '2A'
          },
          {
            name: 'Carga rápida',
            value: 'Qualcomm Quick Charge 4+'
          }
        ]
      },
      {
        name: 'USB',
        features: [
          {
            name: 'Tipo de conexiones',
            value: 'Tipo C'
          }
        ]
      },
      {
        name: 'Sensores',
        features: [
          {
            name: 'Sensores',
            value: 'Acelerómetro, Giroscopio, Luz, Proximidad'
          },
          {
            name: 'Sistema seguridad biométrico',
            value: 'Facial, Huella'
          }
        ]
      },
      {
        name: 'Redes',
        features: [
          {
            name: 'Tipo SIM 1',
            value: 'Nano-SIM'
          },
          {
            name: 'Tipo SIM 2',
            value: 'Nano-SIM'
          },
          {
            name: 'SIM 2 inutiliza MicroSD',
            value: 'Si'
          }
        ]
      },
      {
        name: 'Conectividad',
        features: [
          {
            name: 'Wi-Fi',
            value: 'a, ac, b, Dual-Band (2.4GHz y 5GHz), g, n, Wifi Direct'
          },
          {
            name: 'Bluetooth',
            value: 'v5.0'
          },
          {
            name: 'Infrarrojos',
            value: 'Si'
          },
          {
            name: 'Geolocalización',
            value: 'A-GPS, BeiDou (BDS), GALILEO, GLONASS, GPS'
          }
        ]
      },
      {
        name: 'Audio',
        features: [
          {
            name: 'Conector audio',
            value: 'Estéreo 3.5mm'
          },
          {
            name: 'Número de altavoces',
            value: '1'
          },
          {
            name: 'Número de micrófonos',
            value: '2'
          }
        ]
      },
      {
        name: 'Características físicas',
        features: [
          {
            name: 'Alto en cm',
            value: '15.68 cm'
          },
          {
            name: 'Ancho en cm',
            value: '7.45 cm'
          },
          {
            name: 'Profundo en cm',
            value: '0.86 cm'
          },
          {
            name: 'Peso',
            value: '179 g'
          }
        ]
      }
    ],
    created_at: new Timestamp('2020-11-07T12:56:59.301Z'),
    updated_at: new Timestamp('2014-11-07T12:56:59.301Z')
  }
]
