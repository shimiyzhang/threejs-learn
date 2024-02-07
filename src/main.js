import { World } from "./World/World";

// 程序启动函数
function main() {
  // 获取容器元素的引用
  const container = document.querySelector("#scene-container");

  // 创建 World 应用程序的实例
  const world = new World(container);

  // 生成单帧（按需渲染）
  // world.render();

  // 开始循环（产生帧流）
  world.start();

  container.addEventListener("mouseenter", () => {
    world.start();
  });

  container.addEventListener("mouseleave", () => {
    world.end();
  });
}

main();
