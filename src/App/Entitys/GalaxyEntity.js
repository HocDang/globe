import * as THREE from "three";

export default class GalaxyEntity {
    constructor() {
        this.img = './images/earth/galaxy.png';
        return this.init();
    }

    init() {
        this.galaxy = new THREE.TextureLoader().load(this.img);
        return this.galaxy;
    }
}
