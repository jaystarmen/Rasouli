!function($){"use strict";$.fn.twittie=function(){var e=arguments[0]instanceof Object?arguments[0]:{},t="function"==typeof arguments[0]?arguments[0]:arguments[1],a=$.extend({username:null,list:null,hashtag:null,count:10,hideReplies:!1,dateFormat:"%b/%d/%Y",template:"{{date}} - {{tweet}}",apiPath:"api/tweet.php"},e);a.list&&!a.username&&$.error("If you want to fetch tweets from a list, you must define the username of the list owner.");var r=function(e){return e.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi,'<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>')},n=function(e){var t=e.split(" ");e=new Date(Date.parse(t[1]+" "+t[2]+", "+t[5]+" "+t[3]+" UTC"));for(var r=["January","February","March","April","May","June","July","August","September","October","November","December"],n={"%d":e.getDate(),"%m":e.getMonth()+1,"%b":r[e.getMonth()].substr(0,3),"%B":r[e.getMonth()],"%y":String(e.getFullYear()).slice(-2),"%Y":e.getFullYear()},s=a.dateFormat,i=a.dateFormat.match(/%[dmbByY]/g),u=0,l=i.length;u<l;u++)s=s.replace(i[u],n[i[u]]);return s},s=function(e){for(var t=a.template,r=["date","tweet","avatar","url","retweeted","screen_name","user_name"],n=0,s=r.length;n<s;n++)t=t.replace(new RegExp("{{"+r[n]+"}}","gi"),e[r[n]]);return t};this.html('<span class="loadingTwitterText">Loading...</span>');var i=this;$.getJSON(a.apiPath,{username:a.username,list:a.list,hashtag:a.hashtag,count:a.count,exclude_replies:a.hideReplies},function(e){i.find("span").fadeOut("fast",function(){i.html("<ul></ul>");for(var u=0;u<a.count;u++){var l=!1;if(e[u])l=e[u];else{if(void 0===e.statuses||!e.statuses[u])break;l=e.statuses[u]}var o={user_name:l.user.name,date:n(l.created_at),tweet:r(l.retweeted?"RT @"+l.user.screen_name+": "+l.retweeted_status.text:l.text),avatar:'<img src="'+l.user.profile_image_url+'" />',url:"http://twitter.com/"+l.user.screen_name+"/status/"+l.id_str,retweeted:l.retweeted,screen_name:r("@"+l.user.screen_name)};i.find("ul").append("<li>"+s(o)+"</li>")}"function"==typeof t&&t()})})}}(jQuery);