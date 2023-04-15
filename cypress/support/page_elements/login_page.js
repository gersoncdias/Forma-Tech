class loginPage {
    constructor() {

        this.campo_login = '#loginusername'
        this.campo_senha = '#loginpassword'
        this.btn_login = '#login2'
        this.btn_fazer_login = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.txt_titulo = '#nava'
        this.txt_logado = "#nameofuser"
        this.btn_phone = '#itemc'
        this.btn_next = '#next2'
        this.btn_cart = '#cartur'
        this.input_nome = '#name'
        this.input_pais = '#country'
        this.input_cidade = '#city'
        this.input_catao = '#card'
        this.input_mes = '#month'
        this.input_ano = '#year'
        this.alert_fim = '.sweet-alert'
        this.confirm = 'button.confirm.btn.btn-lg.btn-primary[tabindex="1"][style="display: inline-block;"]'
        this.enviar_ordem = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.btn_place = '.col-lg-1 > .btn'
        this.btn_add_card = '.col-sm-12 > .btn'
        this.seleciona_item_asus = ':nth-child(5) > .card > .card-block > .card-title > .hrefch'
        this.seleciona_item_iphone = ':nth-child(5) > .card > .card-block > .card-title > .hrefch'
        this.seleciona_item_sony_vaio = ':nth-child(8) > .card > .card-block > .card-title > .hrefch'
    }
}

module.exports = loginPage