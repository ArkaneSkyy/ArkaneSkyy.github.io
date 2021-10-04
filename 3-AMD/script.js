function radio() {
    let amd1 = document.getElementById("r3");
    let amd2 = document.getElementById("r5");
    let amd3 = document.getElementById("r7");
    let int1 = document.getElementById("i3");
    let int2 = document.getElementById("i5");
    let int3 = document.getElementById("i7");
    let img = document.getElementById("amdcod");
    let img2 = document.getElementById("intcod");

    if (amd1.checked == true || amd2.checked == true || amd3.checked == true) {
        if (img2.classList.contains("checked")) { img2.classList.remove("checked"); }
        img.classList.add("checked");
    }

    if (int1.checked == true || int2.checked == true || int3.checked == true) {
        if (img.classList.contains("checked")) { img.classList.remove("checked"); }
        img2.classList.add('checked');
    }
}

function nvidia() {
    let sel1 = document.getElementById("gpu1");
    let sel2 = document.getElementById("gpu2");
    let sel3 = document.getElementById("gpu3");
    let gpui = document.getElementById("box1");
    let gpui2 = document.getElementById("box2");
    let gpui3 = document.getElementById("box3");

    if (sel1.checked == true) {
        if (gpui2.classList.contains('gpucheck') || gpui3.classList.contains('gpucheck')) { gpui2.classList.remove('gpucheck') || gpui3.classList.remove('gpucheck') }
        gpui.classList.add('gpucheck');
    }

    if (sel2.checked == true) {
        if (gpui.classList.contains('gpucheck') || gpui3.classList.contains('gpucheck')) { gpui.classList.remove('gpucheck') || gpui3.classList.remove('gpucheck') }
        gpui2.classList.add('gpucheck');
    }

    if (sel3.checked == true) {
        if (gpui.classList.contains('gpucheck') || gpui2.classList.contains('gpucheck')) { gpui.classList.remove('gpucheck') || gpui2.classList.remove('gpucheck') }
        gpui3.classList.add('gpucheck');
    }
}

function ram() {
    let ram1 = document.getElementById("ram1");
    let ram2 = document.getElementById("ram2");
    let ram3 = document.getElementById("ram3");
    let ram4 = document.getElementById("ram4");
    let ram5 = document.getElementById("ram5");
    let ram6 = document.getElementById("ram6");
    let ramtxt = document.getElementById("ramcod");

    if (ram1.checked == true || ram2.checked == true || ram3.checked == true) {
        if (ramtxt.classList.contains('ramcolor1')) { ramtxt.classList.remove('ramcolor1'); }
        ramtxt.classList.add('ramcolor2');
    }

    if (ram4.checked == true || ram5.checked == true || ram6.checked == true) {
        if (ramtxt.classList.contains('ramcolor2')) { ramtxt.classList.remove('ramcolor2'); }
        ramtxt.classList.add('ramcolor1');
    }
}