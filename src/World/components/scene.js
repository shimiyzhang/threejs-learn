// 场景组件
import { Color, Scene } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("lightgreen");

  return scene;
}

export { createScene };
