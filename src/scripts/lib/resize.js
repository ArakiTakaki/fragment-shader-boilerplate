/**
 * three js のカメラとレンダラーサイズを変更する
 */
export default ({renderer, camera}) => {
  const width = window.innerWidth
  const height = window.innerHeight

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
