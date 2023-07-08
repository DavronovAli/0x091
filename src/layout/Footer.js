export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          &#169; {new Date().getFullYear()} Copyright text
          <a href="/#" className="grey-text text-lighten-4 right">Movie</a>
        </div>
      </div>
    </footer>
  );
}
