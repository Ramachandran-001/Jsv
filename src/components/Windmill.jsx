import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere } from "@react-three/drei";

export default function Windmill({ speed = 1, ...props }) {
  const bladesRef = useRef();

  useFrame((state, delta) => {
    if (bladesRef.current) {
      bladesRef.current.rotation.z -= delta * speed;
    }
  });

  return (
    <group {...props}>
      {/* Tower Base */}
      <Cylinder
        args={[0.5, 1.5, 8, 16]}
        position={[0, 4, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#cfd8dc"
          roughness={0.8}
          metalness={0.2}
        />
      </Cylinder>
      
      {/* Top Dome */}
      <Sphere
        args={[0.6, 16, 16]}
        position={[0, 8.2, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#455a64" roughness={0.7} />
      </Sphere>

      {/* Rotor Array */}
      <group position={[0, 8, 0.7]} ref={bladesRef}>
        {/* Hub */}
        <Cylinder
          args={[0.2, 0.2, 0.5, 16]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color="#263238" />
        </Cylinder>

        {/* Blades */}
        {[0, 1, 2, 3].map((index) => (
          <group
            key={index}
            rotation={[0, 0, (index * Math.PI) / 2]}
          >
            <Box
              args={[0.2, 4, 0.05]}
              position={[0, 2, 0.1]}
              castShadow
            >
              <meshStandardMaterial
                color="#eceff1"
                roughness={0.5}
                metalness={0.5}
              />
            </Box>
            {/* Blade structural support */}
            <Cylinder
              args={[0.05, 0.05, 4, 8]}
              position={[0, 2, 0.05]}
              castShadow
            >
              <meshStandardMaterial color="#607d8b" />
            </Cylinder>
          </group>
        ))}
      </group>
      
      {/* Foundation shadow catcher / base */}
      <Cylinder args={[2, 2.5, 0.5, 16]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#546e7a" />
      </Cylinder>
    </group>
  );
}
