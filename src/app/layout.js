import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Providers } from "./redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-center" // Position of the toast container
          autoClose={2000} // Time in milliseconds to close the toast automatically
          hideProgressBar={false} // Whether to hide the progress bar
          newestOnTop={true} // Whether new toasts should appear on top
          closeOnClick={true} // Whether to close the toast when clicked
          rtl={false} // Right-to-left layout
          pauseOnFocusLoss={true} // Whether to pause toast when the window loses focus
          draggable={true} // Whether to allow dragging to dismiss
          pauseOnHover={true} // Whether to pause toast when hovering
          toastStyle={{ backgroundColor: '#454547', color: 'white' }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
