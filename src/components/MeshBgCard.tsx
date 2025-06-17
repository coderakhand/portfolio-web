import { useModeStore } from "@/store/States";
import { motion } from "framer-motion";

const MeshBgCard = () => {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-40"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [-10, 10, -10],
          y: [-10, 10, -10],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <defs>
          <pattern
            id="squareMesh"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect width="20" height="20" fill="transparent" />
            <path
              d="M0 0 L0 20 M0 0 L20 0"
              stroke={mode === "light" ? "#0f172a" : "white"}
              strokeWidth="0.7"
              vectorEffect="non-scaling-stroke"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#squareMesh)" />
      </motion.svg>

      <div
        className={`${
          mode === "light" ? "hidden" : ""
        } absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 blur-sm pointer-events-none z-10`}
      />
    </>
  );
};

export default MeshBgCard;
