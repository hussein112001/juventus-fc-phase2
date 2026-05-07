export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Juventus FC</h3>
            <p className="text-sm text-primary-foreground/80">
              One of the most successful football clubs in Italy and Europe, known as "The Old Lady" with a rich history and global fan base.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="/squad" className="hover:text-accent transition-colors">Squad</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>📍 Turin, Italy</li>
              <li>🏟️ Allianz Stadium</li>
              <li>📧 info@juventus.it</li>
              <li>📱 +39 011 6563000</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2026 Juventus Football Club. All rights reserved. | Web Development Project Phase 2
          </p>
        </div>
      </div>
    </footer>
  );
}
