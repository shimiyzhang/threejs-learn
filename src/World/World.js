import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";

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

    // 创建立方体
    const cube = createCube();
    this.#scene.add(cube);

    // 创建球体
    const sphere = createSphere();
    this.#scene.add(sphere);

    // 创建容器大小监听器
    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    // 渲染场景
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
