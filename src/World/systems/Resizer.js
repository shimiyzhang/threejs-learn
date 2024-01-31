const setSize = (container, camera, renderer) => {
  // 设置相机的纵横比
  camera.aspect = container.clientWidth / container.clientHeight;

  // 更新相机的投影矩阵
  // 平截头体不会自动重新计算，因此当我们更改存储在camera.aspect、camera.fov、camera.near和camera.far中的任何这些设置时，我们还需要更新平截头体。
  camera.updateProjectionMatrix();

  // 更新渲染器和画布的大小
  renderer.setSize(container.clientWidth, container.clientHeight);

  // 设置像素比例（适用于移动设备）
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    // 设置加载时的初始大小
    setSize(container, camera, renderer);

    // 监听容器大小变化，更新相机和渲染器大小
    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);
      // 执行任何自定义操作
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
