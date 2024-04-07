import './style.css'
//import * as PIXI from 'pixijs';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const FOV = 65;
const NEAR = 0.1;
const FAR = 100;

let canvas = document.getElementById('game-canvas');

//const WIDTH = canvas.clientWidth * window.devicePixelRatio;
//const HEIGHT = canvas.clientHeight * window.devicePixelRatio;
let WIDTH = canvas.clientWidth;
//const HEIGHT = window.innerHeight;
let HEIGHT = canvas.clientHeight;

const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR, FAR);

const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(WIDTH, HEIGHT);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0XC28300});
const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0,0,20);


const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
const ambientLight = new THREE.AmbientLight(0xffffff);
//const controls = new OrbitControls(camera, renderer.domElement);

//scene.add(lightHelper);
//scene.add(gridHelper);
scene.add(pointLight);
scene.add(ambientLight);
scene.add(torus);


function animate(){
    requestAnimationFrame(animate); 
    torus.rotation.x += 0.01;
    torus.rotation.z += 0.01;
    torus.rotation.y += 0.001;

//     controls.update();
    renderer.render(scene, camera);
}

animate();


window.onresize = function(event){
    WIDTH = canvas.clientWidth;
    HEIGHT = canvas.clientHeight;
    camera.aspect(WIDTH / HEIGHT);
    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
};
