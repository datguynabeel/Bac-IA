"use client";

import React from "react";
import { motion } from "framer-motion";
import SessionCard from "./SessionCard";
import { Session } from "../../../lib/proto/mock-sessions-limites";

interface SessionsListProps {
  sessions: Session[];
}

export default function SessionsList({ sessions }: SessionsListProps) {
  // Stagger animation setup
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25, // Start after header & objectives animations
      },
    },
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      {sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </motion.div>
  );
}
