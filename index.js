ToDo = (function(){

  //propiedades
  //variables
  let inputValueTarea, listaTareas = [], i = 0;
  
  //metodos
  //funciones
  let agregarTarea =  function agregarTarea() {
    
    inputValueTarea = $('.tarea').val();
    
    i++;
    // add data
    listaTareas.push([i, inputValueTarea]);
    // add html
    $('.listarTareas').append("<div id='tarea'>" + inputValueTarea + '<button id='+(i-1)+' type="button" id="xTarea" class="xTarea btn btn-danger">x</button></div>');
  }

  let eliminarTarea = function eliminarTarea() {
    i = $(this).attr('id');
    let lista = [].concat(listaTareas.slice(0, i), listaTareas.slice(i + 1) );

    listaTareas = lista;
    //oculta en la vista
    $(this).parent().hide();
    console.log(listaTareas)
  }
  //eventos

  $('.agregarTarea').on('click', agregarTarea);

  $("body").on('click', '.xTarea', eliminarTarea);



})();



