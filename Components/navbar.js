function Navbar({title="MY PAGE"}){
    return `<div id="navbar">
                <div class="left">${title}</div>
                <div class="right">
                    <div>Home</div>
                    <div>User</div>
                    <div>About</div>
                </div>
            </div>`
}

export default Navbar;