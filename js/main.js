var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', function () {
    mainNav.classList.toggle('show');
});

var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var productGrid = document.getElementById('productGrid');
var productCards = Array.from(document.querySelectorAll('.product-card'));

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    filterProducts();
});

searchInput.addEventListener('keyup', function () {
    filterProducts();
});

function filterProducts() {
    var keyword = searchInput.value.toLowerCase().trim();

    productCards.forEach(function (card) {
        var productName = card.getAttribute('data-name').toLowerCase();

        if (productName.indexOf(keyword) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

var sortSelect = document.getElementById('sortSelect');

sortSelect.addEventListener('change', function () {
    var sortValue = sortSelect.value;
    var sortedCards = productCards.slice();

    if (sortValue === 'price-asc') {
        sortedCards.sort(function (a, b) {
            return Number(a.getAttribute('data-price')) - Number(b.getAttribute('data-price'));
        });
    }

    if (sortValue === 'price-desc') {
        sortedCards.sort(function (a, b) {
            return Number(b.getAttribute('data-price')) - Number(a.getAttribute('data-price'));
        });
    }

    if (sortValue === 'name-asc') {
        sortedCards.sort(function (a, b) {
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        });
    }

    if (sortValue === 'default') {
        sortedCards = productCards;
    }

    sortedCards.forEach(function (card) {
        productGrid.appendChild(card);
    });
});

var iconButtons = document.querySelectorAll('.icon-btn');

iconButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.toggle('active');
    });
});

var rentButtons = document.querySelectorAll('.rent-btn');
var buyButtons = document.querySelectorAll('.buy-btn');

rentButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('Bạn đã chọn thuê sản phẩm. Sau này có thể liên kết tới trang chi tiết hoặc giỏ hàng.');
    });
});

buyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('Bạn đã chọn mua hàng. Sau này có thể liên kết tới giỏ hàng.');
    });
});

var mobileMenuBtn = document.querySelector(".main-menu #mobileMenuBtn");
var menuList = document.querySelector(".main-menu #menuList");

if (mobileMenuBtn && menuList) {
    mobileMenuBtn.onclick = function () {
        menuList.classList.toggle("show");
    };
}

var submenuLinks = document.querySelectorAll(".main-menu .has-dropdown > a, .main-menu .has-mega > a");

for (var i = 0; i < submenuLinks.length; i++) {
    submenuLinks[i].onclick = function (event) {
        if (window.innerWidth <= 992) {
            event.preventDefault();

            var parent = this.parentElement;

            if (parent.classList.contains("open")) {
                parent.classList.remove("open");
            } else {
                var openedItems = document.querySelectorAll(".main-menu .menu-item.open");

                for (var j = 0; j < openedItems.length; j++) {
                    openedItems[j].classList.remove("open");
                }

                parent.classList.add("open");
            }
        }
    };
}

window.onresize = function () {
    if (window.innerWidth > 992 && menuList) {
        menuList.classList.remove("show");

        var openedItems = document.querySelectorAll(".main-menu .menu-item.open");

        for (var i = 0; i < openedItems.length; i++) {
            openedItems[i].classList.remove("open");
        }
    }
};

var filterDropdowns = document.querySelectorAll(".filter-dropdown");

for (var i = 0; i < filterDropdowns.length; i++) {
    filterDropdowns[i].onmouseenter = function () {
        document.body.classList.add("filter-active");
    };

    filterDropdowns[i].onmouseleave = function () {
        document.body.classList.remove("filter-active");
    };
}

var currentBanner = 0;
var sliderTrack = document.getElementById("sliderTrack");
var slideItems = document.querySelectorAll(".slide-item");
var bannerDots = document.querySelectorAll(".slider-dots .dot");

function showBanner(index) {
    if (!sliderTrack || slideItems.length === 0) {
        return;
    }

    if (index >= slideItems.length) {
        currentBanner = 0;
    } else if (index < 0) {
        currentBanner = slideItems.length - 1;
    } else {
        currentBanner = index;
    }

    sliderTrack.style.transform = "translateX(-" + (currentBanner * 100) + "%)";

    for (var i = 0; i < bannerDots.length; i++) {
        bannerDots[i].classList.remove("active");
    }

    if (bannerDots[currentBanner]) {
        bannerDots[currentBanner].classList.add("active");
    }
}

function nextBanner() {
    showBanner(currentBanner + 1);
}

function goToSlide(index) {
    showBanner(index);
}

setInterval(nextBanner, 3000);

var backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

if (backToTopBtn) {
    backToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}
