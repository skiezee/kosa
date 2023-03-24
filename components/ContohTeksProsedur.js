import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function ContohTeksProsedurComponent(props) {
  return (
    <SafeAreaView style={{ margin: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#F3F3F3",
            width: 48,
            height: 48,
            borderRadius: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={props.press}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Teks Prosedur
          </Text>
          <Text
            style={{
              color: "#A5A5A5",
              textAlign: "center",
              marginTop: 4,
              fontSize: 12,
              fontWeight: "400",
            }}
          >
            Contoh Tesk Prosedur
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#F3F3F3",
            width: 48,
            height: 48,
            borderRadius: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24 }}
      >
        <View style={{ marginBottom: 128 }}>
          <Text
            style={{
              color: "#131313",
              fontSize: 16,
              fontWeight: "600",
              marginTop: 24,
            }}
          >
            Bagaimana membuat teks prosedur yang baik dan menarik?
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: "#131313",
              marginTop: 16,
            }}
          >
            Contoh Teks Prosedur Sederhana
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            1. Cara Membuat Nasi Goreng
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Nasi goreng adalah salah satu menu kegemaran banyak orang dan cukup
            mudah untuk dibuat di rumah. Berikut cara untuk membuat nasi goreng
            sendiri! Bahan-bahan yang perlu disiapkan untuk satu porsi nasi
            goreng. {"\n"}
            1. Nasi yang sudah dingin {"\n"}
            2. Bawang putih 3 siung{"\n"}
            3. Cabai rawit 3 buah{"\n"}
            4. Telur satu butir{"\n"}
            5. Bawang merah 3 siung{"\n"}
            6. Garam dan penyedap{"\n"}
            7. Kecap{"\n"}
            8. Minyak goreng{"\n"}
            9. Daun bawang (opsional){"\n"}
            Cara memasak:{"\n"}
            1. Haluskan bawang putih, cabai rawit, dan tumis dengan irisan
            bawang merah dan telur hingga wangi!{"\n"}
            2. Masukkan nasi, aduk hingga merata, kemudian masukkan bumbu
            penyedap, garam, dan kecap secukupnya!{"\n"}
            3. Nasi goreng siap dihidangkan selagi hangat, semakin nikmat dengan
            taburan bawang goreng dan kerupuk.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            2. Cara Mengirimkan Lamaran Pekerjaan Via Email
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Saat ini, berkat bantuan teknologi, melamar pekerjaan cukup mudah
            dan bahkan tidak memerlukan banyak biaya untuk datang ke kantor
            ataupun mencetak dokumen. Kamu bisa melamar pekerjaan melalui media
            daring dan mengirimkan lamaran pekerjaan melalui surat elektronik
            atau e-mail.{"\n"}
            Berikut cara mengirim lamaran pekerjaan dengan benar:{"\n"}
            1. Siapkan seluruh berkas yang disyaratkan, seperti surat lamaran
            pekerjaan, biodata diri, dan juga portofolio pekerjaanmu sebelumnya
            (jika ada).{"\n"}
            2. Pastikan kamu menulis judul email, kata pengantar berupa maksud
            dan tujuan di bagian badan email, dan jangan lupa mencantumkan
            berkas-berkas yang dibutuhkan dalam bentuk soft file dalam e-mail.
            {"\n"}
            3. Cek kembali seluruh kelengkapan, alamat email tujuan, dan hindari
            kesalahan penulisan dalam surat elektronik lamaran pekerjaanmu.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            3. Cara Membuat Agar-Agar
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Agar-agar atau jelly merupakan makanan ringan yang bertekstur kenyal
            dan lembut. Makanan ini cukup populer dan disukai banyak kalangan,
            khususnya anak-anak. Untuk kamu pencinta makanan lezat satu ini,
            berikut prosedur sederhana dalam membuat agar-agar:{"\n"}
            Bahan-bahan yang perlu disiapkan:{"\n"}
            1. 1 Bungkus agar-agar{"\n"}
            2. 600 ml air{"\n"}
            3. 160 gram gula pasir{"\n"}
            Bahan tambahan (opsional):{"\n"}
            1. Buah-buahan kaleng sesuai selera{"\n"}
            2. Nata de coco{"\n"}
            3. Selasih{"\n"}
            Cara memasak:{"\n"}
            1. Persiapkan semua bahan yang ada.{"\n"}
            2. Iris tipis buah-buahan kaleng.{"\n"}
            3. Rebus air, agar-agar, dan gula hingga mendidih.{"\n"}
            4. Masukkan buah-buahan, nata de coco, dan selasih ke dalam cetakan
            atau gelas mini.{"\n"}
            5. Tuang larutan agar-agar ke cetakan dan diamkan hingga dingin.
            {"\n"}
            6. Simpan dalam lemari es/kulkas hingga agar-agar bertekstur padat.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            4. Cara Membuat Masker dari Putih Telur
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Masker wajah merupakan salah satu produk perawatan wajah yang
            membantu mengatasi berbagai masalah kulit. Selain langsung
            membelinya, kamu juga bisa membuat masker dari bahan-bahan dapur.
            Salah satunya masker telur. Adapun cara membuatnya sebagai berikut:
            {"\n"}
            Alat dan bahan:{"\n"}
            1. 1 butir telur{"\n"}
            2. wadah/mangkok kecil{"\n"}
            Cara membuat:{"\n"}
            1. Siapkan satu buah butir telur dan pisahkan putih telur dari
            kuningnya. Siapkan juga satu wadah kecil.{"\n"}
            2. Campurkan putih telur dengan madu dan aduk sampai merata di dalam
            wadah.{"\n"}
            3. Oleskan masker telur ke seluruh area wajah secara merata kecuali
            mulut dan mata.{"\n"}
            4. Diamkan dan tunggu sekitar 15 menit hingga masker mengering.
            {"\n"}
            5. Bilas wajah dengan air dingin hingga bersih dan sisa-sisa masker
            hilang.{"\n"}
            6. Rasakan sensasi wajah segar setelah menggunakan masker putih
            telur.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            5. Cara Membuat Kopi Hitam Enak
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Kopi hitam merupakan minuman yang mengandung sejumlah khasiat.
            Pembuatan kopi hitam terlihat sederhana. Namun, pada prakteknya,
            cara membuat kopi hitam dapat berbeda-beda. Kopi hitam yang enak
            biasanya sering didapatkan di coffee shop, dibuat oleh barista.
            Namun, kamu juga bisa mengikuti resep di bawah ini untuk membuat
            kopi hitam yang tidak kalah nikmat.{"\n"}
            Alat dan bahan:{"\n"}
            1. Bubuk kopi{"\n"}
            2. Air mineral{"\n"}
            3. Gula{"\n"}
            4. Mug dengan filter/kertas saring{"\n"}
            5. Cangkir keramik{"\n"}
            Cara membuat:{"\n"}
            1. Panaskan air sebanyak dua cangkir. Gunakan air mineral untuk
            menghindari kemungkinan perubahan rasa pada kopi.{"\n"}
            2. Ketika mulai menyeduh kopi, atur api pada intensitas sedang.
            Kemudian, sebelum mendidih, masukkan bubuk kopi dan aduk perlahan.
            Jika sudah mendidih, matikan api.{"\n"}
            3. Gunakan mug dengan filter/kertas saring untuk menyaring ampas
            kopi. Tuang kopi secara perlahan.{"\n"}
            4. Tuang kopi tanpa ampas ke dalam cangkir keramik. Cangkir jenis
            ini dapat menjaga suhu kopi agar bertahan lama.{"\n"}
            5. Jika kamu penikmat kopi dengan gula, kamu bisa masukkan gula
            sesuai selera. Lalu, aduk hingga larut.
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              color: "#131313",
              marginTop: 16,
            }}
          >
            Contoh Teks Prosedur Kompleks
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            1. Cara Membuat SIM atau Surat Izin Mengemudi
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Sebelum mendatangi kantor kepolisian untuk mengurus SIM, persiapkan
            berkas-berkas yang diperlukan:{"\n"}
            1. Surat keterangan sehat.{"\n"}
            2. Salinan identitas berupa Kartu Tanda Penduduk (KTP) dengan usia
            minimal 17 tahun.{"\n"}
            3. Formulir pembuatan SIM yang sudah diisi.{"\n"}
            Jika berkas kamu sudah lengkap, maka lanjutkan dengan proses sebagai
            berikut:{"\n"}
            1. Serahkan berkas ke loket pendaftaran dan dapatkan nomor antrean!
            {"\n"}
            2. Lakukan registrasi berupa pengisian berkas pendaftaran,
            mendaftarkan sidik jari, dan foto diri untuk pencetakan kartu SIM!
            {"\n"}
            3. Ikuti sesi ujian teori keselamatan berkendara! Pemohon akan diuji
            dengan materi tes berupa teori peraturan dan perundangan lalu
            lintas, keterampilan mengemudi, etika berkendara di jalan umum, dan
            teknik mengoperasikan kendaraan. Jika tidak lolos, bisa mengikuti
            ujian ulang pada sesi ujian 7 hari kemudian.{"\n"}
            4. Jika lolos pada sesi ujian teori, pemohon bisa lanjut mengikuti
            sesi ujian praktik. Pada tahap ini, pemohon akan dinilai dari
            kelayakan berkendara dengan secara langsung mengemudi di hadapan
            petugas. Materi ujian praktik, yakni mengemudi dengan berbagai
            kondisi dan halang rintang yang harus dilewati dengan mulus.{"\n"}
            5. Jika pemohon tidak lolos pada tahap ini, dapat mengikuti ujian
            praktik kembali dengan menunggu sesi ujian 14 hari kemudian. Apabila
            pemohon kembali gagal pada sesi ujian ulang ketiga dan keempat,
            kemudian tidak mengikuti sesi ujian ulang selama 30 hari
            berturut-turut, maka berkas pemohon dibatalkan dan harus mendaftar
            kembali dari awal.{"\n"}
            6. Jika pemohon lolos pada tahapan tes praktik, dapat dilanjutkan
            untuk proses pembayaran biaya pembuatan SIM dan pencetakan kartu
            SIM.
          </Text>
          <Text
            style={{
              color: "#131313",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 16,
            }}
          >
            2. Cara Membuat Channel YouTube
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 21,
              color: "#A5A5A5",
              fontSize: 12,
              fontWeight: "400",
              marginTop: 4,
            }}
          >
            Kamu punya hobi membuat video tentang apa pun yang ingin kamu
            ceritakan kepada orang banyak? Kamu bisa coba buat akun channel di
            YouTube! Berikut langkah-langkah membuat akun YouTube:{"\n"}
            1. Pastikan kamu telah memiliki akun Google yang bisa digunakan
            untuk membuat akun! YouTube merupakan platform yang terintegrasi
            dengan Google, untuk itu kamu harus memiliki akun Google sebelumnya.
            {"\n"}
            2. Buka aplikasi YouTube yang bisa kamu unduh di Playstore atau
            melalui alamat Youtube.com!{"\n"}
            3. Lihat di bagian pojok kanan atas. Terdapat kotak “Masuk” lalu
            klik kotak tersebut dan masukkan nama pengguna dan kata sandi dari
            akun Google.{"\n"}
            4. Setelah berhasil masuk ke akun, pada pojok kanan atas, ketuk logo
            akunmu.{"\n"}
            5. Setelah muncul menu dengan beberapa opsi, pilih opsi “Buat
            Channel”.{"\n"}
            6. Setelah itu akan muncul menu yang menampilkan informasi dan nama
            channel yang akan kamu buat.{"\n"}
            7. Jika semua informasi yang diperlukan sudah dilengkapi, centang
            syarat dan ketentuan, lalu klik buat.{"\n"}
            8. Channel YouTube sudah selesai dibuat.{"\n"}
            9. Kamu bisa mengganti informasi pribadimu, seperti foto profil
            channel, deskripsi, dan juga bisa berbagi tautan channel-mu ke teman
            atau orang lain.{"\n"}
            10. Semua proses sudah selesai, kamu sudah bisa menggunakan channel
            Youtube untuk mengunggah video kreatifmu.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 24,
  },
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#FFFFFF",
  },
  lightThemeText: {
    color: "#FFFFFF",
  },
  darkThemeText: {
    color: "#FFFFFF",
  },
});
