import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// 1. Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the Camera
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
cam.position.z = 5;

// 3. Add Objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#486512' }); // Changed to MeshLambertMaterial

const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: '#B4B4B4' }); // Changed to MeshLambertMaterial

const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 2); // Fixed variable name
light.position.set(1, 1, 1); // Adjusted position for better lighting
light.castShadow = true; // Enable shadows if needed
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene
renderer.render(scene, cam);
