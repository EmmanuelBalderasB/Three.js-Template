import * as THREE from 'three';
import Experience from '../Experience.js';
import testVertexShader from '../shaders/test/vertex.glsl';
import testFragmentShader from '../shaders/test/fragment.glsl';
import PerlinNoise from '../Utils/PerlinNoise.js';
export default class ShaderTest {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.PerlinNoise = new PerlinNoise();

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Shader');
        }

        this.setGeometry();
    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry(1, 1, 0.5, 32, 32, 32);
        this.material = new THREE.ShaderMaterial({
            vertexShader: testVertexShader,
            fragmentShader: testFragmentShader,
            side: THREE.DoubleSide
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 1;
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        this.scene.add(this.mesh);
    }

    update() {
    }
}