function Navbar() {
  return `<div class="searchBar">
    <form>
      <input
        id="searchText"
        type="text"
        placeholder="Search free high-resolution images"
        name="search"
      />
      <button type="submit" id="btnSearch">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
  <navbar id="navbar">
    <a href="#">3D Renders</a>
    <a href="#">Street Photography</a>
    <a href="#">Architecture & Interior</a>
    <a href="#">Current Events</a>
    <a href="#">Experimental</a>
    <a href="#">Fashion</a>
    <a href="#">Film</a>
    <a href="#">Food & Drink</a>
    <a href="#">Health & Wellness</a>
    <a href="#">Nature</a>
    <a href="#">People</a>
  </navbar>`;
}

export default Navbar;
