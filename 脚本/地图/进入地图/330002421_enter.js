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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=38067807", 514, 20, 3, 464, 564, 0, true, false);
      cm.npc_SetSpecialAction("oid=38067807", 'summon', 0, 0);
      cm.npc_ChangeController(1530240, "oid=38067808", 814, 20, 4, 764, 864, 1, true, false);
      cm.npc_SetSpecialAction("oid=38067808", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38067808", "down", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("还是洗去她的部分记忆为好。\r\n等她醒来，她就能过上平凡的生活了。", 37, 1530050, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('你能做到吗？', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=38067807", -1);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("难道你忘啦？我可是#b操作之魔法师#k啊。", 37, 1530050, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=38067807", 0);
                  cm.npc_SetForceMove("oid=38067807", 1, 180, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=38067807", 'magic', 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    cm.effect_Voice("Skill.img/1111007/Use", 100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                          cm.effect_Text(["#fn黑体##fs26#第二天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                        } else if (status === V++) {
                          cm.forceCompleteQuest(32869);
                          cm.gainExp(Math.pow(cm.getLevel(), 3));
                          cm.forceCompleteQuest(32872);
                          cm.dispose();
                          cm.warp(330000005, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;