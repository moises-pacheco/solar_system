import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Planet } from './createPlanet';
import { Text } from './createText';
import { Ring } from './createRing';
import { Stars } from './createStars';
import { Rocks } from './createRocks';
import { Helpers } from './createHelpers';




//UI

const ui = document.getElementById('ui');
const planetSelection = document.getElementById('planet_selection');
const planetButton = document.getElementById('planet_button');
const planetList = document.getElementById('planets');
let contador = 0;

if(planetSelection) planetSelection.addEventListener('click', () =>{
    if(contador % 2 == 0){
        if(planetList) planetList.style.opacity = '100';
        console.log(contador);
        contador++;
    }else{
        if(planetList) planetList.style.opacity = '0';

        console.log(contador);
        contador++;
    }


} )

if(planetList) planetList.style.opacity = '0';














const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 10000);
camera.position.set(0,25,90);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

//Stars
// const stars = new Stars(50, 0.1, 2.5);
// scene.add(stars.stars);


//Sun
const sun_model = new Planet("sun", "yellow", 0.2, 0, 0 );
let sun = sun_model.createPlanet();
scene.add(sun);

//TextSun
const sun_text_build = new Text('sun', 2, 6);
const sun_text = await sun_text_build.createText();
scene.add(sun_text);


//Mercury
const mercury_model = new Planet("mercury", "gray", 0.02, 0, 6);
let mercury =  mercury_model.createPlanet();
scene.add(mercury);

//RingMercury
const mercury_ring = mercury_model.createRing();
scene.add(mercury_ring);

//TextMercury
const mercury_text_build = new Text('mercury', 20, 36);
const mercury_text = await mercury_text_build.createText();
scene.add(mercury_text);

//Venus

const venus_model = new Planet("venus", "orange", 0.06, 0, 12);
const venus = venus_model.createPlanet();
scene.add(venus);

//RingVenus
const venus_ring = venus_model.createRing();
scene.add(venus_ring);  

//TextVenus
const venus_text_build = new Text('venus', 20, 36);
const venus_text = await venus_text_build.createText();

//Earth
const earth_model = new Planet("earth", "green", 0.08, 0, 20);
let earth = earth_model.createPlanet();
scene.add(earth);

//EarthRing
const earth_ring = earth_model.createRing();
scene.add(earth_ring)

//EarthText

const earth_text_build = new Text("earth", 20, 36);
const earth_text = await earth_text_build.createText();

//Moon
const moon_model = new Planet("moon", "white", 0.2, 0, 28);
const moon = moon_model.createPlanet();

//MoonText
const moon_text_build = new Text('moon', 20, 36);
const moon_text = await moon_text_build.createText();


//Mars
const mars_model = new Planet("mars","red", 0.06, 0, 26);
const mars = mars_model.createPlanet();
scene.add(mars);

//MarsRing
const mars_ring = mars_model.createRing();
scene.add(mars_ring);

//MarsText

const mars_text_build = new Text('mars', 20, 36);
const mars_text = await mars_text_build.createText();

//Jupiter
const jupiter_model = new Planet("jupiter", "#C4533D", 0.14,0, 60);
const jupiter = jupiter_model.createPlanet();
scene.add(jupiter);

//JupiterRing
const jupiter_ring = jupiter_model.createRing();
scene.add(jupiter_ring)

//JupiterTetxt
const jupiter_text_build = new Text('jupiter', 20, 36);
const jupiter_text = await jupiter_text_build.createText();

//Saturn 
const saturn_model = new Planet("saturn", "#CC9A56", 0.12,0, 120);
const saturn = saturn_model.createPlanet();
scene.add(saturn);

//SaturnRing
const saturn_ring = saturn_model.createRing();
scene.add(saturn_ring);

//SaturnAroundRing
const saturn_around_ring_build = new Ring(2, 30, '#9d7541');
const saturn_around_ring = saturn_around_ring_build.createRing();

//SaturnText
const saturn_text_build = new Text('saturn', 20, 36);
const saturn_text = await saturn_text_build.createText();

//Uranus
const uranus_model = new Planet("uranus", "#3D7EC4", 0.12, 0, 240);
const uranus = uranus_model.createPlanet();
scene.add(uranus);

//UranusRing
const uranus_ring = uranus_model.createRing();
scene.add(uranus_ring)

//UranusText
const uranus_text_build = new Text('uranus', 20, 36);
const uranus_text = await uranus_text_build.createText();

//Neptune
const neptune_model = new Planet("neptune", "#3D68C4", 0.11, 0, 480);
const neptune = neptune_model.createPlanet();
scene.add(neptune);

//NeptuneRing
const neptune_ring = neptune_model.createRing();
scene.add(neptune_ring);

//NeptuneText
const neptune_text_build = new Text('neptune', 20,36);
const neptune_text = await neptune_text_build.createText();



// Rocks
const rocks_template = new Rocks(300, 54, 38, 0.2, 0.001);
rocks_template.createRocks(); // return mesh
const rocks = rocks_template.mesh;
scene.add(rocks);

const kuiper_belt_template = new Rocks(800, 800, 480, 1, 0.001);
kuiper_belt_template.createRocks();
const kuiper_belt = kuiper_belt_template.mesh;
scene.add(kuiper_belt);


//Helpers
const grid_helper = new Helpers(2000, 50, '#282828','#181818' );
const grid_helper_mesh = grid_helper.mesh;
grid_helper_mesh.position.y = -4;
scene.add(grid_helper_mesh);



//Resize

function onResize(){
    const w = window.innerWidth; //Obtiene el ancho de la ventana.
    const h = window.innerHeight; // Obtiene el alto de la ventana.

    camera.aspect = w/h; //Recalcula el aspecto.
    camera.updateProjectionMatrix(); // Lo Actualiza en la cámara.

    renderer.setSize(w,h); //Lo renderiza.
}

window.addEventListener('resize', onResize);


function animate(){

    //Rocks
    rocks_template.createRockMovement();
    kuiper_belt_template.createRockMovement();


    //Stars 
    // stars.createStarMovement();


    //texts
    mercury.add(mercury_text); //Como es hijo, hay que agregarlo en cada fotograma para que siga el movimiento del padre.
    venus.add(venus_text);
    earth.add(earth_text);
    moon.add(moon_text);
    mars.add(mars_text);
    jupiter.add(jupiter_text);
    saturn.add(saturn_text);
    saturn.add(saturn_around_ring);
    uranus.add(uranus_text);
    neptune.add(neptune_text);

    //movements
    sun_model.movePlanet(0);
    mercury_model.movePlanet(0.024);
    venus_model.movePlanet(0.031);
    earth_model.movePlanet(0.013);
    earth.add(moon);
    moon_model.movePlanet(0.033);
    mars_model.movePlanet(0.035);
    jupiter_model.movePlanet(0.021);
    saturn_model.movePlanet(0.034)
    uranus_model.movePlanet(0.032);
    neptune_model.movePlanet(0.024);
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();

