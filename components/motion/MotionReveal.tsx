'use client';

import React, { ReactNode, CSSProperties } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Luxury Medical Easing curve
export const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * 1. ScrollReveal: Bi-directional scroll animation (in, out, re-entry)
 * Directions: 'up' (default) | 'down' | 'left' | 'right' | 'scale'
 */
export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  className = '',
  style = {}
}: ScrollRevealProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'right': return { opacity: 0, x: 45, y: 0 };
      case 'left': return { opacity: 0, x: -45, y: 0 };
      case 'down': return { opacity: 0, x: 0, y: -35 };
      case 'scale': return { opacity: 0, scale: 0.94, y: 15 };
      case 'up':
      default: return { opacity: 0, x: 0, y: 35 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

interface HeadingRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * 2. HeadingReveal: Large headings slide in from the right with gentle fade
 */
export const HeadingReveal = ({
  children,
  delay = 0.05,
  className = '',
  style = {}
}: HeadingRevealProps) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.75, delay, ease: smoothEase }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

interface StaggerContainerProps {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * 3. StaggerContainer & StaggerItem: Orchestrated sequential grid entrances
 */
export const StaggerContainer = ({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.12,
  amount = 0.15,
  className = '',
  style = {}
}: StaggerContainerProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delayChildren, staggerChildren } }
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  style?: CSSProperties;
}

export const StaggerItem = ({
  children,
  direction = 'up',
  className = '',
  style = {}
}: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
        x: direction === 'right' ? 30 : direction === 'left' ? -30 : 0
      },
      visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.65, ease: smoothEase } }
    }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  lift?: number;
  onClick?: () => void;
}

/**
 * 4. HoverCard: Interactive card physics on pointer hover and mobile tap
 */
export const HoverCard = ({
  children,
  className = '',
  style = {},
  lift = -6,
  onClick
}: HoverCardProps) => (
  <motion.div
    whileHover={{ y: lift, transition: { duration: 0.28, ease: smoothEase } }}
    whileTap={{ scale: 0.99 }}
    className={className}
    style={style}
    onClick={onClick}
  >
    {children}
  </motion.div>
);
