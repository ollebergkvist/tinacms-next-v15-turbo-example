export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="flex  w-full flex-col justify-between bg-[#FFF]  md:min-h-[calc(100vh-84px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
