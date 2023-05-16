window.onload =  function(){
   

    let ab = document.getElementById("boutton1")
    let ee = document.getElementById("boutton2")
    let test = document.getElementById("b2")
    let but1 = document.getElementById("b11")
    let but2 = document.getElementById("b22")
    let but3 = document.getElementById("b33")
    let but4 = document.getElementById("b44")
    let but5 = document.getElementById("b55")
    let but6 = document.getElementById("b66")
    console.log(but1)
    console.log(ee)
    let i = 0
    let ii = 0
    let iii=0
    ee.addEventListener("click", () => {
        document.getElementById("#ii").classList.toggle('fade');
        console.log("ok")

        if(i==0){
            if (document.getElementById("#ii").src = "./assets/6.jpg"){
                // document.getElementById("#ii").classList.toggle('fade');
                document.getElementById("#ii").src = "./assets/7.jpg";
                // document.getElementById("#ii").classList.toggle('fade');
                iii=1
            }
            if (document.getElementById("b2").src = "./assets/B3.png"){
                    
                document.getElementById("b2").src = "./assets/B1.png";
                document.getElementById("b1").src = "./assets/B3.png";

            }
        }
            

            if(i==1){

                if (document.getElementById("#ii").src = "./assets/7.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/8.jpg";
                    
                }
                if (document.getElementById("b2").src = "./assets/B1.png"){
                    
                    document.getElementById("b2").src = "./assets/B3.png";
                    document.getElementById("b3").src = "./assets/B1.png";
    
                }

                
            
            }

            if(i==2){
                
                if (document.getElementById("#ii").src = "./assets/8.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/9.jpg";
                   
                }
                if (document.getElementById("b3").src = "./assets/B1.png"){
                    
                    document.getElementById("b3").src = "./assets/B3.png";
                    document.getElementById("b4").src = "./assets/B1.png";
    
                }
            
            }

            if(i==3){

                if (document.getElementById("#ii").src = "./assets/9.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/10.jpg";
                    
                }
                if (document.getElementById("b4").src = "./assets/B1.png"){
                    
                    document.getElementById("b4").src = "./assets/B3.png";
                    document.getElementById("b5").src = "./assets/B1.png";
    
                }
            
            }

            if(i==4){

                if (document.getElementById("#ii").src = "./assets/10.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/11.jpg";
                   
                    
                }
                if (document.getElementById("b5").src = "./assets/B1.png"){
                    
                    document.getElementById("b5").src = "./assets/B3.png";
                    document.getElementById("b6").src = "./assets/B1.png";
    
                }
            
            }
            if(i==5){

                if (document.getElementById("#ii").src = "./assets/11.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/6.jpg";
                    
                    
                }
                if (document.getElementById("b6").src = "./assets/B1.png"){
                    
                    document.getElementById("b6").src = "./assets/B3.png";
                    document.getElementById("b1").src = "./assets/B1.png";
    
                }
            }
            i++
            
            if(i==6){
                i=0
            }
            
    })


    ab.addEventListener("click", () => {
        document.getElementById("#ii").classList.toggle('fade');
        console.log("ok")

        if(ii==0){
            if (document.getElementById("#ii").src = "./assets/6.jpg"){
                
                document.getElementById("#ii").src = "./assets/11.jpg";
            }
            if ((document.getElementById("b6").src = "./assets/B3.png")){
                    
                document.getElementById("b6").src = "./assets/B1.png";
                document.getElementById("b1").src = "./assets/B3.png";

            }
        }
            

            if(ii==1){

                if (document.getElementById("#ii").src = "./assets/11.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/10.jpg";
                }
                if (document.getElementById("b6").src = "./assets/B1.png" ){
                    
                    document.getElementById("b6").src = "./assets/B3.png";
                    document.getElementById("b5").src = "./assets/B1.png";
    
                }

                
            
            }

            if(ii==2){

                if (document.getElementById("#ii").src = "./assets/10.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/9.jpg";
                }
                if (document.getElementById("b5").src = "./assets/B1.png"){
                    
                    document.getElementById("b5").src = "./assets/B3.png";
                    document.getElementById("b4").src = "./assets/B1.png";
    
                }
               
            
            }

            if(ii==3){

                if (document.getElementById("#ii").src = "./assets/9.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/8.jpg";
                }
                if (document.getElementById("b4").src = "./assets/B1.png" ){
                    
                    document.getElementById("b4").src = "./assets/B3.png";
                    document.getElementById("b3").src = "./assets/B1.png";
    
                }
            
            }

            if(ii==4){

                if (document.getElementById("#ii").src = "./assets/8.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/7.jpg";
                    
                }
                if (document.getElementById("b3").src = "./assets/B1.png" ){
                    
                    document.getElementById("b3").src = "./assets/B3.png";
                    document.getElementById("b2").src = "./assets/B1.png";
    
                }
                
            
            }
            if((ii==5)){

                if (document.getElementById("#ii").src = "./assets/7.jpg"){
                    
                    document.getElementById("#ii").src = "./assets/6.jpg";
                    
                }
                if (document.getElementById("b2").src = "./assets/B1.png" ){
                    
                    document.getElementById("b2").src = "./assets/B3.png";
                    document.getElementById("b1").src = "./assets/B1.png";
    
                }
               
            }
            ii++
            if(ii==6){
                ii=0
            }
            
    })

    but1.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/6.jpg"
        document.getElementById("b1").src = "./assets/B1.png";
        i=0
        ii=0
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b3").src = "./assets/B1.png") (document.getElementById("b5").src = "./assets/B1.png") || (document.getElementById("b4").src = "./assets/B1.png")|| (document.getElementById("b6").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b2").src = "./assets/B3.png";
            document.getElementById("b3").src = "./assets/B3.png";
            document.getElementById("b4").src = "./assets/B3.png";
            document.getElementById("b5").src = "./assets/B3.png";
            document.getElementById("b6").src = "./assets/B3.png";

        }
    })

    but2.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/7.jpg"
        document.getElementById("b2").src = "./assets/B1.png";
        i=0
        ii=5
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b3").src = "./assets/B1.png") (document.getElementById("b5").src = "./assets/B1.png") || (document.getElementById("b4").src = "./assets/B1.png")|| (document.getElementById("b6").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b1").src = "./assets/B3.png";
            document.getElementById("b3").src = "./assets/B3.png";
            document.getElementById("b4").src = "./assets/B3.png";
            document.getElementById("b5").src = "./assets/B3.png";
            document.getElementById("b6").src = "./assets/B3.png";

        }
    })

    but3.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/8.jpg"
        document.getElementById("b3").src = "./assets/B1.png";
        i=2
        ii=4
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b2").src = "./assets/B1.png") (document.getElementById("b5").src = "./assets/B1.png") || (document.getElementById("b4").src = "./assets/B1.png")|| (document.getElementById("b6").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b1").src = "./assets/B3.png";
            document.getElementById("b2").src = "./assets/B3.png";
            document.getElementById("b4").src = "./assets/B3.png";
            document.getElementById("b5").src = "./assets/B3.png";
            document.getElementById("b6").src = "./assets/B3.png";

        }
    })

    but4.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/9.jpg"
        document.getElementById("b4").src = "./assets/B1.png";
        i=3
        ii=3
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b2").src = "./assets/B1.png") (document.getElementById("b5").src = "./assets/B1.png") || (document.getElementById("b3").src = "./assets/B1.png")|| (document.getElementById("b6").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b1").src = "./assets/B3.png";
            document.getElementById("b2").src = "./assets/B3.png";
            document.getElementById("b3").src = "./assets/B3.png";
            document.getElementById("b5").src = "./assets/B3.png";
            document.getElementById("b6").src = "./assets/B3.png";

        }
    })

    but5.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/10.jpg"
        document.getElementById("b5").src = "./assets/B1.png";
        i=4
        ii=2
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b2").src = "./assets/B1.png") (document.getElementById("b4").src = "./assets/B1.png") || (document.getElementById("b3").src = "./assets/B1.png")|| (document.getElementById("b6").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b1").src = "./assets/B3.png";
            document.getElementById("b2").src = "./assets/B3.png";
            document.getElementById("b3").src = "./assets/B3.png";
            document.getElementById("b4").src = "./assets/B3.png";
            document.getElementById("b6").src = "./assets/B3.png";

        }
    })

    but6.addEventListener("click", () => {
        // console.log("oui")
        document.getElementById("#ii").classList.toggle('fade');
        document.getElementById("#ii").src = "./assets/11.jpg"
        document.getElementById("b6").src = "./assets/B1.png";
        i=5
        ii=1
        if ((document.getElementById("b1").src = "./assets/B1.png") || (document.getElementById("b2").src = "./assets/B1.png") (document.getElementById("b4").src = "./assets/B1.png") || (document.getElementById("b3").src = "./assets/B1.png")|| (document.getElementById("b5").src = "./assets/B1.png") ){
                    
            
            document.getElementById("b1").src = "./assets/B3.png";
            document.getElementById("b2").src = "./assets/B3.png";
            document.getElementById("b3").src = "./assets/B3.png";
            document.getElementById("b4").src = "./assets/B3.png";
            document.getElementById("b5").src = "./assets/B3.png";

        }
    })



    
}
