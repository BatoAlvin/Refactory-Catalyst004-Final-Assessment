//Using ajax to make a delete.
$(document).ready(function(){
    $('.delete-patient').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type:'DELETE',
            url:'/patients/'+id,
            success: (response) => {
                alert('Deleting patient');
                window.location.href='/';
            },
            error: (err) => {
                console.log(err)
            }
        }); 
    });
});

   
