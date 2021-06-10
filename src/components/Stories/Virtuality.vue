<template>
  <div class="myCanvas" />
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'Virtuality',
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup (props) {
    let renderer, camera, controls, scene

    onMounted(() => {
      init()
      animate()
      window.addEventListener('resize', onResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize)
    })

    const init = () => {
      const canvaVirtuality = document.querySelector('.myCanvas')

      // render
      renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      canvaVirtuality.appendChild(renderer.domElement)

      // scene & controls
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      controls = new OrbitControls(camera, renderer.domElement)
      controls.rotateSpeed = 0.1
      controls.autoRotateSpeed = 0.8
      controls.enableZoom = false
      controls.autoRotate = true
      camera.position.set(1, 0, 0)
      controls.update()

      // sphere & texture
      const geometry = new THREE.SphereGeometry(50, 32, 32)
      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load(props.image)
      texture.wrapS = THREE.RepeatWrapping
      texture.repeat.x = -1
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
      })
      const sphere = new THREE.Mesh(geometry, material)
      scene.add(sphere)
    }

    // animation
    const animate = () => {
      requestAnimationFrame(animate)

      controls.update()

      renderer.render(scene, camera)
    }

    // resize
    const onResize = () => {
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
  }
}
</script>
