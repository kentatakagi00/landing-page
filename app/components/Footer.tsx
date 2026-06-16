export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content border-t border-base-300 py-10">
      <nav className="flex flex-wrap justify-center gap-6 text-sm">
        <a className="link link-hover">About</a>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
      <p className="text-base-content/60 text-sm">
        © {new Date().getFullYear()} MyProduct. All rights reserved.
      </p>
    </footer>
  );
}
