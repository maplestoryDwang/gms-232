var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(32707) == 1) {
    action0(f, E, e);
  } else {
    if (cm.isQuestFinished(32700) && cm.getQuestStatus(32701) == 0 || cm.isQuestFinished(32701) && cm.getQuestStatus(32702) == 0 || cm.isQuestFinished(32702) && cm.getQuestStatus(32703) == 0 || cm.isQuestFinished(32703) && cm.getQuestStatus(32704) == 0 || cm.isQuestFinished(32704) && cm.getQuestStatus(32705) == 0 || cm.isQuestFinished(32705) && cm.getQuestStatus(33530) == 0) {
      action1(f, E, e);
    } else if (cm.isQuestFinished(33530)) {
      action2(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action0(f, E, e) {
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("喂，我看你还是回去吧。打算蹭在儿生活到什么时候呢？", 37, 1530020, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("晕……？最开始把我召唤到这儿来的可是你啊。别到现在来跟我说什么让我回去不回去的话。", 37, 1530000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我都说多少遍了，把你弄过来也不是我有意的！还有，你可不可以别再用“晕”那种奇怪的语气跟我说话？", 37, 1530020, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我所生活的地方都是用这种语气说话的！", 37, 1530000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呃，我为什么非得承受这种折磨呢……看这回我还敢不敢再练习什么召唤魔法了！", 37, 1530020, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么情况……？听听发生的故事吧。", 57, 0, true, true);
              } else if (status === V++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#h0#，你是不是很好奇下次会发生什么故事呢？想知道的话就来和我对话吧。", 37, 1530020, false, true);
    } else if (status === V++) {
      cm.getTopMsgFont("和埃尔文对话, 即可开始下一章节. ", 3, 20, 20, 0);
      cm.dispose();
    }
  }
}
function action2(f, E, e) {
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#h0#，你是不是很想得到校服呢？那么你就试着到旧楼里去消灭鬼怪吧！", 37, 1530020, false, true);
    } else if (status === V++) {
      cm.getTopMsgFont("可开始挑战旧楼副本. ", 3, 20, 20, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;