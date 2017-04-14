//Mike
var questsHidden = false;
function hideQuests()
{
	

}

//ammo
var ammo;
ammo = 10;
document.getElementById("ammo").innerHTML = "Ammo: " + ammo;

function setammo(ammoset)
{
	if (ammoset > 0)
	{
	ammo = ammoset
	document.getElementById("ammo").innerHTML = "Ammo: " + ammo;
	}
	else
		console.log("Invalid Input");
}
function useammo()
{
	if (ammo > 0)
	{
	ammo--
	document.getElementById("ammo").innerHTML = "Ammo: " + ammo;
	}
	else
		console.log("Out of Ammo");
}
setammo(4);
var x = 0; //initlal text box count
$(document).ready(function() {
    var max_fields      = 5; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
	var remove_button   = $(".remove_field_button"); //Remove button ID
	var hide_button     = $(".hide_field_button");
    
    
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            //$(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
			$(wrapper).append(addquests()); //add input box
        }
    });
    
	$(hide_button).click(function(e){ //on add input button click
        e.preventDefault();
	if (questsHidden == false)
	{
		document.getElementById("Quests").removeAttribute("hidden");
		questsHidden = true;
	}
	else if (questsHidden == true)
	{
		document.getElementById("Quests").setAttribute("hidden", "true");
		questsHidden = false;
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

var img,w,h,mu=true,map,MAP='world-physical-map.jpg';
function pos(e){
 var x=e.pageX-img.offsetLeft,y=e.pageY-img.offsetTop,
 left=((w/img.width*x)-(map.offsetWidth/2))*-1,
 top=((h/img.height*y)-(map.offsetHeight/2))*-1;
 map.style['background-position']=left+'px '+top+'px';
}
window.onload=function(){
 img=document.createElement('img');
 img.onload=function(){
  w=this.width;h=this.height;
  img.style.width='200px';
 }
 img.src=MAP;

 map=document.createElement('div');
 map.style.background='#000 url('+MAP+') no-repeat 0 0';
 map.style.width='150px';
 map.style.height='150px';

document.body.appendChild(img);
document.getElementById("minimap").appendChild(map);
 //$(wrapper).append(addquests()); //add input box

 img.addEventListener('mousedown',function(e){
  mu=false;pos(e);e.preventDefault()
 },false);
 img.addEventListener('mousemove',function(e){
  mu||pos(e)
 },false);
 img.addEventListener('mouseup',function(e){
  mu=true
 },false);
}
window.addEventListener("keydown", onKeyDown);
function onKeyDown(event)
{
    switch(event.keyCode)
    {
        case 27: // tab key
			window.location.href = "GameState 07 - Game Options.html"
				break;
        case 9: // a
           window.location.href = "GameState 02 - Game Menu.html"
            	break;
    }
}
//Mike End