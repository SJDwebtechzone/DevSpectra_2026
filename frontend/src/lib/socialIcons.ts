import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaGithub,
  FaGlobe,
  FaPinterestP,
  FaTiktok,
  FaDiscord,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export function getSocialIcon(iconOrPlatform: string, platform?: string, url?: string) {
  const str = `${iconOrPlatform || ""} ${platform || ""} ${url || ""}`.toLowerCase().trim();
  if (str.includes("facebook") || str.includes("fb.com")) return FaFacebookF;
  if (str.includes("twitter") || str.includes("x.com") || str.includes(" x ")) return FaXTwitter || FaTwitter;
  if (str.includes("linkedin")) return FaLinkedinIn;
  if (str.includes("instagram") || str.includes("insta")) return FaInstagram;
  if (str.includes("youtube") || str.includes("youtu.be")) return FaYoutube;
  if (str.includes("whatsapp") || str.includes("wa.me")) return FaWhatsapp;
  if (str.includes("github")) return FaGithub;
  if (str.includes("pinterest")) return FaPinterestP;
  if (str.includes("tiktok")) return FaTiktok;
  if (str.includes("discord")) return FaDiscord;
  if (str.includes("telegram") || str.includes("t.me")) return FaTelegram;
  return FaGlobe;
}

export const defaultSocialLinks = [
  { id: "default-1", platform: "Facebook", icon: "facebook", url: "https://www.facebook.com/", isActive: true, order: 1 },
  { id: "default-2", platform: "X (Twitter)", icon: "twitter", url: "https://x.com/", isActive: true, order: 2 },
  { id: "default-3", platform: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/", isActive: true, order: 3 },
  { id: "default-4", platform: "Instagram", icon: "instagram", url: "https://www.instagram.com/", isActive: true, order: 4 },
  { id: "default-5", platform: "YouTube", icon: "youtube", url: "https://www.youtube.com/", isActive: true, order: 5 },
];
