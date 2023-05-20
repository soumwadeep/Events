import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Soumwadeep's Event Planner",
  description: "World's Most Simplest And Fastest Event Planner Ever Created!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CDN*/}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        {/* Font Awesome Icons*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Navbar/>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
