document.addEventListener("DOMContentLoaded", function () {
    function loadPage(page) {
      document.querySelectorAll(".ajax-link-infkon").forEach(function (link) {
        link.classList.remove("active");
      });
  
      document
        .querySelector('.ajax-link-infkon[href="' + page + '"]')
        .classList.add("active");
  
      if (page === "page1_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
          <div class="section-table">
            <div class="section-title">PIMPINAN</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pj. Gubernur</td>
                        <td>dr. HARISSON, M.Kes</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)732001 ext. 110</td>
                        <td>gubernur @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Wakil Gubernur</td>
                        <td>-</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)732245 ext. 146</td>
                        <td>wagub @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Pj. Sekretaris Daerah</td>
                        <td>MOHAMMAD BARI, S.Sos.,M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 111</td>
                        <td>setda @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page2_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
          <div class="section-table">
            <div class="section-title">SEKRETARIAT DAERAH</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Asisten I (Asisten Pemerintahan dan Kesejahteraan Rakyat)</td>
                        <td>Dra. Hj. LINDA PURNAMA, M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 140</td>
                        <td>asisten1 @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Asisten II (Asisten Perekonomian dan Pembangunan)</td>
                        <td>Drs. IGNASIUS IK, SH., M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 141</td>
                        <td>asisten2 @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Asisten III (Asisten Administrasi & Umum)</td>
                        <td>Drs. ALFIAN, MM</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 198</td>
                        <td>asisten3 @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page3_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">STAF AHLI</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Staf Ahli Bidang Hukum dan Politik</td>
                        <td>Dra. NATALIA KARYAWATI, ME</td>
                        <td>-</td>
                        <td>-</td>
                        <td>stafahlihukum @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Staf Ahli Bidang Sosial dan SDM</td>
                        <td>Drs. ALEXANDER ROMBONANG, MMA</td>
                        <td>-</td>
                        <td>-</td>
                        <td>stafahlisdm @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Staf Ahli Bidang Pembangunan dan Ekonomi</td>
                        <td>CHRISTIANUS LUMANO, SE., M.Si</td>
                        <td>-</td>
                        <td>-</td>
                        <td>stafahlipembangunan @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page4_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">BIRO</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Biro Pemerintahan</td>
                        <td>AULIA CANDRA, S.STP</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 192</td>
                        <td>pemerintahan @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Hukum</td>
                        <td>ABUSSAMAH, S.STP., M.A.P</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 261</td>
                        <td>hukum @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Perekonomian</td>
                        <td>HARRY RONALDI MAHAPUTRAWAN, SE, MM</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 122</td>
                        <td>ekon @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Kesejahteraan Rakyat</td>
                        <td>Ir. MULYADI, M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 126</td>
                        <td>kesra @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Organisasi</td>
                        <td>MEDYA YANUAR ABDULLAH, S.Sos., M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 239</td>
                        <td>organisasi @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Administrasi Pimpinan</td>
                        <td>JIMMI IMANUDDIN, SH</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 231</td>
                        <td>adpim @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Umum</td>
                        <td>DINI EKA WAHYUNI, S.STP., MT</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 145</td>
                        <td>umum @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Pengadaan Barang Dan Jasa</td>
                        <td>Drs. ASWIN KHATIB, M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541</td>
                        <td>pbj @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Biro Administrasi Pembangunan</td>
                        <td>DAMIANUS KANS PANGARAYA, ST., M.Sc</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 145</td>
                        <td>biroadpem @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page5_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">DPRD</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Biro Pemerintahan</td>
                        <td>AULIA CANDRA, S.STP</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 192</td>
                        <td>pemerintahan @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page6_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">DINAS DAERAH</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dinas Pendidikan dan Kebudayaan</td>
                        <td>RITA HASTARITA, S.Sos., M.Si</td>
                        <td>Jl. Sutan Syahrir No.7, Pontianak</td>
                        <td>+62(0561) 734602</td>
                        <td>dikbud@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Kesehatan</td>
                        <td>dr. ERNA YULIANTI</td>
                        <td>Jl. Dr. A. Hadi No.7, Pontianak</td>
                        <td>+62(561)730118-734706</td>
                        <td>dinkes@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Pekerjaan Umum dan Penataan Ruang</td>
                        <td>ISKANDAR ZULKARNAEN, ST., MT</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)732350</td>
                        <td>dpu@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Tenaga Kerja dan Transmigrasi</td>
                        <td>Drs. HERMANUS, M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)710766</td>
                        <td>disnakertrans@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Pemberdayaan Perempuan dan Perlindungan Anak</td>
                        <td>Dr. HERKULANA MEKARRYANI SOERYAMASOEKA, M.S</td>
                        <td>Jl. Slt. Abdurrahman No.101, Sungai Bangkong</td>
                        <td>+62(561) 766375</td>
                        <td>bp3akb@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Ketahanan Pangan</td>
                        <td>Ir. HERTI HERAWATI, MMA</td>
                        <td>Jl. Adi Sucipto No.48, Bangka Belitung Laut, Pontianak Tenggara</td>
                        <td>+62(561) 736144</td>
                        <td>disnakeswan@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Pemberdayaan Masyarakat dan Desa</td>
                        <td>HENDRA BACHTIAR, S.T., M.T.</td>
                        <td>JL M. Hambal No. 5, Pontianak Kalbar</td>
                        <td>+62(561) 733742</td>
                        <td>umum@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Perhubungan</td>
                        <td>Y. ANTHONIUS RAWING, SE., M.Si</td>
                        <td>Jl. Adi Sucipto Km.9,2 Sungai Raya</td>
                        <td>+62(561)721466</td>
                        <td>pbj@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Komunikasi dan Informatika</td>
                        <td>SAMUEL, SE., M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561) 8173627</td>
                        <td>biroadpem@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Koperasi, Usaha Kecil dan Menengah</td>
                        <td>Drs. JUNAIDI, MM</td>
                        <td>Jl. Sutan Syahrir No. 5 Pontianak/td>
                        <td>?</td>
                        <td>dpm-ptsp@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</td>
                        <td>HENDRA, S.Sos</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>?</td>
                        <td>disporapar@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Kepemudaan, Olahraga dan Pariwisata</td>
                        <td>WINDY PRIHASTARI S.STP., M.Si</td>
                        <td>Jl. Letnan Jendral Sutoyo, Parit Tokaya, Pontianak Selatan</td>
                        <td>?</td>
                        <td>dpk@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Kelautan dan Perikanan</td>
                        <td>FRANS ZENO, S.STP</td>
                        <td>Jl. Sutan Syahrir No. 5 Pontianak/td>
                        <td>+62(561)732521</td>
                        <td>dislautkan@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Tanaman Pangan dan Hortikultura</td>
                        <td>Ir. FLORENTINUS ANUM, M.Si</td>
                        <td>Jl. Alianyang, Pontianak</td>
                        <td>+62(561)734017</td>
                        <td>distan@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Perkebunan dan Peternakan</td>
                        <td>HERONIMUS HERO, SP., M.Si</td>
                        <td>Jl. M. Hambal, Pontianak</td>
                        <td>+62(561)732642-766038</td>
                        <td>disbun@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Lingkungan Hidup dan Kehutanan</td>
                        <td>Ir. ADI YANI, MH</td>
                        <td>Jl. S. Abdurrahman, Pontianak</td>
                        <td>+62(561)734029</td>
                        <td>lhk@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Perindustrian, Perdagangan, Energi dan Sumber Daya Mineral</td>
                        <td>Dr. SYARIF KAMARUZAMAN, M.Si</td>
                        <td>Jl. Sutan Syahrir, Pontianak</td>
                        <td>+62(561)734229</td>
                        <td>disperindagesdm@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Sosial</td>
                        <td>Drs. RAMINUDDIN, M.Si</td>
                        <td>Jl. Sutan Syahrir, Pontianak</td>
                        <td>?</td>
                        <td>dinsos@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Perumahan Rakyat dan Kawasan Permukinan</td>
                        <td>YOSAFAT TRIADHI ANDJIOE, ST., MM., MT</td>
                        <td>Jl. Adisucipto No 50 Pontianak</td>
                        <td>+62(561) 764616</td>
                        <td>disperkim@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Dinas Kependudukan dan Pencatatan Sipil</td>
                        <td>YOHANES BUDIMAN S.IP., M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561) 583047</td>
                        <td>dukcapil@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Penghubung Provinsi Kalimantan Barat</td>
                        <td>ABDUL GANI, SH</td>
                        <td>Jl. Salak No. 32 Kelurahan Guntur, Kecamatan Setiabudi Jakarta Selatan 12980</td>
                        <td>+62(21) 8354284/8319083</td>
                        <td>penghubung@kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Pengelola Perbatasan Daerah Provinsi Kalimantan Barat</td>
                        <td>SEFPRI KURNIADI, S.STP </td>
                        <td>Jl. Jend. A. Yani No 1</td>
                        <td>+62(561) 738408 </td>
                        <td>bppd@kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page7_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">LEMBAGA TEKNIS DAERAH</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Badan Perencanaan Pembangunan Daerah</td>
                        <td>Dra. MAHMUDAH, MM</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 192</td>
                        <td>bappeda @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Pendapatan Daerah</td>
                        <td>MOHAMMAD BARI, S.Sos., M.Si</td>
                        <td>Jl. Adi Sucipto No. 50 A, Pontianak</td>
                        <td>+62(561)736541 ext. 261</td>
                        <td>bapenda @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Kepegawaian Daerah</td>
                        <td>Drs. ANI SOFIAN, MM</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)736541 ext. 122</td>
                        <td>bkd @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Pengembangan Sumber Daya Manusia</td>
                        <td>MARJANI, SE., M.Si</td>
                        <td>Jalan Moh Sohor, Kelurahan Akcaya, Kecamatan Pontianak Selatan</td>
                        <td>+62(561)736541 ext. 126</td>
                        <td>bpsdm @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Penelitian dan Pengembangan</td>
                        <td>-</td>
                        <td>Jl. Dr. Soetomo, Pontianak</td>
                        <td>+62(561)736541 ext. 126</td>
                        <td>litbang @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Kesatuan Bangsa dan Politik</td>
                        <td>Drs. H. MANTO SAIDI, M.Si</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>+62(561)734684</td>
                        <td>kesbangpol @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Penanggulanagan Bencana Daerah</td>
                        <td>Ir. ANSFRIDUS JULIARDI ANDJIOE, ME</td>
                        <td>Jln. Adi Sucipto Km. 3,5 No. 50</td>
                        <td>(0561) 744219</td>
                        <td>bpbd @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Inspektorat Provinsi</td>
                        <td>Dra. MARLYNA, M.Si</td>
                        <td>Jl. Sutan Syahrir, Pontianak</td>
                        <td>+62(561)760282</td>
                        <td>inspektorat @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Badan Keuangan dan Aset Daerah</td>
                        <td>Drs. AHMAD PRIYONO, M.M</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>(0561)</td>
                        <td>bkad @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page8_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">UNSUR PELAKSANA TEKNIS</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rumah Sakit Umum Daerah Dr. Soedarso Prov. Kalbar</td>
                        <td>drg. HARY AGUNG TJAHYADI M.Kes</td>
                        <td>Jl. Dr. Soedarso, Pontianak</td>
                        <td>+62(561)737701-732077</td>
                        <td>rsud @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Wakil Direktur Pelayanan Medik dan Keperawatan Rumah Sakit Umum Daerah dr. Soedarso Prov. Kalbar</td>
                        <td>dr. EKO RUSTIANTO SUHADIMAN</td>
                        <td>Jl. Dr. Soedarso, Pontianak</td>
                        <td>+62(561)737701-732077</td>
                        <td>rsud @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Wakil Direktur Penunjang Rumah Sakit Umum Daerah dr. Soedarso Prov. Kalbar</td>
                        <td>dr. BATARA HENDRA PUTRA SIANIPAR</td>
                        <td>Jl. Dr. Soedarso, Pontianak</td>
                        <td>+62(561)737701-732077</td>
                        <td>rsud @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Wakil Direktur Pendidikan Pengembangan Profesi Rumah Sakit Umum Daerah dr. Soedarso Prov. Kalbar</td>
                        <td>DEDY SHOPIARDI, S.STP</td>
                        <td>Jl. Dr. Soedarso, Pontianak</td>
                        <td>+62(561)737701-732077</td>
                        <td>rsud @ kalbarprov.go.id</td>
                    </tr>
                    <tr>
                        <td>Wakil Direktur Administrasi dan Keuangan Rumah Sakit Umum Daerah dr. Soedarso Prov. Kalbar</td>
                        <td>Drs. RENE RIENALDY, M.Si</td>
                        <td>Jl. Dr. Soedarso, Pontianak</td>
                        <td>+62(561)737701-732077</td>
                        <td>rsud @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      } else if (page === "page9_infkon") {
        document.getElementById("section-informasi-kontak").innerHTML = `
        <div class="section-table">
            <div class="section-title">LEMBAGA LAIN</div>
            <table>
                <thead>
                    <tr>
                        <th>Jabatan/Organisasi</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Telpon</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Satuan Polisi Pamong Praja Provinsi</td>
                        <td>SUHERMAN, SH., MH</td>
                        <td>Jl. A. Yani, Pontianak</td>
                        <td>-</td>
                        <td>satpolpp @ kalbarprov.go.id</td>
                    </tr>
                </tbody>
            </table>
            <div class="notes">
                <div class="note-text">
                    <strong>Catatan: </strong>
                    <p>Untuk mencegah spam, alamat email dikamuflase dengan menambahkan spasi sebelum dan sesudah karakter @.</p>
                </div>
                <div class="note-text">
                    <strong>Contoh: </strong>
                    <div>
                        <p>Tertulis -> tujuan @ kalbarprov.go.id</p>
                        <p>Sebenarnya -> tujuan@kalbarprov.go.id</p>
                    </div>
                </div>
            </div>
          </div>
        `;
      }
    }
  
    var currentPage = window.location.hash
      ? window.location.hash.substring(1)
      : "page1_infkon";
  
    loadPage(currentPage);
  
    document.querySelectorAll(".ajax-link-infkon").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        var page = this.getAttribute("href");
        window.location.hash = page;
  
        loadPage(page);
      });
    });
  });
  