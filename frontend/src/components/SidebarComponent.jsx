function SidebarComponent({ svg, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" style={{ cursor: "pointer" }}>
        {svg}
        {text}
      </a>
    </li>
  );
}

export default SidebarComponent;
