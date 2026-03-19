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
      cm.updateInfoQuest(61333, "act1=610061270");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2832637", 180, -1783, 41, 130, 230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2832637", 'summon', 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.inGameDirectionEvent_AskAnswerTime(7200);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#克拉齐亚 - 守护者的要塞"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#我必须找到#b幻日#k和#b纳瑞坎#k存在的证据。", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#所有人都以为我疯了，这就是所谓的众人皆醉我独醒吧。", 37, 9201539, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2832637", 1, 50, 80);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b警告#k\r\n不可进入。\r\n设施修缮中。", 37, 9201544, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3##b守护者的要塞#k曾是历史上最强大的战士们——#b宗师#k的基地。", 37, 9201539, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#我的研究暗示他们和纳瑞坎有某种联系。", 37, 9201539, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2832637", 1, 200, 80);
                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.eventSKill(0);
                            cm.warp(610061280, 0, true);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=2832637");
                            cm.npc_LeaveField("oid=2832637");
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