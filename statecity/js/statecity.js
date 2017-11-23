	
function getcity()
{
// 	alert("Hi");
//	 $('#state').on('change',function(){

//       var stateText = $(this).find("option:selected").text();
	   var stateText1= document.getElementById("state").value;
	   //alert (stateText1);
	   //localStorage.setItem("stateid",stateText1);
	//    var stateID = $(this).val();
		//var stateID1= document.getElementById("name").value;
        // alert("Selected Text: " + stateText + " state id " + stateID);
        var statevalue={"value":[{"nm":stateText1}]};
        // alert(JSON.stringify(statevalue));
		//var jsonvalue=JSON.stringify(statevalue);
    //   alert(jsonvalue);
// 		alert(stateID);
		//var stateID = $(this).val();
        //if(stateText1){
        	$("#city").children().remove()
	$('#city').html('<option value="">-----Select City-----</option>');
			
			$.ajax({
                type:'POST',
				dataType:"json",
		contentType: 'application/json',
                url:"../city_json.php",
                data:JSON.stringify(statevalue),
				
                success:function(data)
{
// 		alert("entered");
	JSON.stringify(data)
// 	alert(JSON.stringify(data));
		var m = Object.keys(data.cityInformation).length;
// 		alert("m="+ m);
		var city_id = []; // create array for id here
		$.each(data.cityInformation, function (index, cityInformation) {
        city_id.push(cityInformation.city_id); //push values here
		});
		

// 		alert("city id"+city_id);
		var city_name1 = []; // create array for statename here
		$.each(data.cityInformation, function (index, cityInformation) {
        city_name1.push(cityInformation.city_name); //push values here
		});
// 		alert("city name"+city_name1); 
		for(var i=0;i<m;i++)
	{
//alert("hii milind");
		var cityId = city_id[i];
		var cityname = city_name1[i];
		//alert(cityname);
		//alert(name);
		 $("<option/>").attr("value", cityname)
                .text(cityname)
                .appendTo("#city");	
	``
	}
	
	
}
            }); 
       // }
}


	
function getcity1()
{
// 	alert("Hi");
//	 $('#state').on('change',function(){

//       var stateText = $(this).find("option:selected").text();
	   var stateText1= document.getElementById("state1").value;
	   //alert (stateText1);
	   //localStorage.setItem("stateid",stateText1);
	//    var stateID = $(this).val();
		//var stateID1= document.getElementById("name").value;
        // alert("Selected Text: " + stateText + " state id " + stateID);
        var statevalue={"value":[{"nm":stateText1}]};
        // alert(JSON.stringify(statevalue));
		//var jsonvalue=JSON.stringify(statevalue);
    //   alert(jsonvalue);
// 		alert(stateID);
		//var stateID = $(this).val();
        //if(stateText1){
        	$("#city1").children().remove()
	$('#city1').html('<option value="">-----Select City-----</option>');
			
			$.ajax({
                type:'POST',
				dataType:"json",
		contentType: 'application/json',
                url:"../city_json.php",
                data:JSON.stringify(statevalue),
				
                success:function(data)
{
// 		alert("entered");
	JSON.stringify(data)
// 	alert(JSON.stringify(data));
		var m = Object.keys(data.cityInformation).length;
// 		alert("m="+ m);
		var city_id = []; // create array for id here
		$.each(data.cityInformation, function (index, cityInformation) {
        city_id.push(cityInformation.city_id); //push values here
		});
		

// 		alert("city id"+city_id);
		var city_name1 = []; // create array for statename here
		$.each(data.cityInformation, function (index, cityInformation) {
        city_name1.push(cityInformation.city_name); //push values here
		});
// 		alert("city name"+city_name1); 
		for(var i=0;i<m;i++)
	{
//alert("hii milind");
		var cityId = city_id[i];
		var cityname = city_name1[i];
		//alert(cityname);
		//alert(name);
		 $("<option/>").attr("value", cityname)
                .text(cityname)
                .appendTo("#city1");	
	``
	}
	
	
}
            }); 
       // }
}