import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Wind, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/client-satisfaction" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <Wind className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              JSV
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium uppercase tracking-widest transition-colors ${location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"
                    />
                  )}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors hidden md:block"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden rounded-lg hover:bg-muted transition-colors text-foreground"
              aria-label="Toggle Mobile Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background border-l border-white/10 z-50 md:hidden flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-bold text-xl tracking-tighter text-foreground">
                  Menu
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 flex-grow">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-2xl font-medium tracking-wide transition-colors ${location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto border-t border-white/10 pt-6">
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMenu();
                  }}
                  className="flex items-center gap-4 w-full py-3 px-4 rounded-xl hover:bg-muted transition-colors text-foreground"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-slate-700" />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
