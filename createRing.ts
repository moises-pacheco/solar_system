import * as THREE from 'three';

export class Ring{
    rForInside: number;
    rForOutside: number;
    color: string;
    mesh: THREE.Mesh | null = null;

    constructor(rForInside : number, rForOutside :number, color: string){
        this.rForInside = rForInside;
        this.rForOutside = rForOutside;
        this.color = color;
    }

    createRing(){
        const ring_geometry = new THREE.RingGeometry(this.rForInside, this.rForOutside);
        const ring_material = new THREE.MeshMatcapMaterial({color: `${this.color}`, side: THREE.DoubleSide});
        this.mesh = new THREE.Mesh(ring_geometry, ring_material);
        this.mesh.rotation.x = 1.57;
        return this.mesh;
    }

}