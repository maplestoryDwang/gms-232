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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111007, "oid=8431897", 1049, -250, 29, 999, 1099, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=8431897", "summon", 0, 0);
        cm.npc_ChangeController(9111006, "oid=8431898", 1248, -235, 19, 1198, 1298, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=8431898", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#泉奈……你怎么了……？", 37, 9111006, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#………。", 37, 9111007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你在生我的气吗……？", 37, 9111006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#唉……", 37, 9111007, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#哦……怎么了……你为什么叹气……", 37, 9111006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#那天你怎么说我来着？说我过激？害怕我？你确定？", 37, 9111007, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#你该不是……你是在为我那天随口说的话赌气吗……？", 37, 9111006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#随口说的？我都快……唉……算了。我不想跟你说话。", 37, 9111007, true, true);
                      } else if (status === V++) {
                        cm.warp(800000000, 0, false);
                        cm.npc_LeaveField("oid=8431897");
                        cm.npc_LeaveField("oid=8431897");
                        cm.npc_LeaveField("oid=8431898");
                        cm.npc_LeaveField("oid=8431898");
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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