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
      cm.sendNormalTalk("旅行者……身体还好吧?", 0, 9390466, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("……万幸啊。居然会碰上深海巨妖……\r\n还好我们的船员发现了被毁的船只,继而得以把你给救回来。不过话又说回来,你原本是想去哪里的呢?", 0, 9390466, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("为了去见冒险岛的英雄,我正前往#b金银岛#n呢。", 2, 9390466, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("冒险岛的英雄啊……那你知不知道与冒险岛英雄之一弗里德的后裔#b‘龙神’#n相关的事情呢?", 0, 9390466, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("是!!我熟悉得很!驯龙高手龙神!!!", 2, 9390466, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("是,传闻那个龙神就在#b‘射手村’#n。那就不妨到那里看看吧。", 0, 9390466, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("我认为谁都可以成为冒险岛的大英雄。用空就把你的冒险故事讲给我听好了!那就再见吧……", 0, 9390466, true, true);
                } else if (status === v++) {
                  cm.forceStartQuest(59064, '');
                  cm.forceCompleteQuest(59064);
                  cm.dispose();
                }
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