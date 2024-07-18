let tl = gsap.timeline()
let time = gsap.timeline()


var menu = document.querySelector(".menu__icon"); // Use . for class name
var menubox = document.querySelector(".menubox"); // Use . for class name
var a = document.querySelector("#icon")
var b =document.querySelector("#colnev")
var h = document.querySelector("#ek") 
var h1 = document.querySelector("#do") 
var h2 = document.querySelector("#tin") 
var h3 = document.querySelector("#hr4") 
var o = document.querySelector("#hide")
var o1 =document.querySelector("#hide2")
var o2 =document.querySelector("#hide3")
var o3 =document.querySelector("#aboufooter")
var ig2 = document.querySelectorAll(".igg2")
var rt = document.querySelector(".rrt")

var flag = 0;

var typed = document.querySelector(".typing")
const
  cursorOuter = document.querySelector(".cursor--large"),
  cursorInner = document.querySelector(".cursor--small")

  function updateCursor(e) {
	gsap.set([cursorInner, cursorOuter], {
		x: e.clientX,
		y: e.clientY,
	})
}

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none"; // Hide loader when page is fully loaded
});

window.addEventListener("mousemove", e => updateCursor(e))




menu.addEventListener("click", function() {
    this.classList.toggle("clicked");
    if (flag == 0) {
        console.log("done");
        flag = 1;
        menubox.style.opacity = "1";
        // Add transitions if necessary
        menubox.style.transition = "opacity 0.8s ease";
    } else {
        flag = 0;
        menubox.style.opacity = "0";
        // Add transitions if necessary
        menubox.style.transition = "opacity 0.8s ease";
    }
});



// tl.from("#page1 .welcome .wl .h1", {
//     y:-100,
//     delay:1,
//     opacity:0,
//     duration:1,
//     stagger:0.2
// })

time.from(".h1,.circle-img,.text-wrapper h2", {
    x:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.3
})


time.from("#crd", {
    x:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.1
})
gsap.from("crd", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:".aboufooter"
})

    







h.addEventListener("mouseenter", function() {
    console.log("done");
    
    // Apply transition effect to the left property over 3 seconds
    o.style.transition = "left 3s"; 
    o.style.left = "0";

    // Apply transition effect to the margin-top property over 3 seconds
    o3.style.transition = "margin-top 3s";
    o3.style.marginTop = "-14vh";
    // o.style.marginTop ="-5vh";
});

o.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o.style.left = "0";
    o3.style.transition = "margin-top 3s"; // Apply transition effect to the margin-top property over 3 seconds
    o3.style.marginTop = "-1vh";

    // o.style.opacity = "1"
});

o.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    
    // Apply transition effect to the left property over 3 seconds
    o3.style.transition = "margin-top 3s"; // Apply transition effect to the margin-top property over 3 seconds
    o3.style.marginTop = "-60vh";

    
    setTimeout(function() {
        o.style.transition = "left 3s"; // Apply transition effect to the left property over 3 seconds
        o.style.left = "-100%";
    }, 500); 
});


h.addEventListener("mouseleave", function() {
    o.style.left ="-100%";
    o3.style.marginTop = "-60vh"; 
    console.log("great");
});

// snd
h1.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    // o1.style.left ="0";
    o3.style.marginTop = "-14vh";
    o1.style.marginTop = "-60vh";

    o1.style.transition = "left 3s"; 
    o1.style.left = "0";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o1.style.left ="0";
    o3.style.marginTop = "-1vh";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    o1.style.left ="-100%";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});
o2.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    o2.style.left ="-100%";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});

h1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "0";
    // o.style.opacity = "0"
    o1.style.left ="-100%";
    o3.style.marginTop = "-60vh";


});

h2.addEventListener("mouseenter", function() {
    // console.log("done");
    o3.style.marginTop = "-14vh";
    o2.style.marginTop = "-60vh";

    o2.style.transition = "left 3s"; 
    o2.style.left = "0";


    // o.style.opacity = "1"
});
o2.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o2.style.left ="0";
    o3.style.marginTop = "-1vh";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    // o.style.left ="0";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});
h2.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "0";
    // o.style.opacity = "0"
    o2.style.left ="-100%";
    o3.style.marginTop = "-60vh";


});










// function updateCursor(e) {
// 	gsap.set([cursorInner, cursorOuter], {
// 		x: e.clientX,
// 		y: e.clientY,
// 	})
// }

// window.addEventListener("mousemove", e => updateCursor(e))


// tl.from("#nav h1, #nav ul li,#nav h2 ", {
//     y:-100,
//     delay:1,
//     opacity:0,
//     duration:1,
//     stagger:0.2
// })

// time.from("#left h1", {
//     x:-100,
//     delay:1,
//     opacity:0,
//     duration:1,
//     stagger:0.3
// })
// time.from("#right img", {
//     scale:0,
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })
// time.from("#right #blure", {
//     scale:0,
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })

// gsap.from(".page2 .box", {
//     y:-100,
//     opacity:0,
//     duration:3,
//     stagger:0.4,
//     scrollTrigger:".page2 .box"

