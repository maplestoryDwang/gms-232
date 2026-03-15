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
      cm.sendNormalTalk("#e#b#h0##k#n，2021年新的一年到啦！", 4, 9400791, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("希望今年你也会被满满的幸福包围，新年快乐！", 4, 9400791, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("新年快乐！", 16, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("为了迎接春节，我给大家准备了可以共享的丰富活动。", 4, 9400791, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("幸福就是要一起分享才会加倍！你要和我一起欢度春节吗？", 4, 9400791);
            } else {
              if (status === v++) {
                cm.updateInfoQuest(65907, "Todaytake=0;give=0;Todaygive=0");
                cm.updateInfoQuest(65907, "take=0;Todaytake=0;give=0;Todaygive=0");
                cm.updateInfoQuest(65907, "cnt=0;take=0;Todaytake=0;give=0;Todaygive=0");
                cm.forceCompleteQuest(65901);
                cm.sendNormalTalk("祝你度过一个愉快的春节。", 4, 9400791, false, true);
              } else if (status === v++) {
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