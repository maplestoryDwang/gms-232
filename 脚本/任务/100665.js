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
      cm.sendNormalTalk("\r\n你好！\r\n#e这里是满月宴会场最受欢迎的摊位！#n\r\n#e#b<帕伊尼的魔杖>#n#k！", 0, 9062351, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n我在课堂上制作出了可以一口气 #e升级#n的神奇魔杖！", 0, 9062351, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n但是妖精的世界可没有免费的午餐！", 0, 9062351, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n要想使用我的魔杖就得给我 #r200个月亮糖#k！", 0, 9062351, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n顺带一提，魔杖仅对#r141级 ～ 199级#k的角色有效。", 0, 9062351, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("\r\n另外，根据角色等级，每次#b最多可以升10级#k。但是，等级越高升级的概率越低！", 0, 9062351, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("\r\n最近来找我的勇士过多，所以我打算用以下方式管理魔杖！\r\n\r\n#b#e<每个世界可使用次数>#n#k\r\n - 工作日：每个世界 #r1次#k\r\n - 周末（周六、周日）：每个世界#r2次#k", 0, 9062351, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("\r\n那就 #e#b<满月宴会场>#k#n再见了！", 0, 9062351, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("\r\n#e※ 活动时间\r\n  - 截至2021年5月11日 23点59分#n", 0, 9062351, true, true);
                    } else if (status === v++) {
                      cm.updateInfoQuest(100665, "tuto=1");
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