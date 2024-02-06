import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = []; // 动画对象列表
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // 告诉每个动画对象前进一帧
      this.tick();

      // 渲染一帧
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    // 传入null作为回调以停止循环
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // 测量跨帧时间
    const delta = clock.getDelta();

    // console.log(`The last frame rendered in ${delta * 1000} milliseconds`);

    // 更新动画
    for (const object of this.updatables) {
      object.tick(delta); // 调用对象的tick方法，实现动画效果
    }
  }
}

export { Loop };
