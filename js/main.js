if(document.querySelector(".applications_tab")) {
    $(".applications_tab #btn1").click(function() {
        $(".applications_tab .btn").removeClass("active");
        $(this).addClass("active");
        $(".tab_block1").addClass("active");
        $(".tab_block2").removeClass("active");
    });
    $(".applications_tab #btn2").click(function() {
        $(".applications_tab .btn").removeClass("active");
        $(this).addClass("active");
        $(".tab_block2").addClass("active");
        $(".tab_block1").removeClass("active");
    });
};