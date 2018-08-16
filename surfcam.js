
function initPlayers(){
    var player1 = new MediaElementPlayer('player1', { 
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player2 = new MediaElementPlayer('player2', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });
 
    var player3 = new MediaElementPlayer('player3', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player4 = new MediaElementPlayer('player4', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player5 = new MediaElementPlayer('player5', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player6 = new MediaElementPlayer('player6', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player7 = new MediaElementPlayer('player7', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player8 = new MediaElementPlayer('player8', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player9 = new MediaElementPlayer('player9', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player10 = new MediaElementPlayer('player10', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });

    var player11 = new MediaElementPlayer('player11', {
        pauseOtherPlayers: false,
        features: ['fullscreen'],
    });
}


function loadSwellnetReport(swellnetURL){
	var jsonpText = "";
	jsonpText = $.getJSON(
		'http://www.whateverorigin.org/get?url=' + encodeURIComponent(swellnetURL) + '&callback=?', 
		function(data){
		    var str = null;
		    str = data.contents.split('Surf:');
		    if ((str.length) > 1) {

		        str = str[1].split('</span>');
		        str = str[1].split('>');
		        var surf =  str[1];
		        //alert(surf);

		        var str = null;
		        str = data.contents.split('Winds:');
		        str = str[1].split('</span>');
		        str = str[1].split('>');
		        var winds = str[1];
		        //alert(winds);
		        
		        var str = null;
		        str = data.contents.split('Weather:');
		        str = str[1].split('</span>');
		        str = str[1].split('>');
		        var weather = str[1];
		        //alert(weather);

		        var str = null;
		        str = data.contents.split('Rating:');
		        str = str[1].split('</span>');
		        str = str[1].split('>');
		        var rating = str[1];
		        //alert(rating);

		        var str = null;
		        str = data.contents.split('views-field views-field-body');
		        str = str[1].split('<p>');
		        str = str[1].split('</p>');
		        var report = str[0];
		        //alert(report);

		        var fullReport = 
		            "Surf: " + surf + "<br>" +
		            "Winds: " + winds + "<br>" +
		            "Weather: " + weather + "<br>" +
		            "Rating: " + rating + "<br>" +
		            report;
		        //alert(fullReport);
		        $("#report-swellnet" ).html(fullReport);

		    } else {
		        $("#report-swellnet" ).html("Too early! Nothing to report yet.");
		    }

		}
	)
}

function loadCoastalwatchReport(coastalwatchURL){
	var jsonpText = "";
	jsonpText = $.getJSON(
		'http://www.whateverorigin.org/get?url=' + encodeURIComponent(coastalwatchURL) + '&callback=?', 
		function(data){
		    var str = null;
		    str = data.contents.split('s rating - <strong> ');
		    if ((str.length) > 1) {

		        str = str[1].split(' </');
		        var rating = str[0];
		        //alert('Rating: ' + rating);

		        str = str[1].split('Bottom">');
		        var report = str[1].split('<')[0].trim();
		        //alert('Report: ' + report);

		        var fullReport = 
		            "Rating: " + rating + "<br>" +
		            report;		        

		        $("#report-coastalwatch" ).html(fullReport);

		    } else {

		        $("#report-coastalwatch" ).html("Too early! Nothing to report yet.");

		    }

		}
	)
}