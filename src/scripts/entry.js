import * as DOM from './constants/DomElements';
import * as THREE from 'three';
import resize from './lib/resize';

import BaseObject from './objects/base';

const elCanvas = document.createElement('canvas');
document.getElementById(DOM.MAIN_CONTAINER).appendChild(elCanvas);
const renderer = new THREE.WebGLRenderer({ canvas: elCanvas });


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 3;

resize({
  renderer: renderer,
  camera: camera,
});
const scene = new THREE.Scene();

scene.add(BaseObject.mesh);
const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  BaseObject.update();
};

render();
