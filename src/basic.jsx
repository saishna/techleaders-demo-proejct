import Logo from "./assets/react.svg";
import AnotherLogo from "./assets/image.png";
function App() {
  return (
    <div>
      {/* block elements */}
      <h1>Heading 1</h1>
      <h2>Heading 1</h2>
      <h3>Heading 1</h3>
      <h4>Heading 1</h4>
      <h5>Heading 1</h5>
      <h6>Heading 1</h6>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
        repudiandae.
      </p>
      {/* inline elements */}
      <b>this is bold text</b>
      <i>this is italic text</i>
      <u>thi is for underline</u>
      <span>this is span tag</span>
      <article>Lorem ipsum dolor sit amet.</article>

      {/* unpaired tag */}
      {/* inline element        */}
      <img
        src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww"
        alt="User Images"
      />
      <img src={Logo} alt="Logo" />
      <img src={AnotherLogo} alt="Another Logo" />
      {/* horizontal line  */}
      <hr />
      {/* break line  */}
      <br />

      <button>Click me</button>

      {/* form elements  */}
      <input type="text" placeholder="Search Twitter" />
      <input type="number" />
      <input type="email" />
      <input type="password" />
      <input type="date" />

      {/* anchor tag  */}
      <a href="https://www.google.com">Go to Google</a>
      <a href="https://www.google.com" target="_blank">
        Go to Google new tab
      </a>
      <section>this is section tag</section>
      <main>this is main tag</main>
      <nav>this is for navbar</nav>
      <aside>this is for sidebar</aside>
      <header>this is header tag</header>
      <main>
        <section>contact</section>
        <section>services</section>
      </main>
      <footer>this is footer tag</footer>

      <ul>
        <li>List 1</li>
        <li>List 2</li>
      </ul>

      <ol>
        <li>order list 1</li>
        <li>order list 2</li>
      </ol>
    </div>
  );
}

export default App;
