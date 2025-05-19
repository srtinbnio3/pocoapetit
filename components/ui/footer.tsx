export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-muted">
      <div className="container-custom">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} POCO A PETIT All Rights Reserved.</p>
          <p className="mt-1">since 2024.2.23</p>
        </div>
      </div>
    </footer>
  );
} 