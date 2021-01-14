
$(document).ready(function(){
	$('#ok').click(function(){
		var nama =$('#nama').val();  
		
		if(nama.length >= 3){
			$('#isi').val('Aku Punya Anjing Namanya '+nama+' !');
		}
	});
})
