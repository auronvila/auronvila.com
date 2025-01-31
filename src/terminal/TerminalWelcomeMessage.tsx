import { motion } from "framer-motion";

export const TerminalWelcome = () => {
  const asciiArt = `
 █████╗ ██╗   ██╗██████╗  ██████╗ ███╗   ██╗    ██╗   ██╗██╗██╗      █████╗ 
██╔══██╗██║   ██║██╔══██╗██╔═══██╗████╗  ██║    ██║   ██║██║██║     ██╔══██╗
███████║██║   ██║██████╔╝██║   ██║██╔██╗ ██║    ██║   ██║██║██║     ███████║
██╔══██║██║   ██║██╔══██╗██║   ██║██║╚██╗██║    ╚██╗ ██╔╝██║██║     ██╔══██║
██║  ██║╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║     ╚████╔╝ ██║███████╗██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝      ╚═══╝  ╚═╝╚══════╝╚═╝  ╚═╝
`

  const text = "Welcome to Auron OS!";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ color: "limegreen", fontSize: "14px", fontFamily: "monospace" }}
    >
      <motion.pre
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ marginBottom: "20px",textWrap: 'wrap' }}
      >
        {asciiArt}
      </motion.pre>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{ marginTop: "20px", fontSize: "12px" }}
      >
        Type 'help' to see available commands.
      </motion.div>
    </motion.div>
  );
};

export default TerminalWelcome;
