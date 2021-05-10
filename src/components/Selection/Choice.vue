<template>
  <div class="myChoice" />
</template>
<script>
/* eslint-disable */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let sphere, renderer, scene, camera, sprite, controls

export default {
  name: 'Choice',
  methods: {
    init: function() {
      let oui = document.querySelector( '.myChoice' )

      //render
      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor( 0x000000, 0 )
      oui.appendChild(renderer.domElement)

      //scene & controls
      scene = new THREE.Scene(oui)
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      controls = new OrbitControls(camera, renderer.domElement)
      controls.rotateSpeed = 0.1
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false
      controls.autoRotate = true
      camera.position.set( 1, 0, 0 )
      controls.update()

      //sphere & texture
      let geometry = new THREE.SphereGeometry( 300, 300, 300 )
      let material = new THREE.MeshBasicMaterial({ 
        transparent: true,
        side: THREE.DoubleSide
      })
      sphere = new THREE.Mesh(geometry, material)
      scene.add(sphere)

      //Tooltip
      let spriteMap = new THREE.TextureLoader().load(require('./images/NL.svg'))
      let SpriteMaterial = new THREE.SpriteMaterial( { 
        map: spriteMap
        } )
      sprite = new THREE.Sprite(SpriteMaterial)
      let position = new THREE.Vector3(5, 0 ,0)
      sprite.position.copy(position)
      scene.add(sprite);

      let animate = function() {}
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
    this.animate()
    this.onResize()
  }
}
</script>

<style>
  .myChoice {
    width: fit-content;
    height: fit-content;
    border-radius: none;
  }
</style>
