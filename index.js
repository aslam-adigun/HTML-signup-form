$('.regform').validate({
    rules: {
        firstname: {
            required: true
        },
        lastname: {
            required: true
        },

        // Add more fields here


    },


    highlight: function(element) {
        $(element).closest('.regform').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.regform').removeClass('has-error');
    },
    errorElement: 'form',
    errorClass: 'help-inline',
    errorPlacement: function(error, element) {

            error.insertAfter(element);


    },

    submitHandler : function(form) {
      form.submit();
     }

});