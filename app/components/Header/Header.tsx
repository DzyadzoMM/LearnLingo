import Link from "next/link";
import Image from "next/image";
import "./Header.nodule.css";

export default function Header() {
  return (
    <header className="header">
    <div className="navigation">
        <Link href="/" className="logo" >
            <Image 
        src="/ukraine.svg" 
        alt="Ukraine Flag" 
        width={20} 
        height={20} 
        priority/>
            <span className="text_logo">LearnLingo</span>
        </Link>
        <nav className="nav">
            <Link href="/" className="nav-text">Home</Link>
            <Link href="/teachers" className="nav-text">Teachers</Link>
        </nav>
    </div>

    <div className="auth">
        <Link href="/login" className="login-logo">
        <Image 
        src="/login.svg" 
        alt="Login" 
        width={12} 
        height={11} 
        priority/>
        <span className="login-text">Log In</span>
        </Link>
        <Link href="/signup" className="register-logo">
        <span className="register-text">Registration</span>
        </Link>
    </div>
    </header>
  );
}