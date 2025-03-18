var posts=["2025/02/22/Git常用指令/","2025/02/18/js和ts的区别/","2025/02/08/html-毛玻璃登录页面/","2025/03/11/Android Studio连接雷电模拟器/","2025/02/08/《UniApp开发微信小程序：解决头部导航栏》/","2025/02/08/《uniapp 获取当前设备信息》/","2025/03/07/《正则表达式实用大全 -开发必备，附详细示例》/","2025/02/08/《uniApp-解决跨域问题》/","2025/03/13/什么是web3钱包/","2025/03/14/十日终焉法则定律梳理/","2025/02/15/大学时光/","2025/03/14/十日终焉梳理/","2025/02/09/我的书单/","2025/02/11/盘点我的开源项目/","2025/02/25/给你的博客搭建小空调页面/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"一清三白","link":"https://sanbaiblog.cn/","avatar":"https://s21.ax1x.com/2025/01/05/pE9CfDU.jpg","descr":"克己慎独 守心明性","siteshot":"https://s21.ax1x.com/2025/02/15/pEKUBgs.png"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"一清三白","link":"https://sanbaiblog.cn/","avatar":"https://s21.ax1x.com/2025/01/05/pE9CfDU.jpg","descr":"克己慎独 守心明性","siteshot":"https://s21.ax1x.com/2025/02/15/pEKUBgs.png","recommend":true,"color":"vip","tag":"分享"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"SCFCの博客","link":"https://blog.scfc.top/","avatar":"https://q.qlogo.cn/g?b=qq&nk=2907713872&s=640","descr":"可惜...屠龙少年终成恶龙"},{"name":"wyp","link":"https://wypnote.github.io/","avatar":"https://bu.dusays.com/2025/02/09/67a8047bc8ee8.jpg","descr":"一起学习 超越情绪 变得更强"},{"name":"陆小启Kairo","link":"https://blog.luxq.space","avatar":"https://s21.ax1x.com/2025/02/23/pElRBdO.jpg","descr":"往者不谏，来者可追"},{"name":"XingJiのBlog","link":"https://love.xingji.fun","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"https://i.p-i.vip/47/20240920-66ed7b6730ca9.png"},{"name":"凌尘k-Blog","link":"https://b.icxk.cn/","avatar":"https://cdn.jsdelivr.net/gh/lck68/imagehost/img/tx.webp","descr":"于高山之巅，方见大河奔涌；于群峰之上，更觉长风浩荡。","siteshot":"https://cdn.jsdelivr.net/gh/lck68/imagehost/img/fengmian.webp","color":"vip","tag":"技术"},{"name":"XingJi の Blog","link":"https://love.xingji.fun","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"https://i.p-i.vip/47/20240920-66ed7b6730ca9.png"},{"name":"寻梦城 - 寻找失落之城","link":"https://blog.study996.cn/","descr":"欲买桂花同载酒，终不似，少年游","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=2071916845&spec=640","topimg":"https://i1.wp.com/s1.wp.com/mshots/v1/https://blog.study996.cn/","tag":"小白","color":"vip"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };