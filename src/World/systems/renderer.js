import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer();

  // 打开物理上正确的光照模型
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
