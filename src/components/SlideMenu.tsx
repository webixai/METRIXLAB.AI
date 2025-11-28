"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SlideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SlideMenu({ open, onClose }: SlideMenuProps) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const isPremium = user?.publicMetadata?.plan === "premium";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-container")) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [open, onClose]);

  type MenuItem = { name: string; path: string } | { name: string; submenu: { name: string; path: string }[] };

  const commonItems: MenuItem[] = [
    { name: "Profile", path: "/profile" },
    { name: "Features", path: "/features" },
    { name: "Templates", submenu: [
      { name: "Landing Page", path: "/templates/landing" },
      { name: "Portfolio", path: "/templates/portfolio" },
      { name: "Business Site", path: "/templates/business" },
    ]},
    { name: "About Us", path: "/about" },
    { name: "Learn More", path: "/learn" },
  ];

  const premiumItems: MenuItem[] = [
    { name: "My Projects", path: "/projects" },
    { name: "Cancel Subscription", path: "/cancel" },
  ];

  const menuItems = isPremium
    ? [...commonItems.slice(0, 3), ...premiumItems, ...commonItems.slice(3)]
    : commonItems;

  const handleLogout = async () => {
    await signOut();
    onClose();
  };

  return (
    <div className="menu-container">
      {/* Hamburger Button */}
      <motion.button
        className="hamburger-btn"
        onClick={() => onClose()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 100,
          background: "#3d4c41",
          color: "#FFFFFF",
          border: "none",
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {open ? "✕" : "☰"}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClose()}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 40,
            }}
          />
        )}
      </AnimatePresence>

      {/* Slide Menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="slide-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "100%",
              maxWidth: "350px",
              zIndex: 50,
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              borderLeft: "1px solid rgba(61, 76, 65, 0.1)",
              overflowY: "auto",
              paddingTop: "80px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "20px",
                margin: 0,
              }}
            >
              {menuItems.map((item, i) =>
                "submenu" in item ? (
                  <li key={i} className="submenu-item">
                    <span
                      style={{
                        display: "block",
                        padding: "12px 0",
                        fontWeight: "600",
                        color: "#3d4c41",
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.name}
                    </span>
                    <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                      {item.submenu.map((sub: { name: string; path: string }) => (
                        <motion.li
                          key={sub.path}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={sub.path}
                            onClick={() => onClose()}
                            style={{
                              display: "block",
                              padding: "10px 0",
                              color: "#666666",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Poppins, sans-serif",
                              transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#3d4c41")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#666666")
                            }
                          >
                            {sub.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.path || "#"}
                      onClick={() => onClose()}
                      style={{
                        display: "block",
                        padding: "12px 0",
                        color: "#3d4c41",
                        textDecoration: "none",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                        borderBottom: "1px solid #e0e0e0",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#999999")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#3d4c41")
                      }
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                )
              )}

              {/* Premium Badge */}
              {isPremium && (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    padding: "16px 0",
                    marginTop: "20px",
                    borderTop: "1px solid #e0e0e0",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      background: "linear-gradient(135deg, #3d4c41 0%, #2f3f37 100%)",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    ⭐ Premium Member
                  </span>
                </motion.li>
              )}

              {/* Logout */}
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: "16px 0",
                  marginTop: "20px",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#3d4c41",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#2f3f37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#3d4c41")
                  }
                >
                  Logout
                </button>
              </motion.li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
