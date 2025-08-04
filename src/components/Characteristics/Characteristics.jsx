import { motion } from "motion/react";
import { useState } from "react";

const items = [
  {
    title: "Seamless connectivity",
    description: "Advanced Bluetooth 5.0 for a stable and seamless connection.",
  },
  {
    title: "Unmatched clarity",
    description:
      "HD sound with ergonomic adjustment to enjoy pure and immersive audio.",
  },
  {
    title: "Prolonged reproduction",
    description:
      "Up to 30 hours of total playback thanks to its fast charging case.",
  },
  {
    title: "Instant pairing",
    description: 'Quick and easy linking with the "CT-Earbuds" system.',
  },
  {
    title: "Rugged design",
    description:
      "IPX5 rating to protect against splashes and daily unforeseen events.",
  },
];

export const Characteristics = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <div className="d-flex align-items-center gap-3">
        <h1 className="fw-1 fs-5">Characteristics</h1>
        <button
          onClick={() => setOpen(!open)}
          className="border-0 rounded-circle px-2"
        >
          <motion.img
            src="/public/images/home/arrow.png"
            alt="arrow-down"
            width={10}
            initial={{ rotate: "0deg" }}
            animate={open ? { rotate: "180deg" } : { rotate: "0deg" }}
            transition={{ duration: 0.1 }}
          />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, height: "auto" }
            : { opacity: 0, y: -20, height: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {open && (
          <ul className="mt-2">
            {items.map((item, i) => (
              <li key={i}>
                <span className="fs-6 fw-bold">{item.title}:</span>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};
