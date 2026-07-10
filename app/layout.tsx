import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "마음그린다 | 정서·인지·사회성 통합 심리상담센터",
  description:
    "마음을 안전하게 표현하고, 삶을 다시 그려가는 곳. 영유아부터 성인까지, 정서(EQ)·인지(IQ)·사회성(SQ)을 통합적으로 이해하는 마음그린다 심리상담센터입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
