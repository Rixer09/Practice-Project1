
/*_-----------------------------------------------------------made my self-----------------------------------------------------------_*/


let crsr=document.querySelector("#cursor")
let crsrBlur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrBlur.style.left=dets.x -150 +"px"
    crsrBlur.style.top=dets.y -150 +"px"
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = "3"
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = "1"
        crsr.style.border =  "#95C11E"
        crsr.style.backgroundColor =  " #95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        scrub: 1.5,
        end: "top -12%",
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -50%",
        scrub: 2,
    }
})

 gsap.from("#about-us",{
    y:70,
    opacity:0,
    duration:1,
    // stagger: 2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start:"top 70%",
        end:"top 65%",
        scrub: 2,
    }
 })

//  gsap.from(".card",{
//     scale:0.8,
//     opacity:0.5,
//     duration:0.5,
//     // stagger: 0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller: "body",
//         //  markers: true,
//         start:"top 80%",
//         end:"top 95%",
//         scrub: 2,
//    }
//  })

 gsap.from(".colon1",{
        x: -70,
        y: -30,
        duration: 0.5,
        scrollTrigger:{
            trigger:".colon1",
            scroller: "body",
            // markers: true,
            start:"top 75%",
            end:"top 70%",
            scrub: 2,
        }
    })

     gsap.from(".colon2",{
        x: 70,
        y: 30,
        duration: 0.5,
        scrollTrigger:{
            trigger:".colon2",
            scroller: "body",
            // markers: true,
            start:"top 75%",
            end:"top 70%",
            scrub: 2,
        }
    })

    gsap.from("#page4 h1",{
        y:50,
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller: "body",
            // markers: true,
            start:"top 75%",
            end:"top 70%",
            scrub: 2,
        }
    })
   