'use client'

import { useState, useEffect } from 'react'
import { MenuIcon, X, Github, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Navigation from './Navigation'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Password Manager</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Navigation />
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* GitHub Link */}
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Navigation mobile />
              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-800">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <Link
                  href="https://github.com/your-repo"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}