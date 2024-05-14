import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="split">
            <h1>Header</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              temporibus perspiciatis porro sequi nostrum excepturi culpa veniam
              deserunt aliquid, asperiores dolor iure suscipit quae delectus
              quis voluptate, obcaecati laborum, recusandae minima. Magni est,
              explicabo dolorum totam asperiores a voluptatum nemo adipisci
              atque eaque facere iusto vero doloremque quod distinctio velit,
              dolor dolores. Nesciunt dolorem quia vitae tempora et voluptate
              sint facere, expedita vero impedit obcaecati dolore, labore cum ex
              commodi minima. Animi cum qui, distinctio libero, ex, commodi
              tempora aspernatur vel sit fugiat quibusdam. Repellendus,
              reiciendis et. Eveniet tenetur soluta harum! Praesentium porro
              dolore perspiciatis dolor? Quidem nemo labore debitis.
            </p>
            <Link to="Learn">
              <button>Button</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
