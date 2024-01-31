import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({
    // 抗锯齿是使用内置的WebGL方法执行的，即 多重采样抗锯齿 (MSAA)。
    antialias: true, // 抗锯齿（一旦创建了渲染器，就无法更改此设置）
  });

  // 打开物理上正确的光照模型
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
