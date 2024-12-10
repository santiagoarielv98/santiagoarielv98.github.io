import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const a11y = useTranslations("accessibility");
  return (
    <footer
      className="relative w-full bg-muted py-4"
      aria-label={a11y("ariaLabel.footer")}
    >
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Santiago Villanueva.{" "}
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
