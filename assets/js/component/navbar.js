const myNavbar = () => {
    let navbarHTML = `
    <div class="logo__container">
        <h1><a href="http://localhost:8012/ngobatin1/admin/user" target="_blank"><img class="logo" src="./assets/img/logo.png" alt="logo"> Ngobatin<span>.</span></a></h1>
    </div>
    <nav>
        <ul class="nav__links">
            <li><a href="index.html">Beranda</a></li>
            <li><a href="about.html">Tentang</a></li>
            <li><a href="http://localhost:8012/ngobatin1/article/read">Artikel</a></li>
        </ul>
    </nav>
    <a class="button button__primary" href="detail.html"><i class="fas fa-hand-holding-usd"></i></a>
    `
    document.getElementById('header').innerHTML = navbarHTML;
}

export default myNavbar;

/*
BUG:
menu "artikel" di NavBar jika diklik saat berada di menu "detail" tidak bisa diproses
*/