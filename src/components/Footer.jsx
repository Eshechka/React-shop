export function Footer() {
  return (
    <footer className="page-footer green lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright React Shop
          <a
            target="_blabk"
            rel="noopener noreferrer nofollow"
            className="grey-text text-lighten-4 right"
            href="https://github.com/Eshechka/React-Shop.git"
          >
            Github repository
          </a>
        </div>
      </div>
    </footer>
  );
}
