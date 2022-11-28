class App
{
        runApplication()
        {
            console.log("hello world!");

            let canvas = document.getElementById("canvasId");
            
            let g = canvas.getContext("2d");
            document.getElementById("canvasId");
            




            g.beginPath(20, 20);
            g.moveTo(300, 300);
            g.lineTo(x,y)
            g.closePath();
            g.stroke();
            console.log(canvas);
            console.log(g);

        }
}
let app = new App();
app.runApplication();