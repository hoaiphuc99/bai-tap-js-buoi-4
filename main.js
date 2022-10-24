// BÀI 1 
// ***đầu vào 
// 3 số nguyên 
// *** xử lí
// so sánh 3 số 
// *** đầu ra 
// xuất giá trị 3 số theo thứ tự tăng dần 
// -------------------------
document.getElementById("btn_sx").onclick = function () {
    // ***đầu vào 
    var so1 = document.getElementById("so_1").value * 1;
    var so2 = document.getElementById("so_2").value * 1;
    var so3 = document.getElementById("so_3").value * 1;
    var min = "";
    var avg = "";
    var max = "";
    var result = "";
    // *** xử lí
    if (so1 > so2) {
        if (so2 > so3) {
            max = so1;
            avg = so2;
            min = so3;
        } else if (so1 > so3) {
            max = so1;
            avg = so3;
            min = so2;
        } else {
            max = so3;
            avg = so1;
            min = so2;
        }
    } else {
        if (so2 < so3) {
            max = so3;
            avg = so2;
            min = so1;
        } else if (so1 < so3) {
            max = so2;
            avg = so3;
            min = so1;

        } else {
            max = so2;
            avg = so1;
            min = so3;
        }
    }
    // *** đầu ra 
    result = min + " " + avg + " " + max;
    console.log(so1, so2, so3, min, avg, max);
    document.getElementById("sapxep").innerHTML = result;

}
// BAI 2
// --------------------------------

document.getElementById("btn_chon").onclick = function () {
    var nguoisd = document.getElementById("who").value * 1;
    var result = "";
    switch (nguoisd) {
        case 1:
            result = "Xin chào Bố!";
            break;
        case 2:
            result = "Xin chào Mẹ!";
            break;
        case 3:
            result = "Xin chào Anh Trai!";
            break;
        case 4:
            result = "Xin chào Em Gái!";
            break;
    }
    document.getElementById("chao").innerHTML = result;
}
// BÀI 3
// ----------------------------------
document.getElementById("btn_cl").onclick = function () {
    var so11 = document.getElementById("so_11").value * 1;
    var so22 = document.getElementById("so_22").value * 1;
    var so33 = document.getElementById("so_33").value * 1;
    var sochan = 0;
    var sole = 0;
    var phanloai = "";
    so11 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
    so22 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
    so33 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;

    phanloai = "có " + sochan + " số chẳn và " + sole + " số lẻ";
    document.getElementById("phanloai").innerHTML = phanloai;
}

// BÀI 4
// --------------------------------------------
document.getElementById("btn_pl").onclick = function () {
    var ss1 = document.getElementById("so_111").value * 1;
    var ss2 = document.getElementById("so_222").value * 1;
    var ss3 = document.getElementById("so_333").value * 1;
    var tamgiac = "";
    if ((ss1 + ss2 > ss3) && (ss1 + ss3 > ss2) && (ss3 + ss2 > ss1)) {
        if ((ss1 == ss2) && (ss1 == ss3) && (ss2 == ss3)) {
            tamgiac = "tam giác đều";
        }
        else if (ss1 == ss2 || ss1 == ss3 || ss2 == ss3) {
            tamgiac = "tam giác cân";

        }
        else if ((ss1 * ss1 + ss2 * ss2 == ss3 * ss3) || (ss1 * ss1 + ss3 * ss3 == ss2 * ss2) || (ss2 * ss2 + ss3 * ss3 == ss1 * ss1)) {
            tamgiac = "tam giác vuông";

        }
        else {
            tamgiac = "tam giác thường";
        }
    }
    else {
        tamgiac = "nhập sai"
    }

    document.getElementById("phanloai1").innerHTML = tamgiac;
}