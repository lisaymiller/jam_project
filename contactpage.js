$("#submit").on('click',function(){
	var error;
	var inputValue=$(".form-control").val();
	if(inputValue ==""){
	error=alert('Please, Fill out all forms');
}else {
	error=alert('Your information has been submitted.');
	}	
})
