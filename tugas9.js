function panggil(){
    var mahasiswa = {
        nama : 'Panji Prawiro Wibowo',
        umur : 25,
        jurusan : 'Manajemen Informatika',
        tahun : 2014,
    }
     
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}
panggil()