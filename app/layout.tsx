export const metadata = {
  title: "Bowling Guide",
  description: "Bowling rules, players, leagues and bowling halls in the USA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
