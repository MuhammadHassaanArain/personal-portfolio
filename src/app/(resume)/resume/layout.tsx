import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navforresume from "../../../../components/navforresume";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{display:"flex"}}>
        <Navforresume/>
        {children}
      </div>
    </div>
  );
}
