document.addEventListener("DOMContentLoaded", function () {
  // Variables for TPAD functionality
  // Variables for TPAD functionality
  let currentPage = 1;
  const itemsPerPage = 3;
  let flatDocuments = [];
  let filteredDocuments = [];

  // TPAD Data and helper functions
  function flattenTpadData(data) {
      let flatDocuments = [];
      Object.entries(data).forEach(([year, docs]) => {
          docs.forEach(doc => {
              flatDocuments.push({
                  ...doc,
                  year
              });
          });
      });
      return flatDocuments.sort((a, b) => {
          if (b.year !== a.year) {
              return b.year - a.year;
          }
          return new Date(b.date) - new Date(a.date);
      });
  }

  // TPAD data object
  const tpadData = {
      "2024": [
          {
              title: "PERATURAN DAERAH NOMOR 7 TAHUN 2023 TENTANG APBD TAHUN ANGGARAN 2024",
              date: "31 Januari 2024, 10:00",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202404161713247157-full-perda-apbd-murni-2024.pdf#toolbar=0"
          },
          {
              title: "PERATURAN GUBERNUR NOMOR 57 TAHUN 2023 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2024",
              date: "31 Januari 2024, 09:58",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202403251711337225-pergub-nomor-57-tahun-2023-penjabaran-apbd-ta-2024.pdf#toolbar=0"
          }
      ],
      "2023": [
          {
              title: "Peraturan Daerah Provinsi Kalimantan Barat Nomor 5 Tahun 2024 tentang Pertanggungjawaban Pelaksanaan APBD Tahun Anggaran 2023",
              date: "25 September 2024, 15:24",
              documentUrl: "https://kalbarprov.go.id/file/4q8urq8Yz7l4xxIXJMsI.pdf#toolbar=0"
          },
          {
              title: "OPINI BPK TERHADAP LKPD TAHUN ANGGARAN 2023",
              date: "10 Juni 2024, 09:00",
              documentUrl: "https://kalbarprov.go.id/file/gxQzrxfmUoWNJfgiSoxa.pdf#toolbar=0"
          },
          {
              title: "LAPORAN REALISASI ANGGARAN SELURUH SKPD APBD TAHUN ANGGARAN 2023 [AUDITED]",
              date: "10 Juni 2024, 08:55",
              documentUrl: "https://kalbarprov.go.id/file/eqnonq9vp5vKp1vK0rkT.zip"
          },
          {
            title: "CATATAN ATAS LAPORAN KEUANGAN (CALK) APBD TAHUN ANGGARAN 2023 [AUDITED]",
            date: "10 Juni 2024, 08:50",
            documentUrl: "https://kalbarprov.go.id/file/aYBSvqgA2hiFbUjb0Te9.pdf#toolbar=0"
          },
          {
            title: "LAPORAN NERACA APBD TAHUN ANGGARAN 2023 [AUDITED]",
            date: "10 Juni 2024, 08:48",
            documentUrl: "https://kalbarprov.go.id/file/z5ad2GYaVm4QuL01a6Um.pdf#toolbar=0"
          },
          {
            title: "LAPORAN REALISASI ANGGAAN BKAD TAHUN ANGGARAN 2023 [AUDITED]",
            date: "10 Juni 2024, 08:47",
            documentUrl: "https://kalbarprov.go.id/file/oyh2oMkGBfqUWi9BhoeY.pdf#toolbar=0"
          },
          {
            title: "LAPORAN ARUS KAS APBD TAHUN ANGGARAN 2023 [AUDITED]",
            date: "10 Juni 2024, 08:46",
            documentUrl: "https://kalbarprov.go.id/file/eqnonq9vp5vKp1vK0rkT.zip"
          },
          {
            title: "REALISASI PENDAPATAN DAERAH, BELANJA DAERAH, DAN PEMBIAYAAN DAERAH APBD TAHUN ANGGARAN 2023 [AUDITED]",
            date: "10 Juni 2023, 08:45",
            documentUrl: "https://kalbarprov.go.id/file/pzTCKFmk874V2vsgXHTq.pdf#toolbar=0"
          },
          {
            title: "LAPORAN KEUANGAN BUMD [AUDITED] TAHUN ANGGARAN 2023",
            date: "15 April 2024, 10:45",
            documentUrl: "https://kalbarprov.go.id/file/ZpX0NYDqIjPjnmUCAVug.zip"
          },
          {
            title: "PERATURAN DAERAH NOMOR 59 TAHUN 2023 TENTANG PERUBAHAN ATAS PERGUB NOMOR 208 TAHUN 2021 TENTANG KEBIJAKAN",
            date: "4 Januari 2024, 08:50",
            documentUrl: "https://kalbarprov.go.id/file/3erztgluhY1qFfLfCt1g.pdf#toolbar=0"
          },
          {
            title: "RENCANA UMUM PENGADAAN 2023",
            date: "29 Desember 2023, 12:10",
            documentUrl: "https://kalbarprov.go.id/file/72xz2ngYvGNSjkTg0LF4.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR NOMOR 51 TAHUN 2023 TENTANG PENJABARAN PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "6 November 2023, 22:20",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202312281703778573-upload-batang-tubuh-pergub-nomor-51-tahun-2023-tentang-penjabaran-perubahan-apbd-2023.pdf#toolbar=0"
          },
          {
            title: "PERATURAN DAERAH NOMOR 6 TAHUN 2023 TENTANG PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "6 November 2023, 22:18",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202312281703778520-upload-batang-tubuh-perda-nomor-6-tahun-2023-tentang-perubahan-apbd-2023-1-1.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN GUBERNUR TENTANG PENJABARAN PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "6 November 2023, 07:24",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202401181705546439-batang-tubuh-rapergub-penjabaran-apbd-ta-2024.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN DAERAH TENTANG PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "6 November 2023, 07:23",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202401181705546358-batang-tubuh-rancangan-perda-apbd-ta-2024.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "19 September 2023, 08:25",
            documentUrl: "https://kalbarprov.go.id/file/jPgvwotFHGfaGkRZgCvF.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RANCANGAN PERUBAHAN APBD TAHUN ANGGARAN 2023",
            date: "19 September 2023, 08:24",
            documentUrl: "https://kalbarprov.go.id/file/WyEQHB5InPtgr0C1ZGxO.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA SKPD TH. 2023",
            date: "14 September 2023, 19.50",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309141694697395-ringkasan-rka-skpd-2023.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN DPA SKPD TH. 2023",
            date: "14 September 2023, 19.49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309141694697340-ringkasan-dpa-skpd-2023.pdf#toolbar=0"
          },
          {
            title: "RESUME HASIL PEMERIKSAAN BPK TH. 2022 OPINI BPK",
            date: "13 September 2023, 13:08",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586818-resume-hasil-pemeriksaan-bpk-2022-opini-bpk-file.pdf#toolbar=0"
          },
          {
            title: "LRA TA 2022 AUDITED",
            date: "13 September 2023, 13:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586749-lra-ta-2022-audited.pdf#toolbar=0"
          },
          {
            title: "NERACA TA 2022 AUDITED",
            date: "13 September 2023, 13:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586780-neraca-ta-2022-audited-file.pdf#toolbar=0"
          },
          {
            title: "LRA SEMESTER 2 PEMPROV KALBAR TAHUN 2022",
            date: "13 September 2023, 13:06",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586723-lra-sem-2-pemprov-2022-file.pdf#toolbar=0"
          },
          {
            title: "LRA 25 AGUSTUS TAHUN 2023",
            date: "13 September 2023, 13:05",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586672-lra-25-agustus-2023-file.pdf#toolbar=0"
          },
          {
            title: "LKPD 2022 AUDITED",
            date: "13 September 2023, 12:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586371-lkpd-2022-audited-file.pdf#toolbar=0"
          },
          {
            title: "DAFTAR INVESTASI SAMPAI DENGAN TAHUN 2023",
            date: "13 September 2023, 12:57",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694586203-daftar-investasi.pdf#toolbar=0"
          },
          {
            title: "RKPD PERUBAHAN 2023",
            date: "28 Juli 2023, 10:30",
            documentUrl: "https://kalbarprov.go.id/file/d1JMgRJtEsAVW5e4dEd3.pdf#toolbar=0"
          },
          {
            title: "AKUNTABILITAS DAN KINERJA TAHUNAN PEMERINTAH DAERAH 2023",
            date: "28 Maret 2023, 08:50",
            documentUrl: "https://kalbarprov.go.id/file/tP0LjWIEvrQQBo8DdObK.pdf#toolbar=0"
          },
          {
            title: "SURAT KEPUTUSAN GUBERNUR KALBAR TENTANG PEJABAT PENGELOLA KEUANGAN DAERAH TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:45",
            documentUrl: "https://kalbarprov.go.id/file/MWgzye4EjwXEx8DSeJuj.pdf#toolbar=0"
          }
          ,
          {
            title: "RINGKASAN DPA SELURUH SKPD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:45",
            documentUrl: "https://kalbarprov.go.id/file/4PsLEQXQbGjqVKS74L9M.zip"
          },
          {
            title: "RINGKASAN RKA SELURUH SKPD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:40",
            documentUrl: "https://kalbarprov.go.id/file/AiRKIbUHfURoHsfBebGN.zip"
          },
          {
            title: "RINGKASAN DPA BKAD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:39",
            documentUrl: "https://kalbarprov.go.id/file/hfJsdib78YGyF7OK8NTY.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA BKAD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:38",
            documentUrl: "https://kalbarprov.go.id/file/0mLG28ka0dfCrQ3AIghF.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR NOMOR 96 TAHUN 2022 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 08:37",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202303071678155150-pergub-96-2022murni2023.pdf#toolbar=0"
          },
          {
            title: "PERATURAN DAERAH NOMOR 7 TAHUN 2022 TENTANG APBD TAHUN ANGGARAN 2023",
            date: "4 Januari 2023, 07:58",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202303061678086630-perda7th2022apbd-2023compressed.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN DAERAH TENTANG ANGGARAN PENDAPATAN DAN BELANJA DAERAH TAHUN ANGGARAN 2023",
            date: "29 Desember 2022, 09:15",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202401181705545920-raperda-apbd-murni-2023.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN GUBERNUR TENTANG PENJABARAN APBD TAHUN ANGGARAN 2023",
            date: "29 Desember 2022, 09:10",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202401181705545999-rapergub-murni-2023.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN PRIORITAS DAN PLAFON ANGGARAN SEMENTARA (PPAS) TAHUN ANGGARAN 2023",
            date: "8 September 2023, 07:52",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309061693973969-ppas-2023.pdf#toolbar=0"
          },
          {
            title: "KEBIJAKAN UMUM ANGGARAN (KUA) TAHUN ANGGARAN 2023",
            date: "8 September 2022, 07:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309061693973709-kua-2023.pdf#toolbar=0"
          },
          {
            title: "RENCANA KERJA PEMERINTAH DAERAH (RKPD) TAHUN 2023",
            date: "14 Juli 2022, 07:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202309131694571107-rencana-kerja-pemerintah-daerah-rkpd-tahun-2023-file.pdf#toolbar=0"
          }
      ],
      "2022": [
          {
              title: "RANCANGAN PERATURAN DAERAH TENTANG PERTANGGUNGJAWABAN PELAKSANAAN APBD TAHUN ANGGARAN 2022",
              date: "2 Oktober 2023, 14:38",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697097850-24-rancangan-raperda-pertanggungjawaban-pelaksanaan-apbd-2022.pdf#toolbar=0"
          },
          {
              title: "LAPORAN NERACA APBD TAHUN ANGGARAN 2022 [AUDITED]",
              date: "30 Mei 2023, 14:31",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697097378-21-neraca-2022.pdf#toolbar=0"
          },
          {
              title: "LAPORAN REALISASI ANGGARAN BKAD APBD TAHUN ANGGARAN 2022 [AUDITED]",
              date: "30 Mei 2023, 14:30",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310131697182318-20-lra-ppkd-2022.pdf#toolbar=0"
          },
          {
              title: "LAPORAN REALISASI ANGGARAN SELURUH SKPD APBD TAHUN ANGGARAN 2022 [AUDITED]",
              date: "30 Mei 2023, 14:28",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310131697182203-19-lra-seluruh-skpd.rar#toolbar=0"
          },
          {
              title: "LAPORAN ARUS KAS APBD TAHUN ANGGARAN 2022 [AUDITED]",
              date: "30 Mei 2023, 14:26",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697097053-18-arus-kas-2022.pdf#toolbar=0"
          },
          {
            title: "REALISASI PENDAPATAN DAERAH, BELANJA DAERAH, DAN PEMBIAYAAN DAERAH APBD TAHUN ANGGARAN 2022[AUDITED]",
            date: "30 Mei 2023, 13:51",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697095021-101112-realisasi-pendapatan-belanja-dan-pembiayaan.pdf#toolbar=0"
          },
          {
            title: "CATATAN ATAS LAPORAN KEUANGAN (CALK) APBD TAHUN ANGGARAN 2022 [AUDITED]",
            date: "15 Mei 2023, 14:33",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697097532-22-calk-2022-audited.pdf#toolbar=0"
          },
          {
            title: "OPINI BPK TERHADAP LKPD TAHUN ANGGARAN 2022",
            date: "1 Mei 2023, 15:51",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697102169-opini-bpk-2022.pdf#toolbar=0"
          },
          {
            title: "LAPORAN KEUANGAN BUMD TAHUN ANGGARAN 2022",
            date: "1 Mei 2023, 14:35",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697097760-23-lapkeu-bumd-2022.rar#toolbar=0"
          },
          {
            title: "AKUNTABILITAS DAN KINERJA TAHUNAN PEMERINTAH DAERAH 2022",
            date: "30 Maret 2023, 08:06",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697074283-lppd-tahun-2022.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR KALIMANTAN BARAT NOMOR 84 TAHUN 2022 TENTANG PENJABARAN PERUBAHAN APBD TA 2022",
            date: "5 Desember 2022, 16:05",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202212291672314068-pergub-no-84-2022-ttg-perubahan-apbd-22.pdf#toolbar=0"
          },
          {
            title: "PERATURAN DAERAH PROVINSI KALIMANTAN BARAT NOMOR 4 TAHUN 2022 TENTANG PERUBAHAN APBD TA 2022",
            date: "5 Desember 2022, 16:01",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202212291672305813-perda-no-4-tahun-2022-perubahan-apbd-ta-2022.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA PERUBAHAN APBD TAHUN ANGGARAN 2022",
            date: "28 November 2022, 14:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697096051-15-ringkasan-rka-perubahan-apbd-2022.pdf#toolbar=0"
          },
          {
            title: "LAPORAN PERTANGGUNGJAWABAN KEUANGAN DAERAH (LPKD)",
            date: "11 Oktober 2022, 20:37",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202210111665496127-ringkasan-laporan-keuangan-yang-telah-diaudit-tahun-2021.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN LAPORAN KEUANGAN YANG TELAH DIAUDIT TAHUN 2021 TERDIRI DARI LRA-CALK-NERACA DAN DAFTAR ASE",
            date: "11 Oktober 2022, 20:31",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202210111665495728-ringkasan-laporan-keuangan-yang-telah-diaudit-tahun-2021.pdf#toolbar=0"
          },
          {
            title: " RINGKASAN DOKUMEN RANCANGAN PERUBAHAN APBD TAHUN ANGGARAN 2022",
            date: "10 Oktober 2022, 13:57",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310131697181949-13-ringkasan-rancangan-perubahan-apbd-2022opt.pdf#toolbar=0"
          },
          {
            title: "RENCANA UMUM PENGADAAN 2022",
            date: "21 September 2022, 09:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310051696473119-rup-nasional-kalbar.pdf#toolbar=0"
          },
          {
            title: "RKPD PERUBAHAN 2022",
            date: "15 Agustus 2022, 09:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310161697426441-rkpd-perubahan-2022.pdf#toolbar=0"
          },
          {
            title: "OPINI BPK RI ATAS LKPD",
            date: "16 Mei 2022, 20:40",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202210111665496208-opini-bpk-ri-atas-lkpd.pdf#toolbar=0"
          },
          {
            title: "NOTA KESEPAKATAN PPAS TAHUN ANGGARAN 2022",
            date: "25 April 2022, 09:12",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650853230-nota-kesepakatan-ppas-ta-2022.pdf#toolbar=0"
          },
          {
            title: "NOTA KESEPAKATAN KUA TAHUN ANGGARAN 2022",
            date: "25 April 2022, 09:10",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650853123-nota-kesepakatan-kua-ta-2022.pdf#toolbar=0"
          },
          {
            title: "BERITA ACARA PERSETUJUAN BERSAMA KEPALA DAERAH DAN DPRD PROV KALBAR TENTANG RAPBD TA 2022",
            date: "25 April 2022, 09:03",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650852687-20211201ba-kesepakatan-bersama-rapbd.pdf#toolbar=0"
          },
          {
            title: "PENYAMPAIAN RANCANGAN APBD TAHUN ANGGARAN 2022",
            date: "25 April 2022, 08:58",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650852494-penyampaian-rapbd-22.pdf#toolbar=0"
          },
          {
            title: "PENYAMPAIAN RANCANGAN KUA PPAS TAHUN ANGGARAN 2022",
            date: "25 April 2022, 08:55",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650852230-penyampaian-rancangan-kuappas-22.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR KALIMANTAN BARAT NOMOR 204 TAHUN 2021 TENTANG HSPK TA 2022",
            date: "25 April 2022, 08:50",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650851911-pergub-hspk-no-204-tahun-2021.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR KALIMANTAN BARAT NOMOR 203 TAHUN 2021 TENTANG ASB TA 2022",
            date: "25 April 2022, 08:48",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650851772-pergub-asb-no-203-tahun-2021.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR KALIMANTAN BARAT NOMOR 154 TAHUN 2021 TENTANG SHBJ TA 2022",
            date: "25 April 2022, 08:23",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650850587-pergub-154-tahun-2021-tentang-shbj-2022-lampiran.pdf#toolbar=0"
          },
          {
            title: "SURAT KEPUTUSAN GUBERNUR KALBAR TENTANG PEJABAT PENGELOLA KEUANGAN DAERAH TAHUN ANGGARAN 2022",
            date: "3 Januari 2022, 14:10",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697096168-16-sk-gubernur-tentang-pejabat-pengelola-keuangan-daerah-2022.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN DPA BKAD APBD TAHUN ANGGARAN 2022",
            date: "3 Januari 2022, 14:01",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310101696922808-9-ringkasan-dpa-ppkd-murni-2022.pdf#toolbar=0"
          },
          {
            title: " RINGKASAN DPA SELURUH SKPD APBD TAHUN ANGGARAN 2022",
            date: "3 Januari 2022, 13:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310101696922695-8-ringkasan-dpa-skpd-murni-2022.rar#toolbar=0"
          },
          {
            title: "RINGKASAN RKA BKAD APBD TAHUN ANGGARAN 2022",
            date: "3 Januari 2022, 13:50",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310101696922131-4-ringkasan-rka-ppkd-murni-2022.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA SELURUH SKPD APBD TAHUN ANGGARAN 2022",
            date: "3 Januari 2022, 13:46",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310101696921962-3-ringkasan-rka-skpd-murni-2022.rar#toolbar=0"
          },
          {
            title: "PERDA NOMOR 11 TAHUN 2021 TENTANG APBD TAHUN ANGGARAN 2022 [BAGIAN II]",
            date: "3 Januari 2022, 13:22",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203211647844337-perda-nomor-11-tahun-2021-bagian-ii.pdf#toolbar=0"
          },
          {
            title: "PERDA NOMOR 11 TAHUN 2021 TENTANG APBD TAHUN ANGGARAN 2022 [BAGIAN I]",
            date: "3 Januari 2022, 11:37",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203211647844204-perda-nomor-11-tahun-2021-bagian-i.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN VI",
            date: "3 Januari 2022, 09:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918954-pergub-nomor-216-tahun-2021-bagian-vi.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN V",
            date: "3 Januari 2022, 09:58",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918451-pergub-nomor-216-tahun-2021-bagian-v.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN IV",
            date: "3 Januari 2022, 09:56",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918692-pergub-nomor-216-tahun-2021-bagian-iv.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN III]",
            date: "3 Januari 2022, 09:55",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918596-pergub-nomor-216-tahun-2021-bagian-iii.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN II",
            date: "3 Januari 2022, 09:53",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918232-pergub-nomor-216-tahun-2021-bagian-ii.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 216 TAHUN 2021 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2022 [BAGIAN I",
            date: "3 Januari 2022, 09:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647918112-pergub-nomor-216-tahun-2021-bagian-i.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR NOMOR 208 TAHUN 2021 TENTANG KEBIJAKAN AKUNTANSI",
            date: "30 Desember 2021, 14:12",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310121697096277-17-pergub-nomor-208-tahun-2021-kebijakan-akuntansi-pada-pemerintah-provinsi-kalimantan-barat.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RANCANGAN PERATURAN DAERAH KALIMANTAN BARAT TENTANG APBD TAHUN ANGGARAN 2022",
            date: "27 Desember 2021, 13:52",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202310101696922245-5-ringkasan-raperda-tentang-apbd-2022.pdf#toolbar=0"
          },
          {
            title: "PPAS TAHUN ANGGARAN 2022",
            date: "13 September 2021, 10:00",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650856085-ppas-2022.pdf#toolbar=0"
          },
          {
            title: "KUA TAHUN ANGGARAN 2022",
            date: "13 September 2021, 09:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202204251650856017-kua-2022.pdf#toolbar=0"
          }
      ],
      "2021": [
          {
              title: "RENCANA UMUM PENGADAAN 2021",
              date: "21 September 2022, 15:15",
              documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209211663750759-png2pdf.pdf#toolbar=0"
          },
          {
            title: "INFORMASI LAPORAN AKUNTABILITAS DAN KINERJA TAHUNAN PEMERINTAH DAERAH TAHUN ANGGARAN 2021",
            date: "12 September 2022, 15:15",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209121662971382-pdfsamlkj-biro-organisasi-2021-fix.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN DAERAH (AUDITED) TENTANG PERTANGGUNGJAWABAN PELAKSANAAN APBD TAHUN ANGGARAN 2021",
            date: "10 September 2022, 21:17",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209101662820432-rancangan-peraturan-daerah-provinsi-kalimantan-barat-ta-2021-auditedcompressed.pdf#toolbar=0"
          },
          {
            title: "PERUBAHAN RPJMD PROVINSI KALIMANTAN BARAT 2018-2023",
            date: "9 September 2022, 09:11",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662690263-rpjmd-perubahan.pdf#toolbar=0"
          },
          {
            title: "PERUBAHAN RKPD PROVINSI KALIMANTAN BARAT TAHUN 2021",
            date: "9 September 2022, 09:03",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662690152-rkpd-perubahan-2021.pdf#toolbar=0"
          },
          {
            title: "RKPD PROVINSI KALIMANTAN BARAT TAHUN 2021",
            date: "9 September 2022, 08:31",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662688054-rkpd-2021.pdf#toolbar=0"
          },
          {
            title: "LAPORAN REALISASI ANGGARAN (LRA) AUDITED TA 2021: REALISASI PENDAPATAN, BELANJA, DAN PEMBIAYAAN",
            date: "13 Juni 2022, 23:26",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657039386-11-laporan-realisasi-anggaran-lra-2021.pdf#toolbar=0"
          },
          {
            title: "LAPORAN REALISASI ANGGARAN (LRA) BADAN KEUANGAN DAN ASET DAERAH (BKAD) AUDITED TAHUN ANGGARAN 2021",
            date: "13 Juni 2022, 14:25",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662709114-lra-badan-keuangan-dan-aset-daerah-2021.pdf#toolbar=0"
          },
          {
            title: "LAPORAN REALISASI ANGGARAN (LRA) SKPD AUDITED TAHUN ANGGARAN 2021",
            date: "13 Juni 2022, 14:22",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662708943-lra-audited-skpd-2021.zip#toolbar=0"
          },
          {
            title: "CATATAN ATAS LAPORAN KEUANGAN (CALK) AUDITED PEMERINTAH PROV. KALIMANTAN BARAT TAHUN ANGGARAN 2021",
            date: "13 Juni 2022, 09:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207191658199948-calk.pdf#toolbar=0"
          },
          {
            title: "NERACA AUDITED PEMERINTAH PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2021",
            date: "13 Juni 2022, 09:47",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207191658199802-neraca-2021.pdf#toolbar=0"
          },
          {
            title: "LAPORAN ARUS KAS AUDITED PEMERINTAH PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2021",
            date: "13 Juni 2022, 09:45",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207191658199682-laporan-arus-kas.pdf#toolbar=0"
          },
          {
            title: "LAPORAN KEUANGAN BADAN USAHA MILIK DAERAH (BUMD) TAHUN ANGGARAN 2021",
            date: "20 Mei 2022, 14:45",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202209091662710391-laporan-keu-bumd.zip#toolbar=0"
          },
          {
            title: "OPINI BADAN PEMERIKSA KEUANGAN REPUBLIK INDONESIA TAHUN ANGGARAN 2021",
            date: "2 Mei 2022, 09:55",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207191658200295-opini-bpk-2021.pdf#toolbar=0"
          },
          {
            title: "LRA 2021",
            date: "30 Maret 2022, 08:48",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203301648605376-lra-2021.rar#toolbar=0"
          },
          {
            title: "RKA BKAD",
            date: "25 Maret 2022, 17:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203251648203414-ccf000072.pdf#toolbar=0"
          },
          {
            title: "DPPA BKAD 2021",
            date: "22 Maret 2022, 18:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647950312-dppa-2021-cap.pdf#toolbar=0"
          },
          {
            title: "DPA BANKEU BAGI HASIL BTT 2021",
            date: "22 Maret 2022 18:46",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647950229-dpa-bankeu-bagi-hasil-btt-2021-cap.pdf#toolbar=0"
          },
          {
            title: "LK UNAUDITED TA 2021",
            date: "22 Maret 10 2022, 10:36",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647920767-lk-unaudited-ta2021.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 210 TAHUN 2021",
            date: "22 Maret 2022, 10:07",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647919202-pergub-210-tahun-2021.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 156 TAHUN 2021",
            date: "21 Maret 2022, 08:53",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203211647844455-pergub-nomor-156-tahun-2021-tentang-perubahan-ketiga-atas-pergub-nomor-155-tahun-2020-tentang-penjabaran-apbd-ta-2021.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 85 TAHUN 2021",
            date: "21 Maret 2022, 08:43",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203211647827632-20210608-pergub-nomor-85-tahun-2021-tentang-perubahan-kedua-atas-pergub-nomor-155-tahun-2020-tentang-penjabaran-apbd-ta-2021.pdf#toolbar=0"
          },
          {
            title: "PERGUB NOMOR 27 TAHUN 2021",
            date: "21 Maret 2022, 08:38",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203211647827418-20210216-pergub-nomor-27-tahun-2021-tentang-perubahan-atas-pergub-nomor-155-tahun-2020-tentang-penjabaran-apbd-ta-2021.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN APBD YANG DIKLASIFIKASI MENURUT KELOMPOK DAN JENIS 2021",
            date: "7 Februari 2022, 14:00",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217908-ringkasan-apbd-yang-diklasifikasi-menurut-kelompok-dan-jenis-2021.pdf#toolbar=0"
          },
          {
            title: "RKA - SKPD 2021",
            date: "7 Februari 2022, 14:00",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217929-rka-skpd-2021.pdf#toolbar=0"
          },
          {
            title: "HASIL PEMERIKSAAN ATAS LAPORAN KEUANGAN DAN KINERJA PEMPROV KALIMANTAN BARAT 2020",
            date: "7 Februari 2022, 13:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217834-hasil-pemeriksaan-atas-laporan-keuangan-dan-kinerja-pemprov-kalimantan-barat-2020.pdf#toolbar=0"
          },
          {
            title: "LAMPIRAN I - RINGKASAN PERDA PENYEMPURNAAN APBD",
            date: "7 Februari 2022, 13:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217853-lampiran-i-ringkasan-perda-penyempurnaan-apbd.pdf#toolbar=0"
          },
          {
            title: "LKPD AUDITED 2020",
            date: "7 Februari 2022, 13:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217875-lkpd-audited-2020.pdf#toolbar=0"
          },
          {
            title: "DPA SKPD 2021",
            date: "7 Februari 2022, 13:59",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644217805-dpa-skpd-2021.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN PENJABARAN APBD 2021",
            date: "7 Februari 2022, 13:33",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202202071644216624-ringkasan-penjabaran-apbd-2021.pdf#toolbar=0"
          },
          {
            title: "PERGUB KALBAR NOMOR 208 TAHUN 2021 TENTANG KEBIJAKAN AKUNTANSI PADA PEMERINTAH PROV. KALBAR",
            date: "30 Desember 2021, 00:00",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207061657041526-kebijakan-akuntansi-with-cover-1.pdf#toolbar=0"
          },
          {
            title: "PERGUB KALBAR NOMOR 197 TAHUN 2021 TENTANG PENJABARAN PERUBAHAN APBD TAHUN ANGGARAN 2021 - BAGIAN II",
            date: "5 November 2021, 10:33",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647920531-pergub-nomor-197-tahun-2021-bagian-ii.pdf#toolbar=0"
          },
          {
            title: "PERGUB KALBAR NOMOR 197 TAHUN 2021 TENTANG PENJABARAN PERUBAHAN APBD TAHUN ANGGARAN 2021 - BAGIAN I",
            date: "5 November 2021, 10:29",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647920615-pergub-nomor-197-tahun-2021-bagian-i.pdf#toolbar=0"
          },
          {
            title: "RANCANGAN PERATURAN DAERAH PROVINSI KALBAR TENTANG PERUBAHAN APBD TA 2021",
            date: "4 November 2021, 19:06",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203221647951428-20210930-rancangan-perda-perubahan-apbd-ta-2021compressed-2.pdf#toolbar=0"
          },
          {
            title: "PERATURAN DAERAH KALBAR NOMOR 10 TAHUN 2021 TENTANG PERUBAHAN APBD TAHUN ANGGARAN 2021",
            date: "4 November 2021, 12:29",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203011646113187-perda-no-10-tahun-2021-perubahan-apbd-2021lampiran-i.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RKA PERUBAHAN APBD TAHUN ANGGARAN 2021",
            date: "4 November 2021, 08:49",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207061657073209-ringkasan-rancangan-perda-apbd-perubahan-2021.pdf#toolbar=0"
          },
          {
            title: "BIRO ADPEM DPA 2021",
            date: "4 Agustus 2021, 09:05",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108041628043263-biro-adpem-dpa-2021.pdf#toolbar=0"
          },
          {
            title: "DUKCAPIL DPA 2021",
            date: "4 Agustus 2021, 09:05",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108041628043283-dukcapil-dpa-2021.pdf#toolbar=0"
          },
          {
            title: "DINASPERPUSTAKAAN DPA 2021",
            date: "3 Agustus 2021, 08:46",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108031627955723-dinasperpustakaan-dpa-2021.pdf#toolbar=0"
          },
          {
            title: "DISKOPUKM DPA 2021",
            date: "3 Agustus 2021, 08:45",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108031627955686-diskopukm-dpa-2021.pdf#toolbar=0"
          },
          {
            title: "LITBANG DPA 2021",
            date: "3 Agustus 2021, 08:44",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108031627955603-litbang-dpa-2021.pdf#toolbar=0"
          },
          {
            title: "DISPERINDAG DPA 2021",
            date: "3 Agustus 2021, 08:44",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108031627955646-disperindag-dpa-rekap-2021.pdf#toolbar=0"
          },
          {
            title: "CALK AUDITED PROV. KALBAR TAHUN 2020",
            date: "3 Agustus 2021, 08:35",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108031627983204-calk-audited-prov-kalbar-tahun-2020-compressed.pdf#toolbar=0"
          },
          {
            title: "LAPORAN OPERASIONAL TAHUN 2020 DAN 2019",
            date: "1 Agustus 2021, 14:30",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803568-laporan-operasional-tahun-2020-dan-2019.pdf#toolbar=0"
          },
          {
            title: "LAPORAN ARUS KAS TAHUN 2020 DAN 2019",
            date: "1 Agustus 2022, 14:30",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803591-laporan-arus-kas-tahun-2020-dan-2019.pdf#toolbar=0"
          },
          {
            title: "LAPORAN PERUBAHAN SALDO ANGGARAN LEBIH TAHUN 2020 DAN 2019",
            date: "1 Agustus 2021, 14:29",
            documentUrl: ""
          },
          {
            title: "LAPORAN PERUBAHAN EKUITAS TAHUN 2020 DAN 2019",
            date: "1 Agustus 2021, 14:29",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803532-laporan-perubahan-ekuitas-tahun-2020-dan-2019.pdf#toolbar=0"
          },
          {
            title: "NERACA TAHUN 2020 DAN 2019",
            date: "1 Agustus 2021, 14:28",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803444-neraca-tahun-2020-dan-2019.pdf#toolbar=0"
          },
          {
            title: "LRA PENDAPATAN DAN BELANJA TAHUN 2020 DAN 2019",
            date: "1 Agustus 2021, 14:28",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803473-lra-pendapatan-dan-belanja-tahun-2020-dan-2019.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RLA TAHUN 2020",
            date: "1 Agustus 2021, 14:27",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627803417-ringkasan-rla-tahun-2020.pdf#toolbar=0"
          },
          {
            title: "PERBENDAHARAAN ATAU INVENTARIS BARANG MILIK NEGARA TAHUN 2020",
            date: "1 Agustus 2021, 13:27",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627799812-perbendaharaan-atau-inventaris-barang-milik-negara-tahun-2020.pdf#toolbar=0"
          },
          {
            title: "DATA STATISTIK KEUANGAN TAHUN 2019-2021",
            date: "1 Agustus 2021, 13:26",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627799737-data-statistik-keuangan-2019-2021.pdf#toolbar=0"
          },
          {
            title: "RPJMD PERUBAHAN TAHUN 2018-2023 PROVINSI KALIMANTAN BARAT",
            date: "1 Agustus 2021, 13:25",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202108011627799676-rpjmd-perubahan-tahun-2018-2023-provinsi-kalimantan-barat.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN DOKUMEN PELAKSANAAN ANGGARAN (DPA) SKPD TAHUN ANGGARAN 2021",
            date: "11 Januari 2021, 09:08",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207061657074373-dpa-skpd-2021-simakda.zip#toolbar=0"
          },
          {
            title: "DOKUMEN PELAKSANAAN ANGGARAN (DPA) BADAN KEUANGAN DAN ASET DAERAH PROVINSI KALIMANTAN BARAT TA 2021",
            date: "5 Januari 2021, 23:11",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657038916-10dpa-bkad-2021.pdf#toolbar=0"
          },
          {
            title: "KEPUTUSAN GUBERNUR KALBAR NO:1198/BKAD/2020 TENTANG PEJABAT PENGELOLA KEUANGAN DAERAH TA 2021",
            date: "4 Januari 2021, 23:58",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207061657041252-sk-pengelola-keuangan-apbd-2021.pdf#toolbar=0"
          },
          {
            title: "RINGKASAN RANCANGAN PERATURAN DAERAH KALIMANTAN BARAT TENTANG APBD TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 22:37",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657036447-6rapbd-2021.pdf#toolbar=0"
          },
          {
            title: "RENCANA KERJA DAN ANGGARAN (RKA) BADAN KEUANGAN DAN ASET DAERAH (BKAD) TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 22:35",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657036287-5rka-bkad-2021.pdf#toolbar=0"
          },
          {
            title: "RENCANA KERJA DAN ANGGARAN (RKA) SKPD TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 22:33",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657036188-4rka-skpd-2021-sipd.rar#toolbar=0"
          },
          {
            title: "PRIORITAS DAN PLAFON ANGGARAN SEMENTARA (PPAS) TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 22:31",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657036080-3ppas-2021.pdf#toolbar=0"
          },
          {
            title: "KEBIJAKAN UMUM APBD TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 22:27",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207051657035873-2kua-2021.pdf#toolbar=0"
          },
          {
            title: "PERATURAN GUBERNUR KALBAR NOMOR 155 TAHUN 2020 TENTANG PENJABARAN APBD TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 15:48",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203161647421221-pergub-nomor-155-tahun-2020-tentang-penjabaran-apbd-2021.pdf#toolbar=0"
          },
          {
            title: "PERATURAN DAERAH PROVINSI KALIMANTAN BARAT NOMOR 6 TAHUN 2020 TENTANG APBD TAHUN ANGGARAN 2021",
            date: "4 Januari 2021, 15:42",
            documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202203161647420859-perda-nomor-6-tahun-2020-tentang-apbd-2021.pdf#toolbar=0"
          } 
      ],
      "2019": [
        {
          title: "OPINI BADAN PEMERIKSA KEUANGAN REPUBLIK INDONESIA TAHUN ANGGARAN 2019",
          date: "2 Mei 2022, 09:57",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202207191658200438-opini-bpk-2019.pdf#toolbar=0"
        },
        {
          title: "RKPD PERUBAHAN PROV KALBAR TAHUN 2019",
          date: "12 Julis 2020, 16:36",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202007121594546679-rkpd-perubahan-prov-kalbar-2019.pdf#toolbar=0"
        },
        {
          title: "RKPD PROV KALBAR TAHUN 2019",
          date: "12 Julis 2020, 16:36",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202007121594546713-rkpd-prov-kalbar-2019.pdf#toolbar=0"
        },
        {
          title: "DPA SKPD TAHUN 2019",
          date: "12 Julis 2020, 16:25",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202007121594546057-dpa-skpd-2019.rar#toolbar=0"
        },
        {
          title: "LAPORAN KINERJA PEMERINTAH PROVINSI KALIMANTAN BARAT 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LKJ%20PEMPROV%20KALBAR%20TAHUN%202018%20-%20BIRO%20ORTAL.pdf#toolbar=0"
        },
        {
          title: "DAFTAR ISI PERDA DAN PERGUB TAHUN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/DAFTAR%20ISI%20PERDA%20DAN%20PERGUB%20TAHUN%202018%20-%20BIRO%20HUKUM.rar#toolbar=0"
        },
        {
          title: "DAFTAR ISI KEPUTUSAN GUBERNUR TAHUN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/DAFTAR%20ISI%20KEPUTUSAN%20GUBERNUR%20TAHUN%202018%20-%20BIRO%20HUKUM.rar#toolbar=0"
        },
        {
          title: "RINGKASAN APBD PROVINSI KALIMANTAN BARAT TAHUN 2019",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan%20APBD%20Provinsi%20TA%202019.pdf#toolbar=0"
        },
        {
          title: "LAPORAN KEUANGAN PEMPROV KALBAR TAHUN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LAPORAN_KEUANGAN_PEMPROV_KALBAR_2018.pdf#toolbar=0"
        },
        {
          title: "RKA PEMPROV KALBAR TAHUN 2019",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RKA%20PEMPROV%20KALBAR%20TAHUN%202019.pdf#toolbar=0"
        },
        {
          title: "RENCANA STRATEGIS / RPJMD PEMPROV. KALBAR TAHUN 2018-2023",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Rencana%20Strategis%20RPJMD%20Pemprov.%20Kalbar%20Tahun%202018-2023.pdf#toolbar=0"
        }
      ],
      "2018": [
        {
          title: "RPJMD 2018 - 2023 PROV KALBAR",
          date: "12 Juli 2020, 16:38",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/202007121594546833-rpjmd-2018-2023-prov-kalbar.pdf#toolbar=0"
        },
        {
          title: "KEPUTUSAN GUBERNUR KALIMANTAN BARAT NOMOR : 50 / BPKPD / 2018 TENTANG PEMBERIAN BANTUAN SOSIAL BERUPA UANG KEPADA KELOMPOK MASYARAKAT DAN ANGGOTA MASYARAKAT DI PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/SK-BANSOS.pdf#toolbar=0"
        },
        {
          title: "KEPUTUSAN GUBERNUR KALIMANTAN BARAT NOMOR 49/BPKPD/2018 TENTANG PEMBERIAN BANTUAN HIBAH BERUPA UANG KEPADA PEMERINTAH PUSAT, BADAN, LEMBAGA DAN ORGANISASI KEMASYARAKATAN DI PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/SK-HIBAH_-.pdf#toolbar=0"
        },
        {
          title: "LAPORAN KINERJA PEMERINTAH PROVINSI KALIMANTAN BARAT 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LKj%202017.pdf#toolbar=0"
        },
        {
          title: "REKAPAN DPA PEMERINTAH PROVINSI KALIMANTAN BARAT 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Rekapan%20DPA%202018.pdf#toolbar=0"
        },
        {
          title: "RPJMD PROV KALBAR 2013-2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RPJMD_PERUBAHAN_PROV_KALBAR_2013-2018.pdf#toolbar=0"
        },
        {
          title: "RKPD PROV KALBAR TAHUN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RKPD_PROV_KALBAR_TAHUN_2018.pdf#toolbar=0"
        },
        {
          title: "LKPD PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2017 AUDITED",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LAPKEU%20A4%20COVER.pdf#toolbar=0"
        },
        {
          title: "LPPD PEMERINTAH PROVINSI KALIMANTAN BARAT TAHUN 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LPPD-2017-PEMPROV.pdf#toolbar=0"
        },
        {
          title: "PERJANJIAN KINERJA BPKPD TAHUN 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Perjankin%202018%20Kaban_000001.pdf#toolbar=0"
        },
        {
          title: "RENSTRA BPKPD",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Renstra%20BPKPD.pdf#toolbar=0"
        },
        {
          title: "IKU BPKPD",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/IKU_20180827_105657_000073.pdf#toolbar=0"
        }
      ],
      "2017": [
        {
          title: "PERATURAN GUBERNUR KALIMANTAN BARAT NO. 30 TAHUN 2012 TENTANG PEMBERIAN HIBAH DAN BANTUAN SOSIAL PEMERINTAH PROVINSI KALIMANTAN BARAT",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Pergub%2030%20Tahun%202012.pdf#toolbar=0"
        },
        {
          title: "KEPUTUSAN GUBERNUR KALIMANTAN NOMOR 107 / BPKPD / 2017 TENTANG PEMBERIAN BANTUAN SOSIAL BERUPA UANG KEPADA KELOMPOK MASYARAKAT DI PROVINSI KALIMANTAN BARAT TAHUN ANGGARAN 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Pergub%20Nomor%20107%20Tahun%202017.pdf#toolbar=0"
        },
        {
          title: "KEPUTUSAN GUBERNUR KALIMANTAN BARAT NOMOR 103 / BPKPD / 2017 TENTANG PEMBERIAN BANTUAN HIBAH BERUPA UANG KEPADA INSTANSI PEMERINTAH, BADAN, LEMBAGA DAN ORGANISASI KEMASYARAKATAN DI PROVINSI KALIMANTAN",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Pergub%20Nomor%20103%20Tahun%202017_c.pdf#toolbar=0"
        },
        {
          title: "PERATURAN GUBERNUR KALIMANTAN BARAT NOMOR 33 TAHUN 2016 TENTANG PERUBAHAN ATAS PERATURAN GUBERNUR NOMOR 30 TAHUN 2012 TENTANG PEMBERIAN HIBAH DAN BANTUAN SOSIAL PEMERINTAH PROVINSI KALIMANTAN BARAT",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/PERGUB%2033%20TAHUN%202016_c.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN RKA APBD TAHUN 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan-RKA-APBD-2017.rar#toolbar=0"
        },
        {
          title: "RENCANA KERJA PEMERINTAH DAERAH (RKPD) PROVINSI KALBAR TAHUN 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RKPD-Tahun-2017.pdf#toolbar=0"
        },
        {
          title: " RPJMD PROVINSI KALBAR TAHUN 2013 - 2018",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RPJMD-Tahun-2013%20-%202018.rar#toolbar=0"
        },
        {
          title: "NERACA PEMERINTAH PROVINSI KALBAR TAHUN 2016",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Neraca-Pemprov-2016.xlsx#toolbar=0"
        },
        {
          title: "LAPORAN REALISASI ANGGARAN PEMPROV KALBAR TAHUN 2016",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Laporan-Realisasi-Anggaran-2016.xlsx#toolbar=0"
        },
        {
          title: "LAPORAN DATA ASET PEMPROV TAHUN 2016",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Laporan-Data-Aset-2016.rar#toolbar=0"
        },
        {
          title: "LAPORAN ARUS KAS PEMPROV KALBAR TAHUN 2016",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Laporan-Arus-Kas-Tahun-2016.xlsx#toolbar=0"
        },
        {
          title: "KOMPILASI LAPORAN PERTANGGUNGJAWABAN PENERIMA HIBAH DAN BANTUAN SOSIAL TAHUN ANGGARAN 2017",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/rekapitulasi%20by%20sistem.pdf#toolbar=0"
        }
      ],
      "2016": [
        {
          title: "LAPORAN ARUS KAS 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Lap%20Arus%20Kas%20LKPD%20TA%202015.pdf#toolbar=0"
        },
        {
          title: "LAPORAN PERUBAHAN EKUITAS 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Lap%20Perubahan%20Ekuitas%20LKPD%20TA%202015.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN RKA-SKPD 2016",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RIngkasan%20RKA%20SKPD%202016.pdf#toolbar=0"
        },
        {
          title: "PIDATO OPINI BPK LKPD TA 2015",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Pidato%20Auditor%20BPK%20LKPD%20TA%202015.pdf#toolbar=0"
        },
        {
          title: "NERACA 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Neraca%20LKPD%20TA%202015.pdf#toolbar=0"
        }
      ],
      "2015": [
        {
          title: "CATATAN ATAS LAPORAN KEUANGAN",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160621145044.pdf#toolbar=0"
        },
        {
          title: "LPE 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161504.pdf#toolbar=0"
        },
        {
          title: "LAK 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161546.pdf#toolbar=0"
        },
        {
          title: "LO 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161625.pdf#toolbar=0"
        },
        {
          title: "NERACA 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161715.pdf#toolbar=0"
        },
        {
          title: "LPSAL 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161800.pdf#toolbar=0"
        },
        {
          title: "LRA 2015 (AUDITED)",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20160617161849.pdf#toolbar=0"
        }
      ],
      "2014": [
        {
          title: "LKPD T.A. 2013 AUDITED",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LKPD_audited.pdf#toolbar=0"
        },
        {
          title: "LRA-PPKD 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LRA-PPKD%20TA%202013.pdf#toolbar=0"
        },
        {
          title: "LRA-SKPD 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LRA-SKPD%20TA%202013.pdf#toolbar=0"
        },
        {
          title: "OPINI BPK 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Opini%20BPK%20TA.%202013.PDF#toolbar=0"
        },
        {
          title: "PERDA APBD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Perda%20APBD%202014.jpg#toolbar=0"
        },
        {
          title: "RANCANGAN APBD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ranc%20APBD%202014.jpg#toolbar=0"
        },
        {
          title: "RINGKASAN DPA PPKD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan%20DPA%20PPKD%202014.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN DPA SKPD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan%20DPA%20SKPD%202014.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN RKA-PPKD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan%20RKA_PPKD%202014.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN RKA-SKPD 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/Ringkasan%20RKA_SKPD%202014.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN PERDA APBD PERUBAHAN TAHUN ANGGARAN 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20141125133104.pdf#toolbar=0"
        },
        {
          title: "PERDA APBD PERUBAHAN PER SKPD TAHUN ANGGARAN 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20141125133013.pdf#toolbar=0"
        },
        {
          title: "OPINI BPK ATAS LKPD T.A. 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20150824143400.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN LRA SKPD TA. 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20150825125058.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN LRA PPKD TA. 2014",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20150825125228.pdf#toolbar=0"
        },
        {
          title: "LKPD 2014 AUDITED",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LKPD-2014-audited.pdf#toolbar=0"
        }
      ],
      "2013": [
        {
          title: "RINGKASAN RKA SKPD 2012",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/RKA-2012.pdf#toolbar=0"
        },
        {
          title: "PERDA APBD 2012",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/PERDA-2012.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN DPA SKPD 2012",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/DPA-2012.pdf#toolbar=0"
        },
        {
          title: "LRA, LAK DAN NERACA TAHUN 2012",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140103185851.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN DPA-SKPD TAHUN ANGGARAN 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140110153934.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN DPPA-SKPD TAHUN ANGGARAN 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140110155747.pdf#toolbar=0"
        },
        {
          title: "PERDA MURNI SKPD TAHUN ANGGARAN 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140110161945.pdf#toolbar=0"
        },
        {
          title: "PERDA PERUBAHAN SKPD TAHUN ANGGARAN 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140110164543.pdf#toolbar=0"
        },
        {
          title: "RINGKASAN RKA-SKPD TAHUN ANGGARAN 2013",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/data_20140110175438.pdf#toolbar=0"
        },
        {
          title: "LHP BPK ATAS LKPD PEMPROV. KALBAR 2012",
          date: "-",
          documentUrl: "http://kalbarprov.go.id/pub/files/dokumen/lap_perkembangan/LHP%20BPK%20atas%20LKPD%20PEMPROV%20KALBAR%202012.jpg#toolbar=0"
        }
      ]
      
  };

  // Function to populate year filter
  
  // Function to populate year filter
  function populateYearFilter() {
    const select = document.getElementById('yearFilter');
    if (!select) return;
    
    select.innerHTML = '<option value="">-- Lihat Semua</option>';
    const uniqueYears = Object.keys(tpadData).sort((a, b) => b - a); // Sort years in descending order
    
    uniqueYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `TPAD ${year}`;
        select.appendChild(option);
    });
}

  
  // Function to get total pages
  function getTotalPages() {
    return Math.ceil(filteredDocuments.length / itemsPerPage);
}


  // Function to display documents
  function displayDocuments(year = '') {
    const container = document.getElementById('documentContainer');
    if (!container) return;

    container.innerHTML = '';
    
    filteredDocuments = year ? 
        flatDocuments.filter(doc => doc.year === year) : 
        flatDocuments;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const documentsToDisplay = filteredDocuments.slice(startIndex, endIndex);
    
    const groupedDocs = {};
    documentsToDisplay.forEach(doc => {
        if (!groupedDocs[doc.year]) {
            groupedDocs[doc.year] = [];
        }
        groupedDocs[doc.year].push(doc);
    });
    
    Object.entries(groupedDocs)
        .sort(([yearA], [yearB]) => yearB - yearA)
        .forEach(([year, docs]) => {
            const yearSection = document.createElement('div');
            yearSection.className = 'document-list-tpad';
            
            const yearTitle = document.createElement('div');
            yearTitle.className = 'document-year-tpad';
            yearTitle.textContent = `TPAD ${year}`;
            yearSection.appendChild(yearTitle);
            
            docs.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            docs.forEach(doc => {
                const docItem = document.createElement('div');
                docItem.className = 'document-item-tpad';
                docItem.innerHTML = `
                    <div class="document-isi-tpad">
                        <div class="document-title-tpad">${doc.title}</div>
                        <div class="document-date-tpad">${doc.date}</div>
                    </div>
                    <a href="${doc.documentUrl}" class="document-link-green" target="_blank">Lihat Dokumen</a>
                `;
                yearSection.appendChild(docItem);
            });
            
            container.appendChild(yearSection);
        });
    
    updatePaginationButtons();
  }

  // Function to generate pagination numbers
  function generatePaginationNumbers(currentPage, totalPages) {
      const numbersToShow = 5;
      let numbers = [];
      
      for (let i = 0; i < numbersToShow; i++) {
          let pageNum = currentPage - 2 + i;
          
          while (pageNum <= 0) pageNum += totalPages;
          while (pageNum > totalPages) pageNum -= totalPages;
          
          numbers.push(pageNum);
      }
      
      return numbers;
  }

  // Function to update pagination buttons
  function updatePaginationButtons() {
      const paginationDiv = document.querySelector('.pagination-proglap');
      if (!paginationDiv) return; // Guard clause if element doesn't exist

      const totalPages = getTotalPages();
      const pageNumbers = generatePaginationNumbers(currentPage, totalPages);
      
      let paginationHTML = `
          <button onclick="changePage('prev')" class="nav-btn">
              <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="number-container">
      `;
      
      pageNumbers.forEach(num => {
          paginationHTML += `
              <button onclick="goToPage(${num})" class="${currentPage === num ? 'active' : ''}">${num}</button>
          `;
      });
      
      paginationHTML += `
          </div>
          <button onclick="changePage('next')" class="nav-btn">
             <i class="fa-solid fa-angle-right"></i>
          </button>
      `;
      
      paginationDiv.innerHTML = paginationHTML;
  }

  // Function to load specific page content
  function loadPage(page) {
      document.querySelectorAll(".ajax-link-proglap").forEach(function (link) {
          link.classList.remove("active");
      });
  
      const activeLink = document.querySelector(`.ajax-link-proglap[href="${page}"]`);
      if (activeLink) {
          activeLink.classList.add("active");
      }
  
      const sectionElement = document.getElementById("section-program-laporan");
      if (!sectionElement) return; // Guard clause if element doesn't exist

      if (page === "page1_proglap") {
          sectionElement.innerHTML = `
              <div class="container-program-laporan">
                  <div class="document-proglap">
                      <div>
                          <h2>Rencana Pembangunan Jangka Menengah Daerah Provinsi Kalimantan Barat</h2>
                          <p>RPJMD Perubahan Provinsi Kalimantan Barat Tahun 2018 - 2023</p>
                      </div>
                      <button class="green_lihatdokumen">
                          <i class="fas fa-file-alt"></i> <a href="https://kalbarprov.go.id/pub/files/dokumen/renja_renstra/RPJMD_Perubahan_2018_2023.pdf">Lihat Dokumen</a>
                      </button>
                  </div>
                  <div class="document-proglap">
                      <div>
                          <h2>Rencana Kerja Pemerintah Daerah Provinsi Kalimantan Barat</h2>
                          <p>RKPD Pemprov Kalbar Tahun 2023</p>
                      </div>
                      <button class="green_lihatdokumen">
                          <i class="fas fa-file-alt"></i> <a href="https://kalbarprov.go.id/pub/files/dokumen/renja_renstra/rkpd_kalbar_2023.pdf">Lihat Dokumen</a>
                      </button>
                  </div>
                  <div class="document-proglap">
                      <div>
                          <h2>Indikator Kinerja Utama Pemerintah Provinsi Kalimantan Barat</h2>
                          <p>Indikator Kinerja Utama Pemerintah Provinsi Kalimantan Barat</p>
                      </div>
                      <button class="green_lihatdokumen">
                          <i class="fas fa-file-alt"></i> <a href="https://kalbarprov.go.id/pub/files/dokumen/renja_renstra/iku_2015.pdf">Lihat Dokumen</a>
                      </button>
                  </div>
                  <div class="document-proglap">
                      <div>
                          <h2>Perjanjian Kinerja Provinsi Kalimantan Barat</h2>
                          <p>Perjanjian Kinerja Provinsi Kalimantan Barat Tahun 2023</p>
                      </div>
                      <button class="green_lihatdokumen">
                          <i class="fas fa-file-alt"></i> <a href="https://kalbarprov.go.id/pub/files/dokumen/renja_renstra/perjankin_2023.pdf">Lihat Dokumen</a>
                      </button>
                  </div>
              </div>
          `;
      } else if (page === "page2_proglap") {
          sectionElement.innerHTML = `
          <div class="proglap-tpad">
          <div class="filter-section-tpad">
                  <select id="yearFilter">
                      <option value="">Pilih Tahun</option>
                  </select>
                  <button onclick="filterDocuments()">Lihat</button>
              </div>
              <div id="documentContainer"></div>
              <div class="pagination-proglap"></div>
          </div>
          `;
          
          // Initialize TPAD-specific elements
          flatDocuments = flattenTpadData(tpadData);
          filteredDocuments = flatDocuments;
          populateYearFilter();
          displayDocuments();
      }
  }

  // Initialize page load based on hash
  const initialPage = window.location.hash ? window.location.hash.substring(1) : "page1_proglap";
  loadPage(initialPage);

  // Event listeners
  document.querySelectorAll(".ajax-link-proglap").forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const page = this.getAttribute("href");
          window.location.hash = page;
          loadPage(page);
      });
  });

  // Make functions globally available
  window.filterDocuments = function() {
      currentPage = 1;
      const selectedYear = document.getElementById('yearFilter')?.value;
      displayDocuments(selectedYear);
  };

  window.changePage = function(direction) {
      const totalPages = getTotalPages();
      
      if (direction === 'prev') {
          currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
      } else if (direction === 'next') {
          currentPage = currentPage < totalPages ? currentPage + 1 : 1;
      }
      
      displayDocuments(document.getElementById('yearFilter')?.value);
  };

  window.goToPage = function(page) {
      currentPage = page;
      displayDocuments(document.getElementById('yearFilter')?.value);
  };
});