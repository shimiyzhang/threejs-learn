// 相机组件
import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // 视野
    1, // 纵横比
    0.1, // 近剪裁平面
    100 // 远剪裁平面
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
