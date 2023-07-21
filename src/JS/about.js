

let isScrollEnd = false;
function checkScrollEnd() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight) {
    isScrollEnd = true;
  } else {
    isScrollEnd = false;
  }
}

window.addEventListener("scroll", checkScrollEnd);
window.addEventListener("resize", checkScrollEnd);


        gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText("p", { type: "lines" });

split.lines.forEach((target, index) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: "top center",
      end: "bottom center",
      delay: index * 0.1
    }
  });
});


function makeItHappen() {
  // Đoạn mã xử lý của bạn ở đây

let someDelay = gsap.delayedCall(0.2, newTriggers).pause();
window.addEventListener("resize", () => someDelay.restart(true));

function newTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });
  split.split();
  makeItHappen();
}
}
makeItHappen();
// Ảnh content

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about2", {
  scrollTrigger: {
      trigger: ".about2",
      start: "top 80%", // Khi đến khoảng cách 80% từ trên xuống
      end: "bottom 60%", // Khi còn khoảng cách 60% từ dưới lên
      scrub: true, // Kích hoạt hiệu ứng scrubbing
      toggleActions: "play none none reverse" // Khi scroll lên lại, hiệu ứng được chạy ngược lại
  },
  opacity: 0, // Ẩn ban đầu
  x: "-100%", // Di chuyển từ trái sang phải
});

gsap.from(".about3", {
  scrollTrigger: {
      trigger: ".about3",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      toggleActions: "play none none reverse" // Khi scroll lên lại, hiệu ứng được chạy ngược lại
  },
  opacity: 0,
  xPercent: 100,
});

// Service

gsap.from(".small-text-services, .lengh-line-1, .number-1, .text-main-1, .lengh-line-2, .number-2, .text-main-2, .lengh-line-4, .lengh-line-3, .number-3, .text-main-3", {
scrollTrigger: {
  trigger: ".small-text-services",
  start: "top 80%", // Điều chỉnh giá trị này cho phù hợp
  end: "bottom 60%", // Điều chỉnh giá trị này cho phù hợp
  scrub: true,
  toggleActions: "play none none reverse",
},
opacity: 0,
y: 200, // Điều chỉnh giá trị này cho phù hợp
stagger: 0.2, // Điều chỉnh giá trị này cho phù hợp
delay: 3,
duration: 5,
});

// Đợi tất cả các tài nguyên (ảnh, font chữ, v.v.) được tải xong
window.addEventListener("load", function() {
// Sử dụng GSAP để thực hiện hiệu ứng trồi xuống
gsap.from(".nav-about", {
  duration: 1, // Thời gian thực hiện hiệu ứng (1 giây trong trường hợp này)
  opacity: 0, // Ẩn ban đầu
  y: -50, // Di chuyển lên trên (giá trị âm)
  ease: "power2.out", // Điều chỉnh kiểu easing (có thể thay đổi)
  delay: 1,
});
});

gsap.from(".h1-text", {
  duration: 1, // Thời gian thực hiện hiệu ứng (1 giây trong trường hợp này)
  opacity: 0, // Ẩn ban đầu
  y: -50, // Di chuyển lên trên (giá trị âm)
  ease: "power2.out", // Điều chỉnh kiểu easing (có thể thay đổi)
  delay: 2,
});

gsap.from(".toggle-btn", {
duration: 1, // Thời gian thực hiện hiệu ứng (1 giây trong trường hợp này)
opacity: 0, // Ẩn ban đầu
x: -50, // Di chuyển từ trái sang phải (giá trị âm)
ease: "power2.out", // Điều chỉnh kiểu easing (có thể thay đổi)
delay: 2,
});

// Open HBG

var t1 = new TimelineMax({pause: true});

t1.to(".one", 0.8, {
  y: 6,
  rotation: 45,
  ease: Expo.easeInOut
});

t1.to(".two", 0.8, {
  y: -6,
  rotation: -45,
  ease: Expo.easeInOut,
  delay: -0.8
});

t1.to(".menu", 2, {
  top: "0%",
  ease: Expo.easeInOut,
  delay: -2
})

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease: Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
  t1.reversed(!t1.reversed());
});


// Page transition
