// target.addEventListener('click',()=>{
// 	target.style.background='pink'
// 	target.style.width="1000px"
// 	target.style.borderRadius="50%"
// })


var trigger = document.querySelectorAll(".skill-obj");

trigger.forEach(
    function(target) {
    target.addEventListener('mouseover', ()=>{
        // target.animate.
        target.animate([{width: '120%'}, {width: '100%'}], 1500)
        // target.animate([{opacity: '0'}, {opacity: '1'}], 1500)
        // target.animate([{transition: "transform 2s"}], 1500)
        target.style.background = "white";
    });

    target.addEventListener('mouseleave', ()=>{
        target.style.background=''
        target.style.width=""
        target.style.borderRadius=""
    });
});





//キャプション下から
// $(function () {
//     $('.skill-obj').hover(function () {
//         $('.skill-obj', this).animate({
//             top: "1000px"
//         }, 500);
//     }, function () {
//         $('.skill-obj', this).animate({
//             top: "150px"
//         }, 500);
//     });
// });

// //キャプションフェードイン
// $(function () {
//     $('.skill-obj').hover(function () {
//         $('.caption2', this).fadeIn("slow");
//     }, function () {
//         $('.caption2', this).fadeOut("slow");
//     });
// });
