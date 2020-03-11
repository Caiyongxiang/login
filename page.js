var pageData = {
    PageSize: 1,
    TotalCount: 1,
    TotalPage: 10,
    PageIndex: 1,
    LastEnabled: false,
    NextEnabled: true
};
$(".PageSize").text(pageData.PageSize);
$(".TotalCount").text(pageData.TotalCount);
$(".TotalPage").text(pageData.TotalPage);
$(".PageIndex").text(pageData.PageIndex);
$(".start").click(function () {
    pageData.PageIndex = 1;
    $(".PageSize").text(pageData.PageSize);
    $(".TotalCount").text(pageData.TotalCount);
    $(".TotalPage").text(pageData.TotalPage);
    $(".PageIndex").text(pageData.PageIndex);
    $(".previous").addClass('nopage');
    $(".next").removeClass('nopage');
})
$(".end").click(function () {
    pageData.PageIndex = pageData.TotalPage;
    $(".PageSize").text(pageData.PageSize);
    $(".TotalCount").text(pageData.TotalCount);
    $(".TotalPage").text(pageData.TotalPage);
    $(".PageIndex").text(pageData.PageIndex);
    $(".next").addClass('nopage');
    $(".previous").removeClass('nopage');
})
$(".previous").click(function () {
    if (pageData.PageIndex > 1) {
        if (pageData.PageIndex > 2) {
            pageData.PageIndex--;
            $(".PageSize").text(pageData.PageSize);
            $(".TotalCount").text(pageData.TotalCount);
            $(".TotalPage").text(pageData.TotalPage);
            $(".PageIndex").text(pageData.PageIndex);
            $(".previous").removeClass('nopage');
            $(".next").removeClass('nopage');
        } else {
            $(".previous").addClass('nopage');
            pageData.PageIndex--;
            $(".TotalCount").text(pageData.TotalCount);
            $(".TotalPage").text(pageData.TotalPage);
            $(".PageIndex").text(pageData.PageIndex);
            $(".next").removeClass('nopage');
        }
    }


})
$(".next").click(function () {
    if (pageData.PageIndex < pageData.TotalPage) {
        if (pageData.PageIndex < pageData.TotalPage - 1) {
            pageData.PageIndex++;
            $(".PageSize").text(pageData.PageSize);
            $(".TotalCount").text(pageData.TotalCount);
            $(".TotalPage").text(pageData.TotalPage);
            $(".PageIndex").text(pageData.PageIndex);
            $(".next").removeClass('nopage');
            $(".previous").removeClass('nopage');
        } else {
            pageData.PageIndex++;
            $(".next").addClass('nopage');
            $(".PageSize").text(pageData.PageSize);
            $(".TotalCount").text(pageData.TotalCount);
            $(".TotalPage").text(pageData.TotalPage);
            $(".PageIndex").text(pageData.PageIndex);
            $(".previous").removeClass('nopage');
        }
    }


})
$(".jump").click(function () {
    if (1 <= $(".num").val() <= pageData.TotalPage) {
        pageData.PageIndex = $(".num").val();
        $(".PageSize").text(pageData.PageSize);
        $(".TotalCount").text(pageData.TotalCount);
        $(".TotalPage").text(pageData.TotalPage);
        $(".PageIndex").text(pageData.PageIndex);
        $(".next").removeClass('nopage');
        $(".previous").removeClass('nopage');
        if (pageData.PageIndex <= 1) {
            $(".previous").addClass('nopage');
        }
        if (pageData.PageIndex >= pageData.TotalPage) {
            $(".next").addClass('nopage');
        }

    }


})