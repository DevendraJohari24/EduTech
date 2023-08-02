'use client'

import Transition from "@/components/Transition";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({ children }) => {
    const pathname = usePathname();
    return (
    <>
        <AnimatePresence 
        mode="wait">
        <motion.div
        key={pathname}
        className="h-full"
        >
            <Transition />
            {children}
        </motion.div>
        </AnimatePresence>
    </>
)};