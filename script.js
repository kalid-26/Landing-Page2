function sectionOne(){

    var timeLine = gsap.timeline()

    timeLine.from("nav h1, .nav-links ul li", {
        y: -20,
        duration: 0.5,
        opacity: 0,
        stagger: 0.3
    });
    timeLine.from(".hero_left h1", {
        x: -600,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });
    timeLine.from(".hero_left p", {
        y: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });

    timeLine.from(".hero_right img", {
        x: 600,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    });
    timeLine.from(".section1bottom img", {
        transform: "translate(-100%)",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
    });
  
}; 
sectionOne()

function sectionTwo(){
    var timeline2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroll: "body",
            start: "top 50%",
            end: "top -10%",
            scrub: 2
        }
    });

    timeline2.from(".text-container", {
        x: -300,
        duration: 1,
        delay:0.5,
        opacity: 0,
        stagger: 0.3
    });

    timeline2.from(".section2 .card-container .card1, .section2 .card-container .card3", {
        x: -300,
        duration: 2,
        delay: 1,
        opacity: 0,
        stagger: 0.5
    });

    timeline2.from(".section2 .card-container .card2, .section2 .card-container .card4", {
        x: 300,
        duration: 2,
        delay: 1,
        opacity: 0,
        stagger: 0.5
    });
}
sectionTwo()