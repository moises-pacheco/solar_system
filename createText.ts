import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


export class Text{
    
    //Atributos
    texto : string;
    size: number;
    positionY : number;
    mesh : THREE.Mesh | null = null;

    //Constrcutor
    constructor(texto : string, size: number, positionY: number){
        this.texto = texto;
        this.size = size;
        this.positionY = positionY;
    }

    async createText(): Promise<THREE.Mesh> {
        //Loader para cargar la fuente
        const loader = new FontLoader();
        const font =  await loader.loadAsync('./font/Orbitron_Regular.json');

        //TextGeometry para crear el texto
        const text_geometry = new TextGeometry(`${this.texto}`, {
            font: font,
            size: this.size,
            depth: 0.4
        })

        const text_material = new THREE.MeshMatcapMaterial({color: '#B2FF8C'});
        const text = new THREE.Mesh(text_geometry, text_material);
        text_geometry.center();
        text.position.y = this.positionY;
        this.mesh = text;
        return text;

    }
    
}