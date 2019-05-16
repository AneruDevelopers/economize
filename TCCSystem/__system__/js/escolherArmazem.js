$(document).ready(function() {
    $('.btn-arm').click(function(e) {
        e.preventDefault();
        Swal.fire({
            title: "Deseja mesmo trocar o armazém?",
            text: "Caso tenha adicionado produtos ao carrinho, será perdido permanentemente!",
            type: "warning",
            showCancelButton: true,
            cancelButtonColor: "#494949",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#A94442",
            confirmButtonText: "Sim, trocar"
        }).then((result) => {
            if(result.value) {
                var dado = 'arm_id=' + $(this).attr('id-armazem');
                $.ajax({
                    type: 'post',
                    data: dado,
                    url: BASE_URL + 'functions/escolherArmazem',
                    success: function() {
                        window.location.href = BASE_URL;
                    }
                });
            }
        });
    });
});