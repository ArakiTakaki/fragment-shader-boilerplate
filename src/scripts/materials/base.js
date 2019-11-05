import * as THREE from 'three';
import vs from '../shaders/vertex/default.vert'; // vertex shaderの読み込み（直接記述しても良い）
import fs from '../shaders/fragment/default.frag'; // framgment shaderの読み込み（直接記述しても良い）

// 開始位置
const startTime = Date.now();
const mousePosition = new THREE.Vector2(0, 0);
document.addEventListener('mousemove', (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

// メッシュの作成
const geometory = new THREE.PlaneBufferGeometry(2.0, 2.0); // 決まり文句
const material = new THREE.ShaderMaterial({
  // uniformの指定
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

// Uniformのアップデート部分
const updateUniform = () => {
    mesh.material.uniforms.time.value = Date.now() - startTime;
    mesh.material.uniforms.mouse.value = mousePosition;
}

export default {
  mesh: mesh,
  update: updateUniform,
};
