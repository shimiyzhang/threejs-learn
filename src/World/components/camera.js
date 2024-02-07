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

  const shrinkageSpeed = 2; // 每秒2米

  camera.tick = (delta) => {
    // 相机反复缩小十米
    camera.position.z =
      ((camera.position.z + shrinkageSpeed * delta) % 10) + 10;
  };

  return camera;
}

export { createCamera };
