const propiedades_alquiler = [
    {
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      nombre: "Apartamento de lujo en zona exclusiva",
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      baños: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      nombre: "Apartamento acogedor en la montaña",
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      baños: 1,
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
      costo: 1200,
      smoke: false,
      pets: false
    }, {
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      nombre: "Penthouse de lujo con terraza panorámica",
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
      ubicacion: '<i class="fas fa-map-marker-alt"></i> 567 Skyline Avenue, skyview City, CA 56789',
      habitaciones: 3,
      baños: 3,
      costo: 4500,
      smoke: false,
      pets: true
    }
  ]

  const elementoHTML = document.querySelector('#card')
   conjuntoObjetos = ""
   
   function mostrarIcono(smoke){
    if(smoke == true){
      return '<i class="fas fa-smoking"></i> Permitido fumar'
    }else{
      return '<i class="fas fa-smoking-ban"></i>  No se permite fumar'

    }
   }

   function perrito(pets) {

     if(pets == true){
       return '<i class="fas fa-paw"></i> Mascotas permitidas'
      }else{
        return '<i class="fa-solid fa-ban"></i> No se permiten mascotas'
        
      }
    }
 
 

   for(let propiedad of propiedades_alquiler){
    conjuntoObjetos+=`<div class="card" id="card">
          <img
            src="${propiedad.src}" alt="${propiedad.nombre}">
          <div class="card-body">
            <h5 class="card-title">
              ${propiedad.nombre}
            </h5>
            <p class="card-text">
              ${propiedad.descripcion}
            </p>
            <p>
            ${propiedad.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
            <p class="text-danger">
              ${mostrarIcono(propiedad.smoke)}         
            </p>
            <p class="text-danger">
              ${mostrarIcono(propiedad.pets)} 
            </p>

          </div>
        </div>
    
    `
   }
   elementoHTML.innerHTML = conjuntoObjetos

