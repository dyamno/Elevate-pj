li

gsap.from(".letter", 0.8, {
    y:-20,
    opacity: 0,
    ease: "power3.inOut",
    stagger: 0.1,
})

gsap.to(".top-left, .top-right", 2, {
    top: "0",
    ease: "power3.inOut",
    delay: 2,
})

gsap.to(".bottom-right", 2, {
    bottom: "0",
    ease: "power3.inOut",
    delay: 2,
})

gsap.to(".top-left", 2, {
    left: "0",
    ease: "power3.inOut",
    delay: 4,
})

gsap.to(".top-right", 2, {
    right: "0",
    ease: "power3.inOut",
    delay: 4,
})

gsap.to(".bottom-right", 2, {
    right: "0",
    ease: "power3.inOut",
    delay: 4,
})

gsap.to(".block-right", 2, {
    right: "0",
    ease: "power3.inOut",
    delay: 4,
})

gsap.to(".block-left", 2, {
    left: "-50%",
    ease: "power3.inOut",
    delay: 4,
})

gsap.to(".block-right", 2, {
    right: "-50%",
    ease: "power3.inOut",
    delay: 4,
    onComplete: function() {
    gsap.to(".letter", 0.5, {
        opacity: 0,
        ease: "power3.inOut",
        stagger: 0.1
    });
}
})

gsap.to(".block-right", 2, {
right: "-50%",
ease: "power3.inOut",
delay: 4,
onComplete: function() {
    gsap.to(".nav", 0.5, {
        display: "flex", // Hiển thị thanh nav bằng cách thay đổi thuộc tính display thành "flex"
        ease: "power3.inOut"
    });
}
});

gsap.to(".nav", 1, {
top: 0, // Đặt top thành 0 để thanh nav trồi xuống
ease: "power3.inOut",
delay: 4,
});

gsap.from(".nav-menu li", {
x: -50,
opacity: 0,
duration: 0.5,
ease: "power3.out",
stagger: 0.1,
delay: 7,
});

gsap.from(".nav-logo", {
x: -50,
opacity: 0,
duration: 1,
ease: "power3.out",
stagger: 0.1,
delay: 7,
});