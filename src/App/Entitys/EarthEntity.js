import * as THREE from "three";

export default class EarthEntity {
    constructor() {
        this.img = './images/earth/earth.jpg';
        this.radius = 0.9;
        this.width = 63.71;
        this.height = 63.71;
        return this.init();
    }

    init() {
        this.earth = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius, this.width, this.height),
            new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture(this.img),
            })
        );
        return this.earth;
    }
}
