var nombre= prompt ("ingrese su nombre completo");
var textonota1HTML= prompt ("ingrese nota 1 del ramo HTML");
var textonota2HTML= prompt ("ingrese nota 2 del ramo HTML");
var textonota3html= prompt ("ingrese nota 3 del ramo HTML");
var textonota1CSS= prompt ("ingrese nota 1 del ramo CSS");
var textonota2CSS=prompt ("ingrese nota 2 del ramo CSS");
var textonota3CSS= prompt ("ingrese nota 3 del ramo CSS");
var textonota1JS= prompt("ingrese nota 1 del ramo JS");
var textonota2JS= prompt ("ingrese nota 2 del ramp JS");
var textonota3JS= prompt ("ingrese nota 3 del ramo JS");

var nota1html= parseInt(textonota1HTML);
var nota2html= parseInt(textonota2HTML);
var nota3html= parseInt(textonota3html);
var nota1CSS= parseInt(textonota1CSS);
var nota2CSS= parseInt(textonota2CSS);
var nota3CSS= parseInt(textonota3CSS);
var nota1JS= parseInt(textonota1JS);
var nota2JS= parseInt(textonota2JS);
var nota3JS= parseInt(textonota3JS);


var sumahtml= nota1html + nota2html + nota3html;
var promediohtml= sumahtml / 3;

var sumacss= nota1CSS + nota2CSS + nota3CSS;
var promediocss= sumacss / 3;

var sumajs= nota1JS + nota2JS + nota3JS;
var promediojs= sumajs / 3;


document.write(
    `
<h1> Notas Finales </h1>
<ol>
    <li> Nombre: ${nombre}</li>
    <li> Carrera: Diseño UX/UI </li>
</ol>
<table class="table table-striped">
<thead>
 <tr>
   <th>RAMO</th>
   <th> Nota 1</th>
   <th> Nota 2</th>
   <th> Nota 3</th>
   <th> Promedio</th>
 </tr>
</thead>


<body>
 <td> HTML </td>
   <td> ${nota1html}</td>
   <td> ${nota2html}</td>
   <td> ${nota3html}</td>
   <td> ${promediohtml} </td>

<tr>
   <td> CSS </td>
   <td> ${nota1CSS}</td>
   <td> ${nota2CSS}</td>
   <td> ${nota3CSS}</td>
   <td> ${promediocss} </td>
</tr>

<tr>
<td> JS </td>
   <td> ${nota1JS}</td>
   <td> ${nota2JS}</td>
   <td> ${nota3JS}</td>
   <td> ${promediojs} </td>
</tr>
</body>
</table>
`
)
