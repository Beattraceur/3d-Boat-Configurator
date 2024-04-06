/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/basicDinghy.gltf 
*/

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useDisplayContext } from './ConfigHandler.jsx';

export default function BasicDinghy(props) {
	const { boatMaterial, sailMaterial } = useDisplayContext();

	const { nodes, materials } = useGLTF('../models/basicDinghy.gltf');

	const rubberTextureProps = useTexture({
		map: './textures/rubber/Rubber_Sole_002_basecolor.jpg',
		normalMap: './textures/rubber/Rubber_Sole_002_normal.jpg',
		roughnessMap: './textures/rubber/Rubber_Sole_002_roughness.jpg',
		aoMap: './textures/rubber/Rubber_Sole_002_ambientOcclusion.jpg',
	});
	const metalTextureProps = useTexture({
		map: './textures/metal/Metal_scratched_008_basecolor.jpg',
		normalMap: './textures/metal/Metal_scratched_008_normal.jpg',
		roughnessMap: './textures/metal/Metal_scratched_008_roughness.jpg',
		aoMap: './textures/metal/Metal_scratched_008_ambientOcclusion.jpg',
	});

	const boatMaterialProps = GetBoatMaterial(boatMaterial);
	const sailMaterialProps = GetSailMaterial(sailMaterial);
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Dinghy.geometry}
				material={materials.basicWood}
				scale={0.1}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Dinghy_Daggerboard.geometry}
				material={materials.basicWoodDagger}
				scale={0.1}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Dinghy_Pole.geometry}
				material={materials.basicWoodPole}
				scale={0.1}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Dinghy_Bench.geometry}
				material={materials.basicWoodBench}
				scale={0.1}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Dinghy_Rudder.geometry}
				material={materials.basicWoodRudder}
				scale={0.1}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Ladder.geometry}
				material={materials.Metal}
				rotation={[Math.PI / 2, 0.39, 0]}
				scale={[0.16, 1.203, 0.16]}
				visible={true}
			>
				<meshStandardMaterial {...metalTextureProps} />
			</mesh>
			<mesh
				geometry={nodes.LadderStep1.geometry}
				material={nodes.LadderStep1.material}
				scale={[0.331, 0.105, 0.331]}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.LadderStep2.geometry}
				material={nodes.LadderStep2.material}
				scale={[0.331, 0.105, 0.331]}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.EngineSupport.geometry}
				material={materials.basicWoodDagger}
				rotation={[0, 0, -0.21]}
				scale={[0.091, 0.844, 1.023]}
				visible={true}
			>
				<meshStandardMaterial {...rubberTextureProps} />
			</mesh>
			<mesh
				geometry={nodes.Dinghy_Boom.geometry}
				material={materials.basicWood}
				scale={10}
				visible={true}
			>
				<meshStandardMaterial {...boatMaterialProps} />
			</mesh>
			<mesh
				geometry={nodes.Sail.geometry}
				material={nodes.Sail.material}
				rotation={[Math.PI / 2, 0, 0]}
				scale={10}
				visible={true}
			>
				<meshStandardMaterial {...sailMaterialProps} />
			</mesh>
		</group>
	);
}

useGLTF.preload('../models/basicDinghy.gltf');

function GetBoatMaterial(boatMaterial) {
	console.log(boatMaterial);
	const TextureObject = {
		normalMap: './textures/wood/Wood_027_normal.jpg',
		roughnessMap: './textures/wood/Wood_027_roughness.jpg',
		aoMap: './textures/wood/Wood_027_ambientOcclusion.jpg',
	};
	switch (boatMaterial) {
		case 0:
			TextureObject.map = './textures/wood/Wood_027_red.jpg';
			break;
		case 1:
			TextureObject.map = './textures/wood/Wood_027_green.jpg';
			break;
		case 2:
			TextureObject.map = './textures/wood/Wood_027_blue.jpg';
			break;
		case 3:
			TextureObject.map = './textures/wood/Wood_027_yellow.jpg';
			break;
		case 4:
			TextureObject.map = './textures/wood/Wood_027_orange.jpg';
			break;
		case 5:
			TextureObject.map = './textures/wood/Wood_027_purple.jpg';
			break;
		case 6:
			TextureObject.map = './textures/wood/Wood_027_white.jpg';
			break;
		case 7:
			TextureObject.map = './textures/wood/Wood_027_brown.jpg';
			break;
		case 8:
			TextureObject.map = './textures/wood/Wood_027_black.jpg';
			break;
		default:
			TextureObject.map = './textures/wood/Wood_027_basecolor.jpg';
			break;
	}
	const woodTextureProps = useTexture(TextureObject);
	woodTextureProps.map.repeat.set(2, 2);
	woodTextureProps.normalMap.repeat.set(2, 2);
	woodTextureProps.roughnessMap.repeat.set(2, 2);
	woodTextureProps.aoMap.repeat.set(2, 2);

	woodTextureProps.map.wrapS =
		woodTextureProps.map.wrapT =
		woodTextureProps.normalMap.wrapS =
		woodTextureProps.normalMap.wrapT =
		woodTextureProps.roughnessMap.wrapS =
		woodTextureProps.roughnessMap.wrapT =
		woodTextureProps.aoMap.wrapS =
		woodTextureProps.aoMap.wrapT =
			THREE.RepeatWrapping;
	return woodTextureProps;
}

function GetSailMaterial(sailMaterial) {
	const TextureObject = {
		normalMap: './textures/textile/Fabric_Tarp_001_normal.jpg',
		roughnessMap: './textures/textile/Fabric_Tarp_001_roughness.jpg',
		aoMap: './textures/textile/Fabric_Tarp_001_ambientOcclusion.jpg',
	};
	switch (sailMaterial) {
		case 0:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_red.jpg';
			break;
		case 1:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_green.jpg';
			break;
		case 2:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_blue.jpg';
			break;
		case 3:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_yellow.jpg';
			break;
		case 4:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_orange.jpg';
			break;
		case 5:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_purple.jpg';
			break;
		case 6:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_white.jpg';
			break;
		case 7:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_brown.jpg';
			break;
		case 8:
			TextureObject.map = './textures/textile/Fabric_Tarp_001_black.jpg';
			break;
		default:
			TextureObject.map = './textures/textile/Fabric_Silk_001_basecolor.jpg';
			TextureObject.normalMap = './textures/textile/Fabric_Silk_001_normal.jpg';
			TextureObject.roughnessMap =
				'./textures/textile/Fabric_Silk_001_roughness.jpg';
			TextureObject.aoMap =
				'./textures/textile/Fabric_Silk_001_ambientOcclusion.jpg';

			break;
	}
	const woodTextureProps = useTexture(TextureObject);
	woodTextureProps.map.repeat.set(5, 5);
	woodTextureProps.normalMap.repeat.set(5, 5);
	woodTextureProps.roughnessMap.repeat.set(5, 5);
	woodTextureProps.aoMap.repeat.set(5, 5);

	woodTextureProps.map.wrapS =
		woodTextureProps.map.wrapT =
		woodTextureProps.normalMap.wrapS =
		woodTextureProps.normalMap.wrapT =
		woodTextureProps.roughnessMap.wrapS =
		woodTextureProps.roughnessMap.wrapT =
		woodTextureProps.aoMap.wrapS =
		woodTextureProps.aoMap.wrapT =
			THREE.RepeatWrapping;
	woodTextureProps.side = THREE.DoubleSide;
	return woodTextureProps;
}
