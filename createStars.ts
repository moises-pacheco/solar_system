import * as THREE from 'three';

export class Stars{

    cantidad: number;
    velocidad: number;
    tamanio: number;
    stars :  THREE.Points;
    stars_position : Float32Array ;
    stars_geometry : THREE.BufferGeometry ;
    stars_material : THREE.PointsMaterial ;


    constructor(cantidad : number, velocidad: number, tamanio: number){
        this.cantidad = cantidad;
        this.velocidad = velocidad;
        this.tamanio = tamanio;



        //Posicion de las estrellas.
        const star_position = new Float32Array(cantidad * 3);


        //Agregar 'geometria'
        const stars_geometry = new THREE.BufferGeometry();
        stars_geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(star_position, 3)
        )


        const stars_material = new THREE.PointsMaterial({
            color: '#F0F0F0',
            opacity: 0.38,
            transparent: true,
             size : tamanio,
            sizeAttenuation: false});

        const stars = new THREE.Points(stars_geometry, stars_material);
        this.stars = stars;

        


        //Asignaxión a los atributos
        this.stars_position  = star_position;
        this.stars_geometry = stars_geometry;
        this.stars_material = stars_material;


        const star_size_on_the_map = 10000;

        for(let i = 0; i < this.cantidad; i++){
                this.stars_position[i * 3 + 0] = (Math.random() * - 0.05) * star_size_on_the_map;
                this.stars_position[i * 3 + 1] = Math.random() * - 0.05 * star_size_on_the_map;
                this.stars_position[i * 3 + 2] = (Math.random() * - 0.05) * star_size_on_the_map;
                this.stars_geometry.attributes.position.needsUpdate = true;
        stars_geometry.center();

        }
    }


    createStarMovement(){
        for(let i = 0; i < this.cantidad; i++){
                this.stars_position[i * 3 + 1] += this.velocidad;
                this.stars_geometry.attributes.position.needsUpdate = true;
        }
    }



}
