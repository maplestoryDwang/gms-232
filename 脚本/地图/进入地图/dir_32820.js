var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(1530150, "oid=37824862", 102, 61, 4, 52, 152, 0, true, false);
      cm.npc_SetSpecialAction("oid=37824862", "summon", 0, 0);
      cm.npc_ChangeController(1530160, "oid=37824863", 102, 61, 4, 52, 152, 0, true, false);
      cm.npc_SetSpecialAction("oid=37824863", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("怎么突然停电了……", 37, 1530160, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice2.img/Friends/CH3_04/1", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#哼……哼哼……哼呃……", 37, 1530150, true, true);
        cm.effect_Voice("Voice2.img/Friends/CH3_04/2", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#麦格纳斯老师？", 37, 1530160, true, true);
          cm.effect_Voice("Voice2.img/Friends/CH3_04/3", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#呃呃呃……", 37, 1530150, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH3_04/4", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#什么？你说什么？", 37, 1530160, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH3_04/5", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#好怕……我好怕！哼呃呃呃呃呃嗯！好怕，我好怕！", 37, 1530150, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH3_04/6", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#有什么好怕的？一个大男人。好像是临时停电，很快就会来电的。所以你再忍一会儿就好了。", 37, 1530160, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH3_04/7", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#哼呃呃，哼呃呃呃……哼", 37, 1530150, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH3_04/8", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#真是吵死了！", 37, 1530160, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH3_04/9", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#希拉老师……？", 37, 1530150, false, true);
                          cm.effect_Voice("Voice2.img/Friends/CH3_04/10", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("只要等到来电就好。我会守在你旁边的，所以你就别哭啦。听着真让人心烦。", 37, 1530160, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH3_04/11", 100);
                          } else if (status === V++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                            cm.forceCompleteQuest(32820);
                            cm.dispose();
                            cm.warp(330000500, 0);
                            cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;