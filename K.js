//Madalyn
$(document).ready(function(){
  var hitBtn = $('button.damage'),
      reset = $('button.reset'),
      hBar = $('.health-bar'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');
  
  hitBtn.on("click", function(){
    var total = hBar.data('total'),
        value = hBar.data('value');
    
    if (value < 0) {
			log("you dead, reset");
      return;
    }
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    // damage = 100;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    // show hit bar and set the width
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    
    setTimeout(function(){
      hit.css({'width': '0'});
      bar.css('width', barWidth + "%");
    }, 500);
    //bar.css('width', total - value);
    
    log(value, damage, hitWidth);
    
    if( value < 0){
      log("DEAD");
    }
  });
  
  reset.on('click', function(e){
    hBar.data('value', hBar.data('total'));
    
    hit.css({'width': '0'});
    
		bar.css('width', '100%');
		log("resetting health to 1000");
  });
});



function log(_total, _damage, _hitWidth){
  var log = $('.log');
  
  if(_damage !== undefined && _hitWidth !== undefined) {
	  log.append("<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
  } else {
    log.append("<div>"+_total+"</div>");
  }
};


$(document).ready(function(){
	var useBtn = $('button.use'),
         reset =  $ ('button.reset'), 
         mBar = $ ('.mana-bar'), 
         bar = mBar.find('.bar'), 
         use = mBar.find('.use'); 

    useBtn.on("click", function() {
      var total = mBar.data('total')
          value = mBar.data('value');
		  
	  if (value < 0) { 
	       log("out of mana, reset"); 
		   return; 
	  }
	  
	  var use = Math.floor(Math.random()*total); 
	  var newValue = value - damage; 
	  var barWidth = (newValue / total) * 50; 
	  var useWidth = (damage / value) * 50 + "%"; 
	  
	  use.css('width', useWidth); 
	  mBar.data('value', newValue); 
	  
	  setTimeout(function() {
		  use.css({'width': '0'}); 
		  bar2.css('width', barWidth + "%"); 
	  }, 200); 
	  
	  log(value, damamge, useWidth); 
	  
	  if( value < 0){
		  log("OUT OF MAGIC. RESET"); 
	  }
	}); 
	
	reset.on('click', function(e) {
		mBar.data('value', mBar.data('total')); 
		
		use.css({'width', '100%'); 
		log("resetting mana to 500"); 
		}); 
	}); 
	
	function log(_total, _damage, _useWidth) {
		var log = $('.log'); 
		
		if(_damage !== undefined && _useWidth !== undefined) {
			log.append("<div>M:"+_total+" D:"+_damage+" W:"+_useWidth+" + (_total - _damage) + "</div>"); 
		} else {
			log.append("<div>"+_total+"</div>"); 
		}
	}; 
	  
		  