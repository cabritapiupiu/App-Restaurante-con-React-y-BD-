import './App.css';
export default function App() {
  return (
    <>
      <div id="landing">
        <header>
          {/* LOGO */}
          <section className="logo">
            <div className="img-logo"></div>
          </section>

          {/* NAVEGADOR */}
          <nav className='navegador'>
            <a href="Logueo">LOGIN</a>
            <a href="Registrarse">REGISTRO</a>

          </nav>
        </header>

        <main id='landing_main'>
          <div className='box'>
            <h1>We Provide<br />Delivery Within</h1>
            <h2>30 Min</h2>
            <div className="a">
              <button>Order Now</button>
              <button>See Menu</button>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
