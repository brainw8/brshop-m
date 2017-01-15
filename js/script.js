    var link = document.querySelector(".login");
    var popup = document.querySelector(".login-popup");
    var close = document.querySelector(".login-popup-close");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var form = popup.querySelector("form");
    var storage = localStorage.getItem("login");

    var maplink = document.querySelector(".footer-contacts a");
    var mappopup = document.querySelector(".map-popup");
    var mapclose = document.querySelector(".map-popup .login-popup-close");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      //console.log("клик по сслке");
      popup.classList.add("login-popup-view");
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }

    });

    form.addEventListener("submit", function(event) {

      if (popup.classList.contains("login-popup-error")) {
          popup.classList.remove("login-popup-error");
          console.log("удалить popup-error!");
      }

      if (!login.value || !password.value) {
        event.preventDefault();
        console.log("Нужно ввести логин и или пароль");
        popup.classList.add("login-popup-error");

      } else {
        localStorage.setItem("login", login.value);
      }
    });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      //console.log("клик по сслке");
      popup.classList.remove("login-popup-view");
      popup.classList.remove("login-popup-error");
    });

    maplink.addEventListener("click", function(event) {
      event.preventDefault();
      //console.log("клик по сслке");
      mappopup.classList.add("map-popup-view");
    });

    mapclose.addEventListener("click", function(event) {
      event.preventDefault();
      //console.log("клик по сслке");
      mappopup.classList.remove("map-popup-view");
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("login-popup-view")) {
            popup.classList.remove("login-popup-view");
            popup.classList.remove("login-popup-error");
        }
      }
    });
