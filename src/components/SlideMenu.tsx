'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useUser, useClerk } from '@clerk/nextjs';

interface SlideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SlideMenu({ open, onClose }: SlideMenuProps) {
  const { signOut } = useClerk();
  const { user } = useUser();

  const plan = user?.publicMetadata?.plan === 'premium' ? 'premium' : 'free';

  const baseLinks = [
    { label: 'Profile', href: '/profile' },
    { label: 'Features', href: '/features' },
    { label: 'Templates', href: '/templates' },
    { label: 'About Us', href: '/about' },
    { label: 'Learn More', href: '/learn' },
  ];

  const premiumExtras = [
    { label: 'My Projects', href: '/projects' },
    { label: 'Cancel Subscription', href: '/cancel' },
    { label: 'Dark / Light Mode', href: '/theme' },
  ];

  const allLinks = plan === 'premium' ? [...baseLinks, ...premiumExtras] : baseLinks;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            key="menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 22, stiffness: 180 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#11111a]/80 backdrop-blur-xl border-l border-white/10 shadow-lg z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-[#b78bfa]">
                {plan === 'premium' ? 'Premium Menu' : 'Main Menu'}
              </h2>
              <button onClick={onClose} className="p-2 rounded-md hover:bg-white/10">
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-lg">
              {allLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block text-white/90 hover:text-[#00e0b8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => signOut()}
                  className="mt-6 w-full py-2 rounded-md bg-[#b78bfa] hover:bg-[#9b6efc] transition"
                >
                  Logout
                </button>
              </li>
            </ul>

            <div className="mt-auto pt-6 text-sm text-white/50 border-t border-white/10">
              <p>© {new Date().getFullYear()} MetrixLab AI</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
