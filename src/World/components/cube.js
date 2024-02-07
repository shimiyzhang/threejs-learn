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
  const radiansPerSecond = MathUtils.degToRad(30); // 一秒30度
  // const radiansPerSecond = MathUtils.degToRad(360); // 一秒1圈
  // const radiansPerSecond = MathUtils.degToRad(3.6); // 100秒1圈

  // 平移速度
  const shrinkageSpeed = 2; // 每秒2米

  // 添加tick动画方法
  cube.tick = (delta) => {
    // 每帧增加立方体的旋转
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;

    // 每帧增加立方体的缩放
    cube.scale.x = Math.sin(cube.rotation.x);
    cube.scale.y = Math.sin(cube.rotation.y);
    cube.scale.z = Math.sin(cube.rotation.z);

    // 立方体在屏幕宽度内循环移动
    cube.position.x = (cube.position.x + shrinkageSpeed * delta) % 15;
    if (cube.position.x > 12 || cube.position < -12) {
      cube.position.x = -cube.position.x;
    }
  };

  return cube;
}

export { createCube };
