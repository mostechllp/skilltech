import React from "react";
import { useTranslation } from "react-i18next";
import { PlayCircle } from "lucide-react";
import logo from "../assets/images/logo/logo.svg";
import qr from "../assets/images/qr/qr2.webp";
import { PillBadge } from "./ui/PillBadge";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#3351a3] text-white pt-20 pb-6 relative z-0 -mt-10">
      <div className="container mx-auto px-4 md:px-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & QR Code Column */}
          <div className="md:col-span-3">
            <img
              src={logo}
              alt="Skill Tech Logo"
              className="h-20 w-auto mb-4"
            />
            <div className="flex flex-col items-center md:items-start">
              <div className="w-40 h-40 flex items-center justify-center">
                  <img src={qr} alt="QR Code" />
                </div>
              <PillBadge text={t("findYourWayToUs")} className="mt-6" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { key: "home", text: t("home") },
                { key: "aboutUs", text: t("aboutUs") },
                {
                  key: "installationServices",
                  text: t("installationServices"),
                },
                { key: "support", text: t("support") },
                { key: "news", text: t("news") },
                { key: "career", text: t("career") },
                { key: "blog", text: t("blog") },
                { key: "contactUs", text: t("contactUs") },
                { key: "privacyPolicy", text: t("privacyPolicy") },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors group"
                  >
                    <PlayCircle className="w-3 h-3 text-pink-accent group-hover:translate-x-1 transition-transform" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Col 1 */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6">{t("products")}</h4>
            <ul className="space-y-3">
              {[
                { key: "tvWallMounts", text: t("tvWallMounts") },
                {
                  key: "monitorDesktopMounts",
                  text: t("monitorDesktopMounts"),
                },
                { key: "tvCeilingMounts", text: t("tvCeilingMounts") },
                {
                  key: "motorizedMountsAndStands",
                  text: t("motorizedMountsAndStands"),
                },
                { key: "tvFloorStandsCart", text: t("tvFloorStandsCart") },
                { key: "projectorMounts", text: t("projectorMounts") },
                { key: "projectorScreens", text: t("projectorScreens") },
                { key: "laptopTabletStands", text: t("laptopTabletStands") },
              ].map((product) => (
                <li key={product.key}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors group"
                  >
                    <PlayCircle className="w-3 h-3 text-pink-accent group-hover:translate-x-1 transition-transform" />
                    {product.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Col 2 */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 opacity-0 hidden md:block">
              {t("products")}
            </h4>
            <ul className="space-y-3">
              {[
                { key: "posMounts", text: t("posMounts") },
                { key: "videoWallMounts", text: t("videoWallMounts") },
                { key: "acBrackets", text: t("acBrackets") },
                {
                  key: "dvdReceiverCpuMounts",
                  text: t("dvdReceiverCpuMounts"),
                },
                { key: "cctvCameraBrackets", text: t("cctvCameraBrackets") },
                {
                  key: "otherMountsAccessories",
                  text: t("otherMountsAccessories"),
                },
                { key: "television", text: t("television") },
              ].map((product) => (
                <li key={product.key}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-pink-accent flex items-center gap-2 transition-colors group"
                  >
                    <PlayCircle className="w-3 h-3 text-pink-accent group-hover:translate-x-1 transition-transform" />
                    {product.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
