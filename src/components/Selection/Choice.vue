<template>
  <div class="myChoice" />
</template>
<script>
/* eslint-disable */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let sphere, renderer, scene, camera
let materialA, materialB, materialC, materialD, materialE, materialF
let textureA, textureB, textureC, textureD, textureE, textureF

let selectedObject = null;
let raycaster = new THREE.Raycaster();
let pointer = new THREE.Vector2();

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
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      this.controls = new OrbitControls(camera, renderer.domElement)
      this.controls.rotateSpeed = 0.1
      this.controls.autoRotateSpeed = 0.7;
      this.controls.enableZoom = false
      this.controls.autoRotate = true
      camera.position.set( 1, 0, 10 )
      this.controls.update()

      let geometry = new THREE.SphereGeometry ( 50, 32, 32 )
      sphere = new THREE.Mesh (geometry)
      scene.add (sphere)
      
    },

    addSprite: function() {
         // materials
        textureA = new THREE.TextureLoader().load(require('@/assets/images/sprites/G.png'))
        materialA = new THREE.SpriteMaterial({ 
          map: textureA,
          color: '#999'
        })

        textureB = new THREE.TextureLoader().load(require('@/assets/images/sprites/NL.png'))
        materialB = new THREE.SpriteMaterial({ 
          map: textureB,
          color: '#999'
        })

        textureC = new THREE.TextureLoader().load(require('@/assets/images/sprites/SD.png'))
        materialC = new THREE.SpriteMaterial({ 
          map: textureC,
          color: '#999'
        })

        textureD = new THREE.TextureLoader().load(require('@/assets/images/sprites/C.png'))
        materialD = new THREE.SpriteMaterial({ 
          map: textureD,
          color: '#999'
        })

        textureE = new THREE.TextureLoader().load(require('@/assets/images/sprites/F.png'))
        materialE = new THREE.SpriteMaterial({ 
          map: textureE,
          color: '#999'
        })

        textureF = new THREE.TextureLoader().load(require('@/assets/images/sprites/B.png'))
        materialF = new THREE.SpriteMaterial({ 
          map: textureF,
          color: '#999'
        })

        // sprites
        let planeA = new THREE.Sprite(materialA);
        planeA.scale.set(4, 1, 1)
        planeA.position.set(12, 5,-1)

        let planeB = new THREE.Sprite(materialB);
        planeB.scale.set(4, 1, 1)
        planeB.position.set(2, 0,-5)
        

        let planeC = new THREE.Sprite(materialC);
        planeC.scale.set(4, 1, 1)
        planeC.position.set(10, -5,-4)

        let planeD = new THREE.Sprite(materialD);
        planeD.scale.set(2, 1, 1)
        planeD.position.set(-8, 6,-3)

        let planeE = new THREE.Sprite(materialE);
        planeE.scale.set(2, 1, 1)
        planeE.position.set(-9, -6,-4)

        let planeF = new THREE.Sprite(materialF);
        planeF.scale.set(4, 1, 1)
        planeF.position.set(-16, -1,-4)

        this.group = new THREE.Group();
        this.group.add( planeA )
        this.group.add( planeB )
        this.group.add( planeC )
        this.group.add( planeD )
        this.group.add( planeE )
        this.group.add( planeF )

        sphere.add( this.group )
      },

    onPointer: function(event){
      // console.log(event)
      if ( selectedObject ) {
        selectedObject.material.color.set( '#999' )
				selectedObject = null
        // this.controls.autoRotate = true
			}
			pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
			pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1
			raycaster.setFromCamera( pointer, camera )
			const intersects = raycaster.intersectObject( this.group, true )
			if ( intersects.length > 0 ) {
				const res = intersects.filter( function ( res ) {
					return res && res.object
				} )[ 0 ]
				if ( res && res.object ) {
					selectedObject = res.object
					selectedObject.material.color.set( '#fff' )
          // this.controls.autoRotate = false
				}
			}
    },

    onClick: function(event){
			raycaster.setFromCamera( pointer, camera )
			const intersects = raycaster.intersectObject( this.group, true )
			if ( intersects.length > 0 ) {
        selectedObject.material.color.set( '#000' )
        window.location = this.href('/');
			}
    },

    animate: function() {
      requestAnimationFrame(this.animate)
      this.controls.update()
      renderer.render(scene, camera)
    },

    onResize: function() {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
  },

  mounted() {
    this.init()
    this.addSprite()
    this.animate()
    this.onResize()
    document.addEventListener('pointermove', this.onPointer)
    document.addEventListener('click', this.onClick)
  }
}
</script>
