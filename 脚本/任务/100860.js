var status = -1;
var selectionLog = [];
function start(j, Y, I) {
  if (status == 0 && j == 0) {
    cm.dispose();
    return;
  }
  if (j == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = I;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else {
    if (status == x++) {
      cm.askMenu("#h0#！\r\n白雪人，说过了，<冒险岛互动播>\r\n#L0##b和我说说#e<冒险岛互动播>#n吧。#k#l\r\n#L1##b和我说说#e<创作者步步高>#n吧。#k#l\r\n#L2##b和我说说#e<粉红豆>#n吧。#k#l\r\n#L3##b和我说说#e<黑豆>#n吧。#k#l\r\n#L4##b和我说说#e<冒险岛综艺秀>#n吧。#k#l\r\n#L5##b和我说说#e<冒险岛互动播>#n吧。#k#l\r\n#L6##b和我说说#e<冒险岛电竞比赛>#n吧。#k#l\r\n#L7##b和我说说#e<冒险岛演播室走起！>#n吧。#k#l", 4, 9062555);
    } else {
      var B = "action分支" + selectionLog[1];
      eval(B)(j, Y, I, x);
    }
  }
}
function action分支0(j, Y, I, x) {
  if (status <= x++) {
    cm.sendNormalTalk("\r\n#b#e<冒险岛互动播>#n#k是一档节目，\r\n白雪人只知道这是一档狩猎节目……\r\n白雪人这就去请狩猎专家！", 4, 9062555, false, true, 0);
  } else {
    if (status === x++) {
      cm.sendNormalTalk("我，狩猎天才普利托，特别为大家准备了狩猎节目！\r\n#b#e<冒险岛互动播>#n#k中究竟会有哪些活动呢？", 4, 9062549, true, true, 0);
    } else {
      if (status === x++) {
        cm.sendNormalTalk("为答谢观众，这次#b#e<冒险岛互动播>#n#k将举办活动为各位送出礼物，活动的名称就叫做#b#e好礼送！送！送！#n#k", 4, 9062549, true, true, 0);
      } else {
        if (status === x++) {
          cm.sendNormalTalk("#b#e好礼送！送！送！#n#k就是要引爆每消灭#r500只#k#r等级范围怪物#k时会出现的#b#e冒险岛礼物#n#k。", 4, 9062549, true, true, 0);
        } else {
          if (status === x++) {
            cm.sendNormalTalk("在进行#b#e好礼送不停#n#k的#r30秒#k时间内，一共将召唤#r5个#k#r经验值#k满满的#b#e冒险岛礼物#n#k，引爆所有#b#e冒险岛礼物#n#k，还能爆出一波礼物！", 4, 9062549, true, true, 0);
          } else if (status === x++) {
            cm.sendNormalTalk("啊，对了，一天最多只能参加#r10次#k#b#e好礼送不停#n#k！\r\n快去赢取#b#e冒险岛礼物#n#k吧。\r\n你收获#b#e经验值#n#k，观众收获#r#e礼物#n#k！\r\n\r\n#e[活动时间]#n\r\n - 截止至2022年3月08日 23点59分\r\n\r\n※每天午夜初始化参加#e好礼送不停#n的次数。\r\n※若地区内正在进行#e好礼送不停#n，则无法参加好礼送不停。", 4, 9062549, true, true, 0);
            status = -1;
          }
        }
      }
    }
  }
}
function action分支1(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支2(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支3(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支4(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支5(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支6(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}
function action分支7(j, Y, I, x) {
  if (status <= x++) {
    status = -1;
  }
}