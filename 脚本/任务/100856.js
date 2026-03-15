var status = -1;
var selectionLog = [];
function start(S, D, f) {
  if (status == 0 && S == 0) {
    cm.dispose();
    return;
  }
  if (S == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = f;
  var q = -1;
  if (status <= q++) {
    cm.dispose();
  } else {
    if (status == q++) {
      cm.askMenu("  开心的嗨翻天时间！你想知道些什么？\r\n#L0##b和我说说#e<直播-嗨翻天>#n吧。#k#l\r\n#L1##b和我说说#e<直播-嗨翻天>#n今天的现状吧。#k#l", 4, 9062549);
    } else {
      var X = "action分支" + selectionLog[1];
      eval(X)(S, D, f, q);
    }
  }
}
function action分支0(S, D, f, q) {
  if (status <= q++) {
    cm.sendNormalTalk("看来你很好奇我普利托专为冒险岛创作者特别准备的\r\n#b#e嗨翻天#n#k啊。", 4, 9062549, false, true, 0);
  } else {
    if (status === q++) {
      cm.sendNormalTalk("在#b#e嗨翻天#n#k中，就是要引爆每当消灭#r500只#k#r等级范围怪物#k时会出现的观众打赏的#b#e冒险岛惊喜福利袋#n#k。", 4, 9062549, true, true, 0);
    } else {
      if (status === q++) {
        cm.sendNormalTalk("反应#r1次#k，最多可在#r1分钟#k内分一定周期出现#b#e冒险岛惊喜福利袋#n#k。", 4, 9062549, true, true, 0);
      } else {
        if (status === q++) {
          cm.sendNormalTalk("快速引爆#b#e冒险岛惊喜福利袋#n#k，就能尽快结束反应时间，#b#e嗨翻天#n#k一次最多可以进行#r10次#k。", 4, 9062549, true, true, 0);
        } else {
          if (status === q++) {
            cm.sendNormalTalk("引爆狩猎后会出现的#b#e冒险岛惊喜福利袋#n#k！获得#r超丰厚的经验值#k后，尽情成长为#r人气创作者#k吧！\r\n\r\n#e[活动时间]#n\r\n -截止到2022年2月8日 23点59分\r\n\r\n※嗨翻天次数会在每天零点重置。\r\n※赛场上已经在做嗨翻天时，会无法触发嗨翻天。", 4, 9062549, true, true, 0);
          } else if (status === q++) {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action分支1(S, D, f, q) {
  if (status <= q++) {
    cm.sendNormalTalk("你想知道今天的反应现状？\r\n\r\n- 嗨翻天触发次数：#r0#k/10次\r\n- 等级范围怪物消灭数量：#r0#k/500只 ", 4, 9062549, false, true, 0);
  } else if (status === q++) {
    cm.dispose();
  }
}