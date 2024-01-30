import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

// 获取场景容器元素
const container = document.querySelector('#scene-container');

// 创建场景
const scene = new Scene();

// Set the background color
scene.background = new Color('skyblue');

// Create a camera
const fov = 35; // 视野，以度为单位
const aspect = container.clientWidth / container.clientHeight; // 纵横比
const near = 0.1; // 近剪裁平面：任何比这更靠近相机的东西都是不可见的。
const far = 100; // 远剪裁平面：任何比这更远离相机的东西都是不可见的。

const camera = new PerspectiveCamera(fov, aspect, near, far);

// 创建的每一个对象最初都位于场景的中心 ( 0, 0, 0 )
// 将相机沿着Z轴移回（朝向我们）
camera.position.set(0, 0, 10);

// 单独设置X，Y和Z轴
// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 10;

// 创建一个盒子几何体，设置长度、宽度、深度
const geometry = new BoxGeometry(2, 2, 2);

// 常见一个默认为白色的基础材质（忽略场景中的任何灯光，并根据材质的颜色和其他设置为网格着色（阴影））
// 如果使用除MeshBasicMaterial之外的材质，必须添加灯光才能看到
const material = new MeshBasicMaterial();

// 创建包含几何体和材质的网格
const cube = new Mesh(geometry, material);

// 将网格添加到场景
scene.add(cube);
// 移除网格
// scene.remove(cube);
// 一旦网格被添加到场景中，我们称网格为场景的 子节点，我们称场景为网格的 父节点。

// 创建渲染器，负责将场景渲染到<canvas>元素中。
const renderer = new WebGLRenderer();

// 使用容器的宽度和高度告诉渲染器我们的场景大小。
renderer.setSize(container.clientWidth, container.clientHeight);

// 设置设备像素比（DPR）
renderer.setPixelRatio(window.devicePixelRatio);

// 将<canvas>元素添加到我们的页面
container.append(renderer.domElement);

// 渲染场景
renderer.render(scene, camera);
