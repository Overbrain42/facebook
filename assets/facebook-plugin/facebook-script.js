(function($) {

    if (/^(http|ftp|https)/.test(window.location.href)) {
        $(".facebookPlaceholder").replaceWith("<div class='fb-comments' data-href='" + window.location.href + "' data-width='100%' data-numposts='" + $(".facebookPlaceholder").attr("data-numposts") + "'></div>");
        $(".googlePlaceholder").replaceWith("<div class='g-comments' data-width = '650' data-href='" + window.location.href + "' data-width='100%'  data-first_party_property = 'BLOGGER' data-view_type = 'FILTERED_POSTMOD'></div>");
        if ($('.disqusPlaceholder').length > 0) {
            var shortName = $('.disqusPlaceholder').parent().attr('data-shortname');
            console.log(shortName);
            $('.disqusPlaceholder').replaceWith("<div id='disqus_thread'></div>");
            var disqus_config = function() {
            };
            var d = document,
                s = d.createElement('script');
            s.src = '//' + shortName + '.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    };

})(jQuery);