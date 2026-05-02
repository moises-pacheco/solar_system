import * as THREE from 'three';


export class Helpers{

    size: number;
    division: number;
    color1: string;
    color2: string;
    mesh : THREE.GridHelper;

    constructor(size: number, division: number, color1: string, color2: string){
        this.size = size;
        this.division = division;
        this.color1 = color1;
        this.color2 = color2;
        this.mesh =  new THREE.GridHelper(size,division,color1, color2);
    }


}