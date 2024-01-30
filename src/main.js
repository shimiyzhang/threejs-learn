import { World } from "./World/World";

// 程序启动函数
function main() {
  // 获取容器元素的引用
  const container = document.querySelector("#scene-container");

  // 创建 World 应用程序的实例
  const world = new World(container);

  // 渲染场景
  world.render();
}

const button = document.createElement("button");
button.style.position = "absolute";
button.style.top = "20px";
button.style.left = "20px";
button.innerText = "渲染场景";
document.body.appendChild(button);

button.onclick = () => {
  main();
};
