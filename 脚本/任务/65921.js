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
      cm.sendNormalTalk_Bottom("#face0#一回来就和你说这些，还有点反应不过来吧。\r\n我会告诉其他孩子，你去休息一下吧。", 36, 9401282, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b不，难得回家一次，感觉全身的疲劳一扫而空。\r\n果然还是家里最好。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#呵呵，你这小子……", 36, 9401282, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#来……拿着。", 36, 9401282, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0##b这是……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#这是红还丹和清心丹，是恢复体力的灵药。", 36, 9401282, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("#face0#对了！你能在我面前服用一粒吗？\r\n那样我才能稍微放心一点。", 36, 9401282, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(65921, '');
                  cm.playerMessage(5, "可通过快捷键[I]打开背包。");
                  cm.getTopMsgFont("可通过快捷键[I]打开背包。", 3, 20, 20, 0, 0);
                  cm.playerMessage(5, "通过拖放道具图标，可以配置到右下方的快捷栏中。");
                  cm.getTopMsgFont("通过拖放道具图标，可以配置到右下方的快捷栏中。", 3, 20, 20, 0, 0);
                  cm.openUIWithOption(0, 2);
                  cm.gainItem(2000056, 1);
                  cm.gainItem(2000057, 1);
                  cm.npc_LeaveField("oid=206728");
                  cm.npc_LeaveField("oid=206734");
                  cm.playerMessage(5, "恢复药水随时可以在村庄的杂货店中购买。");
                  cm.getTopMsgFont("恢复药水随时可以在村庄的杂货店中购买。", 3, 20, 20, 0, 0);
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
      cm.sendNormalTalk_Bottom("#face2##b呵呵，这样就算跑三天三夜都没问题！", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#呵呵，太好了。\r\n我准备了很多，别舍不得吃。", 36, 9401282, true, true, 1);
      } else if (status === v++) {
        cm.updateInfoQuest(65921, "item=1");
        cm.forceCompleteQuest(65921);
        cm.gainExp(1000);
        cm.dispose();
      }
    }
  }
}