$(document).ready(function() {
    $(".categ").change(function() {
        // if ($(this).prop("checked") == true) { ### Comentado por conta da incompatibilidade nos Mobiles
            var href = removeAcento($(this).val());
            var local = location;
            local = local + "";

            if(local.indexOf('#') != -1) {
                var local = local.substring(0, (local.length - 1));
            }

            window.location = local + '/' + href;
        // } ### Comentado por conta da incompatibilidade nos Mobiles
    });

    // $(".categ").trigger("change"); ### Comentado por conta da incompatibilidade nos Mobiles

    $('.produto_tamanho').change(function(e) {
        e.preventDefault();
        var dado = "produto_tamanho=" + $(this).val();
        var url = BASE_URL + 'functions/filtroTamanho';
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dado,
            url: url,
            beforeSend: function() {
                $('.divShowProdFilter').html(loadingRes(" Carregando..."));
            },
            success: function(json) {
                if(json['empty']) {
                    $('.divShowProdFilter').html("<h3>Não houve resposta</h3>");
                } else {
                    var produtos = [];
                    for(var i = 0; json['produtos'].length > i; i++) {
                        if(json['produtos'][i].produto_desconto_porcent) {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <p class="divProdPromo">-` + json['produtos'][i].produto_desconto_porcent + `%</p>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'><span class="divProdPrice1">R$` + json['produtos'][i].produto_preco + `</span> R$` + json['produtos'][i].produto_desconto + `</p>
                                </div>
                            `;
                        } else {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'>R$ ` + json['produtos'][i].produto_preco + `</p>
                                </div>
                            `;
                        }
                    }
                    $('.divShowProdFilter').html("");
                    for(var i = 0; produtos.length > i; i++) {
                        $('.divShowProdFilter').append(produtos[i]);
                    }
                    btnFavorito();
                }
            }
        });
    });

    $('.prod_marca').change(function(e) {
        e.preventDefault();
        var dado = "produto_marca=" + $(this).val();
        var url = BASE_URL + 'functions/filtroMarca';
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dado,
            url: url,
            success: function(json) {
                if(json['empty']) {
                    $('.divShowProdFilter').html("<h3>Não houve resposta</h3>");
                } else {
                    var produtos = [];
                    for(var i = 0; json['produtos'].length > i; i++) {
                        if(json['produtos'][i].produto_desconto_porcent) {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <p class="divProdPromo">-` + json['produtos'][i].produto_desconto_porcent + `%</p>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'><span class="divProdPrice1">R$` + json['produtos'][i].produto_preco + `</span> R$` + json['produtos'][i].produto_desconto + `</p>
                                </div>
                            `;
                        } else {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'>R$ ` + json['produtos'][i].produto_preco + `</p>
                                </div>
                            `;
                        }
                    }
                    $('.divShowProdFilter').html("");
                    for(var i = 0; produtos.length > i; i++) {
                        $('.divShowProdFilter').append(produtos[i]);
                    }
                    btnFavorito();
                }
            }
        });
    });

    $('.prod_preco').change(function(e) {
        e.preventDefault();
        var dado = "produto_preco=" + $(this).val();
        var url = BASE_URL + 'functions/filtroPreco';
        $.ajax({
            type: 'post',
            dataType: 'json',
            data: dado,
            url: url,
            success: function(json) {
                if(json['empty']) {
                    $('.divShowProdFilter').html("<h3>Não houve resposta</h3>");
                } else {
                    var produtos = [];
                    for(var i = 0; json['produtos'].length > i; i++) {
                        if(json['produtos'][i].produto_desconto_porcent) {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <p class="divProdPromo">-` + json['produtos'][i].produto_desconto_porcent + `%</p>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'><span class="divProdPrice1">R$` + json['produtos'][i].produto_preco + `</span> R$` + json['produtos'][i].produto_desconto + `</p>
                                </div>
                            `;
                        } else {
                            produtos[i] = `
                                <div class="prod">
                                    <div class='btnFavoriteFilter btnFavorito` + json['produtos'][i].produto_id + `'>
                                        
                                    </div>
                                    <img src='` + BASE_URL2 + `admin_area/imagens_produtos/` + json['produtos'][i].produto_img + `'/>
                                    <div class='divisorFilter'></div>
                                    <h5 class='titleProdFilter'>` + json['produtos'][i].produto_nome + ` - `  + json['produtos'][i].produto_tamanho + `</h5>
                                    <p class='priceProdFilter'>R$ ` + json['produtos'][i].produto_preco + `</p>
                                </div>
                            `;
                        }
                    }
                    $('.divShowProdFilter').html("");
                    for(var i = 0; produtos.length > i; i++) {
                        $('.divShowProdFilter').append(produtos[i]);
                    }
                    btnFavorito();
                }
            }
        });
    });
});