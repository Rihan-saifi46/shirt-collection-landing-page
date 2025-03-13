Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".imgs>img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
let tl = gsap.timeline();
tl.from(".nav-logo",{
    y:100,scale:0
})
tl.from(".nav-list>span",{
    y:50,scale:0,stagger:.3
})
tl.from(".nav-icons>i",{
    x:50,scale:0,stagger:.3
})
tl.from(".txt2",{
    duration:2.5,
    ease: "bounce.out",
    y: -500,opacity:0
})
tl.from(".one",{
    x:500,opacity:0,duration:.5,y:200
})
tl.from(".two",{
    x:600,opacity:0,duration:.5,y:200
})
tl.from(".th",{
    x:500,opacity:0,duration:.5,y:200
})
tl.from(".fo",{
    x:300,opacity:0,duration:.5,y:200
})
tl.from(".fi",{
    x:400,opacity:0,duration:.5,y:200
})
tl.from(".six",{
    x:300,opacity:0,duration:.5,y:200
})
tl.from(".footer>p",{
    opacity:0,y:50
})
tl.from("button",{
    height:0,y:150,duration:1
})