const propiedades_alquiler = [
    {
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      nombre: "Apartamento de lujo en zona exclusiva",
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      baños: 3,
      costo: 5000,
      smoke: false,
      pets: true
    },
    {
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      nombre: "Apartamento acogedor en la montaña",
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 4,
      baños: 2,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA==&auto=format&fit=crop&w=700&q=60",
      nombre: "Apartamento en el centro de la ciudad",
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baños: 2,
      costo: 3000,
      smoke: false,
      pets: false
    }, {
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      nombre: "Apartamento luminoso con vista al mar",
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      baños: 2,
      costo: 2000,
      smoke: true,
      pets: true
    }
  ]

  let html = ""
  function mostrarIcono(smoke){
    if(smoke == true){
      return '<i class="fas fa-smoking"></i> Permitido fumar'
    }else{
      return '<i class="fas fa-smoking-ban"></i>  No se permite fumar'

    }
   }

  for (let propiedades of propiedades_alquiler) {
    html += `
          <div class="card">
              <img src="${propiedades.src}"> alt="${propiedades.nombre}"
              <h2> ${propiedades.nombre}</h2>
              <p class="card-text">${propiedades.descripcion}</p>
              <p class="card-text">${propiedades.ubicacion}</p>
              <p> ${propiedades.habitaciones} <i class="fas fa-bed"></i> Habitaciones</p>
              <p> ${propiedades.baños} <i class="fas fa-bath"></i> Baños</p>
              <p> $${propiedades.costo}</p>       
              <p class="text-danger">
              ${mostrarIcono(propiedades.smoke)}         
            </p>

              </div>
                  `
  }
  cards = document.querySelector(".card")
  cards.innerHTML = html
