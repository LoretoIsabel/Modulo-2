$.validator.setDefaults( {
    submitHandler: function () {
       alert( "¡Formulario enviado con éxito!" );
    }
 });
 
 
 $(document).ready(function(){
    $('#signupForm').validate({
       rules: {
          fullname: {
             required: true,
             minlength: 3
          },
            papellido: {
             required: true,
             minlength: 3
          },
          medicamentos: {
             required: true,
              minlength: 5
          },
          edad: {
             required: true,
             minlength: 2
          },
          direccion: {
             required: false,
             minlength: 6,
          },
          sapellido: {
              required: false,
              minlength: 3
          },
             alergias: {
             required: true,
          },
          agree: "required"
       },
       messages: {           
          fullname: {
             required: "Por favor ingresa tu nombre completo",
             minlength: "Tus nombres deben ser de al menos 3 caracteres"
          },
          medicamentos: {
              required:"Por favor ingresa los medicamentos contraindicados o la palabra NINGUNO."
          },
          papellido: {
             required: "Por favor ingresa tu primer apellido",
             minlength: "Tu apellido debe tener al menos 3 caracteres"
          },
          sapellido: {
             minlength: "Tu apellido debe tener al menos 3 caracteres"
          },
          edad: {
           required: "Por favor ingrese su edad",
            minlength: "Su edad debe estar entre 10 y 99 años"
              },
             direccion: {
             minlength: "Su direccion debe tener al menos 6 caracteres"
                },
          agree: "Por favor acepta nuestra política",
          alergias: {
             required: "Por favor elija una opción"
          }
       },
       errorElement: "em",
       errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
 
         
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });


 
 