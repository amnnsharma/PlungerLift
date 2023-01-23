document.getElementById("calc1").addEventListener("click", () => {
    // console.log("Hey");
    let Dec = document.getElementById("input1").value;
    if (Dec == "") { Dec = 2.375 }
    let Dip = document.getElementById("input2").value;
    if (Dip == "") { Dip = 1.995 }
    let Vslug = document.getElementById("input3").value;
    if (Vslug == "") { Vslug = 1 }
    let Wp = document.getElementById("input4").value;
    if (Wp == "") { Wp = 10 }
    let D = document.getElementById("input5").value;
    if (D == "") { D = 7000 }
    let Pt = document.getElementById("input6").value;
    if (Pt == "") { Pt = 100 }
    let Dic = document.getElementById("input7").value;
    if (Dic == "") { Dic = 4.56 }
    let Vr = document.getElementById("input8").value;
    if (Vr == "") { Vr = 1000 }
    let Vfg = document.getElementById("input9").value;
    if (Vfg == "") { Vfg = 750 }
    let Vfl = document.getElementById("input10").value;
    if (Vfl == "") { Vfl = 150 }
    let Yl = document.getElementById("input11").value;
    if (Yl == "") { Yl = 0.43 }
    let p = document.getElementById("input12").value;
    if (p == "") { p = 62.4 }
    let v = document.getElementById("input13").value;
    if (v == "") { v = 0.000672 }
    let e = document.getElementById("input14").value;
    if (e == "") { e = 0.0006 }

    let Tavg = 140
    let Z = 0.99
    let gc = 32.2

    let At = ((3.142 * (Dip) ** 2) / 4) / 144
    let L = 5.615 / (At)

    let k = 33500

    if (Dip <= 1.995) {
        k = 33500
    }
    else if (Dip <= 2.441) {
        k = 45000
    }
    else if (Dip <= 2.992) {
        k = 57000
    }
    else {
        k = 57000
    }

    let Nr = Dip * Vr * p / (v * 12 * 60)
    let f = 0.0055 * (1 + (20000 * e + 1000000 / Nr) ** (1 / 3))
    let Pp = Wp / (At * 144)
    let Plh = Yl * L
    let Plf = ((12 * f * p * L * (Vr ** 2)) / (3600 * 2 * Dip * gc)) / 144
    let Pmin = (Pp + 14.7 + Pt + (Plh + Plf) * Vslug) * (1 + D / k)
    let Aa = (3.142 / 4) * ((Dic ** 2) - (Dec ** 2)) / 144
    let Pcavg = Pmin * (1 + (At / (2 * Aa)))
    let Fgs = 1 + 0.02 * (D / 1000)
    let Vt = At * (D - Vslug * L)
    let Vg = (37.14 * Fgs * Pcavg * Vt) / (Z * (Tavg + 460))
    let Ncmax = 1440 / ((D / Vr) + ((D - (Vslug * L)) / Vfg) + (Vslug * L) / Vfl)
    let RGLmin = Vg / Vslug
    let QLmax = Ncmax * Vslug

    document.getElementById("output1").innerHTML =
        `
        <div class="container form-control">
        <h3><b><u>RESULTS:</u></b></h3><br>
        <!-- Tubing Inner Cross Sectional Area in ft sq:  <b>${Math.round(At * 1000) / 1000}</b><br>
         Tubing inner capacity in ft/bbl:  <b>${Math.round(L * 1000) / 1000}</b><br> -->
         <div class="container mb-2">Reynolds Number:  <b>${Math.round(Nr)}</b><br>
        </div><div class="container mb-2">K value:  <b>${Math.round(k * 100) / 100}</b><br>
        </div><div class="container mb-2">Darcy-Weisbach friction factor for the liquid slug:  <b>${Math.round(f * 10000) / 10000}</b><br>
        </div><div class="container mb-2">Differential pressure required to lift plunger weight:   <b>${Math.round(Pp)} psi</b><br>
        </div><div class="container mb-2">Differential pressure required to lift liquid:  <b>${Math.round(Plh)} psi/bbl</b><br>
        </div><div class="container mb-2">Differential pressure required to overcome liquid friction:  <b>${Math.round(Plf)} psi/bbl</b><br>
        </div><div class="container mb-2">Casing pressure required to move the plunger and liquid slug:   <b>${Math.round(Pmin)} psi</b><br>
        </div><div class="container mb-2">Average Casing Pressure during operation:  <b>${Math.round(Pcavg)} psi</b><br>
        </div><div class="container mb-2">Slippage factor of gas lost past plunger on rise cycle:  <b>${Math.round(Fgs)}</b><br>
        </div><div class="container mb-2">Volume of required gas per cycle:  <b>${Math.round(Vg)} ft3</b><br>
        </div><div class="container mb-2">Maximum number of cycles per day:  <b>${Math.round(Ncmax * 10) / 10}</b><br>
        </div><div class="container mb-2">Minimum gas required ratio:   <b>${Math.round(RGLmin * 100) / 100}</b><br>
        </div><div class="container mb-2">Maximum liquid production rate:  <b>${Math.round(QLmax * 10) / 10} bbl</b><br>
        </div></div>
        `

});

document.getElementById("Reset").addEventListener("click", ()=>{
    confirm("Are you sure, you want to reset?");
    // console.log("Hi")
    document.getElementById("input1").value=""
    document.getElementById("input2").value=""
    document.getElementById("input3").value=""
    document.getElementById("input4").value=""
    document.getElementById("input5").value=""
    document.getElementById("input6").value=""
    document.getElementById("input7").value=""
    document.getElementById("input8").value=""
    document.getElementById("input9").value=""
    document.getElementById("input10").value=""
    document.getElementById("input11").value=""
    document.getElementById("input12").value=""
    document.getElementById("input13").value=""
    document.getElementById("input14").value=""
    document.getElementById("output1").innerHTML=``
})


