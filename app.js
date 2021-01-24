//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight); //set renderer to fill viewport
document.body.appendChild(renderer.domElement);

//sphere
const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const texture = new THREE.TextureLoader().load('textures/moon_1024.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
scene.add(sphere);
camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate); //renderer to draw scene every time screen refreshed
  sphere.rotation.x += 0.01;
  sphere.rotation.y -= 0.01;
  renderer.render(scene, camera);
};

function updatePOV(newPOV) {
  camera.fov = newPOV;
  camera.updateProjectionMatrix();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();