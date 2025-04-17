<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Management</title>
    <link rel="stylesheet"href="admin.css">
    <style>
        
a{
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff4d4d;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
   

}
body {
    margin: 0;
    font-family : "Segeo UI",Tahoma, Gevena , Verdana,  Tahoma, sans-serif;
    background: linear-gradient(to right,#3a6186 , #89253e);
    min-height: 100vh;
    color: #fff;
}
table{
    width : 100%;
    border-radius: 8px;
    overflow : hidden;
    background-color: rgb(153, 11, 200);
}
th{
    border:1px solid #070707;
    padding: 12px;
    background-color: #000000c7;
    color: rgb(245, 245, 245);
}
td{
    border: 0.5px solid #111111;
}
h2 {
    font-size: 28px;
    color: #333;
    text-align: center;
}
    </style>

</head>
<body>
    <h2>Payments</h2>
    <table>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Card Number</th>
            <th>Expiry Month</th>
            <th>Expiry Year</th>
            <th>CVV</th>
        </tr>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "sneakerstore";

        $conn = new mysqli($servername,$username,$password,$dbname);

        if ($conn -> connect_error){
            die("Connection failed : ".$conn -> correct_error );
         }

        $sql = "SELECT name , phone , address , card_number , expiry_month , expiry_year , cvv FROM payments";
        $result = $conn -> query($sql);

        if(!$result){
            die("Query failed : ".$conn -> error);
        }

        $serialNumber = 1;

        if($result->num_rows>0){
            while($row = $result -> fetch_assoc()){
                echo "<tr>";
                echo "<td>".$serialNumber."</td>";
                echo "<td>".$row["name"]."</td>";
                echo "<td>".$row["phone"]."</td>";
                echo "<td>".$row["address"]."</td>";
                echo "<td>".$row["card_number"]."</td>";
                echo "<td>".$row["expiry_month"]."</td>";
                echo "<td>".$row["expiry_year"]."</td>";
                echo "<td>".$row["cvv"]."</td>";
                echo "</tr>";
                $serialNumber++;
            }
        } else {
            echo"<tr><td coldspan = '8'>    no payments found</td></tr>";
        }
        $conn-> close();
    ?>
    </table>

</body>
</html>