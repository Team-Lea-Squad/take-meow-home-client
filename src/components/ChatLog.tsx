"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatLogProps {
  messages: {
    id: string;
    text: string;
    isUser: boolean;
  }[];
}

const ChatLog = ({ messages }: ChatLogProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AnimatePresence>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1, // 각 메시지마다 약간의 딜레이를 줌
              ease: "easeOut"
            }}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isUser
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ChatLog;
