import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@/app/globals.css";
import { Header } from "@/components/Header";

const title = "Next Laboratory";
const description = "";
export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className="tracking-wider">
        <div className="mx-auto max-w-screen-sm">
          <Header />
          <main className="px-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
