document.addEventListener("DOMContentLoaded", function () {
  function loadPage(page) {
    document.querySelectorAll(".ajax-link").forEach(function (link) {
      link.classList.remove("active");
    });

    document
      .querySelector('.ajax-link[href="' + page + '"]')
      .classList.add("active");

    if (page === "page1") {
      document.getElementById("buttons").innerHTML = `
            <a href="https://selarasin.kalbarprov.go.id/" class="button" id="selarasin">
                <img src="Beranda/img/aplikasi/selarasin.png" alt="Selarasin">
                <span class="tooltiptext">Sistem Layanan Terpadu Satu Pintu</span>
             </a>
            <a href="https://ppid.kalbarprov.go.id/" class="button" style="text-decoration: none;">
                <h4>PPID UTAMA</h4>
                <span class="tooltiptext">Pejabat Pengelola Informasi dan Dokumentasi Utama</span>
            </a>
            <a href="https://cempedak-upsmb.kalbarprov.go.id/beranda" class="button">
                <img src="Beranda/img/aplikasi/cempedak.png" alt="Cempedak">
                <span class="tooltiptext">Cara Cepat Melayani Pengujian dan Kalibrasi</span>
            </a>
            `;
    } else if (page === "page2") {
      document.getElementById("buttons").innerHTML = `
                        <div class="button-grid">
                            <a href="https://litbang.kalbarprov.go.id/" class="button">
                                <p>Balitbang</p>
                                <span class="tooltiptext">Badan Penelitian dan Pengembangan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://bappeda.kalbarprov.go.id/" class="button">
                                <p>Bappeda</p>
                                <span class="tooltiptext">Badan Perencanaan Pembangunan Daerah Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://biroadpem.kalbarprov.go.id/" class="button">
                                <p>Biro Adpem</p>
                                <span class="tooltiptext">Badan Administrasi Pemerintahan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://bkd.kalbarprov.go.id/" class="button">
                                <p>BKD</p>
                                <span class="tooltiptext">Badan Kepegawaian Daerah Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://bpbd.kalbarprov.go.id/" class="button">
                                <p>BPBD</p>
                                <span class="tooltiptext">Badan Penanggulangan Bencana Daerah Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://bppd.kalbarprov.go.id/" class="button">
                                <p>BPPD</p>
                                <span class="tooltiptext">Badan Pengolahan Perbatasan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://bppd.kalbarprov.go.id/" class="button">
                                <p>BPSDM</p>
                                <span class="tooltiptext">Badan Pengembangan Sumber Daya Manusia Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://dinkes.kalbarprov.go.id/" class="button">
                                <p>Dinkes</p>
                                <span class="tooltiptext">Dinas Kesehatan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://disbunnak.kalbarprov.go.id/" class="button">
                                <p>Disbunnak</p>
                                <span class="tooltiptext">Dinas Perkebunan Dan Perternakan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://disketpangan.kalbarprov.go.id/" class="button">
                                <p>Disketpangan</p>
                                <span class="tooltiptext">Dinas Ketahanan Pangan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://diskominfo.kalbarprov.go.id/" class="button">
                                <p>Diskominfo</p>
                                <span class="tooltiptext">Dinas Komunikasi dan Informatika Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://diskopukm.kalbarprov.go.id/" class="button">
                                <p>Diskop UKM</p>
                                <span class="tooltiptext">Dinas Koperasi, Usaha Kecil dan Usaha Menengah Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://disnakertrans.kalbarprov.go.id/" class="button">
                                <p>Disnakertrans</p>
                                <span class="tooltiptext">Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://disperindagesdm.kalbarprov.go.id/" class="button">
                                <p>Disperindag <br> ESDM</p>
                                <span class="tooltiptext">Dinas Pusat Pengembangan Sumber Daya Manusia Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://disporapar.kalbarprov.go.id/" class="button">
                                <p>Disporapar</p>
                                <span class="tooltiptext">Dinas Kepemudaan, Olahraga, dan Periwisata  Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://dpk.kalbarprov.go.id/" class="button">
                                <p>DPK</p>
                                <span class="tooltiptext">Dinas Perpustakaan dan Kearsipan Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://rsjprov.kalbarprov.go.id/" class="button">
                                <p>RSJ Prov</p>
                                <span class="tooltiptext">Rumah Sakit Jiwa Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://satpolpp.kalbarprov.go.id/" class="button">
                                <p>Satpol PP</p>
                                <span class="tooltiptext">Satuan Polisi Pamong Praja Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://dprd.kalbarprov.go.id/" class="button">
                                <p>Sekretariat <br> DPRD</p>
                                <span class="tooltiptext">Sekretariat Dewan Perwakilan Rakyat Daerah Provinsi Kalimantan Barat</span>
                            </a>
                            <a href="https://upelkes-dinkes.kalbarprov.go.id/" class="button">
                                <p>Upelkes <br> Dinkes</p>
                                <span class="tooltiptext">UPT Pelatihan Kesehatan Dinas Kesehatan Provinsi Kalimantan Barat</span>
                            </a>
                        </div>
            `;
    } else if (page === "page3") {
      document.getElementById("buttons").innerHTML = `
            <div class="button-grid">
                <a href="https://krisna.systems/" class="button">
                    <img src="Beranda/img/aplikasi/krisna.png" alt="Krisna">
                    <span class="tooltiptext">Kolaborasi Perencanaan dan Informasi Kinerja Anggaran</span>
                </a>
                <a href="https://www.lapor.go.id/" class="button">
                    <img src="Beranda/img/aplikasi/lapor.png" alt="Lapor">
                    <span class="tooltiptext">Layanan Aspirasi dan Pengaduan Online Rakyat</span>
                </a>
                <a href="https://lpse.kalbarprov.go.id/" class="button">
                    <img src="Beranda/img/aplikasi/lpse.png" alt="LPSE">
                    <span class="tooltiptext">Layanan Pengadaan Secara Elektronik</span>
                </a>
                <a href="https://sipd-ri.kemendagri.go.id/" class="button">
                    <img src="Beranda/img/aplikasi/SIPD.png" alt="SIPD">
                    <span class="tooltiptext">Sistem Informasi Pemerintahan Daerah Republik Indonesia</span>
                </a>
                <a href="https://srikandi.arsip.go.id/" class="button" id="srikandi">
                    <img src="Beranda/img/aplikasi/srikandi.png" alt="Srikandi">
                    <span class="tooltiptext">Sistem Informasi Kearsipam Dinamis Terintegrasi</span>
                </a>
            </div>
            `;
    } else if (page === "page4") {
      document.getElementById("buttons").innerHTML = `
            <div class="button-grid">
                <a href="https://www.kpidkalbar.or.id/" class="button">
                    <p>KPID Kalbar</p>
                    <span class="tooltiptext">Komisi Penyiaran Indonesia Daerah Kalimantan Barat</span>
                </a>
                <a href="https://www.rri.co.id/pusat-pemberitaan" class="button">
                    <p>RRI</p>
                    <span class="tooltiptext">Radio Republik Indonesia</span>
                </a>
                <a href="https://komisiinformasi.go.id/" class="button">
                    <p>Komisi <br> Informasi Pusat</p>
                    <span class="tooltiptext">Komisi Informasi Pusat Republik Indonesia</span>
                </a>
                    <a href="https://www.komisiinformasikalbar.or.id/" class="button">
                    <p>Komisi <br> Informasi Daerah</p>
                    <span class="tooltiptext">Komisi Informasi Provinsi Kalimantan Barat</span>
                </a>
                    <a href="https://ombudsman.go.id/" class="button">
                    <p>Ombudsman</p>
                    <span class="tooltiptext">Ombudsman Republik Indonesia</span>
                </a>
            </div>
            `;
    }
  }

  var currentPage = window.location.hash
    ? window.location.hash.substring(1)
    : "page1";

  loadPage(currentPage);

  document.querySelectorAll(".ajax-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var page = this.getAttribute("href");
      window.location.hash = page;

      loadPage(page);
    });
  });
});
