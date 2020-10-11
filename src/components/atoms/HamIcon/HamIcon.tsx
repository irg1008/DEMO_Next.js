import { IconButton } from "@material-ui/core";
import { motion, SVGMotionProps } from "framer-motion";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
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
  <IconButton color="inherit" onClick={toggle}>
    <motion.svg
      initial={false}
      animate={open ? "open" : "closed"}
      width="22px"
      height="20px"
      fill="currentColor"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 17 L 17 2.5" },
        }}
      />
      <Path
        d="M 5 9.5 L 20 9.5"
        variants={{
          closed: { opacity: 1, x: 0 },
          open: { opacity: 0, x: 100 },
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 17 L 20 17" },
          open: { d: "M 3 2.5 L 17 17" },
        }}
      />
    </motion.svg>
  </IconButton>
);

export default HamIcon;
