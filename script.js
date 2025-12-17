<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KIKO JOKI GENSHIN | Tingkatkan Akun Anda</title>
    <link rel="stylesheet" href="styles.css"> 
    <style>
        /* CSS untuk mendukung fitur klik harga */
        .antrean-section {
            background: #fff;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            margin: 20px 0;
            border: 2px solid #7289da;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .nomor-box { font-size: 4.5rem; font-weight: bold; color: #e74c3c; margin: 15px 0; line-height: 1; }
        .btn-antri {
            background-color: #25d366; color: white; border: none; padding: 15px 30px;
            font-size: 1.2rem; border-radius: 10px; cursor: pointer; font-weight: bold; width: 100%; max-width: 320px;
        }
        .btn-antri:disabled { background-color: #bdc3c7 !important; cursor: not-allowed; }
        
        /* Gaya Tabel Harga yang akan muncul */
        .harga-layanan-detail {
            display: none; /* Tersembunyi secara default */
            margin-top: 15px;
            background: #f9f9f9;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        .harga-table-detail { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .harga-table-detail th, .harga-table-detail td {
            border: 1px solid #ddd; padding: 10px; text-align: left; font-size: 0.9rem;
        }
        .harga-table-detail th { background-color: #7289da; color: white; }
        
        .service-item { cursor: pointer; transition: transform 0.2s; }
        .service-item:hover { transform: scale(1.02); }
        .highlighted { border: 2px solid #25d366; border-radius: 10px; }
        .gratis-text { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>
    
    <header>
        <div class="container">
            <div class="brand-name">KIKO JOKI GENSHIN</div>
            <nav>
                <ul>
                    <li><a href="#layanan-harga">Layanan & Harga</a></li> 
                    <li><a href="#antrean">Cek Antrian</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container"> 
        <section id="antrean" class="antrean-section">
            <h2>Sistem Antrian Joki <span class="gratis-text">Gratis</span></h2>
            <p id="labelStatus">Nomor Antrian Terakhir Saat Ini:</p>
            <div class="nomor-box" id="displayAntrean">--</div>
            <button class="btn-antri" id="btnAmbil" onclick="ambilAntrean()">AMBIL NOMOR ANTRIAN</button>
            <p id="infoAntrean" style="margin-top:15px; font-weight:bold; color:#2c3e50;"></p>
            <p id="infoWaktu" style="font-size: 0.85rem; color: #7f8c8d;"></p>
        </section>

        <section id="layanan-harga">
            <h2>Layanan Kami (Klik Ikon untuk Lihat Harga)</h2>
            
            <div class="service-list">
                <div class="service-item-wrapper">
                    <div class="service-item" data-service-id="spyrall">
                        <img src="amber-icon.png" alt="Ikon Amber" class="service-icon">
                        <div>
                            <h3>Joki Spyrall Abyss, Stygiant Onslaught, Imaginarium Theater</h3>
                            <p>Penyelesaian Full Star atau sesuai permintaan.</p>
                        </div>
                    </div>
                    <div class="harga-layanan-detail" id="harga-spyrall">
                        <table class="harga-table-detail">
                            <thead><tr><th>Layanan</th><th>Deskripsi</th><th>Harga</th></tr></thead>
                            <tbody class="harga-body-detail"></tbody>
                        </table>
                    </div>
                </div>

                <div class="service-item-wrapper">
                    <div class="service-item" data-service-id="eksplorasi">
                        <img src="ganyu-icon.png" alt="Ikon Ganyu" class="service-icon">
                        <div>
                            <h3>Joki Eksplorasi Map</h3>
                            <p>Eksplorasi wilayah Mondstad hingga Natlan.</p>
                        </div>
                    </div>
                    <div class="harga-layanan-detail" id="harga-eksplorasi">
                        <table class="harga-table-detail">
                            <thead><tr><th>Layanan</th><th>Deskripsi</th><th>Harga</th></tr></thead>
                            <tbody class="harga-body-detail"></tbody>
                        </table>
                    </div>
                </div>

                <div class="service-item-wrapper">
                    <div class="service-item" data-service-id="daily">
                        <img src="xiao-icon.png" alt="Ikon Xiao" class="service-icon">
                        <div>
                            <h3>Joki Daily Commision Harian</h3>
                            <p>Rawat akun harian, mingguan, atau bulanan.</p>
                        </div>
                    </div>
                    <div class="harga-layanan-detail" id="harga-daily">
                        <table class="harga-table-detail">
                            <thead><tr><th>Layanan</th><th>Deskripsi</th><th>Harga</th></tr></thead>
                            <tbody class="harga-body-detail"></tbody>
                        </table>
                    </div>
                </div>

                <div class="service-item-wrapper">
                    <div class="service-item" data-service-id="jokiquest">
                        <img src="hutao-icon.png" alt="Ikon Hu Tao" class="service-icon">
                        <div>
                            <h3>Joki Quest (Story/Event)</h3>
                            <p>Archon Quest, World Quest, dan Event Terbatas.</p>
                        </div>
                    </div>
                    <div class="harga-layanan-detail" id="harga-jokiquest">
                        <table class="harga-table-detail">
                            <thead><tr><th>Layanan</th><th>Deskripsi</th><th>Harga</th></tr></thead>
                            <tbody class="harga-body-detail"></tbody>
                        </table>
                    </div>
                </div>

                <div class="service-item-wrapper">
                    <div class="service-item" data-service-id="farming">
                        <img src="aether-icon.png" alt="Ikon Aether" class="service-icon">
                        <div>
                            <h3>Joki Farming Material</h3>
                            <p>Farming material karakter, bebatuan, dan memancing.</p>
                        </div>
                    </div>
                    <div class="harga-layanan-detail" id="harga-farming">
                        <table class="harga-table-detail">
                            <thead><tr><th>Layanan</th><th>Deskripsi</th><th>Harga</th></tr></thead>
                            <tbody class="harga-body-detail"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <section id="kontak" style="margin-top: 50px; background: #f0f2f5; padding: 20px; border-radius: 15px;">
                <h3>Form Pemesanan</h3>
                <form id="joki-form">
                    <input type="text" id="nama" placeholder="Nama Lengkap" required style="width: 90%; padding: 10px; margin-bottom: 10px;">
                    <div style="margin-bottom: 10px;">
                        <label><input type="radio" name="metode_kontak" value="whatsapp" checked> WhatsApp</label>
                        <label><input type="radio" name="metode_kontak" value="discord"> Discord</label>
                    </div>
                    <div id="input-wa"><input type="text" id="whatsapp" placeholder="Nomor WhatsApp" style="width: 90%; padding: 10px; margin-bottom: 10px;"></div>
                    <div id="input-discord" style="display:none;"><input type="text" id="discord" placeholder="Username Discord" style="width: 90%; padding: 10px; margin-bottom: 10px;"></div>
                    
                    <select id="server" style="width: 95%; padding: 10px; margin-bottom: 10px;">
                        <option value="Asia">Asia</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                    </select>
                    <input type="text" id="layanan-jasa" placeholder="Layanan yang dipilih" required style="width: 90%; padding: 10px; margin-bottom: 10px;">
                    <textarea id="catatan" placeholder="Catatan tambahan (Spek akun, dll)" style="width: 90%; padding: 10px; margin-bottom: 10px;"></textarea>
                    <button type="submit" class="btn-antri" style="background: #7289da;">KIRIM PESANAN</button>
                </form>
            </section>
        </section> 
    </div>

    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <script src="script.js"></script>

    <script>
        // Logika Antrean (Firebase)
        const firebaseConfig = { databaseURL: "https://kiko-joki-default-rtdb.asia-southeast1.firebasedatabase.app" };
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        function ambilAntrean() {
            if (localStorage.getItem('kikoMyNumber')) return alert("Anda sudah punya nomor!");
            db.ref('lastNumber').transaction(c => (c || 0) + 1, (err, comm, snap) => {
                if (comm) {
                    localStorage.setItem('kikoMyNumber', snap.val());
                    location.reload();
                }
            });
        }
    </script>
</body>
</html>
