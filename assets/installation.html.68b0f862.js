import{_ as r,o as l,c,a as e,d as n,w as d,b as a,e as o,r as t}from"./app.12487476.js";const h={},u=a('<h1 id="\u5B89\u88C5\u5170\u7A7A\u56FE\u5E8A" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5170\u7A7A\u56FE\u5E8A" aria-hidden="true">#</a> \u5B89\u88C5\u5170\u7A7A\u56FE\u5E8A</h1><div class="custom-container warning"><p class="custom-container-title">\u8BF7\u6CE8\u610F</p><p>\u5170\u7A7A\u56FE\u5E8A\u4E0D\u652F\u6301\u5171\u4EAB\u578B\u865A\u62DF\u4E3B\u673A(\u4E0D\u652F\u6301\u5B89\u88C5\u62D3\u5C55\u3001\u4FEE\u6539 php.ini \u7B49\u64CD\u4F5C)\u5B89\u88C5</p></div><h2 id="\u4E0B\u8F7D\u6B63\u5F0F\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u6B63\u5F0F\u7248\u672C" aria-hidden="true">#</a> \u4E0B\u8F7D\u6B63\u5F0F\u7248\u672C</h2>',3),_=o("\u5170\u7A7A\u56FE\u5E8A\u7684\u6BCF\u4E2A\u7248\u672C\u90FD\u662F\u901A\u8FC7 github \u53D1\u5E03\uFF0C\u4E0B\u8F7D\u6B63\u5F0F\u7248\u672C\u8BF7\u8BBF\u95EE "),p={href:"https://github.com/lsky-org/lsky-pro/releases",target:"_blank",rel:"noopener noreferrer"},b=o("https://github.com/lsky-org/lsky-pro/releases"),m=e("p",null,[o("\u5982\u679C\u4F60"),e("strong",null,"\u4E0D\u662F"),o("\u5F00\u53D1\u8005\uFF0C"),e("strong",null,"\u8BF7\u4E0D\u8981"),o("\u4E0B\u8F7D\u540D\u79F0\u4E3A "),e("code",null,"Source Code"),o(" \u7684\u538B\u7F29\u5305\uFF0C\u6B64\u4E3A\u6838\u5FC3\u6E90\u4EE3\u7801\uFF0C\u9700\u8981\u81EA\u5DF1\u5B89\u88C5\u62D3\u5C55\u3002")],-1),x=e("h2",{id:"\u8FD0\u884C\u73AF\u5883\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD0\u884C\u73AF\u5883\u914D\u7F6E","aria-hidden":"true"},"#"),o(" \u8FD0\u884C\u73AF\u5883\u914D\u7F6E")],-1),g=e("li",null,[o("\u9700\u8981\u5173\u95ED "),e("code",null,"open_basedir"),o("\uFF0C\u5426\u5219\u4F1A\u6709\u610F\u60F3\u4E0D\u5230\u7684\u9519\u8BEF\u3002\u7B80\u5355\u6765\u8BF4\uFF0Copen_basedir \u662F\u7528\u6765\u9650\u5236 PHP \u8BFB\u53D6\u76EE\u5F55\u3002")],-1),f=o("\u5B89\u88C5 nginx \u6216 apache\uFF0CPHP 8.0.2+\uFF0C\u7136\u540E\u4E3A php \u5B89\u88C5\u4E0A\u5FC5\u987B\u7684\u62D3\u5C55\u3002\u8BE6\u89C1\uFF1A"),v=o("\u5B89\u88C5\u8981\u6C42"),k=o(" \u7AE0\u8282"),w=a(`<h2 id="\u51C6\u5907\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5B89\u88C5" aria-hidden="true">#</a> \u51C6\u5907\u5B89\u88C5</h2><ol><li>\u5C06\u5B89\u88C5\u5305\u4E0A\u4F20\u81F3\u7AD9\u70B9\u76EE\u5F55\u7136\u540E\u89E3\u538B\uFF0C\u5C06\u7AD9\u70B9\u7684\u8FD0\u884C\u76EE\u5F55\u6307\u5411\u7A0B\u5E8F\u7684 <code>public</code> \u6587\u4EF6\u5939</li></ol><blockquote><p>nginx \u9700\u8981\u8BBE\u7F6E\u4F2A\u9759\u6001\uFF0C\u5185\u5BB9\u5982\u4E0B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / {
  try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5C06\u7A0B\u5E8F\u6240\u5728\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5939\u3001\u5B50\u6587\u4EF6\u5939\u3001\u6587\u4EF6\u7684\u6743\u9650\uFF0C\u7528\u6237\u7EC4\u548C\u6240\u6709\u8005\u6539\u4E3A <code>www</code>\uFF0C\u6743\u9650\u6539\u4E3A <code>0755</code></li></ol><blockquote><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CWeb \u7AD9\u70B9\u76EE\u5F55\u7684\u6240\u6709\u8005\u548C\u7528\u6237\u7EC4\u4E3A <code>www:www</code></p></blockquote><p>\u82E5\u672A\u6B63\u786E\u8BBE\u7F6E\u6743\u9650\uFF0C\u5728\u540E\u7EED\u7684\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u56E0\u4E3A\u6743\u9650\u5BFC\u81F4\u6587\u4EF6\u65E0\u6CD5\u8BFB\u53D6\u3001\u65E0\u6CD5\u5199\u5165\u3001\u521B\u5EFA\u6587\u4EF6\u5939\u7B49\u4E00\u7CFB\u5217\u95EE\u9898\u3002</p><h2 id="\u5F00\u59CB\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u5B89\u88C5" aria-hidden="true">#</a> \u5F00\u59CB\u5B89\u88C5</h2><p>\u914D\u7F6E\u597D\u57DF\u540D\u4EE5\u540E\uFF0C\u8BBF\u95EE\u7AD9\u70B9 <strong>\u9996\u9875</strong> \uFF0C\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u5B89\u88C5\u9875\u9762\uFF0C\u73AF\u5883\u68C0\u6D4B\u901A\u8FC7\u4EE5\u540E\u5373\u53EF\u901A\u8FC7\u5F15\u5BFC\u8FDB\u884C\u5B89\u88C5\u3002</p>`,9);function E(y,q){const s=t("ExternalLinkIcon"),i=t("RouterLink");return l(),c("div",null,[u,e("p",null,[_,e("a",p,[b,n(s)])]),m,x,e("ol",null,[g,e("li",null,[f,n(i,{to:"/docs/free/v2/#%E5%AE%89%E8%A3%85%E8%A6%81%E6%B1%82"},{default:d(()=>[v]),_:1}),k])]),w])}var L=r(h,[["render",E],["__file","installation.html.vue"]]);export{L as default};
