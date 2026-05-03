import "./globals.css";
export const metadata = {
  title: "Maths for Fairness",
  description:
    "Student-led research project exploring fairness and bias using mathematics across UK and India."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}