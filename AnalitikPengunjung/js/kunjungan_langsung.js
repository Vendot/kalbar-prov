document.addEventListener("DOMContentLoaded", function () {
    let monthlyVisitsChartLangsung, categoryVisitsChartLangsung;

    // Dummy data
    const dummyData = {
        org1: {
            2024: {
                month: [100, 150, 200, 180, 220, 250, 300, 280, 260, 240, 200, 180],
                category: [15, 30, 10, 35, 5, 3, 2]
            },
            2023: {
                month: [80, 120, 160, 140, 180, 200, 240, 220, 200, 180, 160, 140],
                category: [12, 28, 8, 32, 4, 2, 1]
            },
            2022: {
                month: [60, 90, 120, 100, 140, 160, 180, 160, 140, 120, 100, 80],
                category: [10, 25, 6, 30, 3, 1, 1]
            }
        },
        org2: {
            2024: {
                month: [120, 180, 240, 220, 260, 300, 360, 340, 320, 300, 260, 220],
                category: [18, 35, 12, 40, 6, 4, 3]
            },
            2023: {
                month: [100, 150, 200, 180, 220, 250, 300, 280, 260, 240, 200, 180],
                category: [15, 32, 10, 37, 5, 3, 2]
            },
            2022: {
                month: [80, 120, 160, 140, 180, 200, 240, 220, 200, 180, 160, 140],
                category: [12, 28, 8, 34, 4, 2, 1]
            }
        },
        org3: {
            2024: {
                month: [90, 135, 180, 165, 195, 225, 270, 255, 240, 225, 195, 165],
                category: [14, 28, 9, 33, 4, 2, 1]
            },
            2023: {
                month: [70, 105, 140, 125, 155, 175, 210, 195, 180, 165, 140, 125],
                category: [11, 26, 7, 30, 3, 1, 1]
            },
            2022: {
                month: [50, 75, 100, 90, 110, 125, 150, 140, 130, 120, 100, 90],
                category: [8, 22, 5, 28, 2, 1, 0]
            }
        }
    };

    function initCharts() {
        if (monthlyVisitsChartLangsung) {
            monthlyVisitsChartLangsung.destroy();
        }
        if (categoryVisitsChartLangsung) {
            categoryVisitsChartLangsung.destroy();
        }

        const monthlyLangsungCtx1 = document.getElementById('monthlyVisitsChartLangsung').getContext('2d');
        monthlyVisitsChartLangsung = new Chart(monthlyLangsungCtx1, {
            type: 'line',
            data: {
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                datasets: [{
                    label: 'Visitor',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(26, 77, 26, 0.2)',
                    borderColor: 'rgba(26, 77, 26, 1)',
                    borderWidth: 1,
                    fill: true,
                    pointBackgroundColor: 'rgba(26, 77, 26, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(26, 77, 26, 1)'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const categoryLangsungCtx1 = document.getElementById('categoryVisitsChartLangsung').getContext('2d');
        categoryVisitsChartLangsung = new Chart(categoryLangsungCtx1, {
            type: 'pie',
            data: {
                labels: ['Konsultasi', 'Layanan', 'Lainnya', 'Koordinasi', 'Kunjungan', 'Penawaran', 'Peminjaman Aset'],
                datasets: [{
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(27, 94, 32, 0.8)',
                        'rgba(27, 94, 32, 0.7)',
                        'rgba(27, 94, 32, 0.6)',
                        'rgba(27, 94, 32, 0.5)',
                        'rgba(27, 94, 32, 0.4)',
                        'rgba(27, 94, 32, 0.3)',
                        'rgba(27, 94, 32, 0.2)'
                    ],
                    borderColor: [
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)',
                        'rgb(238, 238, 238)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    }
                },
                radius: '70%'
            }
        });
    }

    function updateCharts(chartType) {
        const org = document.getElementById(chartType === 'month' ? 'orgSelect1' : 'orgSelect2').value;
        const year = document.getElementById(chartType === 'month' ? 'yearSelect1' : 'yearSelect2').value;

        if (org && year) {
            const data = dummyData[org][year][chartType === 'month' ? 'month' : 'category'];
            
            if (chartType === 'month' && monthlyVisitsChartLangsung) {
                monthlyVisitsChartLangsung.data.datasets[0].data = data;
                monthlyVisitsChartLangsung.update();
            } else if (chartType === 'category' && categoryVisitsChartLangsung) {
                categoryVisitsChartLangsung.data.datasets[0].data = data;
                categoryVisitsChartLangsung.update();
            }
        }
    }

    function loadPage(page) {
        document.querySelectorAll(".ajax-link-langsung").forEach(function (link) {
            link.classList.remove("active");
        });

        document
            .querySelector('.ajax-link-langsung[href="' + page + '" ]')
            .classList.add("active");

        if (page === "page1_langsung") {
            document.getElementById("section-analitik-langsung").innerHTML = `
            <div class="container-kunjungan-web">
                <div class="stats">
                    <div class="stat">
                        <div class="stat-text">
                        <h2>Total Kunjungan</h2>
                        <i class="fas fa-wave-square"></i>
                        </div>
                        <p>37.562</p>
                    </div>
                    <div class="stat">
                        <div class="stat-text">
                        <h2>Kunjungan Bulan Ini</h2>
                        <i class="fa-solid fa-calendar-day"></i>
                        </div>
                        <p>2.688</p>
                    </div>
                    <div class="stat">
                        <div class="stat-text">
                        <h2>Kunjungan Bulan Lalu</h2>
                        <i class="fas fa-history"></i>
                        </div>
                        <p>12.321</p>
                    </div>
                </div>
            </div>
            `;
        } else if (page === "page2_langsung") {
            document.getElementById("section-analitik-langsung").innerHTML = `
            <div class="charts-pengunjung-langsung">
                <div class="chart-container">
                    <h2>Grafik Kunjungan Perbulan</h2>
                    <div class="filters">
                        <select id="orgSelect1">
                            <option value="">--Pilih Organisasi--</option>
                            <option value="org1">Organisasi 1</option>
                            <option value="org2">Organisasi 2</option>
                            <option value="org3">Organisasi 3</option>
                        </select>
                        <select id="yearSelect1">
                            <option value="">Tahun</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <button onclick="updateCharts('month')">Lihat</button>
                    </div>
                    <canvas id="monthlyVisitsChartLangsung" class="chart"></canvas>
                </div>
                <div class="chart-container">
                    <h2>Grafik Kategori Kunjungan</h2>
                    <div class="filters">
                        <select id="orgSelect2">
                            <option value="">--Pilih Organisasi--</option>
                            <option value="org1">Organisasi 1</option>
                            <option value="org2">Organisasi 2</option>
                            <option value="org3">Organisasi 3</option>
                        </select>
                        <select id="yearSelect2">
                            <option value="">Tahun</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <button onclick="updateCharts('category')">Lihat</button>
                    </div>
                    <canvas id="categoryVisitsChartLangsung" class="chart-langsung"></canvas>
                </div>
            </div>
            `;
            setTimeout(initCharts, 0);
        } else if (page === "page3_langsung") {
            document.getElementById("section-analitik-langsung").innerHTML = `
            <div class="content-peringkat-pengunjung">
                <h2>Peringkat Kunjungan</h2>
                <div class="filters">
                    <select id="organizationSelect">
                        <option value="">--Pilih Organisasi--</option>
                    </select>
                    <select id="yearSelect">
                        <option value="2024">2024</option>
                    </select>
                    <button id="viewBtn">Lihat</button>
                </div>
                <table id="rankingTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Organisasi</th>
                            <th>Total Visitor</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="pagination-berita">
                    <button id="prevBtn"><i class="fa-solid fa-angle-left"></i></button>
                    <div class="number">
                        <div id="page1" class="page-number">1</div>
                        <div id="page2" class="page-number">2</div>
                        <div id="page3" class="page-number selected">3</div>
                        <div id="page4" class="page-number">4</div>
                        <div id="page5" class="page-number">5</div>
                    </div>
                    <button id="nextBtn"><i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            `;
        // Add the new JavaScript for page3_langsung
        const organizationSelect = document.getElementById('organizationSelect');
        const yearSelect = document.getElementById('yearSelect');
        const viewBtn = document.getElementById('viewBtn');
        const rankingTable = document.getElementById('rankingTable').getElementsByTagName('tbody')[0];
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const itemsPerPage = 4;
        let currentPage = 1;
        const totalPages = 8;
        let visiblePages = [1, 2, 3, 4, 5];

        // Mock data untuk berbagai tahun
        const mockData = {
            2022: generateMockData(2022),
            2023: generateMockData(2023),
            2024: generateMockData(2024)
        };

        let currentData = [];

        function generateMockData(year) {
            const bureaus = [
                "Biro Hukum", "Biro Pem", "Biro Ekonomi", "Biro Adpem", "Biro Adpim", "Biro Kesra",
                "Biro Keuangan", "Biro Organisasi", "Biro Umum", "Biro Pengadaan", "Biro Protokol",
                "Biro Kesejahteraan", "Biro Infrastruktur", "Biro Pembangunan", "Biro Perlengkapan",
                "Biro SDM", "Biro TI", "Biro Hubungan Masyarakat", "Biro Kerjasama", "Biro Statistik",
                "Biro Perencanaan", "Biro Pengawasan", "Biro Lingkungan", "Biro Pariwisata"
            ];

            return bureaus.map(bureau => ({
                organization: bureau,
                visitors: Math.floor(Math.random() * 1000) + 500 + (year - 2022) * 100
            }));
        }

        function populateOrganizationSelect() {
            organizationSelect.innerHTML = '<option value="">Semua Organisasi</option>';
            mockData[2024].forEach(item => {
                const option = document.createElement('option');
                option.value = item.organization;
                option.textContent = item.organization;
                organizationSelect.appendChild(option);
            });
        }

        function updateData() {
            const selectedYear = yearSelect.value;
            const selectedOrg = organizationSelect.value;
            
            currentData = mockData[selectedYear];
            
            if (selectedOrg) {
                currentData = currentData.filter(item => item.organization === selectedOrg);
            }
            
            currentData.sort((a, b) => b.visitors - a.visitors);
        }

        function populateTable() {
            rankingTable.innerHTML = '';
            let start = (currentPage - 1) * itemsPerPage;
            let end = start + itemsPerPage;

            if (start >= currentData.length) {
                start = 0;
                end = itemsPerPage;
                currentPage = 1;
            } else if (start < 0) {
                start = currentData.length - itemsPerPage;
                end = currentData.length;
                currentPage = totalPages;
            }

            const pageData = currentData.slice(start, end);

            pageData.forEach((item, index) => {
                const row = rankingTable.insertRow();
                row.insertCell(0).textContent = start + index + 1;
                row.insertCell(1).textContent = item.organization;
                row.insertCell(2).textContent = item.visitors;
            });
        }

        function updatePagination() {
            for (let i = 0; i < visiblePages.length; i++) {
                const pageNumberElement = document.getElementById(`page${i + 1}`);
                pageNumberElement.textContent = visiblePages[i];
                pageNumberElement.classList.remove('selected');

                if (visiblePages[i] === currentPage) {
                    pageNumberElement.classList.add('selected');
                }
            }
        }

        function changePage(direction) {
            if (direction === 'next') {
                currentPage = currentPage < totalPages ? currentPage + 1 : 1;
            } else if (direction === 'prev') {
                currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
            }

            updateVisiblePages();
            updatePagination();
            populateTable();
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

        function handlePageClick(clickedPage) {
            currentPage = clickedPage;
            updateVisiblePages();
            updatePagination();
            populateTable();
        }

        viewBtn.addEventListener('click', function() {
            updateData();
            currentPage = 1;
            updateVisiblePages();
            updatePagination();
            populateTable();
        });

        prevBtn.addEventListener('click', function() {
            changePage('prev');
        });

        nextBtn.addEventListener('click', function() {
            changePage('next');
        });

        // Initialize page
        populateOrganizationSelect();
        yearSelect.value = "2024";
        updateData();
        updateVisiblePages();
        updatePagination();
        populateTable();

        // Add click event listeners to page number buttons
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`page${i}`).addEventListener('click', function() {
                handlePageClick(visiblePages[i - 1]);
            });
        }
    }
}

    var currentPage = window.location.hash
        ? window.location.hash.substring(1)
        : "page1_langsung";

    loadPage(currentPage);

    document.querySelectorAll(".ajax-link-langsung").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var page = this.getAttribute("href");
            window.location.hash = page;

            loadPage(page);
        });
    });

    // Make updateCharts globally accessible
    window.updateCharts = updateCharts;
});