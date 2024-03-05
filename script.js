//offer
var offer = document.querySelector(".offer")
var close1 = document.getElementById("close")

close1.addEventListener("click",function(){
    offer.classList.add("close")
})


//sidenav
var navbaricon = document.querySelector(".navbar__icon")
var sidenavclose =document.getElementById("sidenav-close")
var change=document.querySelector(".sidenavbar")

navbaricon.addEventListener("click",function(){
    change.style.left = "0%" ;
})

sidenavclose.addEventListener("click",function(){
    change.style.left = "-50%" ;
})

//slidernav


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",function(){

    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
}
)

sliderleftbutton.addEventListener("click",function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
 
}
)

var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")> 0)
        {
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})