$('.b-header__container_left, .b-header__container_right').addClass('b-header__container');

$('.b-header__container').each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/>\s*</g, '><'));
});

$('.b-button_auth a').first().addClass('user-fio');

var documentBody = $('.b-document__body');
var content = documentBody.html();
content = content.replace(/\s«/g, '<i class="typo-s"> </i><i class="typo-q">«</i>');
documentBody.html(content);
