var status = -1;
var selectionLog = [];
function start(W, p, b) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  if (W == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = b;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      cm.askMenu("你想知道什么呢？\r\n\r\n#L1# 我想了解#b#e<每日红包>#n#k。#l\r\n#L2#我想了解#b#e<好运红包>#n#k。#l\r\n#L3#我想了解#b#e<春节蓝色、粉色演播室>#n#k。#l\r\n#L4#我想了解#b#e<春节纪念币商店>#n#k。#l\r\n#L5# 我想知道#b#e<活动时间>#n#k是什么时候。#l\r\n#L0#我没兴趣。#l", 5, 9401512);
    } else {
      var E = "action分支" + selectionLog[1];
      eval(E)(W, p, b, y);
    }
  }
}
function action分支0(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("<每日红包>仅限使直播活动的#b#e订阅粉丝数增加至每日最大值#n#k，并获得#b#e至少300个粉红豆#n#k的勇士一天参加一次。", 4, 9401512, false, true, 0);
    status = -1;
  }
}
function action分支1(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("\r\n#b#e<海滨霸主>#n#k开放时间段为上午10点到午夜零点，\r\n可通过#b每个小时的15分、45分#k头顶的#b邀请函#k参加。", 4, 9062545, false, true, 0);
    status = -1;
  }
}
function action分支2(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("#b#e参与了所有#n#k<每日红包>的勇士可参加<好运红包>。", 4, 9401512, false, true, 0);
    status = -1;
  }
}
function action分支3(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("活动时间为下午6点到第二天凌晨1点30分，#b#e春节蓝色、春节粉色演播室#n#k将于每个小时的30分开放。", 4, 9401512, false, true, 0);
  } else if (status === y++) {
    cm.sendNormalTalk("10分钟内，位于<互动演播室>的角色可获得优于现有演播室的春节演播室效果。", 4, 9401512, true, true, 0);
    status = -1;
  }
}
function action分支4(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("活动时间期间可通过<互动演播室>的#b#e企鹅王#n#k购买春节特别物品。", 4, 9401512, false, true, 0);
    status = -1;
  }
}
function action分支5(W, p, b, y) {
  if (status <= y++) {
    cm.sendNormalTalk("春节活动的参与时间为2022年1月30日 上午9点至2月12日23时59分。", 4, 9401512, false, true, 0);
    status = -1;
  }
}
function action分支0(W, p, b, y) {
  if (status <= y++) {
    cm.dispose();
  }
}