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
      cm.sendNormalTalk("你好，#e#ho##n！", 5, 9401434, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("在蘑菇战令活动结束的#e#b2021年9月7日晚上11点59分#k#n之前，我为勇士们准备了丰富多样助力成长的成长支援道具。", 5, 9401434, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("想知道参与方法吗？非常简单！", 5, 9401434, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("在左侧通知中点击蘑菇战令，通过“查看蘑菇战令”，可以查看各等级所对应的成长支援道具。\r\n每次#e达到指定等级#n，均可获得奖励。", 5, 9401434, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("还有! #i4009496:# #t4009496:#激活后还可以获得 #b#e特别的礼物#n#k!.\r\n\r\n(#i4009496:# #t4009496:#可在商城购买.)", 5, 9401434, true, true);
            } else {
              if (status === v++) {
                cm.askYesNo("确定要使用#e#fs15##b#h0##k#n#fs12#角色参与活动吗？", 5, 9401434);
              } else if (status === v++) {
                cm.forceCompleteQuest(66163);
                cm.updateInfoQuest(66163, "MushroomCharacterCreateDate=21/09/05/12/41");
                cm.forceCompleteQuest(501366);
                cm.updateInfoQuest(501366, "startName=" + cm.getName());
                cm.sendNormalTalk("千万别忘记领取丰富多样的成长支援道具哦！", 5, 9401434, false, false);
                cm.dispose();
              }
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