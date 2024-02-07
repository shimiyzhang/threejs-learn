// 光照
import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from "three";

// 直接照明
// DirectionalLight => 阳光
// PointLight => 灯泡
// RectAreaLight => 条形照明或明亮的窗户
// SpotLight => 聚光灯
// 默认情况下禁用阴影，对象不会阻挡光线。
// 只有直接光类型可以投射阴影，环境光不能。

// 来自DirectionalLight的光线不会随着距离而消失。
// 场景中的所有对象都将被同样明亮地照亮，无论它们放在哪里——即使是在灯光后面。
function createLights() {
  // 创建定向光，参数为颜色color和强度intensity
  const light = new DirectionalLight("white", 8);

  // DirectionalLight从light.position照向light.target.position。
  // 灯光和目标的默认位置是我们场景的中心，$(0, 0, 0)$。
  light.position.set(10, 10, 10); // 将光线向右、向上移动并朝向我们

  light.tick = (delta) => {
    // 让灯光在x轴上来回移动
    light.position.x = Math.sin(Date.now() * 0.001) * 100;
  };

  return light;
}

export { createLights };
