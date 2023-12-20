import Image from "next/image";
import React, { ErrorInfo, ReactNode } from "react";
import logo from "../assets/lbc-logo.webp";
import Link from "next/link";

interface ErrorBoundaryProps {
  children: ReactNode;
  errorMessage?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message || "Une erreur est survenue.",
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Vous pouvez également enregistrer l'erreur côté client ici
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center gap-14 p-10">
          <Image src={logo} alt="leboncoin" width={200} height={200} />
          <p className=" text-3xl">Oops! {this.props.errorMessage || this.state.errorMessage}</p>
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/"}>Go to homepage</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
