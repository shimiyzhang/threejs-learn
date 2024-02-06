// 立方体组件
import {
  BoxGeometry,
  MeshStandardMaterial,
  // MeshBasicMaterial,
  Mesh,
  MathUtils,
} from "three";

function createCube() {
  // 创建几何体
  const geometry = new BoxGeometry(2, 2, 2);

  // 创建基础材质
  // const material = new MeshBasicMaterial();
  // 将旧的“基本”材质切换为“标准”材质
  const material = new MeshStandardMaterial({ color: "purple" });

  // 创建网格
  const cube = new Mesh(geometry, material);

  // 旋转立方体
  cube.rotation.set(-0.5, -0.1, 0.8);

  // 角度转弧度
  const radiansPerSecond = MathUtils.degToRad(30);

  // 添加tick动画方法
  cube.tick = (delta) => {
    // 每帧增加立方体的旋转
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
