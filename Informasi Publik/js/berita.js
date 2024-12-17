
let currentPage = 3;
const totalPages = 8;
let visiblePages = [1, 2, 3, 4, 5];

const pageContents = {
    1:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </d
    `,
    2:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    3: `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    4:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    5:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    6:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    7:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
    8:  `
    <!-- Berita -->
        <div class="content-list">
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita1</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita2</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 berita3</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad lore</h4>
                </div>
            </div>
            <div class="content-isi">
                <img src="Informasi Publik/img/slider1.jpeg" alt="">
                <div class="content-teks">
                    <p>Senin, 30 September 2024 Berita4</p>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam mollitia deserunt facilis ad</h4>
                </div>
            </div>
        </div>
    `,
};

function updatePagination() {
    for (let i = 0; i < visiblePages.length; i++) {
        const pageNumberElement = document.getElementById(`page${i + 1}`);
        pageNumberElement.textContent = visiblePages[i];
        pageNumberElement.classList.remove('selected');

        if (visiblePages[i] === currentPage) {
            pageNumberElement.classList.add('selected');
        }
    }

    document.getElementById('page-content').innerHTML = pageContents[currentPage];
}

function changePage(direction) {
    if (direction === 'next') {
        currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    } else if (direction === 'prev') {
        currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
    }

    updateVisiblePages();
    updatePagination();
}

function updateVisiblePages() {
    if (currentPage === 1) {
        visiblePages = [totalPages - 1, totalPages, 1, 2, 3];
    } else if (currentPage === 2) {
        visiblePages = [totalPages, 1, 2, 3, 4];
    } else if (currentPage === totalPages - 1) {
        visiblePages = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages, 1];
    } else if (currentPage === totalPages) {
        visiblePages = [totalPages - 2, totalPages - 1, totalPages, 1, 2];
    } else {
        visiblePages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }
}

// New function to handle page number clicks
function handlePageClick(clickedPage) {
    currentPage = clickedPage;
    updateVisiblePages();
    updatePagination();
}

window.onload = function() {
    updateVisiblePages();
    updatePagination();

    // Add click event listeners to page number buttons
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).addEventListener('click', function() {
            handlePageClick(visiblePages[i - 1]);
        });
    }
};