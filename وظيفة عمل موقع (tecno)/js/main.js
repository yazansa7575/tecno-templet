$('document').ready(function () {
    /* setInterval(sliderr,1300); */

    $('.social').click(function () {
        $(".social-3").animate({
            "height": "toggle",
            "opacity":"toggle",
                

        })
    }
    )

    $(".sliddow").click(function()
    {
        $(".slidDown").slideToggle(700);
    })

    //menu//
    $(".menushow").click(function(){
      
      
        $(".bar-left").slideToggle(1000)
        
    })
   
    
    //anim slide//
    setInterval(function(){

        $(".slider-main-0").animate({
            left:'35%',
            top: '45px',
            zIndex: '12', 
            opacity:"0.5"
    
        },3000)
        
        $(".slider-main-0").animate({
            left:'20%',
            top: '90px',
            zIndex: '11', 
            opacity:"0.5"
    
    
        },3000)
        $(".slider-2").animate({
            left:'35%',
            top: '-286px',
            zIndex: '12', 
            opacity:"1"
    
    
        },3000)
        $(".slider-1").animate({
            left:'50%',
            top: '-165px',
            zIndex: '13', 
            opacity:"1"
    
    
        },3000)
        $(".slider-1").animate({
            left:'35%',
            top: '-120px',
            zIndex: '10', 
            opacity:"1"
    
    
        },3000)
        $(".slider-2").animate({
            left:'50%',
            top: '-340px',
            zIndex: '13', 
            opacity:"1"
    
    
        },3000)
        $(".slider-main-0").animate({
            left:'50%',
            top: '0',
            zIndex: '13', 
            opacity:"1"
    
    
        },2000)
     
    },3000)
        
        
    






















})

//zeha ll menushow//
let clickmenu = false;
function zeha()
{
    if(clickmenu==false){
        let menushow =document.getElementById("menushow");
        let menushowi =document.getElementById("menushowi");
        menushowi.style.color="white";
        menushow.style.position="fixed"
        menushow.style.left="33%"
        clickmenu = true;
    }
    else{
        let menushow =document.getElementById("menushow");
        let menushowi =document.getElementById("menushowi");

        menushow.style.position="fixed"
        menushow.style.left="2%"
        clickmenu =false;
        menushowi.style.color="#137ce5";

    }
    
    

}
/* function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function sliderr()
{
    let arr =["images/main/1-slid.png","images/main/2-slid.png","images/main/3-slid.png"];
    $(".slider-main-0").attr("src",arr[getRandomInt(3)])
        
} */
