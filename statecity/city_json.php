<?php
   //Access Control Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
//Include Files
include 'jsonFormat.php';
include 'jsonDeliver.php';
include("dbconnect.php");
//include 'config.php';
//select city details
// $conn = mysql_connect('localhost','root','');
//$connect = mysql_select_db('neongaming'); 


$json = file_get_contents("php://input");
$statevalue = json_decode($json, true);
$jsonresponse = array();
// echo $id="2_ANDAMAN AND NICOBAR ISLANDS";
$id=$statevalue['value'][0]['nm'];
 $state=explode('_',$id);
$state_id=$state[0];

//$phn=$data['sign'][0]['phoneno'];
// print("SELECT city_id,city_name FROM city where state_id='$id'");
$cityquery="SELECT city_id,city_name FROM city where state_id='$state_id'";
$selectcity=mysqli_query($con,$cityquery);
$cityRows=mysqli_num_rows($selectcity);
   
for ($count1 = 0; $count1 < $cityRows; $count1++) 
	{
  $data[] = mysqli_fetch_assoc($selectcity);
	 }
// 	echo $data; 
 $json= json_encode($data,JSON_NUMERIC_CHECK);     

deliver_response(200,"news","cityInformation",$data);

   
  
   
?>
