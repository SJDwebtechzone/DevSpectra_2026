import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaDiscord,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

interface SocialIconProps {
  platform?: string;
  icon?: string;
  className?: string;
}

export function SocialIcon({ platform = "", icon = "", className = "w-4 h-4" }: SocialIconProps) {
  const p = (platform || icon).toLowerCase();

  if (p.includes("facebook") || p === "fb") return <FaFacebookF className={className} />;
  if (p.includes("twitter") || p.includes("x.com") || p === "x" || p === "twitter") return <FaTwitter className={className} />;
  if (p.includes("linkedin") || p === "in") return <FaLinkedinIn className={className} />;
  if (p.includes("instagram") || p === "insta") return <FaInstagram className={className} />;
  if (p.includes("youtube") || p === "yt") return <FaYoutube className={className} />;
  if (p.includes("github")) return <FaGithub className={className} />;
  if (p.includes("tiktok")) return <FaTiktok className={className} />;
  if (p.includes("whatsapp")) return <FaWhatsapp className={className} />;
  if (p.includes("discord")) return <FaDiscord className={className} />;
  if (p.includes("mail") || p.includes("email")) return <FaEnvelope className={className} />;

  return <FaGlobe className={className} />;
}
