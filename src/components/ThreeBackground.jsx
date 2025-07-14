import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    //create dense white stars for the background
    const starGeometry = new THREE.BufferGeometry(); //Holds raw position data for each star
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100; //spread stars over a larger area
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3) //Holds raw position data for each star
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xb0e0ff,
      size: 0.1,
    }); //Defines the color and size of stars

    const starsField = new THREE.Points(starGeometry, starMaterial); //Combines geometry + material to make a renderable star object
    scene.add(starsField); //Adds the star field to your scene for rendering

    //make stars move or interact with the mouse(parallax effect)
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerHeight) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 + 1;
      starsField.rotation.x += mouseY * 0.001;
      starsField.rotation.y += mouseX * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove);

    //Handle window resize for responsive;
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    //render loop
    const animate = () => {
      requestAnimationFrame(animate);
      starsField.rotation.x += 0.001; //for slow rotation
      starsField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full -z-1" />;
}
