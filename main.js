window.addEventListener("load", (event) => {
    //zakat
    if(document.querySelector('.form-horizontal')){
        var harga_emas = (document.querySelector("input[name=harga_emas]").value).replace(/\./g , "");
        var nishab_zakat_maal = parseInt(harga_emas)*85;
        document.querySelector("input[name=nishab_zakat_maal]").value = nishab_zakat_maal.toLocaleString("it-IT")
        
        var harga_beras = (document.querySelector("input[name=harga_beras]").value).replace(/\./g , "");
        var nishab = parseInt(harga_beras)*520;
        document.querySelector("input[name=nishab_zakat]").value = nishab.toLocaleString("it-IT")
        
        document.querySelector(".btn-ulang-simpanan").addEventListener('click', function() {
            // $(".btn-ulang-simpanan").click(function() {
            document.querySelector("input[name=harta_tabungan]").value = "";
            document.querySelector("input[name=harta_logam]").value = "";
            document.querySelector("input[name=harta_lain]").value = "";
            document.querySelector("input[name=hutang_jatuh_tempo]").value = "";
            this.closest('.form').parentNode.querySelector(".form-final").classList.add('hidden')
            this.closest('.form').parentNode.querySelector(".form-hitung").classList.remove('hidden')
        });
        
        document.querySelector(".btn-ulang-penghasilan").addEventListener('click', function() {
            document.querySelector("input[name=pendapatan]").value = '';
            document.querySelector("input[name=pendapatan_lain]").value = '';
            document.querySelector("input[name=hutang]").value = '';
            document.querySelector("input[name=jumlah_pendapatan]").value = '';
            this.closest('.form').parentNode.querySelector(".form-final").classList.add('hidden')
            this.closest('.form').parentNode.querySelector(".form-hitung").classList.remove('hidden')
        });
        
        document.querySelector('.form-nishab').addEventListener('input', function(){
            var harga_beras = document.querySelector("input[name=harga_beras]").value;
            if(harga_beras == ""){
                harga_beras = 0;
            }
            else{
                harga_beras = harga_beras.replace(/\./g , "");
            }
            
            document.querySelector("input[name=nishab_zakat]").value = (harga_beras*520).toLocaleString("it-IT");
        })
        
        document.querySelector('.form-nishabmaal').addEventListener('input', function(){
            var harga_emas = document.querySelector("input[name=harga_emas]").value;
            if(harga_emas == ""){
                harga_emas = 0;
            }
            else{
                harga_emas = harga_emas.replace(/\./g , "");
            }
            
            document.querySelector("input[name=nishab_zakat_maal]").value = (harga_emas*85).toLocaleString("it-IT");
        })
        
        
        document.querySelector('#hitungZakatSimpanan').addEventListener('click', function() {
            var tabungan = document.querySelector("input[name=harta_tabungan]").value;
            var logam = document.querySelector("input[name=harta_logam]").value;
            var lain = document.querySelector("input[name=harta_lain]").value;
            var hutang = document.querySelector("input[name=hutang_jatuh_tempo]").value;
            if(tabungan == ""){
                tabungan = 0;
            }
            else{
                tabungan = tabungan.replace(/\./g , "");
            }
            if(logam == ""){
                logam = 0;
            }
            else{
                logam = logam.replace(/\./g , "");
            }
            if(lain == ""){
                lain = 0;
            }
            else{
                lain = lain.replace(/\./g , "");
            }
            if(hutang == ""){
                hutang = 0;
            }
            else{
                hutang = hutang.replace(/\./g , "");
            }
            var harta = parseInt(tabungan)+parseInt(logam)+parseInt(lain)-parseInt(hutang);
            var harga_emas = (document.querySelector("input[name=harga_emas]").value).replace(/\./g , "");
            var nisab = (document.querySelector("input[name=nishab_zakat_maal]").value).replace(/\./g , "");
            var bayar = 0;
            if(harta < nisab){
                //   document.querySelector("#status").empty();
                //   document.querySelector("#bayar_zakat").empty();
                document.querySelector("#status").textContent = "TIDAK";
                document.querySelector("#bayar_zakat").textContent = "Rp. " +bayar;
            }
            else{
                var bayar = Math.floor(0.025*parseInt(harta));
                //   document.querySelector("#status").empty();
                //   document.querySelector("#bayar_zakat").empty();
                document.querySelector("#status").textContent = "YA";
                document.querySelector("#bayar_zakat").textContent = "Rp. " +bayar.toLocaleString("it-IT");
            }
            this.closest('.form').parentNode.querySelector(".form-hitung").classList.add('hidden')
            this.closest('.form').parentNode.querySelector(".form-final").classList.remove('hidden')
        });
        
        document.querySelector('#hitungZakatPenghasilan').addEventListener('click', function() {
            console.log(this);
            
            /*var pendapatan = $("input[name=pendapatan]").val();
            var pendapatan_lain = $("input[name=pendapatan_lain]").val();
            var hutang = $("input[name=hutang]").val();*/
            var pendapatan_all = document.querySelector("input[name=jumlah_pendapatan]").value;
            /*if(pendapatan == ""){
            pendapatan = 0;
            }
            if(pendapatan_lain == ""){
            pendapatan_lain = 0;
            }
            if(hutang == ""){
            hutang = 0;
            }*/
            if(pendapatan_all == ""){
                pendapatan_all = 0;
            }
            else{
                pendapatan_all = pendapatan_all.replace(/\./g , "");
            }
            
            var harga_beras = (document.querySelector("input[name=harga_beras]").value).replace(/\./g , "");
            var nishab = (document.querySelector("input[name=nishab_zakat]").value).replace(/\./g , "");
            var bayar = 0;
            if(parseInt(pendapatan_all) < parseInt(nishab)){
                // $("#status_zakat_penghasilan").empty();
                // $("#bayar_zakat_penghasilan").empty();
                document.querySelector("#status_zakat_penghasilan").textContent = "TIDAK";
                document.querySelector("#bayar_zakat_penghasilan").textContent = "Rp. " +bayar;
            }
            else{
                var bayar = Math.floor(0.025*parseInt(pendapatan_all));
                // $("#status_zakat_penghasilan").empty();
                // $("#bayar_zakat_penghasilan").empty();
                document.querySelector("#status_zakat_penghasilan").textContent = "YA";
                document.querySelector("#bayar_zakat_penghasilan").textContent = "Rp. " +bayar.toLocaleString("it-IT");
            }
            this.closest('.form').parentNode.querySelector(".form-hitung").classList.add('hidden')
            this.closest('.form').parentNode.querySelector(".form-final").classList.remove('hidden')
        });
        
        document.querySelectorAll('.form-pendapatan').forEach(function(item) {
            item.addEventListener('input', function(){
                var pendapatan = document.querySelector("input[name=pendapatan]").value;
                var pendapatan_lain = document.querySelector("input[name=pendapatan_lain]").value;
                
                if(pendapatan_lain == ""){
                    pendapatan_lain = 0;
                }
                else{
                    pendapatan_lain = pendapatan_lain.replace(/\./g , "");
                }
                var hutang = document.querySelector("input[name=hutang]").value;
                if(hutang == ""){
                    hutang = 0;
                }
                else{
                    hutang = hutang.replace(/\./g , "")
                }
                var pendapatan_all = parseInt(pendapatan.replace(/\./g , ""))+parseInt(pendapatan_lain)-parseInt(hutang);
                document.querySelector("input[name=jumlah_pendapatan]").value = pendapatan_all.toLocaleString( "it-IT" );
            })
        })
        
        var myInput = document.querySelectorAll(".form-hitung input[type=text]");
        
        function keyAllowed(key, length) {
            var keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 91, 92, 93
            ];
            if(length == 0){
                var keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 49, 50,
                    51, 52, 53, 54, 55, 56, 57, 91, 92, 93
                ];
            }
            if (key && keys.indexOf(key) === -1)
                return false;
            else
                return true;
        }
        
        myInput.forEach(function(element) {
            element.addEventListener('keypress', function(e) {
                
                var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
                var length = this.value.length;
                //console.log(key);
                if (!keyAllowed(key, length))
                    e.preventDefault();
            }, false);
            
            // Disable pasting of non-numbers
            element.addEventListener('paste', function(e) {
                var pasteData = e.clipboardData.getData('text/plain');
                if (pasteData.match(/[^0-9]/))
                    e.preventDefault();
            }, false);
        });
        
        var $forms = document.querySelectorAll( ".form-hitung" );
        $forms.forEach($form => {
            var $inputs = $form.querySelectorAll( "input" );
            $inputs.forEach($input => {
                $input.addEventListener( "keyup", function( event ) {
                    // When user select text in the document, also abort.
                    var selection = window.getSelection().toString();
                    if ( selection !== '' ) {
                        return;
                    }                   
                    // Get the value.
                    var input = this.value;
                    var input = input.replace(/[\D\s\._\-]+/g, "");
                    input = input ? parseInt( input, 10 ) : 0;
                    console.log(input.toLocaleString( "it-IT" ));
                    this.value = input.toLocaleString( "it-IT" )
                })
            });
        });
    }
    
    // tabs
    var tabsNavs = document.querySelectorAll(".tabs-nav-item");
    if(tabsNavs){
        tabsNavs.forEach(tabsNav => {
            tabsNav.addEventListener('click', () => {
                tabsNav.closest('.tabs').querySelector(' .tabs-nav-item.--active').classList.remove('--active')
                tabsNav.classList.add("--active");
                tabsNav.closest('.tabs').querySelector(':scope > .tabs-content > .tabs-content-item.--active').classList.remove('--active')
                tabsNav.closest('.tabs').querySelector('#'+ tabsNav.dataset.tab).classList.add("--active");
            })
        });
    }
    
    window.addEventListener('modalActive', function(e) {
        document.querySelector('[data-fadeindiv-open="template-result"]')?.classList.remove('open');
    });
    
})