



function NavBar(props) {

  const className = ["Navbar"];

  if (props.inlines) {
    className.push("inlines");
  }


  const styles = {
    display: "flex",
    gap: "25px",
    
  };


  const link = [
    { name: "Google", link: "https://google.com" },
    { name: "Bing", link: "https://bing.com" },
    { name: "WhatsApp", link: "#" },
    { name: "Instagramm", link: "#" },
    { name: "Lalafo", link: "#" },
  ];

  const linkList = link.map((link) => (

    
      <li>

        <a href={link.link}>
          {link.name}
        </a>
      </li>

  ));

  return (
    <ul style={styles}>
      {linkList}
    </ul>
  );
}


export default NavBar;