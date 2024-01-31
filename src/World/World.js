import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
// import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

class World {
  #camera;
  #scene;
  #renderer;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();

    // 将画布添加到容器中
    container.append(this.#renderer.domElement);

    // 添加灯光
    const light = createLights();
    const cube = createCube(); // 创建立方体
    this.#scene.add(cube, light);

    // 创建容器大小监听器
    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    // 渲染场景
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
