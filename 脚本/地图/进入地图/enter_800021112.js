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
      cm.forceCompleteQuest(58800);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111004, "oid=47194492", 78, -59, 30, 28, 128, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=47194492", 'summon', 0, 0);
        cm.npc_ChangeController(9111002, "oid=47194493", -379, -59, 47, -429, -329, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=47194493", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("喏，我把棘鬼带来了。现在你可以答应我了吧？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#同伴……？", 37, 9111004, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我只不过是因为这红毛妖鬼妨碍了我的告白，所以想找他决斗而已！", 37, 9111004, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=47194493"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(800);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哎呀，你别激动嘛。那……那件事……是我不对。我跟你道歉。", 37, 9111002, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你觉得你的道歉有用吗？看剑！", 37, 9111004, true, true);
                    } else if (status === V++) {
                      cm.warp(800021113, 0, false);
                      cm.npc_LeaveField("oid=47194492");
                      cm.npc_LeaveField("oid=47194492");
                      cm.npc_LeaveField("oid=47194493");
                      cm.npc_LeaveField("oid=47194493");
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