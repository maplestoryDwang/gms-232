var status = -1;
var selectionLog = [];
function action(S, K, Y) {
  if (status == 0 && S == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = Y;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else {
    if (status === n++) {
      cm.npc_ChangeController(1540855, "oid=58976", 883, 60, 6, 833, 933, 1, false, 0, false);
      cm.npc_ChangeController(1540862, 'oid=58977', 616, 60, 6, 566, 666, 1, false, 0, false);
      cm.npc_ChangeController(1540863, "oid=58978", 533, 60, 6, 483, 583, 1, false, 0, false);
      cm.npc_ChangeController(1540864, "oid=58979", 455, 60, 6, 405, 505, 1, false, 0, false);
      cm.npc_ChangeController(1540861, "oid=58980", 735, 60, 6, 695, 795, 4, true, 0, false);
      cm.npc_ChangeController(1540859, 'oid=58981', 1042, 60, 8, 993, 1092, 1, false, 0, false);
      cm.npc_ChangeController(1540870, "oid=58982", 1142, 60, 8, 1092, 1192, 1, false, 0, false);
      cm.npc_ChangeController(1540868, "oid=58983", 1443, 60, 8, 1393, 1493, 0, false, 0, false);
      cm.npc_ChangeController(1540867, 'oid=58984', 950, 60, 6, 900, 953, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2170, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === n++) {
        cm.npc_ChangeController(1540882, "oid=306153174", 2550, -20, 9, 2500, 2600, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=306153174", "summon", 0, 0);
        cm.npc_ChangeController(1540883, "oid=306153175", 2650, -20, 9, 2600, 2700, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=306153175", "summon", 0, 0);
        cm.npc_ChangeController(1540872, "oid=306153176", 1954, 50, 7, 1904, 2004, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153176", "summon", 0, 0);
        cm.npc_ChangeController(1540870, "oid=306153177", 2005, 50, 7, 1955, 2055, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153177", 'summon', 0, 0);
        cm.npc_ChangeController(1540871, "oid=306153178", 2078, 50, 7, 2028, 2128, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153178", "summon", 0, 0);
        cm.npc_ChangeController(1540867, "oid=306153179", 2132, 50, 7, 2082, 2182, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153179", "summon", 0, 0);
        cm.npc_ChangeController(1540856, "oid=306153180", 2240, 50, 9, 2190, 2290, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153180", "summon", 0, 0);
        cm.npc_ChangeController(1540869, "oid=306153181", 2367, 50, 9, 2317, 2417, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=306153181", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === n++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === n++) {
            cm.npc_SetForceMove("oid=306153174", -1, 1000, 120);
            cm.npc_SetForceMove("oid=306153175", -1, 1000, 120);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === n++) {
              cm.sendNormalTalk_Bottom("是，是武装抢劫！大家赶紧逃！快点！", 37, 1540865, false, true, 1, 4500);
            } else {
              if (status === n++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === n++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153176"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153177"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153178"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153179"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153180"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306153181"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === n++) {
                    cm.setAmbience("Ambience.img/warning", 100, 60);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === n++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === n++) {
                      cm.dispose();
                      cm.warp(350131300, 0, true);
                      cm.npc_LeaveField("oid=306153174");
                      cm.npc_LeaveField("oid=306153174");
                      cm.npc_LeaveField("oid=306153175");
                      cm.npc_LeaveField("oid=306153175");
                      cm.npc_LeaveField("oid=306153176");
                      cm.npc_LeaveField("oid=306153177");
                      cm.npc_LeaveField("oid=306153178");
                      cm.npc_LeaveField("oid=306153179");
                      cm.npc_LeaveField("oid=306153180");
                      cm.npc_LeaveField("oid=306153181");
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