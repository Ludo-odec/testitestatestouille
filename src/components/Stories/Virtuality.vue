<template>
  <div class="myCanva" />
</template>

<script>
/* eslint-disable */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let sphere, renderer, scene, camera, controls, onResize

export default {
  name: 'Virtuality',
  methods: {
    init: function () {
      let canvaVirtuality = document.querySelector( '.myCanva' )

      //render
      renderer = new THREE.WebGLRenderer ()
      renderer.setSize (window.innerWidth/2, window.innerHeight/2)
      canvaVirtuality.appendChild (renderer.domElement)

      //scene & controls
      scene = new THREE.Scene (canvaVirtuality)
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      controls = new OrbitControls (camera, renderer.domElement)
      controls.rotateSpeed = 0.1
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false
      controls.autoRotate = true
      camera.position.set ( 1, 0, 0 )
      controls.update ()

      //sphere & texture
      let geometry = new THREE.SphereGeometry ( 50, 32, 32 )
      let textureLoader = new THREE.TextureLoader ()
      textureLoader.setCrossOrigin ("anonymous")
      let texture = textureLoader.load (require ("@/assets/images/nl.jpg"))
      texture.wrapS = THREE.RepeatWrapping
      texture.repeat.x = -1
      let material = new THREE.MeshBasicMaterial({ 
        map: texture,
        side: THREE.DoubleSide
      })
      sphere = new THREE.Mesh (geometry, material)
      scene.add (sphere)

      let animate = function () {}
    },
    //animation
    animate: function () {
      requestAnimationFrame (this.animate)

      controls.update ()

      renderer.render (scene, camera)
    },
    //resize
    onResize: function() {
      renderer.setSize(window.innerWidth/2, window.innerHeight/2)
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
window.addEventListener('resize', onResize)
</script>
