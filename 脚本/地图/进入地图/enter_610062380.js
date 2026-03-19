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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062380");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201546, "oid=2683433", 80, 200, 42, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2683433", 'summon', 0, 0);
      cm.npc_ChangeController(9201534, "oid=2683434", 450, 200, 49, 400, 500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2683434", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2683433", "hurt", -1, 1);
      cm.npc_SetSpecialAction("oid=2683434", "attack2", -1, 1);
      cm.inGameDirectionEvent_头顶图片(["Map/EffectGL.img/MBlockbuster/n_attack", "oid=2683434"], [30000, 5, -30, 1, 0, 1, 0, 0]);
      cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
      cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
        cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.playerMessage(-1, "快速连按Ctrl键格挡纳瑞坎的攻击。");
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/guide1/0"], [5010, 150, -300, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2010);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
              cm.inGameDirectionEvent_BreakEffect("17#17#17#", 5, 5, 5000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("nightmare/wakeup");
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(610062390, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=2683433");
                  cm.npc_LeaveField("oid=2683433");
                  cm.npc_LeaveField("oid=2683434");
                  cm.npc_LeaveField("oid=2683434");
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