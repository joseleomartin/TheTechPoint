'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Laptop, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Server, 
  Code, 
  Shield, 
  Wifi, 
  HardDrive,
  Monitor,
  Router,
  Zap,
  Layers,
  Network,
  Terminal,
  GitBranch,
  MessageSquare,
  FileText,
  Users
} from 'lucide-react';

export function CircuitAnimation() {
  // Logos organizados en círculos concéntricos ordenados
  const innerCircle = [
    { Icon: Laptop, angle: 0 },
    { Icon: Smartphone, angle: 45 },
    { Icon: Globe, angle: 90 },
    { Icon: Database, angle: 135 },
    { Icon: Cloud, angle: 180 },
    { Icon: Server, angle: 225 },
    { Icon: Code, angle: 270 },
    { Icon: Shield, angle: 315 },
  ];

  const outerCircle = [
    { Icon: Wifi, angle: 22.5 },
    { Icon: HardDrive, angle: 67.5 },
    { Icon: Monitor, angle: 112.5 },
    { Icon: Router, angle: 157.5 },
    { Icon: Zap, angle: 202.5 },
    { Icon: Network, angle: 247.5 },
    { Icon: Layers, angle: 292.5 },
    { Icon: Terminal, angle: 337.5 },
  ];

  const cornerLogos = [
    { Icon: MessageSquare, position: 'top-left' },
    { Icon: FileText, position: 'top-right' },
    { Icon: Users, position: 'bottom-left' },
    { Icon: GitBranch, position: 'bottom-right' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
      </motion.div>

      {/* Central square with CPU - organized and clean */}
      <motion.div
        className="relative w-80 h-80"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer square border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/70 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
          style={{
            boxShadow: '0 0 35px rgba(239, 68, 68, 0.35), 0 0 70px rgba(239, 68, 68, 0.25), inset 0 0 25px rgba(239, 68, 68, 0.08)',
          }}
          animate={{
            boxShadow: [
              '0 0 35px rgba(239, 68, 68, 0.35), 0 0 70px rgba(239, 68, 68, 0.25), inset 0 0 25px rgba(239, 68, 68, 0.08)',
              '0 0 45px rgba(239, 68, 68, 0.45), 0 0 90px rgba(239, 68, 68, 0.35), inset 0 0 35px rgba(239, 68, 68, 0.12)',
              '0 0 35px rgba(239, 68, 68, 0.35), 0 0 70px rgba(239, 68, 68, 0.25), inset 0 0 25px rgba(239, 68, 68, 0.08)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Inner square */}
        <motion.div
          className="absolute inset-6 rounded-xl border border-primary/50 bg-gradient-to-br from-primary/8 to-transparent"
          animate={{
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Central CPU Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Cpu
              className="w-28 h-28 text-primary"
              strokeWidth={1.8}
              style={{
                filter: 'drop-shadow(0 0 18px rgba(239, 68, 68, 0.5))',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Organized corner nodes */}
        {[
          { x: 20, y: 20 },
          { x: 80, y: 20 },
          { x: 80, y: 80 },
          { x: 20, y: 80 },
        ].map((corner, i) => (
          <motion.div
            key={`corner-${i}`}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              left: `${corner.x}%`,
              top: `${corner.y}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.7)',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Inner circle - 8 logos evenly spaced */}
      {innerCircle.map((item, i) => {
        const radian = (item.angle * Math.PI) / 180;
        const distance = 160;
        const x = Math.cos(radian) * distance;
        const y = Math.sin(radian) * distance;

        return (
          <motion.div
            key={`inner-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
            }}
            animate={{ 
              opacity: [0.8, 1, 0.8],
              scale: [1, 1.08, 1],
              x: [x * 0.95, x, x * 0.95],
              y: [y * 0.95, y, y * 0.95],
            }}
            transition={{
              opacity: {
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              scale: {
                duration: 2.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              y: {
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 30,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="relative w-16 h-16"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div 
                className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 rounded-xl shadow-lg flex items-center justify-center border-2 border-primary/40 backdrop-blur-sm"
                style={{
                  boxShadow: '0 4px 20px rgba(239, 68, 68, 0.2), 0 0 15px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <item.Icon 
                  className="w-8 h-8 text-primary" 
                  strokeWidth={2}
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl bg-primary/15 blur-lg -z-10"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Outer circle - 8 logos evenly spaced */}
      {outerCircle.map((item, i) => {
        const radian = (item.angle * Math.PI) / 180;
        const distance = 220;
        const x = Math.cos(radian) * distance;
        const y = Math.sin(radian) * distance;

        return (
          <motion.div
            key={`outer-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
            }}
            animate={{ 
              opacity: [0.75, 0.95, 0.75],
              scale: [1, 1.06, 1],
              x: [x * 0.96, x, x * 0.96],
              y: [y * 0.96, y, y * 0.96],
            }}
            transition={{
              opacity: {
                duration: 3,
                delay: 0.8 + i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              scale: {
                duration: 2.5,
                delay: 0.8 + i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: 4,
                delay: 0.8 + i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              y: {
                duration: 4,
                delay: 0.8 + i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 30,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="relative w-14 h-14"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div 
                className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 rounded-xl shadow-lg flex items-center justify-center border-2 border-primary/35 backdrop-blur-sm"
                style={{
                  boxShadow: '0 4px 18px rgba(239, 68, 68, 0.18), 0 0 12px rgba(239, 68, 68, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <item.Icon 
                  className="w-7 h-7 text-primary" 
                  strokeWidth={2}
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl bg-primary/12 blur-lg -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 3,
                  delay: 0.8 + i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Corner logos - organized in 4 corners */}
      {cornerLogos.map((item, i) => {
        const positions = {
          'top-left': { x: -280, y: -280 },
          'top-right': { x: 280, y: -280 },
          'bottom-left': { x: -280, y: 280 },
          'bottom-right': { x: 280, y: 280 },
        };
        const pos = positions[item.position as keyof typeof positions];

        return (
          <motion.div
            key={`corner-logo-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
            }}
            animate={{ 
              opacity: [0.7, 0.9, 0.7],
              scale: [1, 1.05, 1],
              x: [pos.x * 0.95, pos.x, pos.x * 0.95],
              y: [pos.y * 0.95, pos.y, pos.y * 0.95],
            }}
            transition={{
              opacity: {
                duration: 3,
                delay: 1.6 + i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              scale: {
                duration: 2.5,
                delay: 1.6 + i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: 4,
                delay: 1.6 + i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              y: {
                duration: 4,
                delay: 1.6 + i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 30,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="relative w-12 h-12"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div 
                className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 rounded-lg shadow-md flex items-center justify-center border-2 border-primary/30 backdrop-blur-sm"
                style={{
                  boxShadow: '0 3px 15px rgba(239, 68, 68, 0.15), 0 0 10px rgba(239, 68, 68, 0.08)',
                }}
              >
                <item.Icon 
                  className="w-6 h-6 text-primary" 
                  strokeWidth={2}
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-lg bg-primary/10 blur-md -z-10"
                animate={{
                  opacity: [0.3, 0.45, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: 1.6 + i * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Organized connecting lines - subtle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
            <stop offset="50%" stopColor="rgba(239, 68, 68, 0.2)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
          </linearGradient>
        </defs>
        {innerCircle.map((item, i) => {
          const radian = (item.angle * Math.PI) / 180;
          const distance = 160;
          const x = Math.cos(radian) * distance;
          const y = Math.sin(radian) * distance;
          
          return (
            <motion.line
              key={`line-inner-${i}`}
              x1="50%"
              y1="50%"
              x2={`${50 + (x / 4)}%`}
              y2={`${50 + (y / 4)}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.5, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
