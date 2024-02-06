import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
// import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

class World {
  #camera; // 相机
  #scene; // 场景
  #renderer; // 渲染器
  #loop; // 动画循环

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    // 将画布添加到容器中
    container.append(this.#renderer.domElement);

    // 添加灯光
    const light = createLights();
    const cube = createCube(); // 创建立方体
    this.#scene.add(cube, light);

    this.#loop.updatables.push(cube); // 将立方体添加到循环中

    // 创建容器大小监听器
    const resizer = new Resizer(container, this.#camera, this.#renderer);
    // resizer.onResize = () => {
    //   this.render(); // 渲染场景
    // };
  }

  render() {
    // 渲染场景
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  end() {
    this.#loop.stop();
  }
}

export { World };
