$(document).ready(function () {
    let primeraLista = $('.Lista1 input');
    const generadorId = generador1 => `${generador1}-${Date.now()}-${Math.ceil(Math.random()*100)}`
    const crearLista = titulo1 =>
        `
        <div class="list" id="${generadorId('list')}">
            <div class="contenedor1" id="contenedor"><h4>${titulo1}<button class="destruir">X</button></h4>
        
                <ul class="nuevaLista">

                </ul>
                <div class="anadir">
                <ul class="nuevaLista2">
                    <li>
                    <input type="text" class="subTarea"></input>
                    <button id="mas"><img src="css/images/mas.png">
                    <script>
        
                    $('#mas').on('click', function(){
                        let texto2 = $('.subTarea').val ();
                        $('.nuevaLista').append('<li class="list2" id="${generadorId('list2')}">' + '<span class="titulo">' + texto2 + '</span>' + 
                        '<button class="eli"><img src="css/images/menos.png">' + '</button>' +
                        '<button class="editar"><img src="css/images/editar.png">' + '</button>' +            
                        
                        '</li>');
                        $('.subTarea').val("");
            
                    });



                    
                    </script>


                    </button>
                    
                    <script>
                    $('.subTarea').keypress(function(introo) {
                        if(introo.which == 13) {
                            let texto2 = $('.subTarea').val ();
                            $('.nuevaLista').append('<li class="list2" id="${generadorId('list2')}">' + '<span class="titulo">' + texto2 + '</span>' + 
                            '<button class="eli"><img src="css/images/menos.png">' + '</button>' +
                            '<button class="editar"><img src="css/images/editar.png">' + '</button>' +            
                            
                            '</li>');
                            $('.subTarea').val("");                       
                            }
                    });
                    </script>

        

                </ul>
            </div>
        </div>
        
`
    const appendNewList = () => {
        let textoInput = primeraLista.val();
        let list = $(crearLista(textoInput));
        $('.lists').append(list)
        primeraLista.val('');
    }


    // Listeners
    primeraLista.on('keyup', function (event) {
        if (event.keyCode === 13) {
            appendNewList();
        }
    })



    $('.lists').on('click', '.destruir', function (event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach();
    })

    /*$('.eliminar').on('click', function () {
        alert('hola');

    }) */
    $( ".eli" ).click(function() {
        alert( "probando" );
      });
})






/*
document.getElementById('agregarLista').addEventListener('click', function (){
    var value = document.getElementById('Lista').value;
    if (value) addItemLista(value)

});

function addItemLista(nombre){
    var value = document.getElementById('Lista').value;
    document.getElementById('primero').innerHTML="hola ${value} adios <b> adios </b>adsfadfa fadsf ";
console.log(nombre);
}

document.getElementById('Lista').addEventListener('keyup', function (){
    var value = document.getElementById('Lista').value;
    if (event.keyCode===13) console.log(value)
});
*/