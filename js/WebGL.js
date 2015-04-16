var gl; // A global variable for the WebGL context

function start() {

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
  
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var material1 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );

var pos1 = new THREE.Vector3(2, 2, 2);
var posMatrix = new THREE.Matrix4();
posMatrix.setPosition(pos1);
geometry1.applyMatrix(posMatrix);

var cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );


camera.position.z = 5;

render();

function render() {
	requestAnimationFrame( render );
	cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
	
	cube1.rotation.x += 0.2;
    cube1.rotation.y += 0.2;
	renderer.render( scene, camera );
}
}



