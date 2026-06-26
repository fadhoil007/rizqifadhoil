import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Video,
  Play,
  Film,
  Scissors,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import profileImg from "../public/images/profile.jpg";

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// YouTube Icon Component
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.89c.3 0 .58.05.85.13V9.2a6.37 6.37 0 00-.85-.06A6.34 6.34 0 003 15.44a6.34 6.34 0 006.33 6.34c3.5 0 6.33-2.83 6.33-6.33V8.83a8.16 8.16 0 004.83 1.58V6.92a4.74 4.74 0 01-1-.23z" />
  </svg>
);

// Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    handle: "@rizqifadhoil",
    icon: InstagramIcon,
    color: "from-pink-500 via-purple-500 to-orange-400",
    hoverColor: "hover:from-pink-400 hover:via-purple-400 hover:to-orange-300",
    url: "https://instagram.com/rizqifadhoil",
  },
  {
    name: "TikTok",
    handle: "@rizqifadhoil",
    icon: TikTokIcon,
    color: "from-cyan-400 via-pink-500 to-white",
    hoverColor: "hover:from-cyan-300 hover:via-pink-400 hover:to-gray-100",
    url: "https://www.tiktok.com/@awakreative",
  },
  {
    name: "YouTube",
    handle: "Rizqi Fadhoil",
    icon: YoutubeIcon,
    color: "from-red-500 to-red-700",
    hoverColor: "hover:from-red-400 hover:to-red-600",
    url: "https://youtube.com/@rizqifadhoil",
  },
  {
    name: "Telegram",
    handle: "@rizqifadhoil",
    icon: TelegramIcon,
    color: "from-blue-400 to-cyan-400",
    hoverColor: "hover:from-blue-300 hover:to-cyan-300",
    url: "https://t.me/rizqixawakreative",
  },
  {
    name: "Email",
    handle: "rizqi@email.com",
    icon: Mail,
    color: "from-emerald-400 to-teal-500",
    hoverColor: "hover:from-emerald-300 hover:to-teal-400",
    url: "#",
  },
];

const services = [
  { icon: Video, title: "Video Editing", desc: "Professional editing for any platform" },
  { icon: Film, title: "Color Grading", desc: "Cinematic color correction & grading" },
  { icon: Scissors, title: "Motion Graphics", desc: "Dynamic text & graphic animations" },
  { icon: Sparkles, title: "Visual Effects", desc: "Stunning VFX & transitions" },
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rizqi@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(-45deg, #0a0a0f, #1a0a2e, #0f172a, #1e1b4b, #312e81, #0a0a0f)",
            backgroundSize: "400% 400%",
          }}
        />
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-spin" style={{ animationDuration: "8s", padding: "4px" }}>
              <div className="w-full h-full rounded-full bg-dark-bg" />
            </div>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden profile-ring">
              <img
                src={profileImg}
                alt="Rizqi Fadhoil"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-dark-bg"
            />
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Rizqi Fadhoil
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300">
              <Play className="w-5 h-5 text-purple-400" />
              <span>Video Editor</span>
              <span className="text-gray-600">|</span>
              <span className="text-purple-300">Content Creator</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-gray-400 max-w-md mb-10 px-4 text-sm sm:text-base leading-relaxed"
          >
            Crafting visual stories that captivate and inspire. Specializing in
            cinematic edits, motion graphics, and content that stands out across
            all platforms.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-full max-w-sm space-y-3 px-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className={`social-btn glass-card flex items-center gap-4 p-4 rounded-2xl group cursor-pointer relative overflow-hidden`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 shadow-lg`}
                >
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {link.name}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    {link.handle}
                  </p>
                </div>
                {/* Arrow / Copy */}
                {link.name === "Email" ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      copyEmail();
                    }}
                    className="text-gray-500 hover:text-white transition-colors p-1"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex gap-6 sm:gap-10 mt-10 px-4"
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "50K+", label: "Followers" },
              { value: "5+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-16 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              What I Do
            </h2>
            <p className="text-gray-400 text-center mb-10 text-sm">
              Services tailored for creators & brands
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 sm:p-5 rounded-2xl text-center group cursor-default"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 max-w-lg mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ready to elevate your content? I&apos;m available for freelance
              projects and collaborations.
            </p>
            <a
              href="mailto:rizqi@email.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Rizqi Fadhoil. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Crafted with passion for visual storytelling
          </p>
        </footer>
      </div>
    </div>
  );
}
