function regExpValidacion(campo) {
    let valor = campo.value;
    let id = campo.id;
    let expr;
    switch (id) {
        case "txtName":
            expr = "^[A-Za-z\\sá-úà-ùä-ü]{4,50}$";
            break;
        case "txtEmail":
            expr = "^[\\w\\-\\.]{3,}@([\\w\\-\\.]{2,})\\.[\\w\\-]{2,4}$";
            break;
        case "txtPhone":
            expr = "^(\\+\\d{2,3}|00\\d{2})?[6-9]\\d{8}$";
            break;
    }

    return new RegExp(expr).test(valor);
}