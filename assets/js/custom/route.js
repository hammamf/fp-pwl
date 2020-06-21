$(document).ready(function () {
    $('.nav-link').click(function () {
        var menu = $(this).attr('id');
        if (menu == "dashboard") {
            $('#main_konten').load('../admin/index.html');
        } else if (menu == "data-fg") {
            $('#main_konten').load('../admin/fotografer/index.html');
        } else if (menu == "list-jadwal") {
            $('#main_konten').load('../admin/sekolah/index.html');
        } else if (menu == "list-sekolah") {
            $('#main_konten').load('../admin/sekolah/index.html');
        }
    });


    // halaman yang di load default pertama kali
    $('#main_konten').load('../admin/index.html');

    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:8888/fp_pwl_be/api/check",
    //     headers: {
    //         "Authorization": $.cookie('token')
    //     }
    // }).done(function (response) {

    //     $.ajax({
    //         type: "GET",
    //         url: "http://localhost:8888/fp_pwl_be/api/fotografer/check/" + response.id,
    //         dataType: "json",
    //     }).done(function (response) {
    //         $('#nama-user-login').text(response.nama);

    //     });
    // });


});