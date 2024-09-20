import "./MaleNavbar.css";
function MaleNavbar() {
  const topwear = [
    { cloth: "T-Shirts" },
    { cloth: "Casual Shirts" },
    { cloth: "Formal Shirts" },
    { cloth: "Sweater" },
    { cloth: "Jackets" },
    { cloth: "Blazers & Coats" },
    { cloth: "Suits" },
  ];
  const bottomwear = [
    { cloth: " Jeans" },
    { cloth: "Casual Trousers" },
    { cloth: "Formal Trousers" },
    { cloth: "Shorts" },
    { cloth: "Track Pants & Joggers" },
  ];
  const festivewear = [
    { cloth: "Kurtas & Kurta Sets " },
    { cloth: "Sherwanis" },
    { cloth: "Nehru Jackets" },
    { cloth: "Dhotis" },
  ];

  return (
    <li className="nav-item">
      <a classNameName="nav-link " aria-current="page" href="/">
        <div className="dropdown">
          <button className="dropbtn">Male</button>
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h3>Top Wear</h3>
              <ul>
                {topwear.map((person) => (
                  <li>
                    <a href={"/" + person.cloth}>{person.cloth}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown-section">
              <h3> Bottomwear</h3>
              <ul>
                {bottomwear.map((person) => (
                  <li>
                    <a href={"/" + person.cloth}>{person.cloth}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown-section">
              <h3> Indian & Festive Wear</h3>
              <ul>
                {festivewear.map((person) => (
                  <li>
                    <a href={"/" + person.cloth}>{person.cloth}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default MaleNavbar;
