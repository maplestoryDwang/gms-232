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
      cm.updateInfoQuest(501143, 'isReboot=0');
      cm.sendNormalTalk("\r\n以专属战斗队员开展的战略性战斗！\r\n#b#e<联盟竞技场SEASON 1>#k#n上线！", 0, 9062316, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n你好，我是负责运营#b#e<联盟竞技场SEASON 1>#k#n的主持人会计小姐。", 0, 9062316, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n#b#e<联盟竞技场SEASON 1>#k#n是在世界内现有角色中选出6个角色组成战队，与对方展开较量的战场。", 0, 9062316, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n战斗共有5个回合，最先在3个回合中胜出的勇士将成为最终胜利者。", 0, 9062316, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n每回合会随机配置3种辅助者与战斗队员一起作战，你可以据此给每个回合指定出战的战斗队员。", 0, 9062316, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("\r\n当然，我们还给参加#e#b<联盟竞技场SEASON 1>#k#n的勇士们准备了非常丰盛的礼物。", 0, 9062316, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("\r\n那么，你准备好挑战成为#b#e<联盟竞技场SEASON 1>#k#n冠军了吗？", 0, 9062316, true, true);
                } else {
                  if (status === v++) {
                    cm.updateInfoQuest(501106, 'tuto=1');
                    cm.updateInfoQuest(501088, "mmr=1000");
                    cm.sendNormalTalk("\r\n好。\r\n我期待你的精彩表现哦，#b#h0##k。", 0, 9062316, true, true);
                  } else {
                    if (status === v++) {
                      cm.askYesNo("\r\n是否立即前往#b#e<联盟竞技场>#k#n？", 0, 9062316);
                    } else if (status === v++) {
                      cm.updateInfoQuest(100645, "rMap=" + cm.getMapId());
                      cm.warp(993181000, 0);
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