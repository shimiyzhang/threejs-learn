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

  // 平移立方体
  cube.position.set(2, 0, 0);

  // 旋转立方体
  // 欧拉角在three.js中使用类 Euler表示。
  // 欧拉旋转顺序: threejs默认的旋转顺序为XYZ，可以通过Euler.order属性改变它
  // 旋转单位: 弧度
  // 除了透视相机的视野是用 度数 指定，three.js中的所有其他角度都是使用 弧度 而不是 度数 指定的。
  cube.rotation.set(-0.5, -0.1, 0.8);

  // 使用数学工具函数将角度转换为弧度
  const rads = MathUtils.degToRad(90); // π/2

  // 缩放立方体
  cube.scale.set(0.5, 0.5, 0.5);
  // cube.scale.set(-1, -1, -1); // 负比例值镜像对象

  const childCube = new Mesh(
    geometry,
    new MeshStandardMaterial({ color: "lightgreen" })
  );

  // 平移子立方体
  childCube.position.set(-2, 0, 0);

  childCube.scale.set(2, 2, 2);

  // 添加到网格cube
  cube.add(childCube);

  return cube;
}

export { createCube };
