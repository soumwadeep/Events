import "./globals.css";

export const metadata = {
  title: "Soumwadeep's Event Planner",
  description: "World's Most Simplest And Fastest Event Planner Ever Created!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
