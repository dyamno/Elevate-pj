var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

gsap.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    gsap.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    gsap.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".portfolio-item ").on("mouseenter", function() {
cursor.addClass("active");
follower.addClass("active");
});

$(".portfolio-item ").on("mouseleave", function() {
cursor.removeClass("active");
follower.removeClass("active");
});

// 2

$(".portfolio-item-2 ").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
    });
    
    $(".portfolio-item-2 ").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
    });

// 3

$(".portfolio-item-3 ").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
    });
    
    $(".portfolio-item-3 ").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
    });

// 4

$(".portfolio-item-4 ").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
    });
    
    $(".portfolio-item-4 ").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
    });

// Scroll Trigger

gsap.registerPlugin(ScrollTrigger);

        // Hiệu ứng fade từ trên xuống cho từng ảnh
        $(".portfolio-thumb").each(function() {
            var trigger = this;
        
            gsap.from(trigger, {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top", // Thay đổi điểm bắt đầu hiệu ứng tại đây
                    end: "bottom ", // Thay đổi điểm kết thúc hiệu ứng tại đây
                    toggleActions: "play none none reverse",
                }
            });
        });


        $(".portfolio-thumb-2").each(function() {
            var trigger = this;
        
            gsap.from(trigger, {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top center", // Thay đổi điểm bắt đầu hiệu ứng tại đây
                    end: "bottom center", // Thay đổi điểm kết thúc hiệu ứng tại đây
                    toggleActions: "play none none reverse",
                }
            });
        });

        $(".portfolio-thumb-3").each(function() {
            var trigger = this;
        
            gsap.from(trigger, {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top center", // Thay đổi điểm bắt đầu hiệu ứng tại đây
                    end: "bottom center", // Thay đổi điểm kết thúc hiệu ứng tại đây
                    toggleActions: "play none none reverse",
                }
            });
        });

        $(".portfolio-thumb-4").each(function() {
            var trigger = this;
        
            gsap.from(trigger, {
                opacity: 0,
                y: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top center", // Thay đổi điểm bắt đầu hiệu ứng tại đây
                    end: "bottom center", // Thay đổi điểm kết thúc hiệu ứng tại đây
                    toggleActions: "play none none reverse",
                }
            });
        });

        

    