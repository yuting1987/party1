var Q,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Q = ['第一次看限制級影片在哪？幾歲？', 'Party中你最喜歡哪一位異性？', '你今天的內衣內褲顏色是？', '有沒有愛過不該愛的人（重口味）？', '交往過幾個男/女朋友？', '曾經在哪裡有過最刺激的性經驗？', '有幾次性經驗（不同對象）幾次？', '有過一夜情嗎？最值得回憶的是？', '有無使用成人玩具幫助自慰的經驗？', '性幻想的對象是（明星/Party）？', '你收過最爛的禮物（重口味）？', '對父母/朋友說過最誇張的謊言是？', '你喜歡BL/GL嗎？', '你身上哪個部位最敏感？', '你的兩個好朋友偷偷去看電影沒邀你，你會？', '你有劈腿/被劈腿的經驗嗎？', '如果你有魔法棒，你想變出什麼？', '有沒有最爛的約會經驗？', '如果你可以變成任何動物，你想變成？', '你覺得自己最性感的地方是？', '假設現在你有免死金牌，你想做什麼事？', '如果看到喜歡的對象在你面前睡著，你會？', '曾經發生過最感動的事是？', '你心目中理想的愛人是？', '世界末日將近你只可以救一個人，你想救誰？', '你聽過最瞎的分手理由是？', '對你而言愛情/友情/親情哪一個最重要？', '如果你的知己和你的另一伴交往，你會？', '你做過最瘋狂的事是（重口味）？', '老實說！有沒有偷偷喜歡Andy？', '初吻的年齡是？感覺如何？', '有沒有與同性親密接觸過？', '與愛人約會，遇到前任男/女朋友你會？', '你最經典的搭訕/被搭訕的經驗是？', '有沒有曾經忘記穿內衣褲就出門？', '你願意幫心愛的人洗內衣褲嗎？', '在家會裸體嗎？還是都怎麼穿？', '你曾經幻想自己是哪部電影的角色嗎？', '你是制服控嗎？喜歡哪種制服？', '有跟好友的男/女朋友發生不該發生的事情嗎？', '有跟另一伴的好友發生不該發生的事情嗎？', '有跟『那些年』一樣集體自慰的經驗嗎？', '給你一個機會，你最想摸Andy的哪裡？', '你最想KISS派對中的哪一位異性？', '有偷看過爸媽在性行為嗎？', '是否曾經在外套下做過什麼壞事？', '有幻想過跟Andy發生一夜情嗎？', '有沒有沒戴保險套的經驗？喜歡戴還不戴？', '知道什麼是指套嗎？有用過嗎？', '有沒有去紅燈區消費過？', '喝酒後，發生過最糗的事情是？', '做過最浪漫的事情是？', '最想把誰丟下泳池（不能說Andy）？', '夢想中的婚禮內容是？', '有沒有當過第三者的經驗？', '分享一下告白/被告白的經驗？', '你現在的身高體重是？', '最喜歡的性行為姿勢是？', '理想伴侶的三個條件是？', '是否有跑錯廁所的經驗（男跑女，女跑男）？', '有沒有偷偷尿過床？'];

Q.sort(function() {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
});

$(function() {
  var body, inbar, keyin, report, todo, update, win;

  win = $(window);
  body = $('body');
  todo = $('todo');
  keyin = $('#keyin');
  report = $('#report td');
  inbar = $('#inbar');
  body.on('touchstart', function(e) {
    var dost, num;

    e.preventDefault();
    if ($(body).hasClass('report')) {
      $('.num', keyin).text('?');
      return $(body).removeClass('report');
    } else {
      num = Math.floor(Math.random() * Q.length);
      dost = Q.slice(num, num + 1)[0];
      Q.splice(num, 1);
      $(report).text(dost);
      if (!dost) {
        $(report).text('ERROR');
      }
      return $(body).addClass('report');
    }
  });
  inbar.on('keydown', function(e) {
    var dost, num;

    if (e.keyCode === 13) {
      $(body).toggleClass('report');
      num = parseInt($(this).val(), 10);
      if (num > 0 && num < 10) {
        num = Math.floor(Math.random() * Q.length);
        dost = Q.slice(num, num + 1)[0];
        Q.splice(num, 1);
        $(report).text(dost);
        if (!dost) {
          $(report).text('ERROR');
        }
      }
      return $(this).val('_');
    } else {
      return $(this).val('');
    }
  });
  inbar.on('keyup', function() {
    return $('.num', keyin).text($(this).val());
  });
  update = function() {
    if (__indexOf.call(window, 'ontouchstart') < 0) {
      inbar.focus();
    }
    return setTimeout((function() {
      return update();
    }), 1500);
  };
  return update();
});
