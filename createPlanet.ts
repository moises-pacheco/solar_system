import * as THREE from 'three';

export class Planet {
    name: string;
    color: string;
    size : number;
    angle : number;
    mesh : THREE.Mesh | null = null;
    ring: THREE.Mesh | null = null;
    radio: number;

    constructor(name: string, color: string, size: number, angle : number, radio : number){
        this.name = name;
        this.color = color
        this.size = size;
        this.angle = angle
        this.radio = radio;
    }

    createPlanet(){
        const planet_geometry = new THREE.SphereGeometry(15,32,16);
        const planet_material = new THREE.MeshMatcapMaterial({color: `${this.color}`  })
        const planet = new THREE.Mesh(planet_geometry, planet_material);
        planet.scale.set(this.size, this.size, this.size);
        this.mesh = planet;
        return planet;
    }

    movePlanet( orbit_velocity: number){  

        if(this.mesh){
        this.angle += orbit_velocity;
        this.mesh.position.x = Math.cos(this.angle) * this.radio;
        this.mesh. position.z = Math.sin(this.angle) * this.radio;
        }else{
            console.log("not work");
        }
 
    }

    createRing(){
        const ring_geometry = new THREE.RingGeometry(this.radio + 0.01, this.radio - 0.1, 200);
        const ring_material = new THREE.MeshMatcapMaterial({color: '#A1FFDB', side: THREE.DoubleSide});
        const ring = new THREE.Mesh(ring_geometry, ring_material);
        ring.rotation.x = 1.57;
        this.ring = ring;
        return ring;
    }
    
}