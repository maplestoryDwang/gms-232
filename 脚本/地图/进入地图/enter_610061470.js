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
      cm.updateInfoQuest(61333, "act1=610061470");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201547, "oid=2860545", 1620, 96, 33, 1570, 1670, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2860545", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2860546", 1680, 96, 34, 1630, 1730, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2860546", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2860547", 1724, 96, 31, 1674, 1774, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2860547", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2860548", 2080, 96, 37, 2030, 2130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2860548", "summon", 0, 0);
      cm.npc_ChangeController(9201546, "oid=2860549", 2183, 96, 41, 2133, 2233, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2860549", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2860548", "catch1", -1, 0);
      cm.npc_SetSpecialAction("oid=2860549", 'ready', -1, 0);
      cm.npc_SetSpecialAction("oid=2860547", "attack", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2040, 140);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.playerMessage(-1, "快速连按Ctrl键帮忙破坏幻日。");
            cm.inGameDirectionEvent_AskAnswerTime(5200);
          } else {
            if (status === V++) {
              cm.playerMessage(-1, "快速连按Ctrl键帮忙破坏幻日。");
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/guide1/0"], [5010, 150, 80, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2010);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_BreakEffect("17#17#17#", 5, 5, 5000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_4", 100);
                  cm.sendNormalTalk_Bottom("#face2#不——不！", 37, 9201534, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("BlackHeavenBoss/WhiteOut", 100);
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.warp(610061480, 0, true);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2860545");
                    cm.npc_LeaveField("oid=2860545");
                    cm.npc_LeaveField("oid=2860546");
                    cm.npc_LeaveField("oid=2860546");
                    cm.npc_LeaveField("oid=2860547");
                    cm.npc_LeaveField("oid=2860547");
                    cm.npc_LeaveField("oid=2860548");
                    cm.npc_LeaveField("oid=2860548");
                    cm.npc_LeaveField("oid=2860549");
                    cm.npc_LeaveField("oid=2860549");
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