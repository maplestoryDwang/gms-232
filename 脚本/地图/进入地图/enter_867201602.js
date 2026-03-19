var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if ("chk1=1;chk2=1;chk3=1" === cm.getInfoQuest(64080)) {
    cm.npc_ChangeController(9400580, "oid=7611984", 700, 470, 2, 0, 1280, 1, true, false);
    cm.npc_SetSpecialAction("oid=7611984", "summon", 0, 0);
    cm.npc_ChangeController(9400595, "oid=7611985", 1000, 470, 1, 0, 1410, 1, true, false);
    cm.npc_SetSpecialAction("oid=7611985", 'summon', 0, 0);
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
      cm.Hidden_background("q64080", 0);
      cm.npc_ChangeController(9400580, "oid=7611984", 1230, 470, 2, 1180, 1280, 1, true, false);
      cm.npc_SetSpecialAction("oid=7611984", "summon", 0, 0);
      cm.npc_ChangeController(9400595, "oid=7611985", 1360, 470, 1, 1310, 1410, 1, true, false);
      cm.npc_SetSpecialAction("oid=7611985", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_SetForceMove("oid=7611984", -1, 600, 100);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
        cm.inGameDirectionEvent_AskAnswerTime(250);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7611985", -1, 300, 80);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b艾丽卡，这里还不错。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=7611984", 1);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7611984", 1, 100, 80);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……挺宽敞啊。", 37, 9400580, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b一整天什么都没吃……你饿了吧？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b我去找点吃的，你就待在这里，如果有危险就大叫。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#好的，#h0#。那我就先找些生火的柴火吧。", 37, 9400580, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b别走远了，就在这附近找吧。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#别担心啦。", 37, 9400580, true, true);
                            } else {
                              if (status === V++) {
                                cm.Hidden_background("q64080", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else if (status === V++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.playerMessage(-1, "寻找能和艾丽卡一起吃的肉吧。");
                                cm.updateInfoQuest(64080, "chk1=1;chk2=1;chk3=1");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;