<template>
  <div class="myChoice" />
</template>
<script>
/* eslint-disable */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let sphere, renderer, scene, camera, controls, material, texture, onResize, onClick

export default {
  name: 'Choice',
  methods: {
    init: function() {
      let canvaChoice = document.querySelector( '.myChoice' )

      //render
      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor( 0x000000, 0 )
      canvaChoice.appendChild(renderer.domElement)

      //scene & controls
      scene = new THREE.Scene(canvaChoice)
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      controls = new OrbitControls(camera, renderer.domElement)
      controls.rotateSpeed = 0.1
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false
      controls.autoRotate = true
      camera.position.set( 1, 0, 10 )
      controls.update()

      let geometry = new THREE.SphereGeometry ( 50, 32, 32 )
      sphere = new THREE.Mesh (geometry)
      scene.add (sphere)  
    },
    // Sprites 
    spriteBox: function(){
      texture = new THREE.TextureLoader().load(require('@/assets/images/NL.png'))
      material = new THREE.SpriteMaterial({ 
        map: texture,
        opacity:0.8
      })

      const planeA = new THREE.Sprite(material);
      planeA.scale.set(4, 1, 1)
      planeA.position.set(10, 5,-2)

      const planeB = new THREE.Sprite(material);
      planeB.scale.set(4, 1, 1)
      planeB.position.set(1, 0,-5)

      const planeC = new THREE.Sprite(material);
      planeC.scale.set(4, 1, 1)
      planeC.position.set(6, -5,-1)

      const planeD = new THREE.Sprite(material);
      planeD.scale.set(4, 1, 1)
      planeD.position.set(-10, 4,-3)

      const planeE = new THREE.Sprite(material);
      planeE.scale.set(4, 1, 1)
      planeE.position.set(-8, -6,-4)

      const group = new THREE.Group();
      group.add( planeA )
      group.add( planeB )
      group.add( planeC )
      group.add( planeD )
      group.add( planeE )

      sphere.add( group )

    },
    // Raycaster
    onClick: function(event){
      let mouse = new THREE.Vector2(
        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1,
	      this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
      )
    },
    //animation
    animate: function() {
      requestAnimationFrame(this.animate)
      controls.update()
      renderer.render(scene, camera)
    },
    //resize
    onResize: function() {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
  },
  mounted() {
    this.init()
    this.spriteBox()
    this.onClick()
    this.animate()
    this.onResize()
  }
}
window.addEventListener('resize', onResize)
window.addEventListener('click', onClick)
</script>

<style>
  .myChoice {
    width: fit-content;
    height: fit-content;
    border-radius: none;
  }
</style>

