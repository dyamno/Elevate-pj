
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
    onComplete: function() {
gsap.to(".top-left", 2, {
    left: "auto",
    bottom: "0",
    ease: "power3.inOut"
});
}
})

gsap.to(".top-right", 2, {
    right: "0",
    ease: "power3.inOut",
    delay: 4,
    onComplete: function() {
gsap.to(".top-right", 2, {
    top: "auto",
    bottom: "0",
    ease: "power3.inOut"
});
}
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
    gsap.to(".mini-text", {
        display: "flex",
duration: 1,
ease: "power3.inOut",
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

mainAnimation = () => {
    var timeline = gsap.timeline();

    timeline.from(".letter", 0.8, {
        y: -20,
        opacity: 0,
        ease: "power3.inOut",
        stagger: 0.1,
    });

    timeline.to(".top-left, .top-right", 2, {
        top: "0",
        ease: "power3.inOut",
        delay: 2,
    });

    timeline.to(".bottom-right", 2, {
        bottom: "0",
        ease: "power3.inOut",
        delay: 2,
    });

    timeline.to(".top-left", 2, {
        left: "0",
        ease: "power3.inOut",
        delay: 4,
        onComplete: function () {
            gsap.to(".top-left", 2, {
                left: "auto",
                bottom: "0",
                ease: "power3.inOut",
            });
        },
    });

    timeline.to(".top-right", 2, {
        right: "0",
        ease: "power3.inOut",
        delay: 4,
        onComplete: function () {
            gsap.to(".top-right", 2, {
                top: "auto",
                bottom: "0",
                ease: "power3.inOut",
            });
        },
    });

    timeline.to(".bottom-right", 2, {
        right: "0",
        ease: "power3.inOut",
        delay: 4,
    });

    timeline.to(".block-right", 2, {
        right: "0",
        ease: "power3.inOut",
        delay: 4,
    });

    timeline.to(".block-left", 2, {
        left: "-50%",
        ease: "power3.inOut",
        delay: 4,
    });

    timeline.to(".block-right", 2, {
        right: "-50%",
        ease: "power3.inOut",
        delay: 4,
        onComplete: function () {
            gsap.to(".letter", 0.5, {
                opacity: 0,
                ease: "power3.inOut",
                stagger: 0.1,
            });
        },
    });

    timeline.to(".block-right", 2, {
        right: "-50%",
        ease: "power3.inOut",
        delay: 4,
        onComplete: function () {
            gsap.to(".nav", 0.5, {
                display: "flex", // Hiển thị thanh nav bằng cách thay đổi thuộc tính display thành "flex"
                ease: "power3.inOut",
            });
            gsap.to(".mini-text", {
                display: "flex",
                duration: 1,
                ease: "power3.inOut",
            });
        },
    });

    timeline.to(".nav", 1, {
        top: 0, // Đặt top thành 0 để thanh nav trồi xuống
        ease: "power3.inOut",
        delay: 4,
    });

    timeline.from(".nav-menu li", {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
        delay: 7,
    });

    timeline.from(".nav-logo", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 7,
    });

    timeline.to(".mini-text", 2, {
        bottom: "40%",
        ease: "power3.inOut",
        delay: 6,
        opacity: 1,
    });

    timeline.to(".nav-menu .menu-item a ion-icon", {
        scrollTrigger: {
            trigger: ".nav-menu .menu-item",
            start: "top center",
        },
        opacity: 0,
        x: -20,
        duration: 0.3,
    });

    timeline.to(".nav-menu .menu-item:hover a ion-icon", {
        opacity: 1,
        x: 0,
        duration: 0.3,
    });
}

// Page transition
pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1,
    });

    timeline.to(".page-transition", {
        duration: 1,
        height: "100%",
        top: "0%",
    });

    timeline.to(".page-transition", {
        duration: 0.8,
        height: "100%",
        top: "100%",
        delay: 0.3,
        onComplete: function () {
            // Thực hiện các hiệu ứng chính sau khi page transition hoàn thành
            mainAnimation();
        },
    });

    timeline.set(".page-transition", {
        top: "-100%",
    });
}


// Lắng nghe sự kiện di chuột
document.addEventListener("mousemove", function(event) {
// Lấy tọa độ chuột
var mouseX = event.clientX;
var mouseY = event.clientY;

// Tạo hiệu ứng chuyển động mượt mà cho con trỏ
gsap.to("#custom-cursor", {
    left: mouseX,
    top: mouseY,
    duration: 0.3,
    ease: "power2.out"
});
});

// Cập nhật vị trí con trỏ với độ trễ
var cursorElement = document.getElementById("custom-cursor"); // Đổi tên biến thành "cursorElement" để tránh xung đột
var updateCursor = function(event) {
cursorElement.style.left = event.clientX + "px";
cursorElement.style.top = event.clientY + "px";
};

document.addEventListener("mousemove", function(event) {
setTimeout(function() {
updateCursor(event);
}, 200);
});

// Mini-text 
gsap.to(".mini-text", 2, {
    bottom: "40%",
    ease: "power3.inOut",
    delay: 6,
    opacity: 1,
})



// Hover nav

gsap.registerPlugin(ScrollTrigger);

gsap.to(".nav-menu .menu-item a ion-icon", {
scrollTrigger: {
trigger: ".nav-menu .menu-item",
start: "top center",
},
opacity: 0,
x: -20,
duration: 0.3,
});

gsap.to(".nav-menu .menu-item:hover a ion-icon", {
opacity: 1,
x: 0,
duration: 0.3,
});

// Page transition

  