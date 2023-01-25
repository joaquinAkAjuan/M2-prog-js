class App
{
    runApplication()
    {
        let canvas = document.getElementById ("canvasId");
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        let date = new Date();
       
        // //background
        g.beginPath();
        g.fillStyle = "#ebebeb";
        g.moveTo(0,0);
        g.lineTo(15000,0);
        g.lineTo(0,1000000);
        g.closePath();
        g.stroke();
        g.fill();      
// -------------------------------------------------------------------------------------------
        // g.beginPath();
        // g.fillStyle = "black";
        // g.moveTo();
        // g.closePath();
        // g.stroke();
        // g.fill();   

            // < >,^         

         //boom naas huisboven
        g.beginPath();
        g.fillStyle = "#996600";
        g.moveTo(50,500);
        g.lineTo(90,500);
        g.lineTo(90,300);
        g.lineTo(50,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.arc(68,300,70,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();  

        //sneeuw boom boven
        g.beginPath();
        g.fillStyle = "white";
        g.arc(68,300,70,0,Math.PI, true);
        g.closePath();
        g.stroke();
        g.fill();

        //tree naas huis boven2
        g.beginPath();
        g.fillStyle = "#996600";
        g.rect(1250,150,50,200);
        g.closePath();
        g.stroke();
        g.fill();

        //boom bladboven2
        g.beginPath();
        g.fillStyle = "green";
        g.arc(1275,150,70,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();  

        //sneeuw boom boven2
        g.beginPath();
        g.fillStyle = "white";
        g.arc(1275,150,70,0,3.5,5);
        g.closePath();
        g.stroke();
        g.fill();

        //tree naas huis boven3
        g.beginPath();
        g.fillStyle = "#996600";
        g.rect(1050,500,50,200);
        g.closePath();
        g.stroke();
        g.fill();

        //boom bladboven3
        g.beginPath();
        g.fillStyle = "green";
        g.arc(1075,500,70,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill(); 

        //sneeuw boom boven3
        g.beginPath();
        g.fillStyle = "white";
        g.arc(1075,500,70,3,6);
        g.closePath();
        g.stroke();
        g.fill();


        
        //dak
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        //grote muur
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill();
        //voorkant stukje dak
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        //rechter muur
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();

        //window
        if(date.getSeconds() % 2 == 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.moveTo(325,500);
        g.lineTo(325,350);
        g.lineTo(450,380);
        g.lineTo(450,530);
        g.closePath();
        g.stroke();
        g.fill();

        //deur
        g.beginPath();
        g.fillStyle = "#996600";
        g.moveTo(499,575);
        g.lineTo(499,415);
        g.lineTo(570,425);
        g.lineTo(570,593);
        g.closePath();
        g.stroke();
        g.fill();

       //deurknop
        g.beginPath();
        g.fillStyle = "black";
        g.arc(513,509,8,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //autobody
        g.beginPath();
        g.fillStyle = "red";
        g.rect(50,900,500,70)
        g.moveTo(250,900);
        g.lineTo(100,900);
        g.lineTo(200,850);
        g.lineTo(400,850);
        g.lineTo(500,900);
        g.closePath();
        g.stroke();
        g.fill(); 

        //autowindow
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(400,900);
        g.lineTo(400,850);
        g.lineTo(500,900);
        g.closePath();
        g.stroke();
        g.fill();
    
        
        //autowiel
        g.beginPath();
        g.fillStyle = "black";
        g.arc(130,970,40,0,2*Math.PI);
        g.arc(470,970,40,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //velg
        g.beginPath();
        g.fillStyle = "grey";
        g.arc(130,970,24,0,2*Math.PI);
        g.arc(470,970,24,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //auto licht
        if(date.getSeconds() % 3 <= 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.arc(555,920,17,1.9,4.4);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop bovenboll
        g.beginPath();
        g.fillStyle = "white";
        g.arc(900,850,43,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop middenbol
        g.beginPath();
        g.fillStyle = "white";
        g.arc(900,910,52,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop onderbol
        g.beginPath();
        g.fillStyle = "white";
        g.arc(900,990,60,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop neus
        g.beginPath();
        g.fillStyle = "orange";
        g.moveTo(890,845);
        g.lineTo(900,855);
        g.lineTo(940,840);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop button onder
        g.beginPath();
        g.fillStyle = "black";
        g.arc(900,970,10,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop button boven
        g.beginPath();
        g.fillStyle = "black";
        g.arc(900,933,10,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop button boven
        g.beginPath();
        g.fillStyle = "black";
        g.arc(900,897,10,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //sneeuwpop oog l
        g.beginPath();
        g.fillStyle = "black";
        g.arc(913,830,6,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();


        //sneeuwpop oog r
        g.beginPath();
        g.fillStyle = "black";
        g.arc(890,830,6,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();
        

        //lantaarn
        g.beginPath();
        g.fillStyle = "grey";
        g.rect(100,690,10,200);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarnlicht
        if(date.getSeconds() % 2 <= 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.arc(105,700,17,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarn cap
        g.beginPath();
        g.fillStyle = "grey";
        g.arc(105,700,17,0,Math.PI,true);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarn2
        g.beginPath();
        g.fillStyle = "grey";
        g.rect(760,710,10,200);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarnlicht2
        if(date.getSeconds() % 2 <= 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.arc(765,710,17,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarn cap2
        g.beginPath();
        g.fillStyle = "grey";
        g.arc(765,710,17,0,Math.PI,true);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarn3
        g.beginPath();
        g.fillStyle = "grey";
        g.rect(1300,710,10,200);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarnlicht3
        if(date.getSeconds() % 2 <= 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.arc(1305,710,17,0,2*Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        //lantaarn cap2
        g.beginPath();
        g.fillStyle = "grey";
        g.arc(1305,710,17,0,Math.PI,true);
        g.closePath();
        g.stroke();
        g.fill();

        //huis2 grote muur
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(1350,1200);
        g.lineTo(900,1290);
        g.lineTo(920,1500);
        g.lineTo(1355,1410);
        g.closePath();
        g.stroke();
        g.fill();

        //huis2 driehoek muur
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(900,1290);
        g.lineTo(720,1190);
        g.lineTo(850,1100);
        g.closePath();
        g.stroke();
        g.fill();

        //huis2 klein muur
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(920,1500);
        g.lineTo(715,1405);
        g.lineTo(720,1190);
        g.lineTo(900,1290);
        g.closePath();
        g.stroke();
        g.fill();

        //huis2 dak
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(1350,1200);
        g.lineTo(900,1292);
        g.lineTo(850,1100);
        g.lineTo(1300,1000);
        g.closePath();
        g.stroke();
        g.fill();

        //huis2 deur
        g.beginPath();
        g.fillStyle = "#996600";
        g.moveTo(1100,1320);
        g.lineTo(1009,1340);
        g.lineTo(1025,1478);
        g.lineTo(1110,1460);
        g.closePath();
        g.stroke();
        g.fill();

        //huis deurknop
        g.beginPath();
        g.fillStyle = "black";
        g.arc(1090,1400,7,0,2*Math.PI,);
        g.closePath();
        g.stroke();
        g.fill();

        //huis raam
        if(date.getSeconds() % 2 == 0)
        {
            g.fillStyle = "yellow";
        }
        else
        {
            g.fillStyle = "black";
        }
        g.beginPath();
        g.moveTo(1300,1280);
        g.lineTo(1150,1310);
        g.lineTo(1160,1410);
        g.lineTo(1300,1385);
        g.closePath();
        g.stroke();
        g.fill();

        //boom naas huis beneden
        g.beginPath();
        g.fillStyle = "#996600";
        g.rect(600,1300,50,200);
        g.closePath();
        g.stroke();
        g.fill();

        //boom blad
        g.beginPath();
        g.fillStyle = "green";
        g.arc(625,1300,70,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();  

        //sneeuw boom beneden
        g.beginPath();
        g.fillStyle = "white";
        g.arc(625,1300,70,0,Math.PI, true);
        g.closePath();
        g.stroke();
        g.fill();

        //boom naas huis beneden2
        g.beginPath();
        g.fillStyle = "#996600";
        g.rect(120,1200,50,200);
        g.closePath();
        g.stroke();
        g.fill();

        //boom blad2
        g.beginPath();
        g.fillStyle = "green";
        g.arc(145,1200,70,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill(); 
        
        //sneeuw boom beneden2
        g.beginPath();
        g.fillStyle = "white";
        g.arc(145,1200,70,3,7);
        g.closePath();
        g.stroke();
        g.fill();




        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
