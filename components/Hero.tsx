import { motion } from "framer-motion";
import Image from "next/image";
import Ball from "@/public/liquid-metal-ball.gif";

const Hero = () => {
  return (
    <div id="Hero">
      <div className="flex flex-wrap">
        <motion.div
          className="order-2 flex w-full flex-col place-content-center items-center lg:order-1 lg:w-1/2 lg:items-start lg:p-12 lg:pl-40"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="Thibault mb-12 text-7xl tracking-tight">Thibault</h1>
          <p className="mb-2 text-2xl text-[#f1f7fecb]">Étudiant en</p>
          <p className="gradient-cyber mb-8 h-14 animate-gradient text-5xl font-medium text-transparent">
            CyberSécurité
          </p>
          <div className="flex flex-col justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="inline-flex select-none p-3 font-semibold underline"
            >
              Contactez-moi
            </a>
            <motion.a
              href=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="inline-flex select-none rounded-full bg-white p-3 font-semibold text-black"
            >
              Télécharger CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="order-1 w-full lg:order-2 lg:w-1/2 lg:pr-14"
        >
          <div className="flex justify-center pb-12 lg:pb-0">
            <Image unoptimized src={Ball} alt="Hero GIF" draggable="false" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
