// 立方体组件
import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

function createCube() {
  // 创建几何体
  const geometry = new BoxGeometry(2, 2, 2);

  // 创建基础材质
  const material = new MeshBasicMaterial();

  // 创建网格
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
