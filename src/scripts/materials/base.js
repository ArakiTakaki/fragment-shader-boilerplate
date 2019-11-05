import * as THREE from 'three';
import vs from '../shaders/vertex/default.vert';
import fs from '../shaders/fragment/default.frag';

const mousePosition = new THREE.Vector2(0, 0);
document.addEventListener('mousemove', (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});
const geometory = new THREE.PlaneBufferGeometry(2.0, 2.0);
const material = new THREE.ShaderMaterial({
  uniforms: {
    resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
    time: {
      value: 0
    },
    mouse: {
      value: mousePosition,
    },
  },
  vertexShader: vs,
  fragmentShader: fs,
});
const mesh = new THREE.Mesh(geometory, material);
const startTime = Date.now();
export default {
  mesh: mesh,
  render() {
    mesh.material.uniforms.time.value = Date.now() - startTime;
    mesh.material.uniforms.mouse.value = mousePosition;
  }
};
