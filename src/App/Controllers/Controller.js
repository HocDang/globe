import * as THREE from "three";
import ScreenClient from "../Clients/ScreenClient";
import EarthEntity from "../Entitys/EarthEntity";
import GalaxyEntity from "../Entitys/GalaxyEntity";
import OrbitControls from 'three/examples/jsm/controls/OrbitControls';

export default class Controller {
    constructor(canvas) {
        this.screenClient = new ScreenClient();
        this.init(canvas)
        this.canvas = canvas;
    }

    init() {
        const widthScreen = this.screenClient.getWidth();
        const heightScreen = this.screenClient.getHeight();

        this.scene = this.initScene();
        this.camera = this.initCamera(widthScreen, heightScreen);
        this.renderer = this.initRenderer(widthScreen, heightScreen);
        this.earth = new EarthEntity();

        this.initGalaxy();

        this.setDomElement();

        const scene = this.scene;
        const camera = this.camera;
        const renderer = this.renderer;
        renderer.setSize(widthScreen, heightScreen);
        this.initEarth();

        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate()
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }

    initScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    initCamera(width, height) {
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2;
        return camera;
    }

    initRenderer( width, height) {
        const renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(width, height);
        return renderer;
    }

    initGalaxy() {
        const galaxy = new GalaxyEntity();
        this.scene.background = galaxy;
    }

    initEarth() {
        this.scene.add(this.earth);
    }

    setDomElement() {
        this.canvas.parentElement.appendChild(this.renderer.domElement);
    }
}