// })
// gsap.from(".page2 .bdr", {
//     y:-100,
//     opacity:0,
//     duration:2,
//     stagger:0.4,
//     scrollTrigger:".page2 .bdr"

// })

// //    a.addEventListener("mouseup",function(){
// //     if(flag==0){
// //         console.log("done")
// //         flag=1
// //         b.style.left="0"
// //         // b.style.transi
// //     }
// //     else{
// //         flag=0
// //         b.style.left="-100%"
// //     }
// //    })

// h.addEventListener("mouseenter", function() {
//     console.log("done");
    
//     // Apply transition effect to the left property over 3 seconds
//     o.style.transition = "left 3s"; 
//     o.style.left = "0";

//     // Apply transition effect to the margin-top property over 3 seconds
//     o3.style.transition = "margin-top 3s";
//     o3.style.marginTop = "0";
//     // o.style.marginTop ="-5vh";
// });

// o.addEventListener("mouseenter", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     o.style.left = "0";
//     o3.style.transition = "margin-top 3s"; // Apply transition effect to the margin-top property over 3 seconds
//     o3.style.marginTop = "0";

//     // o.style.opacity = "1"
// });

// o.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "100%";
    
//     // Apply transition effect to the left property over 3 seconds
//     o3.style.transition = "margin-top 3s"; // Apply transition effect to the margin-top property over 3 seconds
//     o3.style.marginTop = "-60vh";

    
//     setTimeout(function() {
//         o.style.transition = "left 3s"; // Apply transition effect to the left property over 3 seconds
//         o.style.left = "-100%";
//     }, 500); 
// });


// h.addEventListener("mouseleave", function() {
//     o.style.left ="-100%";
//     o3.style.marginTop = "-60vh"; 
//     console.log("great");
// });

// // snd
// h1.addEventListener("mouseenter", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     // o1.style.left ="0";
//     o3.style.marginTop = "0";
//     o1.style.marginTop = "-60vh";

//     o1.style.transition = "left 3s"; 
//     o1.style.left = "0";

//     // o.style.opacity = "1"
// });
// o1.addEventListener("mouseenter", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     o1.style.left ="0";
//     o3.style.marginTop = "0";

//     // o.style.opacity = "1"
// });
// o1.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     o1.style.left ="-100%";
//     o3.style.marginTop = "-55vh";


//     // o.style.opacity = "1"
// });
// o2.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     o2.style.left ="-100%";
//     o3.style.marginTop = "-55vh";


//     // o.style.opacity = "1"
// });

// h1.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "0";
//     // o.style.opacity = "0"
//     o1.style.left ="-100%";
//     o3.style.marginTop = "-60vh";


// });

// h2.addEventListener("mouseenter", function() {
//     // console.log("done");
//     o3.style.marginTop = "0";
//     o2.style.marginTop = "-60vh";

//     o2.style.transition = "left 3s"; 
//     o2.style.left = "0";


//     // o.style.opacity = "1"
// });
// o2.addEventListener("mouseenter", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     o2.style.left ="0";
//     o3.style.marginTop = "0";

//     // o.style.opacity = "1"
// });
// o1.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     // o.style.left ="0";
//     o3.style.marginTop = "-55vh";


//     // o.style.opacity = "1"
// });
// h2.addEventListener("mouseleave", function() {
//     console.log("done");
//     // o.style.height = "0";
//     // o.style.opacity = "0"
//     o2.style.left ="-100%";
//     o3.style.marginTop = "-60vh";


// });
   
   


// // h1.addEventListener("mouseenter", function() {
// //     console.log("done");
// //     o1.style.height = "30vh";
// // });

// // h1.addEventListener("mouseleave", function() {
// //     console.log("done");
// //     o1.style.height = "0";
// // });


// // h2.addEventListener("mouseenter", function() {
// //     console.log("done");
// //     o2.style.height = "30vh";
// // });

// // h2.addEventListener("mouseleave", function() {
// //     console.log("done");
// //     o2.style.height = "0";
// // });


// // h3.addEventListener("mouseenter", function() {
// //     console.log("done");
// //     o3.style.height = "30vh";
// // });

// // h3.addEventListener("mouseleave", function() {
// //     console.log("done");
// //     o3.style.height = "0";
// // });

// cont.addEventListener("click", function() {
//     console.log("done");
//     // o.style.height = "100%";
//     cont.style.height ="30vh";
    

//     // o.style.opacity =
//      "1"
// });
// ig2.forEach(function(ig2){
//     bx.addEventListener("click", function() {
//         console.log("done");
//         // o.style.height = "100%";
//         opp.style.height ="35vh";
//         fx.style.transition = "right 0.7s ease-in-out"; // Add transition for smooth movement
//         fx.style.right = "0"; // Move the element to the right edge      
//         fx.style.borderRadius = "25px 0px 0px 25px";
//         hdd.style.borderRadius = "0px 25px 25px 0px";
//         ig2.style.height = "100%";
//         fx.style.border = "1px black solid"; // Set the border style
//         setTimeout(function() {
//             rt.style.transform = "rotate(180deg)";
//         }, 500);    
        
    
//         // o.style.opacity = "1"
//     });

// });
