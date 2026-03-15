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
      cm.sendNormalTalk("你好！#e#ho##k#n！\r\n\r\n我们正在举办#b#e蘑菇战令#n#k活动。", 4, 9401434, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e蘑菇战令#n#k是致力于帮助勇士们快速成长的活动。\r\n在活动期间新创建的#e#fs15##b#e该隐#k#n#fs12#角色中，#r每个账号只有一名角色#k可以参与蘑菇战令活动。", 4, 9401434, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("参与活动的角色均可在每次#e达到指定等级#n时领取#b#e成长支援礼物#n#k！", 4, 9401434, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("还有！\r\n\r\n激活#i4009496:# #t4009496:#的勇士还可领取我额外准备的#b#e特别礼物#n#k。", 4, 9401434, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("快来参与蘑菇战令吧！", 4, 9401434, true, true);
            } else if (status === v++) {
              cm.sendNormalTalk("※ 在活动期间新创建的活动职业中，#r每个账号只有一名角色#k可以参与蘑菇战令活动。\r\n\r\n#e[活动时间]#k\r\n\r\n#b#e2021年7月7日上午9点#到#b#e2021年9月7日晚上11点59分#ke为止#n#k\r\n\r\n#e[可参与活动的职业]#k\r\n\r\n#e#fs15##b#e该隐#k#n#fs12# ", 4, 9401434, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
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