document.addEventListener("DOMContentLoaded", function () {
  function loadPage(page) {
      document.querySelectorAll(".ajax-link-web").forEach(function (link) {
          link.classList.remove("active");
      });

      const activeLink = document.querySelector('.ajax-link-web[href="' + page + '"]');
      if (activeLink) {
          activeLink.classList.add("active");
      }


      if (page === "page1_web") {
          document.getElementById("section-analitik-web").innerHTML = `
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
              <div class="chart-container">
                  <h3>Jumlah Kunjungan Perbulan</h3>
                  <canvas id="myChartKunjunganWeb" width="600" height="200"></canvas>
              </div>
          </div>
          `;

          const ctx1Web = document.getElementById('myChartKunjunganWeb').getContext('2d');
          const myChartKunjunganWeb = new Chart(ctx1Web, {
              type: 'line',
              data: {
                  labels: ['','Juli', 'Agustus', 'September', 'Oktober'],
                  datasets: [{
                      label: 'Jumlah Kunjungan',
                      data: [, 5000, 15000, 10000, 3000],
                      backgroundColor: 'rgba(43, 93, 52, 0.2)',
                      borderColor: 'rgba(43, 93, 52, 1)',
                      borderWidth: 1,
                      fill: true,
                      tension: 0.1 // untuk mengatur garis
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
      } else if (page === "page2_web") {
        document.getElementById("section-analitik-web").innerHTML = `
        <div class="grid-pengunjung-web">
            <div class="card">
                <h2>Total Kunjungan <i class="fas fa-wave-square icon"></i></h2>
                <div class="value">37.562</div>
            </div>
            <div class="card">
                <h2>Asal Kota Pengunjung</h2>
                <div class="map"></div>
            </div>
            <div class="card">
                <h2>Jumlah Pengunjung Perbulan</h2>
                <canvas id="monthlyVisitorsChartWeb" class="chart"></canvas>
            </div>
            <div class="card">
                <h2>Jenis Sistem Operasi Pengunjung</h2>
                <div class="pie-chart">
                    <canvas id="osChart" class="chart"></canvas>
                </div>
            </div>
        </div>
        `;
        var ctx2Web = document.getElementById('monthlyVisitorsChartWeb').getContext('2d');
        var monthlyVisitorsChartWeb = new Chart(ctx2Web, {
            type: 'line',
            data: {
                labels: ['Juli', 'Agustus', 'September', 'Oktober'],
                datasets: [{
                    label: 'Jumlah Pengunjung',
                    data: [2100, 8400, 6300, 4200],
                    backgroundColor: 'rgba(27, 94, 32, 0.2)',
                    borderColor: 'rgba(27, 94, 32, 1)',
                    borderWidth: 1,
                    fill: true
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

        var ctx3Web = document.getElementById('osChart').getContext('2d');
        var osChart = new Chart(ctx3Web, {
    type: 'pie',
    data: {
        labels: ['Windows 11', 'Windows 10', 'Android 14.0', 'Android 13.0', 'Android 12.0', 'Android 11.0', 'Android 10.0', 'Android 9.0', 'Android 8.1', 'Lainnya'],
        datasets: [{
            label: 'Jenis Sistem Operasi',
            data: [14.20, 14.05, 12.67, 10.35, 8.58, 7.54, 2.37, 2.12, 2.37, 23.74],
            backgroundColor: [
                'rgba(27, 94, 32, 0.8)',
                'rgba(27, 94, 32, 0.7)',
                'rgba(27, 94, 32, 0.6)',
                'rgba(27, 94, 32, 0.5)',
                'rgba(27, 94, 32, 0.4)',
                'rgba(27, 94, 32, 0.3)',
                'rgba(27, 94, 32, 0.2)',
                'rgba(27, 94, 32, 0.1)',
                'rgba(27, 94, 32, 0.05)',
                'rgba(27, 94, 32, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,  // Menonaktifkan aspek rasio default
        plugins: {
            legend: {
                position: 'right', 
                align: 'start', 
                labels: {
                    usePointStyle: true,  // Menggunakan bullet kecil
                    pointStyle: 'circle',
                    font: {
                        size: 9  // Mengatur ukuran huruf lebih kecil
                    }
                }
            }

        }
    }
});

      } else if (page === "page3_web") {
        document.getElementById("section-analitik-web").innerHTML = `
        <div class="container-kunjungan-web">
              <div class="stats">
                  <div class="stat">
                      <div class="stat-text">
                      <h2>Total Berita</h2>
                      <i class="fas fa-wave-square"></i>
                      </div>
                      <p>37.562</p>
                  </div>
                  <div class="stat">
                      <div class="stat-text">
                      <h2>Berita Bulan Ini</h2>
                      <i class="fa-solid fa-calendar-day"></i>
                      </div>
                      <p>2.688</p>
                  </div>
                  <div class="stat">
                      <div class="stat-text">
                      <h2>Berita Bulan Lalu</h2>
                      <i class="fas fa-history"></i>
                      </div>
                      <p>12.321</p>
                  </div>
              </div>
          </div>
        `;
        }
    }
  
    var currentPage = window.location.hash
      ? window.location.hash.substring(1)
      : "page1_web";
  
    loadPage(currentPage);
  
    document.querySelectorAll(".ajax-link-web").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        var page = this.getAttribute("href");
        window.location.hash = page;
  
        loadPage(page);
      });
    });
  });
  