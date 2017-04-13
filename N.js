//Mike
var x = 0; //initlal text box count
$(document).ready(function() {
    var max_fields      = 5; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
	var remove_button   = $(".remove_field_button"); //Remove button ID
    
    
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            //$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
			$(wrapper).append(addquests()); //add input box
        }
    });
    
	$(remove_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x == 1){ //max input box allowed
			{
				$('#quest1').remove();
				x--; //text box deincrement
            }
        }
		if(x == 2){ //max input box allowed
			{
				$('#quest2').remove();
				x--; //text box deincrement
            }
        }
		if(x == 3){ //max input box allowed
			{
				$('#quest3').remove();
				x--; //text box deincrement
            }
        }
		if(x == 4){ //max input box allowed
			{
				$('#quest4').remove();
				x--; //text box deincrement
            }
        }
		if(x == 5){ //max input box allowed
			{
				$('#quest5').remove();
				x--; //text box deincrement
            }
        }
    });
	
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        //e.preventDefault(); $(this).parent('div').remove(); x--;
		e.preventDefault(); $('test').remove(); x--;
    })
});
function addquests()
{
	var addquests;
	if (x  < 6)
	{
	if (x == 1)
	addquests = '<div id="quest1">Quest 1</div>';
	if (x == 2)
	addquests = '<div id="quest2">Quest 2</div>';
	if (x == 3)
	addquests = '<div id="quest3">Quest 3</div>';
	if (x == 4)
	addquests = '<div id="quest4">Quest 4</div>';
	if (x == 5)
	addquests = '<div id="quest5">Quest 5</div>';
	
	return addquests;
	}
}
//Mike End