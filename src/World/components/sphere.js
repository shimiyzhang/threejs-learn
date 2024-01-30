// 球体组件
import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

function createSphere() {
  // 创建几何体
  const geometry = new SphereGeometry(1, 32, 32);

  // 创建基础材质
  const material = new MeshBasicMaterial();

  // 创建网格
  const sphere = new Mesh(geometry, material);

  // 设置球体位置
  sphere.position.set(1, 1, 1);

  return sphere;
}

export { createSphere };
