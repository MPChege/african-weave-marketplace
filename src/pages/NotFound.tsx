
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-serif font-bold text-chen-brown/20">404</h1>
          <h2 className="text-3xl font-serif font-semibold mt-6 mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-clay transition-all"
          >
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
