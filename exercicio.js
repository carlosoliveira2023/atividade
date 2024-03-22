var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.mostrarNomeEIdade = function () {
        return this.nome + "-" + this.idade;
    };
    return Pessoa;
}());
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(nome, idade, salario) {
        var _this = _super.call(this, nome, idade) || this;
        _this.salario = salario;
        return _this;
    }
    Empregado.prototype.mostrarSalario = function () {
        return this.salario;
    };
    return Empregado;
}(Pessoa));
var pessoa = new Pessoa("Carlos", 22);
console.log(pessoa.mostrarNomeEIdade());
var empregado = new Empregado("Carlos", 22, 1412);
console.log(empregado.mostrarNomeAndIdade());
console.log(empregado.mostrarSalario());
