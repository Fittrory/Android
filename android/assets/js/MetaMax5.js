$(document).ready(function () {

  var pathname = window.location.hash;
  console.log(pathname);

  $("#pin").click(function () {
    $(this).addClass('pinned');
    localStorage.setItem('last', pathname);
    $(".indi").html("account_circle");
  });

  $(".pinned").click(function () {
    // window.location = localStorage.getitem('last');
    console.log(localStorage.getItem('last'));
    // localStorage.clear();
    alert("boom");
    $(".indi").html("home");
  });



  var titlePage = ["COVER",
    "SALAM REDAKSI | DAFTAR ISI",
    "Profil UMSIDA",
    "VISI & MISI | FAKULTAS",
    "Ilmu Komunikasi UMSIDA",
    "Prospek Kerja Lulusan Ilmu Komunikasi",
    "Technopreneur",
    "Mengenal Startup | POJOK MEDIA",
    "Tips Sukses Startup | Pelajar dalam dunia Technopreneur",
    "KOMIK",
    "SMKN 1 PURWOSARI",
    "Profil Team",
    "MCC | Central Spring Bed",
    "Tidur Nyaman menggunakan Central Spring Bed",
    "BACKCOVER"];


  //initialization book
  $('#metamax').wowBook({
    height: 588
    , width: 846
    , centeredWhenClosed: true
    , hardcovers: true
    , turnPageDuration: 1000
    , numberedPages: [1, 0]
    , onShowPage: function (book, page, pageIndex) {
      if (parseInt(pageIndex) == 1) {
        $('#title').text(titlePage[1]);
        $('#t').text(titlePage[1] + " - MetaMax");
        Materialize.toast(titlePage[1], 1000);
        $(".copied").attr("data-clipboard-text", "Halo MetaReaders. Berjumpa kembali dengan kami tim MetaMax Digital Magazine dari SMKN 1 Purwosari yang kini sudah memasuki edisi ke - 6, loh. Di MetaMax Digital Magazine kali ini kami mengikuti kompetisi Madig Vol.2 2018 yang diadakan di Universitas Muhammadiyah Sidoarjo dengan mengangkat tema mengenai Technopreneur Di Era Digital .Penasaran kan ? Selamat membaca, SobatMeta.");
      }
      else if (parseInt(pageIndex) == 3) {
        $('#title').text(titlePage[2]);
        $('#t').text(titlePage[2] + " - MetaMax");
        Materialize.toast(titlePage[2], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 4 : www.umsida.ac.id, Halaman 5 : Universitas Muhammadyah Sidoarjo (UMSIDA) merupakan salah satu universitas swasta yang berdiri pada tahun 1984 di Kabupaten Sidoarjo, Jawa Timur. Universitas terakreditasi B ini terdiri dari 4 kampus dengan penempatan yang berbeda.Kampus I yang berada di Jl.Mojopahit 666 B Sidoarjo, kampus II di Jl.Raya Gelam 250 Candi Sidoarjo, kampus III di Perum IKIP V / I Gunung Anyar Surabaya dan terakhir kampus IV yang berada di Jl.Raya Rame Pilang No.04 Wonoayu. UMSIDA memiliki 9 fakultas dengan 26 jumlah program studi.Berdiri dibawah kepemilikan Persyerikatan Muhammadyah dengan slogan Dari Sini Pencerah Bersemi semakin menguatkan komitmen untuk menjadikan UMSIDA sebagai Perguruan Tinggi Bermutu Tingkat Nasional tahun 2020. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 5) {
        $('#title').text(titlePage[3]);
        $('#t').text(titlePage[3] + " - MetaMax");
        Materialize.toast(titlePage[3], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 6 : Visi Umsida : Menjadi Perguruan Tinggi Bermutu Tingkat Nasional Tahun 2020. Misi Umsida : 1. Menyelenggarakan pendidikan tinggi berbasis kurikulum yang terintegratif, sehingga menghasilkan lulusan yang memiliki keunggulan profesional, sosial dan berkepribadian Islam. 2. Meningkatkan kompetensi pendidik dan tenaga kependidikan. 3. Memberikan pelayanan akademik yang bermutu kepada seluruh mahasiswa UMSIDA 4. Mengimplementasikan sistem penjaminan mutu internal. 5. Berperan aktif dalam menyelesaikan permasalahan di masyarakat dengan meningkatkan mutu dan relevansi penelitian dan pengabdian pada masyarakat. 6. Melaksanakan tata kelola institusi secara demokratis, transparan dan akuntabel.Halaman 7 : Mau tau apa saja fakultas yang ada di Universitas Muhammadiyah Sidoarjo ? Berikut ini adalah beberapa fakultas yang ada di Universitas Muhammadiyah Sidoarjo yang berjumlah 9 fakultas. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 7) {
        $('#title').text(titlePage[4]);
        $('#t').text(titlePage[4] + " - MetaMax");
        Materialize.toast(titlePage[4], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 8 : Program Studi Ilmu Komunikasi mencakup 3 peminatan, yakni Manajemen Komunikasi, Public Relation dan Broadcasting Televisi. Manajemen Komunikasi, meliputi : Aplikasi komputer, Fotografi, Public Speaking, Cyber Media, Teknik Publisitas, Perencanaan & Produksi Radio Broadcasting, Manajemen Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Audio Komunikasi, Fimologi, Sinematografi, serta Teknik Editing. Public Relations, meliputi : News Writing, Fotografi, Aplikasi Komputer, Perencanaan & Produksi Radio Broadcasting, Manajemen Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Internet dan external Relation, Teknik Publisitas, Manajemen Media PR, Marketing PR, Industrial PR, serta Etika dan Profesi PR. Broadcasting Televisi, meliputi : Perencanaan dan Produksi Televisi, Produksi Broadcasting Televisi, Manajemen Insdutrial Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Filmologi, Sinematografi, serta diajarkan pula Teknik Editing.Ada pula Teknik Kamera, Script Writer, Story Board, dsb. Halaman 9 : Visi : Menyelenggarakan pendidikan tinggi bidang kajian ilmu - ilmu sosial dan ilmu politik yang berdasarkan pada pancasila dan nilai - nilai islam. Misi : Menyelenggarakan perguruan tinggi yang berkualitas dan professional bidang kajian ilmu Administrasi Publik dan Ilmu Komunikasi Mengembangkan sumber daya manusia yang berkualitas dalam peningkatan ilmu pengetahuan di bidang kajian Administrasi Publik dan Komunikasi Mengembangkan penelitian dalam kajian Administrasi Publik dan Komunikasi Meningkatkan standar kualitas lulusan inovatif, kreatif, professional, dan responsive terhadap kemajuan masyarakat melalui Pembelajaran Berbasis Kompetensi & Kewirausahaan (PBKK), - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 9) {
        $('#title').text(titlePage[5]);
        $('#t').text(titlePage[5] + " - MetaMax");
        Materialize.toast(titlePage[5], 1300);
        $(".copied").attr("data-clipboard-text", "Halaman 10 : 1. Broadcaster Pihak - pihak yang terlibat dalam dunia pelayaran yang kebanyakan ditempatkan di stasiun televisi, radio, ataupun kantor - kantor surat kabar, tabloid maupun majalah.Bidang kerja mencangkup produser, sutradara, reporter, copy writer. 2. Jurnalis Bagian dari ilmu komunikasi yang mempelajari bagaimana cara mengemas berita sehingga layak disebarluaskan ke masyarakat luas.Bidang kerja mencangkup reporter, news anchor(penyiar berita), news dubber, wartawan media massa, dan lain - lain. 3. Announcer Dibutuhkan kemampuan menyampaikan pesan dengan baik dan dapat menarik perhatian pendengarnya menjadi acuan pokok dari announcer atau penyiar.Bidang kerja mencangkup penyiar radio, presenter, dll.Disinilah para Announcer dituntut untuk dapat berbicara lebih efektif dan lihai dalam pengolaan kata. 4. Master Of Caremony Pekerjaan yang dapat ditempatkan di berbagai event, bisa diakui bahwa tanpa seorang MC, suatu event atau agenda  bisa saja berantakan dan tak sejalur dengan perencanaan awal.Seorang MC membutukan kualitas gaya bicara yang baik, pandai menempatkan diri Halaman 11 : 5. Public Relations Officer Mewakili perusahaan dalam setiap waktu, menjaga nama baik perusahaan serta mewujudkan hubungan yang harmonis pada seluruh klien perusahaan, menjadi tugas utama para Public Relations Officer. 6. Event Orgnizer Merancang sebuah event besar, mulai bagaimana cara mengemas sebuah acara yang sesuai dengan konsep pesan yang ingin disampaikan, hingga mengatur acara sedemikian rupa agar meninggalkan kesan dan reutasi yang baik. 7. Advertising Diperlukan kekreatifan yang tinggi dalam pembuatan suatu iklan yang pada akhirnya akan berdampak pada sebuah produk yang diiklankan.Bidang kerja mencangkup project leader advertising, copy witer, camera erson, media planner, dan lain - lain. 8. Marketing Communication Bukan hanya mengenai unsur pemasaran dan ilmu bisnis saja, namun juga menyusun dan merancang stratgi komunikasi pemasaran yang tepat bagi perusahaan. 9. Videografer Seseorang yang bekerja dalam medium video, merekam gambar bergerak dan sebagainya.Bertanggung jawab akan pencahayaan maupun pegaturan audio pada saat merekam. 10. Fotografer Menangkap gambar menggunakan kamera serta peralatan fotografi lainnya yang umumnya memikirkan seni dan teknik yang digunakan untuk menghasilkan gambar dengan kualitas terbaik. 11. Graphics Designer Bekerja membuat sebuah rancangan grafis menggunakan elemen visual, seperti tulisan, bentuk, gambar untuk menyampaikan suatu pesan didalamnya, - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 11) {
        $('#title').text(titlePage[6]);
        $('#t').text(titlePage[6] + " - MetaMax");
        Materialize.toast(titlePage[6], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 12 : Technopreneur merupakan gabungan dari kata Entrepreneur dan Teknologi. Entrepreneur yang mengacu pada wirausahawan dengan berbagai skill kompetensi dan inovasi yang menjadikan usahanya terus berkembang. Sehingga dapat disimpulkan, bahwa Technopreneur adalah pemanfaatan perkembangan teknologi sebagai sarana prasana mengembangkan sebuah usaha hingga menghasilkan peluang usaha yang besar dan berpengaruh. Istilah Technopreneur bermula sekitar akhir tahun 1990 hingga benar - benar booming di tahun 2000 sehubungan dengan berkembangnya teknlogi informasi & komunikasi(internet).Sehingga muncullah technopreneur sejati bernama Bill Gates yang berhasil dinobati sebagai orang terkaya pertama didunia versi majalah Forbes. Halaman 13 : Bicara seputar Technopreneur, apa saja sih yang bisa dilakukan para Technopreneur di era digital saat ini? Buat kalian para Technopreneur yang pasti tak asing lagi dengan perkembangan hingga pemanfaatan teknologi digital, kalian dapat mengembangkan skill kompetensi dan Technopreneurship kalian mulai dari hal - hal kecil seperti membuat sebuah situs berupa blog maupun website, kalian harus pandai - pandai nih dalam mengamati keadaan disekitar kalian. Didunia yang serba canggih saat ini, tak dipungkiri banyak orang haus akan berita.Begitulah kalian memandang sebuah masalah lalu mencoba menemukan peluang usaha untuk menemukan penyelesaian dari permasalah tersebut. Bukan hanya melalui sebuah blog maupun website, kalian juga bisa memanfaatkan youtube maupun media sosial lainnya loh.Namun, yang paling sering dikembangkan oleh para Technopreneur saat ini adalah bisnis Startup.Dewasa ini, sudah banyak sekali bisnis startup yang berkembang luas diantara masyarakat dunia. Gimana ? Tertarik menjadi seorang Technopreneur ?., - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 13) {
        $('#title').text(titlePage[7]);
        $('#t').text(titlePage[7] + " - MetaMax");
        Materialize.toast(titlePage[7], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 14 : Masih asing dengan yang namanya startup ? Startup, kata serapan dari Bahasa Inggris ini mengacu pada proses memulai suatu usaha atau organisasi baru. Jadi bisa dikata bahwa startup adalah sebuah perusahaan rintisan yang merujuk pada semua perusahaan yang belum lama beroperasi dan masih dalam proses perkembangan. Karakteristik perusahaan atau organisasi startup antara lain: 1. Usia perusahaan kurang dari 3 tahun 2. Jumlah pegawai kurang dari 20 orang 3. Pendapatan kurang dari $ 100.000 / tahun 4. Masih dalam tahap berkembang 5. Umumnya beroperasi dalam bidang teknologi 6. Produk yang dibuat berupa aplikasi dalam bentuk digital 7. Biasanya beroperasi melalui website. Halaman 15 : PojokMedia.net adalah sebuah portal berita yang dirintis oleh pemuda-pemuda alumni SMKN 1 Purwosari dan telah dirilis pada 21 desember 2017.Informasi yang disajikan oleh PojokMedia sendiri terbagi kedalam 3 rubrik dimana masing-masing rubrik memiliki target pembaca tersendiri. Pertama ada Rubrik Creative yang ditujukan untuk para pelaku industri kreatif terutama para technopreneur atau pendiri startup. Lalu ada Rubrik Studens yang ditujukan pada para pelajar atau mahasiswa, tidak hanya membahas mengenai pendidikan tapi juga kehidupan sehari - hari mereka. Dan terakhir adalah Rubrik Otaku untuk mereka - mereka yang memiliki minat terhadap budaya jepang seperti Animanga, tokusatsu, Idol, maupun lainnya. Dengan tim yang rata-rata masih berusia 18 - 20 tahun, PojokMedia.net akan berusaha membangkitkan semangat para pemuda untuk terusmenerus mengejar impian sesuai passion mereka melalui artikel - artikel yang informatif dan inspiratif dari berbagai sudut galaksi Esa dandy A(Co - Founder & Web Developer PojokMedia.net)., - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 15) {
        $('#title').text(titlePage[8]);
        $('#t').text(titlePage[8] + " - MetaMax");
        Materialize.toast(titlePage[8], 1500);
        $(".copied").attr("data-clipboard-text", "Halaman 16 : Di era digital saat ini tak dapat dipungkiri bahwa persaingan di dunia bisnis sangatlah pesat. Apalagi bicara seputar perusahaan perusahaan startup yang terus bertambah seiring berjalannya waktu. Namun bagaimana sih caranya agar bisnis startupmu membawa kesuksesan besar.Nah, ini dia 5 faktor pendorong kesuksesan sebuah startup: 1. Ide 2. Tim dan Eksekusi 3. Model Bisnis 4. Pendanaan 5. Timing Dari kelima faktor diatas dapat dilihat bagaimana saling berpengaruhnya setiap faktor tersebut bagi perkembangan sebuah startup. Ide adalah pacuan utama kita dalam membangun sebuah usaha.Dalam menuangkan ide tersebut perlu adanya kerjasama tim dan pelaksanaan kerja(eksekusi).Dalam pelaksanaan kerja kita perlu membuat sebuah model bisnis berupa perencanaan kedepan untuk meminimalisir kerugian dan meningkatkan keuntungan perusahaan.Pendanaan sebagai sarana pemenuhan kebutuhan sebuah perusahaan. Namun, faktor terpenting yang sangat berpengaruh terhadap kesukseksan startupmu adalah Timing.Bagaimana seorang enterpreneur dapat memanfaatkan waktu dengan baik akan menjadi pusat kendali gerak perusahaannya. Halaman 17 : Para pelajar masa kini, yang termasuk dalam generasi modern sudah dipastikan tidak asing lagi dengan teknologi. Dalam era serba canggih ini, beberapa generasi muda kita sudah bisa memanfaatkan teknologi yang sudah ada dengan sebaik-baiknya. Namun kebanyakan mereka belum merasa tertarik untuk mencoba menjadi seorang Technopreneur. Nah, bagaimana cara untuk menarik minat pelajar menjadi Technopreneur muda ? Salah satunya adalah dengan melakukan sosialisasi. Sosialisasi yang didalamnya memuat gambaran lebih mengenai Technopreneur, contoh nyata dari seorang Technopreneur dengan penjabaran mengenai aktivitas, keuntungan serta potensi yang dirasakan olehnya selama menjadi seorang Technopreneur, sebagai bukti nyata kepada para pelajar dan memotivasinya untuk berani mencoba menjadi seorang Technopreneur. Dengan begitulah, sedikit demi sedikit akan menumbuhkan ketertarikan dalam diri seorang pelajar untuk mencoba menjadi generasi penerus Technopreneur muda. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 17) {
        $('#title').text(titlePage[9]);
        $('#t').text(titlePage[9] + " - MetaMax");
        Materialize.toast(titlePage[9], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 18 :  Halaman 19 :- Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 19) {
        $('#title').text(titlePage[10])
        $('#t').text(titlePage[10] + " - MetaMax");
        Materialize.toast(titlePage[10], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 20 : SMK Negeri 1 Purwosari merupakan salah satu lembaga pendidikan yang memiliki visi untuk membentuk tamatan yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, memiliki budi pekerti luhur, keterampilan, berdaya saing tinggi dan berwawasan lingkungan. SMK Negeri 1 Purwosari berdiri pada tahun 2000 terletak di Purwosari, tepatnya Jl. Raya Purwosari Kecamatan Purwosari, Kabupaten Pasuruan. Secara geografis SMK Negeri 1 Purwosari terletak di wilayah barat Kabupaten Pasuruan, berbatasan dengan Kabupaten Malang, Kota Pasuruan dan Kabupaten Mojokerto. Dengan posisi yang strategis tersebut, sangat memungkinkan bagi SMK Negeri 1 Purwosari untuk merekrut siswa dari segala penjuru, mengingat keberadaanya yang mudah dijangkau dengan kendaraan umum serta berada di jalur utama menuju ke Pasuruan, Malang dan Surabaya. Halaman 21 : Jurusan yang ada di smk negeri smk negeri 1 purwosari teknik informatika multimedia teknik rekayasa perangkat lunak teknik komputer dan jaringan bidang elektronika mekatronika bidang pertanian agribisnis tanaman pangan dan holtikultura teknik pengolahan hasil pertanian teknik pemesinan teknik pemesinan body otomotif teknik kendaraan ringan teknik las. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 21) {
        $('#title').text(titlePage[11]);
        $('#t').text(titlePage[11] + " - MetaMax");
        Materialize.toast(titlePage[11], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 22 : MetaMax merupakan salah satu produk MCC yang berjalan di bidang Majalah Digital yang saat ini telah memasuki edisi ke-6. Pengambilan nama MetaMax sendiri digunakan untuk membedakan produk majalah digital milik MCC dengan Majalah Digital lainnya. Beranggotakan Rifiyan Fauzarudin sebagai Graphic Designer, Riski Ainur R sebagai Ilustrator, M Ilham Fitrory sebagai Web Developer dan Nadia Anggraini sebagai Reporter riski ilustrator rifiyan graphic designer. Halaman 23 : orik sebagi web developer nadia sebagai reporter. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 23) {
        $('#title').text(titlePage[12]);
        $('#t').text(titlePage[12] + " - MetaMax");
        Materialize.toast(titlePage[12], 1000);
        $(".copied").attr("data-clipboard-text", "Halaman 24 : Metamorph Creative Crew (MCC) merupakan salah satu ekstrakulikuler sekaligus sebagai tim media SMKN 1 Purwosari. Dengan konsep Jurnalistik MCC mulai berdiri ditahun 2008 .Dalam pelaksanaan kegiatan ekstra, MCC sendiri dibagi menjadi 2 departement utama dengan total 2 devisi disetiap departementnya Seperti News Departement yang terdiri dari Devisi Reporter dan Editor, dan Creative Departement yang terdiri dari Devisi fotografer dan Layouter. Sebenarnya, MCC sendiri sudah ada sejak SMKN 1 Purwosari berdiri yaitu pada tahun 2000. Namun, secara resmi memakai nama Metamorph Creative Crew(MCC) pada tahun 2008. MCC sbagai satu satunya ekstra Jurnalistik di sekolah yang memegang peranan penting terhadap majalah sekolah(METAMAGZ), majalah digital(METAMAX), majalah dinding(METAWALL), dan web(METASITE). Halaman 25 :Tidur merupakan aktivitas yang wajib dilakukan oleh manusia, karena ketika tidur tubuh akan beristirahat setelah seharian melakukan aktivitas. Tapi, tidak semua orang bisa mendapatkan tidur yang nyenyak, ada beberapa alasan yang membuat seseorang kesulitan tidur. Berikut adalah beberapa tips yang membuat tidur malam menjadi lebih nyenyak dan berkualitas. 1. Olahraga rutin setiap pagi Olahraga yang dilakukan setiap pagi akan membantu untuk lebih cepat tertidur di malam hari 2. Buat jadwal rutin Dengan membuat jadwal teratur, waktu tidur malam secara otomatis dapat memperoleh tidur yang berkualitas 3. Matikan lampu kamar Dengan lampu kamar yang padam akan membuat tidur lebih nyenyak 4. Hindari konsumsi makanan terlalu kenyang Ini dikarenakan, perut yang terlampau sangat kenyang akan mengakibatkan kesulitan untuk tidur 5. Hindari menggunakan ponsel sebelum tidur Sehingga tidak akan melakukan aktivitas seperti menelepon seseorang atau ber - sms dengan seseorang yang dapat mengganggu jam tidur Nah itu tadi merupakan tips tips agar tidur menjadi lebih berkualitas dan kesehatan pun tetap terjaga, semoga bermanfaat. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 25) {
        $('#title').text(titlePage[13]);
        $('#t').text(titlePage[13] + " - MetaMax");
        Materialize.toast(titlePage[13], 1500);
        $(".copied").attr("data-clipboard-text", "Halaman 26 : Tidur merupakan aktivitas yang wajib dilakukan oleh manusia, karena ketika tidur tubuh akan beristirahat setelah seharian melakukan aktivitas. Tapi, tidak semua orang bisa mendapatkan tidur yang nyenyak, ada beberapa alasan yang membuat seseorang kesulitan tidur. Berikut adalah beberapa tips yang membuat tidur malam menjadi lebih nyenyak dan berkualitas. 1. Olahraga rutin setiap pagi Olahraga yang dilakukan setiap pagi akan membantu untuk lebih cepat tertidur di malam hari 2. Buat jadwal rutin Dengan membuat jadwal teratur, waktu tidur malam secara otomatis dapat memperoleh tidur yang berkualitas 3. Matikan lampu kamar Dengan lampu kamar yang padam akan membuat tidur lebih nyenyak 4. Hindari konsumsi makanan terlalu kenyang Ini dikarenakan, perut yang terlampau sangat kenyang akan mengakibatkan kesulitan untuk tidur 5. Hindari menggunakan ponsel sebelum tidur Sehingga tidak akan melakukan aktivitas seperti menelepon seseorang atau ber - sms dengan seseorang yang dapat mengganggu jam tidur Nah itu tadi merupakan tips tips agar tidur menjadi lebih berkualitas dan kesehatan pun tetap terjaga, semoga bermanfaat. Halaman 27 : Berikut adalah beberapa produk central spring bed, terdapat nama produk beserta harganya, tidak hanya dibawah ini saja masih banyak produk central spring bed lainnya. - Redaksi Metamax6");
      } else if (parseInt(pageIndex) == 27) {
        $('#title').text(titlePage[14]);
        $('#t').text(titlePage[14] + " - MetaMax");
        Materialize.toast(titlePage[14], 1000);
      }



    }
    , controls: {
      zoomIn: '.zoomin',
      zoomOut: '.zoomout',
      next: '.next',
      back: '.prev',
      first: '.cov',
      last: '.bcov',
      slideShow: '.slideshow',
      flipSound: '.flipsound',
      fullscreen: '.fullscreen'
    }
    , scaleToFit: "#container"
    , onFullscreenError: function () {
      var msg = "Fullscreen failed.";
      if (self != top) msg = "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again."
      alert(msg);
    }


  }).css({ 'display': 'none', 'margin': 'auto' }).fadeIn(1000);





  // initialization search keywords

  var halaman = [
    //redaksi - 2
    "Salam Redaksi : Halo MetaReaders. Berjumpa kembali dengan kami tim MetaMax Digital Magazine dari SMKN 1 Purwosari yang kini sudah memasuki edisi ke - 6, loh. Di MetaMax Digital Magazine kali ini kami mengikuti kompetisi Madig Vol.2 2018 yang diadakan di Universitas Muhammadiyah Sidoarjo dengan mengangkat tema mengenai Technopreneur Di Era Digital .Penasaran kan ? Selamat membaca, SobatMeta.",
    //daftarisi -3
    "Daftar isi salam redaksi, daftar isi, universitas muhammadiyah, profil universitas muhammadiyah sidoarjo, visi misi universitas muhammadiyah sidoarjo, fakultas universitas muhammadiyah sidoarjo, program studi ilmu komunikasi, profil program studi ilmu komunikasi, visi misi program studi ilmu komunikasi, technopreneur di era digital, mengenal technopreneur, hal yang bisa dilakukan technopreneur, mengenal startup, pojok media, tips sukses startup, sosialisasi, langkah awal tarik minat pelajar dalam dunia technopreneur, komik, tentang team, smkn 1 purwosari, metamax, mcc, central spring bed",
    //webumsida - 4
    "www.umsida.ac.id",
    //profil_umsida - 5
    "Universitas Muhammadyah Sidoarjo (UMSIDA) merupakan salah satu universitas swasta yang berdiri pada tahun 1984 di Kabupaten Sidoarjo, Jawa Timur. Universitas terakreditasi B ini terdiri dari 4 kampus dengan penempatan yang berbeda.Kampus I yang berada di Jl.Mojopahit 666 B Sidoarjo, kampus II di Jl.Raya Gelam 250 Candi Sidoarjo, kampus III di Perum IKIP V / I Gunung Anyar Surabaya dan terakhir kampus IV yang berada di Jl.Raya Rame Pilang No.04 Wonoayu. UMSIDA memiliki 9 fakultas dengan 26 jumlah program studi.Berdiri dibawah kepemilikan Persyerikatan Muhammadyah dengan slogan Dari Sini Pencerah Bersemi semakin menguatkan komitmen untuk menjadikan UMSIDA sebagai Perguruan Tinggi Bermutu Tingkat Nasional tahun 2020.",
    //visi_misi - 6
    "Visi Umsida : Menjadi Perguruan Tinggi Bermutu Tingkat Nasional Tahun 2020. Misi Umsida : 1. Menyelenggarakan pendidikan tinggi berbasis kurikulum yang terintegratif, sehingga menghasilkan lulusan yang memiliki keunggulan profesional, sosial dan berkepribadian Islam. 2. Meningkatkan kompetensi pendidik dan tenaga kependidikan. 3. Memberikan pelayanan akademik yang bermutu kepada seluruh mahasiswa UMSIDA 4. Mengimplementasikan sistem penjaminan mutu internal. 5. Berperan aktif dalam menyelesaikan permasalahan di masyarakat dengan meningkatkan mutu dan relevansi penelitian dan pengabdian pada masyarakat. 6. Melaksanakan tata kelola institusi secara demokratis, transparan dan akuntabel.",
    //fakultas - 7
    "Mau tau apa saja fakultas yang ada di Universitas Muhammadiyah Sidoarjo ? Berikut ini adalah beberapa fakultas yang ada di Universitas Muhammadiyah Sidoarjo yang berjumlah 9 fakultas.",
    //psik - 8 
    "Program Studi Ilmu Komunikasi mencakup 3 peminatan, yakni Manajemen Komunikasi, Public Relation dan Broadcasting Televisi. Manajemen Komunikasi, meliputi : Aplikasi komputer, Fotografi, Public Speaking, Cyber Media, Teknik Publisitas, Perencanaan & Produksi Radio Broadcasting, Manajemen Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Audio Komunikasi, Fimologi, Sinematografi, serta Teknik Editing. Public Relations, meliputi : News Writing, Fotografi, Aplikasi Komputer, Perencanaan & Produksi Radio Broadcasting, Manajemen Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Internet dan external Relation, Teknik Publisitas, Manajemen Media PR, Marketing PR, Industrial PR, serta Etika dan Profesi PR. Broadcasting Televisi, meliputi : Perencanaan dan Produksi Televisi, Produksi Broadcasting Televisi, Manajemen Insdutrial Periklanan, Desain Grafis, Desain Animasi, Perencanaan & Produksi Audio Visual, Filmologi, Sinematografi, serta diajarkan pula Teknik Editing.Ada pula Teknik Kamera, Script Writer, Story Board, dsb.",
    //visi_misi_psik - 9
    "Visi : Menyelenggarakan pendidikan tinggi bidang kajian ilmu - ilmu sosial dan ilmu politik yang berdasarkan pada pancasila dan nilai - nilai islam. Misi : Menyelenggarakan perguruan tinggi yang berkualitas dan professional bidang kajian ilmu Administrasi Publik dan Ilmu Komunikasi Mengembangkan sumber daya manusia yang berkualitas dalam peningkatan ilmu pengetahuan di bidang kajian Administrasi Publik dan Komunikasi Mengembangkan penelitian dalam kajian Administrasi Publik dan Komunikasi Meningkatkan standar kualitas lulusan inovatif, kreatif, professional, dan responsive terhadap kemajuan masyarakat melalui Pembelajaran Berbasis Kompetensi & Kewirausahaan (PBKK)",
    //prospek_kerja1 - 10
    "1. Broadcaster Pihak - pihak yang terlibat dalam dunia pelayaran yang kebanyakan ditempatkan di stasiun televisi, radio, ataupun kantor - kantor surat kabar, tabloid maupun majalah.Bidang kerja mencangkup produser, sutradara, reporter, copy writer. 2. Jurnalis Bagian dari ilmu komunikasi yang mempelajari bagaimana cara mengemas berita sehingga layak disebarluaskan ke masyarakat luas.Bidang kerja mencangkup reporter, news anchor(penyiar berita), news dubber, wartawan media massa, dan lain - lain. 3. Announcer Dibutuhkan kemampuan menyampaikan pesan dengan baik dan dapat menarik perhatian pendengarnya menjadi acuan pokok dari announcer atau penyiar.Bidang kerja mencangkup penyiar radio, presenter, dll.Disinilah para Announcer dituntut untuk dapat berbicara lebih efektif dan lihai dalam pengolaan kata. 4. Master Of Caremony Pekerjaan yang dapat ditempatkan di berbagai event, bisa diakui bahwa tanpa seorang MC, suatu event atau agenda  bisa saja berantakan dan tak sejalur dengan perencanaan awal.Seorang MC membutukan kualitas gaya bicara yang baik, pandai menempatkan diri.",
    //prospek_kerja2 - 11
    "5. Public Relations Officer Mewakili perusahaan dalam setiap waktu, menjaga nama baik perusahaan serta mewujudkan hubungan yang harmonis pada seluruh klien perusahaan, menjadi tugas utama para Public Relations Officer. 6. Event Orgnizer Merancang sebuah event besar, mulai bagaimana cara mengemas sebuah acara yang sesuai dengan konsep pesan yang ingin disampaikan, hingga mengatur acara sedemikian rupa agar meninggalkan kesan dan reutasi yang baik. 7. Advertising Diperlukan kekreatifan yang tinggi dalam pembuatan suatu iklan yang pada akhirnya akan berdampak pada sebuah produk yang diiklankan.Bidang kerja mencangkup project leader advertising, copy witer, camera erson, media planner, dan lain - lain. 8. Marketing Communication Bukan hanya mengenai unsur pemasaran dan ilmu bisnis saja, namun juga menyusun dan merancang stratgi komunikasi pemasaran yang tepat bagi perusahaan. 9. Videografer Seseorang yang bekerja dalam medium video, merekam gambar bergerak dan sebagainya.Bertanggung jawab akan pencahayaan maupun pegaturan audio pada saat merekam. 10. Fotografer Menangkap gambar menggunakan kamera serta peralatan fotografi lainnya yang umumnya memikirkan seni dan teknik yang digunakan untuk menghasilkan gambar dengan kualitas terbaik. 11. Graphics Designer Bekerja membuat sebuah rancangan grafis menggunakan elemen visual, seperti tulisan, bentuk, gambar untuk menyampaikan suatu pesan didalamnya.",
    //technopreneur1 - 12
    "Technopreneur merupakan gabungan dari kata Entrepreneur dan Teknologi. Entrepreneur yang mengacu pada wirausahawan dengan berbagai skill kompetensi dan inovasi yang menjadikan usahanya terus berkembang. Sehingga dapat disimpulkan, bahwa Technopreneur adalah pemanfaatan perkembangan teknologi sebagai sarana prasana mengembangkan sebuah usaha hingga menghasilkan peluang usaha yang besar dan berpengaruh. Istilah Technopreneur bermula sekitar akhir tahun 1990 hingga benar - benar booming di tahun 2000 sehubungan dengan berkembangnya teknlogi informasi & komunikasi(internet).Sehingga muncullah technopreneur sejati bernama Bill Gates yang berhasil dinobati sebagai orang terkaya pertama didunia versi majalah Forbes.",
    //technopreneur2 - 13
    "Bicara seputar Technopreneur, apa saja sih yang bisa dilakukan para Technopreneur di era digital saat ini? Buat kalian para Technopreneur yang pasti tak asing lagi dengan perkembangan hingga pemanfaatan teknologi digital, kalian dapat mengembangkan skill kompetensi dan Technopreneurship kalian mulai dari hal - hal kecil seperti membuat sebuah situs berupa blog maupun website, kalian harus pandai - pandai nih dalam mengamati keadaan disekitar kalian. Didunia yang serba canggih saat ini, tak dipungkiri banyak orang haus akan berita.Begitulah kalian memandang sebuah masalah lalu mencoba menemukan peluang usaha untuk menemukan penyelesaian dari permasalah tersebut. Bukan hanya melalui sebuah blog maupun website, kalian juga bisa memanfaatkan youtube maupun media sosial lainnya loh.Namun, yang paling sering dikembangkan oleh para Technopreneur saat ini adalah bisnis Startup.Dewasa ini, sudah banyak sekali bisnis startup yang berkembang luas diantara masyarakat dunia. Gimana ? Tertarik menjadi seorang Technopreneur ?",
    //startup - 14 
    "Masih asing dengan yang namanya startup ? Startup, kata serapan dari Bahasa Inggris ini mengacu pada proses memulai suatu usaha atau organisasi baru. Jadi bisa dikata bahwa startup adalah sebuah perusahaan rintisan yang merujuk pada semua perusahaan yang belum lama beroperasi dan masih dalam proses perkembangan. Karakteristik perusahaan atau organisasi startup antara lain: 1. Usia perusahaan kurang dari 3 tahun 2. Jumlah pegawai kurang dari 20 orang 3. Pendapatan kurang dari $ 100.000 / tahun 4. Masih dalam tahap berkembang 5. Umumnya beroperasi dalam bidang teknologi 6. Produk yang dibuat berupa aplikasi dalam bentuk digital 7. Biasanya beroperasi melalui website",
    //pojok_media - 15
    "PojokMedia.net adalah sebuah portal berita yang dirintis oleh pemuda-pemuda alumni SMKN 1 Purwosari dan telah dirilis pada 21 desember 2017.Informasi yang disajikan oleh PojokMedia sendiri terbagi kedalam 3 rubrik dimana masing-masing rubrik memiliki target pembaca tersendiri. Pertama ada Rubrik Creative yang ditujukan untuk para pelaku industri kreatif terutama para technopreneur atau pendiri startup. Lalu ada Rubrik Studens yang ditujukan pada para pelajar atau mahasiswa, tidak hanya membahas mengenai pendidikan tapi juga kehidupan sehari - hari mereka. Dan terakhir adalah Rubrik Otaku untuk mereka - mereka yang memiliki minat terhadap budaya jepang seperti Animanga, tokusatsu, Idol, maupun lainnya. Dengan tim yang rata-rata masih berusia 18 - 20 tahun, PojokMedia.net akan berusaha membangkitkan semangat para pemuda untuk terusmenerus mengejar impian sesuai passion mereka melalui artikel - artikel yang informatif dan inspiratif dari berbagai sudut galaksi Esa dandy A(Co - Founder & Web Developer PojokMedia.net).",
    //tips - 16
    "Di era digital saat ini tak dapat dipungkiri bahwa persaingan di dunia bisnis sangatlah pesat. Apalagi bicara seputar perusahaan perusahaan startup yang terus bertambah seiring berjalannya waktu. Namun bagaimana sih caranya agar bisnis startupmu membawa kesuksesan besar.Nah, ini dia 5 faktor pendorong kesuksesan sebuah startup: 1. Ide 2. Tim dan Eksekusi 3. Model Bisnis 4. Pendanaan 5. Timing Dari kelima faktor diatas dapat dilihat bagaimana saling berpengaruhnya setiap faktor tersebut bagi perkembangan sebuah startup. Ide adalah pacuan utama kita dalam membangun sebuah usaha.Dalam menuangkan ide tersebut perlu adanya kerjasama tim dan pelaksanaan kerja(eksekusi).Dalam pelaksanaan kerja kita perlu membuat sebuah model bisnis berupa perencanaan kedepan untuk meminimalisir kerugian dan meningkatkan keuntungan perusahaan.Pendanaan sebagai sarana pemenuhan kebutuhan sebuah perusahaan. Namun, faktor terpenting yang sangat berpengaruh terhadap kesukseksan startupmu adalah Timing.Bagaimana seorang enterpreneur dapat memanfaatkan waktu dengan baik akan menjadi pusat kendali gerak perusahaannya.",
    //technopreneur3 - 17
    "Para pelajar masa kini, yang termasuk dalam generasi modern sudah dipastikan tidak asing lagi dengan teknologi. Dalam era serba canggih ini, beberapa generasi muda kita sudah bisa memanfaatkan teknologi yang sudah ada dengan sebaik-baiknya. Namun kebanyakan mereka belum merasa tertarik untuk mencoba menjadi seorang Technopreneur. Nah, bagaimana cara untuk menarik minat pelajar menjadi Technopreneur muda ? Salah satunya adalah dengan melakukan sosialisasi. Sosialisasi yang didalamnya memuat gambaran lebih mengenai Technopreneur, contoh nyata dari seorang Technopreneur dengan penjabaran mengenai aktivitas, keuntungan serta potensi yang dirasakan olehnya selama menjadi seorang Technopreneur, sebagai bukti nyata kepada para pelajar dan memotivasinya untuk berani mencoba menjadi seorang Technopreneur. Dengan begitulah, sedikit demi sedikit akan menumbuhkan ketertarikan dalam diri seorang pelajar untuk mencoba menjadi generasi penerus Technopreneur muda.",
    //komik1 - 18
    "",
    //komik2 - 19
    "",
    //smk - 20
    "SMK Negeri 1 Purwosari merupakan salah satu lembaga pendidikan yang memiliki visi untuk membentuk tamatan yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, memiliki budi pekerti luhur, keterampilan, berdaya saing tinggi dan berwawasan lingkungan. SMK Negeri 1 Purwosari berdiri pada tahun 2000 terletak di Purwosari, tepatnya Jl. Raya Purwosari Kecamatan Purwosari, Kabupaten Pasuruan. Secara geografis SMK Negeri 1 Purwosari terletak di wilayah barat Kabupaten Pasuruan, berbatasan dengan Kabupaten Malang, Kota Pasuruan dan Kabupaten Mojokerto. Dengan posisi yang strategis tersebut, sangat memungkinkan bagi SMK Negeri 1 Purwosari untuk merekrut siswa dari segala penjuru, mengingat keberadaanya yang mudah dijangkau dengan kendaraan umum serta berada di jalur utama menuju ke Pasuruan, Malang dan Surabaya.",
    //jurusan - 21
    "Jurusan yang ada di smk negeri smk negeri 1 purwosari teknik informatika multimedia teknik rekayasa perangkat lunak teknik komputer dan jaringan bidang elektronika mekatronika bidang pertanian agribisnis tanaman pangan dan holtikultura teknik pengolahan hasil pertanian teknik pemesinan teknik pemesinan body otomotif teknik kendaraan ringan teknik las",
    //mtmx - 22
    "MetaMax merupakan salah satu produk MCC yang berjalan di bidang Majalah Digital yang saat ini telah memasuki edisi ke-6. Pengambilan nama MetaMax sendiri digunakan untuk membedakan produk majalah digital milik MCC dengan Majalah Digital lainnya. Beranggotakan Rifiyan Fauzarudin sebagai Graphic Designer, Riski Ainur R sebagai Ilustrator, M Ilham Fitrory sebagai Web Developer dan Nadia Anggraini sebagai Reporter riski ilustrator rifiyan graphic designer.",
    //team - 23
    "orik sebagi web developer nadia sebagai reporter",
    //mcc - 24
    "Metamorph Creative Crew (MCC) merupakan salah satu ekstrakulikuler sekaligus sebagai tim media SMKN 1 Purwosari. Dengan konsep Jurnalistik MCC mulai berdiri ditahun 2008 .Dalam pelaksanaan kegiatan ekstra, MCC sendiri dibagi menjadi 2 departement utama dengan total 2 devisi disetiap departementnya Seperti News Departement yang terdiri dari Devisi Reporter dan Editor, dan Creative Departement yang terdiri dari Devisi fotografer dan Layouter. Sebenarnya, MCC sendiri sudah ada sejak SMKN 1 Purwosari berdiri yaitu pada tahun 2000. Namun, secara resmi memakai nama Metamorph Creative Crew(MCC) pada tahun 2008. MCC sbagai satu satunya ekstra Jurnalistik di sekolah yang memegang peranan penting terhadap majalah sekolah(METAMAGZ), majalah digital(METAMAX), majalah dinding(METAWALL), dan web(METASITE).",
    //csb - 25
    "Bicara mengenai produk-produk spring bed, tentunya sudah tak asing dengan merek spring bed yang satu ini. Yah, Central Spring Bed. Central Spring Bed didirikan oleh PT Graha Seribu Satu Jaya sejak 1993 silam.Dan tak dapat dipungkiri, bahwa produk - produk Central Spring Bed telah tersebar ke seluruh penjuru Indonesia.Cetral Spring Bed benar benar mengutamakan kualitas produk mereka, sehingga produk - produknya dapat diterima dengan baik oleh masyarakat setempat. Central Spring Bed juga memanfaatkan teknologi digital sebagai media promosi serta pemasaran produk mereka, seperti iklan di media sosial maupun siaran TV.",
    //kesehatan - 26
    "Tidur merupakan aktivitas yang wajib dilakukan oleh manusia, karena ketika tidur tubuh akan beristirahat setelah seharian melakukan aktivitas. Tapi, tidak semua orang bisa mendapatkan tidur yang nyenyak, ada beberapa alasan yang membuat seseorang kesulitan tidur. Berikut adalah beberapa tips yang membuat tidur malam menjadi lebih nyenyak dan berkualitas. 1. Olahraga rutin setiap pagi Olahraga yang dilakukan setiap pagi akan membantu untuk lebih cepat tertidur di malam hari 2. Buat jadwal rutin Dengan membuat jadwal teratur, waktu tidur malam secara otomatis dapat memperoleh tidur yang berkualitas 3. Matikan lampu kamar Dengan lampu kamar yang padam akan membuat tidur lebih nyenyak 4. Hindari konsumsi makanan terlalu kenyang Ini dikarenakan, perut yang terlampau sangat kenyang akan mengakibatkan kesulitan untuk tidur 5. Hindari menggunakan ponsel sebelum tidur Sehingga tidak akan melakukan aktivitas seperti menelepon seseorang atau ber - sms dengan seseorang yang dapat mengganggu jam tidur Nah itu tadi merupakan tips tips agar tidur menjadi lebih berkualitas dan kesehatan pun tetap terjaga, semoga bermanfaat.",
    //list - 27
    "Berikut adalah beberapa produk central spring bed, terdapat nama produk beserta harganya, tidak hanya dibawah ini saja masih banyak produk central spring bed lainnya."
  ];

  $('.redaksi').text(halaman[0].toLowerCase());
  $('.daftarisi').text(halaman[1].toLowerCase());
  $('.webumsida').text(halaman[2].toLowerCase());
  $('.profil_umsida').text(halaman[3].toLowerCase());
  $('.visi_misi').text(halaman[4].toLowerCase());
  $('.fakultas').text(halaman[5].toLowerCase());
  $('.psik').text(halaman[6].toLowerCase());
  $('.visi_misi_psik').text(halaman[7].toLowerCase());
  $('.prospek_kerja1').text(halaman[8].toLowerCase());
  $('.prospek_kerja2').text(halaman[9].toLowerCase());
  $('.technopreneur1').text(halaman[10].toLowerCase());
  $('.technopreneur2').text(halaman[11].toLowerCase());
  $('.startup').text(halaman[12].toLowerCase());
  $('.pojok_media').text(halaman[13].toLowerCase());
  $('.tips').text(halaman[14].toLowerCase());
  $('.technopreneur3').text(halaman[15].toLowerCase());
  $('.komik1').text(halaman[16].toLowerCase());
  $('.komik2').text(halaman[17].toLowerCase());
  $('.smk').text(halaman[18].toLowerCase());
  $('.jurusan').text(halaman[19].toLowerCase());
  $('.mtmx').text(halaman[20].toLowerCase());
  $('.team').text(halaman[21].toLowerCase());
  $('.mcc').text(halaman[22].toLowerCase());
  $('.csb').text(halaman[23].toLowerCase());
  $('.kesehatan').text(halaman[24].toLowerCase());
  $('.list').text(halaman[25].toLowerCase());

  $('.search-first').addClass('animated fadeInDown');
  $('.search-item').addClass('animated fadeInDown');
  $('.search-item').hide();
  $('.search-input').bind('input', function () {
    $('.search-item').hide();
    var searchcontent = $(this).val().toLowerCase();
    if ($(this).val().length > 0) {
      $(".search-item:contains(" + searchcontent + ")").show();
      $('.search-first').hide();
    } else {
      $('.search-item').hide();
      $('.search-first').show();
    };
  });


  /* bookmark */
  var opened = false;
  $(".open-bookmark").click(function () {
    if (opened == true) {
      $(".bookmark-box").animate({ left: "-360px" });
      opened = false;
    } else {
      $(".bookmark-box").animate({ left: "0px" });
      opened = true;
    }
  });

  var opened = false;
  $(".open-chat").click(function () {
    if (opened == true) {
      $(".comment-box").animate({ width: "0px" });
      opened = false;
    } else {
      $(".comment-box").animate({ width: "398px" });
      opened = true;
    }
  });

  //opencomment box
  var track = false;
  $(".music-box").hide();
  $("#music").click(function () {
    if (track == true) {
      // $(".music-box").hide();
      $(".music-box").removeClass('animated fadeIn');
      $(".music-box").hide();
      track = false;
    } else {
      $(".music-box").show();
      $(".music-box").addClass('animated fadeIn');
      track = true;
    }
  });

  $(".setting-block").hide();
  $("#settings").click(function () {
    $(".menu-block").fadeOut();
    $(".setting-block").fadeIn();
  });

  $(".back-change").click(function () {
    $(".menu-block").fadeIn();
    $(".setting-block").fadeOut();
  });


  // pengaturan tema yang codingannya tidak teratur
  $("#bg5").click(function () {
    $('body').attr('class', 'bg5');
    $("#img-nav").attr('src', 'assets/images/dark/d_metamax.png');
    $("#bottom-nav").attr('class', 'grey darken-4 grey-text text-lighten-5');
    $("#bottom-nav a").css('color', '#fff');
    $(".cov_slide").attr('src', 'assets/page/slide/d_mtmx.png');
  });

  $("#bg4").click(function () {
    $('body').attr('class', 'bg4');
    $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
    $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
    $("#bottom-nav a").css('color', '#222');
    $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
  });

  $("#bg6").click(function () {
    $('body').attr('class', 'bg6');
    $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
    $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
    $("#bottom-nav a").css('color', '#222');
    $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
  });

  $("#bg3").click(function () {
    $('body').attr('class', 'bg3');
    $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
    $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
    $("#bottom-nav a").css('color', '#222');
    $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
  });

  $("#bg7").click(function () {
    $('body').attr('class', 'bg7');
    $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
    $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
    $("#bottom-nav a").css('color', '#222');
    $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
  });


  // maaf codingannya korat karit
  $(".search").click(function () {
    $(".search-input").focus();
  });

  $(window).load(function () {
    anu = true;
    $("#main-setting").change();
  });







  $(".custom-set").hide();
  $("#main-setting").change(function () {
    if (anu == false) {
      $(this).attr('aktif', 'ya');
      $(".custom-set").fadeIn();
      $(".default-set").fadeOut();
      clearInterval(interval);
      anu = true
    } else {
      $(this).attr('aktif', 'tidak');
      $(".custom-set").fadeOut();
      $(".default-set").fadeIn();
      anu = false;
      interval = setInterval(function () {
        var jam = $("#jamkot").text();
        if (jam >= 3 && jam < 6) {
          $('body').attr('class', 'bg1');
          $("#bottom-nav").attr('class', 'grey darken-4 grey-text text-lighten-5');
          $("#bottom-nav a").css('color', '#fff');
          $("#img-nav").attr('src', 'assets/images/dark/d_metamax.png');
          $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
        } else if (jam >= 6 && jam < 15) {
          $('body').attr('class', 'bg5');
          $("#bottom-nav").attr('class', 'grey darken-4 grey-text text-lighten-5');
          $("#bottom-nav a").css('color', '#fff');
          $("#img-nav").attr('src', 'assets/images/dark/d_metamax.png');
          $(".cov_slide").attr('src', 'assets/page/slide/d_mtmx.png');
        } else if (jam >= 15 && jam < 19) {
          $('body').attr('class', 'bg3');
          $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
          $("#bottom-nav a").css('color', '#000');
          $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
          $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
        } else if (jam >= 19 && jam < 24) {
          $('body').attr('class', 'bg4');
          $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
          $("#bottom-nav a").css('color', '#000');
          $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
          $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
        } else if (jam >= 24) {
          $('body').attr('class', 'bg');
          $("#bottom-nav").attr('class', 'grey lighten-5 grey-text text-darken-4');
          $("#bottom-nav a").css('color', '#000');
          $("#img-nav").attr('src', 'assets/images/light/l_metamax.png');
          $(".cov_slide").attr('src', 'assets/page/slide/l_mtmx.png');
        }
      }, 1000);
    }
  });

});


// change music function
var life = true;
function changeMusic(song) {
  players = document.querySelector('#player');
  players.src = "assets/file/backsound/" + song + ".mp3";
  life = true
}


window.setTimeout("waktu()", 1000);
function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  var jam;
  var menit;
  if (tanggal.getHours() < 10) {
    jam = "0" + tanggal.getHours();
    menit = tanggal.getMinutes();
  } else {
    jam = tanggal.getHours();
    menit = tanggal.getMinutes();
  };
  document.getElementById("jamkot").innerHTML = jam;
}