function createFigures(fig) {
    let count = document.getElementById('count').value
    let canvas = document.getElementById("canvas");
    let kvad = canvas.getContext('2d');
    let tre = canvas.getContext('2d');
    let krug = canvas.getContext('2d');
    for (let i=0; i<count; i++) {
        let storona = Math.floor(Math.random() * 100);
        let pointx = Math.floor(Math.random() * 500);
        let pointy = Math.floor(Math.random() * 500);

        canvas.addEventListener('mousemove', function(event) {
          
          if (fig === kv) {
              kvad.fillStyle = "red";
              kvad.beginPath();
              kvad.moveTo(pointx, pointy);
              kvad.lineTo(pointx+storona, pointy);
              kvad.lineTo(pointx+storona, pointy+storona);
              kvad.lineTo(pointx, pointy+storona);
              kvad.fill();
              kvad.closePath();
              kvad.stroke();
              if (kvad.isPointInPath(event.offsetX, event.offsetY))
                kvad.fillStyle = 'yellow';
                kvad.fill();
          }
          if (fig === tr) { 
              tre.fillStyle = "blue";
              tre.beginPath();
              tre.moveTo(storona, storona+(storona*0.5));
              tre.lineTo(storona*2, storona*0.5);
              tre.lineTo(storona*3, storona+(storona*0.5));
              tre.fill();
              tre.closePath()
              tre.stroke();
              if (tre.isPointInPath(event.offsetX, event.offsetY))
                tre.fillStyle = 'yellow';
                tre.fill();
          }
          if (fig === kr) {
              krug.fillStyle = "green";
              krug.beginPath();
              krug.arc(pointx, pointy, storona, 0, Math.PI*2, true); 
              krug.fill();
              krug.closePath() 
              krug.stroke();
              if (krug.isPointInPath(event.offsetX, event.offsetY))
                krug.fillStyle = 'yellow';
                krug.fill();
          }
          });
          canvas.addEventListener('dblclick', function(){ 
            kvad.clearRect(0, 0, canvas.width, canvas.height);
         });
        }
    }


