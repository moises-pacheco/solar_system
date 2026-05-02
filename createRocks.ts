import * as THREE from 'three';

export class Rocks{

    //Attributes
    nParticles: number;
    rMax : number;
    rMin: number;
    rocksSize : number;
    rocksVelocity: number;
    mesh: THREE.Points ;

    constructor(nParticles : number, rMax: number, rMin: number, rocksSize: number, rocksVelocity: number){
        this.nParticles = nParticles;
        this.rMax = rMax;
        this.rMin = rMin;
        this.rocksSize = rocksSize;
        this.rocksVelocity = rocksVelocity;
        this.mesh = new THREE.Points();
    }

    createRocks(){
        const N = this.nParticles;
        let angle_rocks = 0;

        const rocks_position = new Float32Array(N * 3);

        for(let i = 0; i < N; i++){
            rocks_position[i * 3] = Math.cos(angle_rocks) * (Math.floor(Math.random() * (this.rMax - this.rMin + 1)) + this.rMin);
            rocks_position[i * 3 + 1] = Math.floor(Math.random() * (1 - (-1) + 1) + (-1));
            rocks_position[i * 3 +2 ] = Math.sin(angle_rocks) * (Math.floor(Math.random() * (this.rMax - this.rMin + 1)) + this.rMin);
            angle_rocks++;
        }
        const rocks_geometry = new THREE.BufferGeometry();
        rocks_geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(rocks_position,3)
        )


        const rocks_material = new THREE.PointsMaterial({size: this.rocksSize,color: 'gray'});

        const rocks = new THREE.Points(rocks_geometry, rocks_material);
        this.mesh = rocks;
    }


    createRockMovement(){
        this.mesh.rotation.y += this.rocksVelocity;
    }
}




