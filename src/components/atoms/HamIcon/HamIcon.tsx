import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

type HamIconProps = {
  toggle: () => void;
  open: boolean;
};

export const HamIcon = ({ toggle, open }: HamIconProps) => (
  <IconButton
    style={{
      width: "auto",
      height: "auto",
      fontSize: "12px",
    }}
    color="inherit"
    onClick={toggle}
  >
    <motion.svg
      initial={false}
      animate={open ? "open" : "closed"}
      width="20px"
      height="20px"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.5 L 20 9.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.5 L 20 16.5" },
          open: { d: "M 3 2.5 L 17 16.5" },
        }}
      />
    </motion.svg>
  </IconButton>
);

export default HamIcon;
