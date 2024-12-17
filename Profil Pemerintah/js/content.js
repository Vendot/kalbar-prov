document.addEventListener("DOMContentLoaded", function () {
    function loadPage(page) {
      document.querySelectorAll(".ajax-link-profpem").forEach(function (link) {
        link.classList.remove("active");
      });
  
      document
        .querySelector('.ajax-link-profpem[href="' + page + '"]')
        .classList.add("active");
  
      if (page === "page1_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
          <div class="container-profpem">
          <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Pj. Gubernur Provinsi Kalimantan Barat</h1>
        </div>
        
        <div class="profile-container">
            <div class="profile-image">
                <img src="Profil Pemerintah/img/pj Gubernur.jpg" alt="Gubernur Photo">
            </div>
            
            <div class="profile-content">
                <div class="profile-details">
                    <h2 class="section-title">Profil Pimpinan</h2>
                    <div class="profile-row">
                        <div class="profile-label">Nama lengkap</div>
                        <div class="profile-value">: dr. HARISSON, M.Kes.</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Tempat dan Tanggal Lahir</div>
                        <div class="profile-value">: Palembang, 08 Agustus 1966</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Jenis Kelamin</div>
                        <div class="profile-value">: Laki - Laki</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Agama</div>
                        <div class="profile-value">: Islam</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Pendidikan</div>
                        <div class="profile-value">: S2 / Magister / Master (Ilmu Kesehatan Masyarakat)</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Status Perkawinan</div>
                        <div class="profile-value">: Kawin</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Jabatan</div>
                        <div class="profile-value">: Pj. Gubernur Provinsi Kalimantan Barat</div>
                    </div>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Riwayat Jabatan</h2>
                    <ul class="history-list">
                        <li>Direktur RSUD Dr.A.Diponegoro Putussibau, 2006</li>
                        <li>Kepala Dinas Kesehatan Kabupaten Kapuas Hulu, 2011</li>
                        <li>Kepala Dinas Kesehatan Kabupaten Kapuas Hulu, 2017</li>
                        <li>Kepala Dinas Kesehatan Provinsi Kalimantan Barat, 2019</li>
                        <li>Sekretaris Daerah Provinsi Kalimantan Barat, 2022</li>
                        <li>Penjabat Gubernur Kalimantan Barat 5 September 2023 s.d. sekarang</li>
                    </ul>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Riwayat Pendidikan</h2>
                    <ul class="history-list">
                        <li>SD Xaverius VII, 1979</li>
                        <li>SMP Xaverius I, 1982</li>
                        <li>SMA Xaverius I, 1985</li>
                        <li>Universitas Sriwijaya Palembang, 1994</li>
                        <li>Universitas Gadjah Mada Yogyakarta, 2007</li>
                    </ul>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Penghargaan</h2>
                    <ul class="history-list">
                        <li>Unit Pelayanan Publik Berakreditasi, Gubernur Kalbar, 2009</li>
                        <li>Penghargaan Citra Pelayanan Prima, LAN, 2012</li>
                        <li>Tanda Penghargaan Lencana Pancawarsa II, Ketua Kwartir Nasional Pramuka, 2012</li>
                        <li>Satyalencana Karya Satya 10 Tahun, Presiden RI, 2014</li>
                        <li>Lencana Pancawarsa IV, Gerakan Pramuka, 2018</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
        `;
      } else if (page === "page2_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
        <div class="container-profpem">
        <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Sekretaris Daerah Provinsi Kalimantan Barat</h1>
        </div>
        
        <div class="profile-container">
            <div class="profile-image">
                <img src="Profil Pemerintah/img/Sekda.jpg" alt="Sekda Photo">
            </div>
            
            <div class="profile-content">
                <div class="profile-details">
                    <h2 class="section-title">Profil Pimpinan</h2>
                    <div class="profile-row">
                        <div class="profile-label">Nama lengkap</div>
                        <div class="profile-value">: dr. HARISSON, M.Kes.</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Tempat dan Tanggal Lahir</div>
                        <div class="profile-value">: Palembang, 08 Agustus 1966</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Jenis Kelamin</div>
                        <div class="profile-value">: Laki - Laki</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Agama</div>
                        <div class="profile-value">: Islam</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Pendidikan</div>
                        <div class="profile-value">: S2 / Magister / Master (Ilmu Kesehatan Masyarakat)</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Status Perkawinan</div>
                        <div class="profile-value">: Kawin</div>
                    </div>
                    <div class="profile-row">
                        <div class="profile-label">Jabatan</div>
                        <div class="profile-value">: Pj. Gubernur Provinsi Kalimantan Barat</div>
                    </div>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Riwayat Jabatan</h2>
                    <ul class="history-list">
                        <li>Direktur RSUD Dr.A.Diponegoro Putussibau, 2006</li>
                        <li>Kepala Dinas Kesehatan Kabupaten Kapuas Hulu, 2011</li>
                        <li>Kepala Dinas Kesehatan Kabupaten Kapuas Hulu, 2017</li>
                        <li>Kepala Dinas Kesehatan Provinsi Kalimantan Barat, 2019</li>
                        <li>Sekretaris Daerah Provinsi Kalimantan Barat, 2022</li>
                        <li>Penjabat Gubernur Kalimantan Barat 5 September 2023 s.d. sekarang</li>
                    </ul>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Riwayat Pendidikan</h2>
                    <ul class="history-list">
                        <li>SD Xaverius VII, 1979</li>
                        <li>SMP Xaverius I, 1982</li>
                        <li>SMA Xaverius I, 1985</li>
                        <li>Universitas Sriwijaya Palembang, 1994</li>
                        <li>Universitas Gadjah Mada Yogyakarta, 2007</li>
                    </ul>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Penghargaan</h2>
                    <ul class="history-list">
                        <li>Unit Pelayanan Publik Berakreditasi, Gubernur Kalbar, 2009</li>
                        <li>Penghargaan Citra Pelayanan Prima, LAN, 2012</li>
                        <li>Tanda Penghargaan Lencana Pancawarsa II, Ketua Kwartir Nasional Pramuka, 2012</li>
                        <li>Satyalencana Karya Satya 10 Tahun, Presiden RI, 2014</li>
                        <li>Lencana Pancawarsa IV, Gerakan Pramuka, 2018</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
        `;
      } else if (page === "page3_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
        <div class="container-profpem">
        <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Visi dan Misi</h1>
        </div>
        
        <div class="profile-container">
            <div class="profile-content">
                <div class="history-section">
                    <h2 class="section-title">Visi</h2>
                    <p>Terwujudnya Kesejahteraan Masyarakat Kalimantan Barat Melalui Percepatan Pembangunan Infrastruktur Dan Perbaikan Tata Kelola Pemerintahan</p>
                </div>

                <div class="history-section">
                    <h2 class="section-title">Misi</h2>
                    <ol class="history-list-order">
                        <li>Mewujudkan percepatan pembangunan insfrastruktur</li>
                        <li>Mewujudkan tata kelola pemerintahan berkualitas dengan prinsip-prinsip Good Governance</li>
                        <li>Mewujudkan masyarakat yang sehat, cerdas, produktif, dan inovatif</li>
                        <li>Mewujudkan masyarakat sejahtera</li>
                        <li>Mewujudkan masyarakat yang tertib</li>
                        <li>Mewujudkan pembangunan berwawasan lingkungan</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    </div>
        `;
      } else if (page === "page4_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
        <div class="container-profpem">
        <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Tugas dan Fungsi</h1>
        </div>
        <div class="profile-container">
            <div class="profile-content">
                <div class="history-section">
                    <ol class="history-list-order">
                        <li>Daerah adalah Provinsi Kalimantan Barat</li>
                        <li>Pemerintah Daerah adalah Gubemur sebagai unsur penyelenggara pemerintahan daerah yang memimpin pelaksanaan urusan pemerintahan yang menjadi kewenangan daerah otonom.</li>
                        <li>Gubernur adalah Gubernur Kalimantan Barat.</li>
                        <li>Dewan Perwakilan Rakyat Daerah selanjutnya disingkat DPRD adalah Dewan Perwakilan Rakyat Daerah Provinsi Kalimantan Barat.</li>
                        <li>Perangkat Daerah Provinsi adalah unsur pembantu Gubernur dan Dewan Perwakilan Rakyat Daerah dalam menyelenggarakan urusan pemerintahan yang menjadi kewenangan daerah provinsi.</li>
                        <li>Sekretariat Daerah adalah unsur staf.</li>
                        <li>Sekretariat Dewan Perwakilan Rakyat Daerah selanjutnya disingkat Sekretariat DPRD adalah unsur pelayanan administrasi dan pemberian dukungan terhadap tugas dan fungsi DPRD.</li>
                        <li>Inspektorat Daerah adalah unsur pengawas penyelenggaraan pemerintahan daerah.</li>
                        <li>Dinas Daerah adalah unsur pelaksana urusan pemerintahan yang menjadi kewenangan daerah.</li>
                        <li>Badan Daerah adalah unsur penunjang urusan pemerintahan yang menjadi kewenangan daerah.</li>
                    </ol>
                </div>
            </div>
        </div>
      </div>

      <div class="container-tusi">
        <div class="header-profpem-tusi">
            <p>Sesuai dengan Peraturan Pemerintah Daerah Provinsi Kalimantan Barat Nomor 5 Tahun 2021 Tentang Perubahan Kedua Atas Peraturan Daerah Nomor 8 Tahun 2016 Tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Kalimantan Barat dengan Susunan Sebagai Berikut:</p>
        </div>
        
        <div class="profile-container">
            <div class="profile-content">
                <div class="history-section">
                    <ol class="history-list-order">
                        <li>Sekretariat Daerah Provinsi Kalimantan Barat merupakan Sekretariat Daerah Tipe A</li>
                        <li>Sekretariat DPRD Provinsi Kalimantan Barat merupakan Sekretariat DPRD Tipe B</li>
                        <li>Inspektorat Provinsi Kalimantan Barat merupakan Inspektorat Tipe A</li>
                        <li>Dinas Daerah Provinsi Kalimantan Barat, terdiri dari:</li>
                        <ol class="history-list-order">
                          <li>Dinas Pendidikan dan Kebudayaan Tipe A menyelenggarakan urusan pemerintahan bidang Pendidikan dan urusan pemerintah bidang kebudayaan;</li>
                          <li>Dinas Kesehatan Tipe A menyelenggarakan urusan pemerintah bidang Kesehatan;</li>
                          <li>Dinas Pekerjaan Umum dan Penataan Ruang Tipe A menyelenggarakan urusan pemerintahan bidang pekerjaan umum dan penataan ruang;</li>
                          <li>Dinas Perumahan Rakyat dan Kawasan Permukiman Tipe B menyelenggarakan urusan pemerintahan bidang perumahan rakyat dan Kawasan permukiman, serta urusan pemerintahan bidang pertanahan;</li>
                          <li>Dinas Sosial Tipe A menyelenggarakan urusan pemerintahan bidang sosial;</li>
                          <li>Dinas Lingkungan Hidup dan Kehutanan Tipe A menyelenggarakan urusan pemerintahan bidang lingkungan hidup dan urusan pemerintahan bidang kehutanan;</li>
                          <li>Dinas Tenaga Kerja dan Transmigrasi Tipe A menyelenggarakan urusan pemerintahan bidang tenaga kerja dan urusan pemerintahan bidang transmigrasi;</li>
                          <li>Dinas Pemberdayaan Perempuan dan Perlindungan Anak Tipe A menyelenggarakan urusan pemerintahan bidang pemberdayaan Perempuan dan perlindungan anak;</li>
                          <li>Dinas Ketahanan Pangan Tipe B menyelenggarakan urussan pemerintahan bidang pangan;</li>
                          <li>Dinas Kependudukan dan Pencatatan Sipil Tipe A menyelenggarakan urusan pemerintahan bidang administrasi kependudukan dan pencatatan sipil, serta urusan pemerintahan bidang pengendalian penduduk dan keluarga berencana;</li>
                          <li>Dinas Pemberdayaan Masyarakat dan Desa Tipe B menyelenggarakan urusan pemerintahan bidang pemberdayaan Masyarakat dan desa;</li>
                          <li>Dinas Perhubungan Tipe A menyelenggarakan urusan pemerintahan bidang perhubungan;</li>
                          <li>Dinas Komunikasi dan Informatika Tipe A menyelenggaran urusan pemerintahan bidang komunikasi dan informatika, serta urusan pemerintahan bidang statistic, urusan pemerintahan bidang persandian;</li>
                          <li>Dinas Koperasi, Usaha Kecil dan Menengah Tipe A menyelenggarakan urusan pemerintahan bidang koperasi, usaha kecil dan menengah;</li>
                          <li>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Tipe B menyelenggaran urusan pemerintahan bidang penanaman modal</li>
                          <li>Dinas Kepemudaan, Olahraga dan Pariwisata Tipe A menyelenggarakan urusan pemerintahan bidang kepemudaan dan olahraga, serta urusan pemerintahan bidang pariwisata;</li>
                          <li>Dinas Perpustakaan dan Kearsipan Tipe A menyelenggarakan urusan pemerintahan bidang perpustakaan dan urusan pemerintahan bidang kearsipan;</li>
                          <li>Dinas Kelautan dan Perikanan Tipe A menyelenggarakan urusan pemerintahan bidang kelautan dan perikanan;</li>
                          <li>Dinas Tanaman Pangan dan Hortikultura Tipe A menyelenggarakan urusan pemerintahan bidang pertanian;</li>
                          <li>Dinas Perkebunan dan Peternakan Tipe A menyelenggarakan urusan pemerintahan bidang pertanian;</li>
                          <li>Dinas Perindustrian, Perdagangan, Energi dan Sumber Daya Mineral Tipe A menyelenggarakan urusan pemerintahan bidang Perindustrian, urusan pemerintahan bidang perdagangan dan urusan pemerintahan bidang energi dan sumber daya mineral;</li>
                          <li>Satuan Polisi Pamong Praja Tipe A menyelenggarakan urusan pemerintahan bidang ketentraman dan ketertiban umum serta perlindungan Masyarakat sub urusan ketentraman dan ketertiban umum.</li>
                      </ol>
                    <li>Badan Daerah Provinsi Kalimantan Barat terdiri dari:</li>
                      <ol class="history-list-order">
                          <li>Badan Perencanaan Pembangunan Daerah Tipe A melaksanakan fungsi penunjang urusan pemerintahan bidang perencanaan;</li>
                          <li>Badan Keuangan dan Aset Daerah Tipe A melaksanakan fungsi penunjang urusan pemerintahan bidang keuangan;</li>
                          <li>Badan Pendapatan Daerah Tipe A melaksanakan fungsi penunjang urusan pemerintahan bidang keuangan;</li>
                          <li>Badan Kepegawaian Daerah Tipe B melaksanakan fungsi penunjang urusan pemerintahan bidang kepegawaian;</li>
                          <li>Badan Pengembangan Sumber Daya Manusia Tipe B melaksanakan fungsi penunjang urusan pemerintahan bidang pendidikan dan pelatihan;</li>
                          <li>Badan Penelitian dan Pengembangan Tipe A melaksanakan fungsi pemerintahan bidang penelitian dan pengembangan;</li>
                          <li>Badan Penanggulangan Bencana Daerah menyelenggarakan urusan pemerintahan bidang ketentraman dan ketertiban umum serta perlindungan masyarakat penanggulangan bencana.</li>
                          <li>Badan Pengelola Perbatasan Daerah Tipe B melaksanakan fungsi penunjang urusan pemerintah bidang pengelola perbatasan;</li>
                          <li>Badan Kesatuan Bangsa dan Politik Tipe A melaksanakan fungsi urusan pemerintahan bidang kesatuan bangsa dan politik;</li>
                          <li>Badan Penghubung untuk melaksanakan fungsi penunjang koordinasi pelaksanaan urusan pemerintahan dan pembangunan dengan Pemerintah Pusat;</li>
                      </ol>
                    </ol>
                </div>
            </div>
        </div>
      </div>
      <div class="container-tusi">
        <div class="header-profpem-tusi">
            <p>Selain UPT Dinas Daerah Provinsi terdapat Rumah Sakit Daerah Provinsi sebagai unit Organisasi bersifat khusus yang memberikan layanan secara professional. Rumah Sakit Daerah Provinsi sebagaimana dimaksud memiliki otonomi dalam pengelolaan keuangan dan barang milik Daerah serta bidang kepegawaian.</p>
        </div>
        <div class="pdf-container">
    
    </div>
      </div>
      </div>
        `;
      } else if (page === "page5_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
        <div class="container-profpem">
        <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Ruang Lingkup Pemerintah Provinsi Kalimantan Barat</h1>
        </div>
        
        <div class="profile-container">
            <div class="profile-content">
                <div class="history-section">
                    <p>Berdasarkan Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah, Gubernur dibantu oleh Perangkat Daerah yang terdiri dari unsur staf, unsur pelaksana, dan unsur penunjang. Unsur staf diwadahi dalam sekretariat Daerah dan sekretariat DPRD. Unsur pelaksana Urusan Pemerintahan yang diserahkan kepada Daerah diwadahi dalam dinas Daerah. Unsur pelaksana fungsi penunjang Urusan Pemerintahan Daerah diwadahi dalam Badan Daerah. Unsur penunjang yang khusus melaksanakan fungsi pembinaan dan pengawasan penyelenggaraan Pemerintahan Daerah diwadahi dalam Inspektorat. Kepala Dinas, Kepala Badan, Sekretaris DPRD, dan Inspektur bertanggung jawab kepada Gubernur melalui Sekretaris Daerah. Fungsi Sekretaris Daerah dalam pertanggungjawaban tersebut sebagai fungsi pengendalian administrasi untuk memverifikasi kebenaran administrasi atas pertanggungjawaban yang disampaikan oleh Kepala Dinas, Kepala Badan, Sekretaris DPRD, Inspektur, Kepala Satuan Polisi Pamong Praja kepada Kepala Daerah.</p> <br>
                    <p>Dasar utama pembentukan Perangkat Daerah, yaitu adanya urusan pemerintahan yang diserahkan kepada Daerah yang terdiri atas Urusan Pemerintahan Wajib dan Urusan Pemerintahan Pilihan. Urusan Pemerintahan Wajib dibagi atas Urusan Pemerintahan yang berkaitan dengan pelayanan dasar dan Urusan Pemerintahan yang tidak berkaitan dengan pelayanan dasar. Berdasarkan pembagian urusan pemerintahan antara Pemerintah Pusat dan Daerah Provinsi dan Kabupaten/Kota sebagaimana dimuat dalam matriks pembagian urusan pemerintahan konkuren, Perangkat Daerah mengelola unsur manajemen yang meliputi sarana dan prasarana, personil, metode kerja dan penyelenggaraan fungsi manajemen yang meliputi perencanaan, pengorganisasian, pelaksanaan, pengkoordinasian, penganggaran, pengawasan, penelitian dan pengembangan, standarisasi, dan pengelolaan informasi sesuai dengan substansi urusan pemerintahannya. Pembentukan Perangkat Daerah mempertimbangkan faktor keuangan, jumlah penduduk, kemampuan keuangan Daerah serta besaran beban tugas sesuai dengan urusan pemerintahan yang diserahkan kepada Daerah sebagai mandat yang wajib dilaksanakan oleh setiap Daerah melalui Perangkat Daerah.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
        `;
      } else if (page === "page6_profpem") {
        document.getElementById("section-profil-pemerintah").innerHTML = `
        <div class="container-profpem">
        <div class="profiles-grid">
        <div class="header-profpem">
            <h1>Struktur Organisasi Pemerintah Provinsi Kalimantan Barat</h1>
        </div>
        <div class="profile-container-image-struktur">
            <img src="Profil Pemerintah/img/struktur_organisasi_1.png" alt="Struktur Organisasi 1">
            <img src="Profil Pemerintah/img/struktur_organisasi_2.png" alt="Struktur Organisasi 2">
        </div>
        </div>
        </div>
        `;
      }
    }

    var currentPage = window.location.hash
      ? window.location.hash.substring(1)
      : "page1_profpem";
  
    loadPage(currentPage);
  
    document.querySelectorAll(".ajax-link-profpem").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        var page = this.getAttribute("href");
        window.location.hash = page;
  
        loadPage(page);
      });
    });
  });
  