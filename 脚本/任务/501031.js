var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askMenu("有什么问题吗……？\r\n\r\n#L1# 询问#b#e<卡米拉花朵庆典>#n#k相关的情况。#l\r\n#L2# 询问有关#b#e<闪耀花瓣>#n#k的事情。#l\r\n#L3# 询问有关#b#e<花笺商店>#n#k的事情。#l\r\n#L4# 询问#b#e<活动时间>#n#k。#l\r\n#L5# 没有问题。#l", 4, 1012108);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("每次看到盛开的鲜花，我就会觉得很幸福……", 4, 1012108, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("我想跟冒险岛世界的植物们一起分享这种幸福，\r\n所以决定举行#b花朵庆典#k。", 4, 1012108, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("如果你能帮我为花朵庆典做准备，我就把\r\n#b#e花笺#n#k送给你……让你可以在#b#e花笺商店#n#k中\r\n交换#r#e想要的物品#n#k。", 4, 1012108, true, true);
      } else if (status === v++) {
        cm.sendNormalTalk("拥有的花笺数量……可以通过#b#e[花朵庆典]花笺商店#n#k任务确认。", 4, 1012108, true, true);
        status = -1;
        cm.dispose();
      }
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("消灭等级范围内的怪物，可以获得#b#e闪耀花瓣#n#k……请每天帮我收集#r#e100个#n#k花瓣。", 4, 1012108, false, true);
  } else if (status === v++) {
    cm.sendNormalTalk("如果你能努力帮我收集花瓣……我会把漂亮的#b花笺#k送给你……\r\n\r\n\r\n#r※ 每次完成<准备花朵庆典吧！>时，可以获得1个花笺。", 4, 1012108, true, true);
    status = -1;
    cm.dispose();
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("你不觉得花笺商店……才是庆典的画龙点睛之笔吗？", 4, 1012108, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#b#h0##k，花笺商店的各种物品……原来非常昂贵，\r\n但这次我破例允许你用花笺交换。", 4, 1012108, true, true);
    } else if (status === v++) {
      cm.sendNormalTalk("我来介绍一下花笺商店的商品。\r\n你可以交换自己想要的东西……\r\n\r\n#r※ <花笺商店>的道具\r\n有效期限全部为7天。#k\r\n\r\n#b#e[花笺商店]#n#k\r\n\r\n#e<花笺4个>#n\r\n#i2631802:# #b#t2631802:# 1个#k\r\n#i2631803:# #b#t2631803:# 1个#k\r\n\r\n#e<花笺3个>#n\r\n#i2631804:# #b#t2631804:# 1个#k \r\n#i2631805:# #b#t2631805:# 1个#k\r\n\r\n#e<花笺2个>#n\r\n#i2631806:# #b#t2631806:# 1个#k \r\n#i2633058:# \t#b#t2633058:# 1个#k \r\n#i2433808:# #b#t2433808:# 1个#k \r\n#i2439869:# #b#t2439869:# 3个#k\r\n\r\n#e<花笺1个>#n\r\n#i2630512:# #b#t2630512:# 4个#k \r\n#i2450167:# #b#t2450167:# 4个#k", 4, 1012108, true, true);
      cm.dispose();
      status = -1;
    }
  }
}
function action分支4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("闪耀花瓣\r\n只能在#r2021年4月6日晚上11点59分#k之前收集……", 4, 1012108, false, true);
    cm.dispose();
    status = -1;
  }
}
function action分支5(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}