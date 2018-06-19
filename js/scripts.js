$(document).ready(function () {
    $("body").addClass("hi-backgrd");
    $("div#landing").show();
    $("button.buttons").show();
    $("button#noSkip").click(function () {
      
        $("div#welcome").delay(3000).fadeIn(2000);
        $("button#enter").delay(1000).fadeIn(2000);
    });
    $("button#enter").click(function () {
        $("div#welcome").delay(1000).fadeOut(1000);
        $("body").removeClass();
        $("body").addClass("homepage");
        $("div#homepage").delay(500).fadeIn(500);
    });
    $("button#skip").click(function () {
        $("div#landing").delay(500).fadeOut(500);
        $("button#noSkip").hide();
        $("body").removeClass();
        $("body").addClass("homepage-skip");
        $("div#homepage").delay(3000).fadeIn(2000);
    });
    $("button#open").click(function () {
        $("div#homepage").slideUp(2000);
        $("div#transition").delay(500).slideDown(2000);
        $("div#transition").delay(4500).slideUp(2000);
        $("div#content").delay(8000).slideDown(3000);
        $("div#About").delay(11000).fadeIn(2000);
        $("div#Projects").delay(12000).fadeIn(1000);
        $("div#Contacts").delay(13000).fadeIn(1000);
        $("div#Ending").delay(14000).fadeIn(1000);
    });
    $("div#About").click(function () {
        $("div#About").slideUp(2000);
        $("div#Projects").slideUp(2000);
        $("div#Contacts").slideUp(2000);
        $("div#Ending").slideUp(2000);
        $("div#About-desc").slideDown(2000);
        $("button#about-return").slideDown(2000);
    });
    $("div#Projects").click(function () {
        $("div#About").slideUp(2000);
        $("div#Projects").slideUp(2000);
        $("div#Contacts").slideUp(2000);
        $("div#Ending").slideUp(2000);
        $("div#Projects-desc").slideDown(2000);
        $("button#Projects-return").slideDown(2000);
    });
    $("div#Contacts").click(function () {
        $("div#About").slideUp(2000);
        $("div#Projects").slideUp(2000);
        $("div#Contacts").slideUp(2000);
        $("div#Ending").slideUp(2000);
        $("div#Contacts-desc").slideDown(2000);
        $("button#Contacts-return").slideDown(2000);
    });
    $("div#me").click(function () {
        $("div#me").slideUp(2000);
        $("div#more-on-me").slideDown(2000);
    });
    $("div#hobbies").click(function () {
        $("div#hobbies").slideUp(2000);
        $("div#more-on-hobbies").slideDown(2000);
    });
    $("div#skill-sets").click(function () {
        $("div#skill-sets").slideUp(2000);
        $("div#more-on-skill-sets").slideDown(2000);
    });
    $("button#me-shut").click(function () {
        $("div#more-on-me").slideUp(2000);
        $("div#me").slideDown(2000);
    });
    $("button#hobbies-shut").click(function () {
        $("div#more-on-hobbies").slideUp(2000);
        $("div#hobbies").slideDown(2000);
    });
    $("button#skill-sets-shut").click(function () {
        $("div#more-on-skill-sets").slideUp(2000);
        $("div#skill-sets").slideDown(2000);
    });
    $("button#about-return").click(function () {
        $("button#about-return").slideUp(2000);
        $("div#About-desc").slideUp(2000);
        $("div#About").slideDown(2000);
        $("div#Projects").slideDown(2000);
        $("div#Contacts").slideDown(2000);
        $("div#Ending").slideDown(2000);
    });
    $("button#Contacts-return").click(function () {
        $("button#Contacts-return").slideUp(2000);
        $("div#Contacts-desc").slideUp(2000);
        $("div#About").slideDown(2000);
        $("div#Projects").slideDown(2000);
        $("div#Contacts").slideDown(2000);
        $("div#Ending").slideDown(2000);
    });
    $("button#Projects-return").click(function () {
        $("button#Projects-return").slideUp(2000);
        $("div#Projects-desc").slideUp(2000);
        $("div#About").slideDown(2000);
        $("div#Projects").slideDown(2000);
        $("div#Contacts").slideDown(2000);
        $("div#Ending").slideDown(2000);
    });
});



