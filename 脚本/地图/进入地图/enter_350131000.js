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
      cm.npc_ChangeController(1540855, "oid=58961", 883, 60, 6, 833, 933, 1, false, 0, false);
      cm.npc_ChangeController(1540862, 'oid=58962', 616, 60, 6, 566, 666, 1, false, 0, false);
      cm.npc_ChangeController(1540863, 'oid=58963', 533, 60, 6, 483, 583, 1, false, 0, false);
      cm.npc_ChangeController(1540864, "oid=58964", 455, 60, 6, 405, 505, 1, false, 0, false);
      cm.npc_ChangeController(1540868, "oid=58965", 1443, 60, 8, 1393, 1493, 0, false, 0, false);
      cm.npc_ChangeController(1540861, "oid=58966", 695, 60, 6, 695, 795, 5, true, 0, false);
      cm.npc_ChangeController(1540869, "oid=58967", 2367, 60, 9, 2317, 2417, 1, false, 0, false);
      cm.npc_ChangeController(1540871, 'oid=58968', 2078, 60, 7, 2028, 2128, 0, false, 0, false);
      cm.npc_ChangeController(1540859, "oid=58969", 1042, 60, 8, 993, 1092, 1, false, 0, false);
      cm.npc_ChangeController(1540856, "oid=58970", 2240, 60, 9, 2190, 2290, 1, false, 0, false);
      cm.npc_ChangeController(1540872, "oid=58971", 1964, 60, 7, 1914, 2014, 0, false, 0, false);
      cm.npc_ChangeController(1540867, 'oid=58972', 2132, 60, 7, 2082, 2141, 1, false, 0, false);
      cm.npc_ChangeController(1540870, "oid=58973", 1142, 60, 8, 1092, 1192, 1, false, 0, false);
      cm.npc_ChangeController(1540865, "oid=306115811", 1715, -20, 7, 1665, 1765, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=306115811", "summon", 0, 0);
      cm.npc_ChangeController(1540876, "oid=306115812", 2320, -20, 2, 2270, 2370, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=306115812", "summon", 0, 0);
      cm.npc_ChangeController(1540878, "oid=306115813", 1650, -24, 7, 1600, 1700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=306115813", 'summon', 0, 0);
      cm.npc_ChangeController(1540879, "oid=306115814", 1570, -24, 7, 1520, 1620, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=306115814", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1670, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么状况，停电了吗？", 37, 1540865, false, true);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=306115813");
                  cm.npc_LeaveField("oid=306115813");
                  cm.npc_LeaveField("oid=306115814");
                  cm.npc_LeaveField("oid=306115814");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                    cm.sendNormalTalk_Bottom("各……各位，好像是暂时停电了，请大家不要惊慌。", 37, 1540876, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=306115811"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=306115811", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=306115811", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=306115811"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(350131100, 0, true);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.npc_LeaveField("oid=306115811");
                              cm.npc_LeaveField("oid=306115811");
                              cm.npc_LeaveField("oid=306115812");
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