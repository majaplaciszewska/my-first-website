function mobileMenu() {
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");
    var menu = document.getElementById("main-menu");

    if (mobileMenuIcon) { //tworzymy funkcję warunkową w funkcji mobileMenu//
        mobileMenuIcon.addEventListener("click", function() {
            menu.classList.toggle("opened"); //jesli naciśniemy menu to lista menu się otworzy//
            mobileMenuIcon.classList.toggle("opened");
        })
    }
}

//żeby funkcja się wyświetlała//
mobileMenu();