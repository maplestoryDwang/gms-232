var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159458, "oid=227786", -266, -13, 23, -316, -216, 1, false, 0, false);
      cm.npc_ChangeController(2159459, "oid=227787", 225, -14, 28, 175, 275, 1, false, 0, false);
      cm.npc_ChangeController(2159460, "oid=227788", 690, -14, 33, 640, 740, 1, false, 0, false);
      cm.npc_ChangeController(2159457, "oid=227789", 689, 245, 13, 639, 739, 1, false, 0, false);
      cm.npc_ChangeController(2159482, 'oid=227790', 222, -14, 28, 172, 272, 1, false, 0, false);
      cm.npc_ChangeController(2159483, "oid=227791", 691, -14, 33, 641, 741, 1, false, 0, false);
      cm.npc_ChangeController(2159485, 'oid=227792', 692, -14, 33, 642, 742, 1, false, 0, false);
      cm.npc_ChangeController(2159486, "oid=227793", -269, -13, 23, -319, -219, 0, false, 0, false);
      cm.npc_ChangeController(2159487, 'oid=227794', -268, -13, 23, -318, -218, 0, false, 0, false);
      cm.npc_ChangeController(2159484, "oid=227795", 223, -14, 28, 173, 273, 1, false, 0, false);
      cm.forceStartQuest(38905, '0');
      cm.updateInfoQuest(38049, "igloo=0");
      cm.updateInfoQuest(38048, '');
      cm.forceStartQuest(38048, '');
      cm.forceCompleteQuest(38048);
      cm.gainExp(20000);
      cm.updateInfoQuest(38049, '');
      cm.forceStartQuest(38049, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(2159454, "oid=240718148", 200, 240, 9, 150, 250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240718148", 'summon', 0, 0);
      cm.npc_ChangeController(2159455, "oid=240718149", 280, 240, 10, 230, 330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240718149", 'summon', 0, 0);
      cm.npc_ChangeController(2159456, "oid=240718150", 360, 240, 15, 310, 410, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240718150", "summon", 0, 0);
      cm.sendNormalTalk("哎呀，雪块都掉下来了！入侵者！到这里来有什么目的！", 5, 2159454, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("说出目的！", 5, 2159455, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("目的！目的！", 5, 2159456, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('我是来找战神的……', 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("战神？难道你是来劫持战神的吗？啊，你这个劫持犯！", 5, 2159454, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("劫持犯！可恶的劫持犯！", 5, 2159455, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("坏蛋！坏蛋！", 5, 2159456, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("别跟我开玩笑。我听利琳说战神在这里。战神到底在什么地方？", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("好吧，我可以告诉你战神在哪。只要你能答对我们的问题！", 5, 2159454, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("答对了再说！", 5, 2159455, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("答对！答对！", 5, 2159456, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("如果你能猜对我们躲在哪个雪房子里，我就告诉你战神在哪里！好了，开始吧。", 5, 2159454, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=240718148");
                              cm.npc_LeaveField("oid=240718148");
                              cm.npc_LeaveField("oid=240718149");
                              cm.npc_LeaveField("oid=240718149");
                              cm.npc_LeaveField("oid=240718150");
                              cm.npc_LeaveField("oid=240718150");
                              cm.sendNormalTalk("我们躲在哪里呢？请#r点击雪房子#k，如果答对了，我就告诉你战神在哪里！", 5, 2159454, true, true);
                            } else if (status === V++) {
                              cm.eventSKill(0);
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
            }
          }
        }
      }
    }
  }
}