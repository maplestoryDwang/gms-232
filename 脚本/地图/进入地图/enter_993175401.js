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
      cm.npc_SetSpecialAction("oid=12204514", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1138, -463);
      cm.npc_setForceFlip("oid=12204514", 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##b5号客房#k……就是这把钥匙。我来开门。这是把老钥匙了，有点不太好使。", 37, 9062256, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('好的，劳烦你了……', 57, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不过……", 37, 9062256, true, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                cm.npc_setForceFlip("oid=12204514", -1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##b#h0##k，您相信#b幽灵#k吗？", 37, 9062256, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……#b幽灵#k吗？", 57, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊，终于打开了。那么……请好好休息吧。", 37, 9062256, true, true, 1);
                    } else if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.setStandAloneMode(false);
                      cm.npc_LeaveField("oid=12204514");
                      cm.dispose();
                      cm.warp(993175451, 0, false);
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