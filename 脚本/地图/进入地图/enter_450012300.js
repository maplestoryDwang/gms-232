var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(35810) && cm.getQuestStatus(35811) == 0) {
    action1(f, E, e);
  } else {
    cm.npc_ChangeController(9000123, "oid=51274", -673, -246, 9, -723, -623, 0, false, 0, false);
    cm.npc_ChangeController(3003811, "oid=51275", -1068, 3, 3, -1118, -1018, 0, false, 0, false);
    cm.npc_ChangeController(9010022, "oid=51276", -772, 3, 3, -822, -722, 0, false, 0, false);
    cm.npc_ChangeController(3003659, "oid=51277", -346, 3, 3, -396, -296, 4, true, 0, false);
    cm.npc_ChangeController(3003659, "oid=51278", 297, 31, 13, 260, 347, 5, true, 0, false);
    cm.npc_ChangeController(3003659, "oid=51279", -460, 3, 3, -510, -410, 4, true, 0, false);
    cm.npc_ChangeController(3003810, "oid=51280", -937, 3, 3, -987, -887, 0, false, 0, false);
    cm.npc_ChangeController(3003965, "oid=51281", -234, 3, 3, -284, -184, 0, false, 0, false);
    cm.npc_ChangeController(3003960, "oid=51282", -137, 3, 3, -187, -87, 0, false, 0, false);
    cm.npc_ChangeController(9000124, "oid=51283", -584, -242, 9, -634, -534, 1, false, 0, false);
    cm.npc_ChangeController(3003659, 'oid=51284', 198, 31, 10, 148, 220, 5, true, 0, false);
    cm.onSetMapObjectMove("attack", [1, 0, 0]);
    cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
    cm.monadForceMove("giantHit1", 0, 0);
    cm.monadForceMove('giantHit2', 0, 0);
    cm.monadForceMove("giantHit3", 0, 0);
    cm.monadForceMove("giantHit4", 0, 0);
    cm.monadForceMove("giantHit5", 0, 0);
    cm.monadForceMove("giantHit6", 0, 0);
    cm.monadForceMove('giantHit7', 0, 0);
    cm.monadForceMove("giantHit8", 0, 0);
    cm.monadForceMove("giantHit9", 0, 0);
    cm.monadForceMove("giantHit10", 0, 0);
    if (cm.isQuestActive(35811)) {
      cm.updateInfoQuest(35831, "60=h1;52=h1;53=h1;55=h1;65=h0;56=h1;57=h1;58=h1");
    }
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(9000123, "oid=51274", -673, -246, 9, -723, -623, 0, false, 0, false);
      cm.npc_ChangeController(3003811, "oid=51275", -1068, 3, 3, -1118, -1018, 0, false, 0, false);
      cm.npc_ChangeController(9010022, 'oid=51276', -772, 3, 3, -822, -722, 0, false, 0, false);
      cm.npc_ChangeController(3003659, 'oid=51277', -346, 3, 3, -396, -296, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=51278", 297, 31, 13, 260, 347, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=51279", -460, 3, 3, -510, -410, 4, true, 0, false);
      cm.npc_ChangeController(3003810, "oid=51280", -937, 3, 3, -987, -887, 0, false, 0, false);
      cm.npc_ChangeController(3003965, "oid=51281", -234, 3, 3, -284, -184, 0, false, 0, false);
      cm.npc_ChangeController(3003960, 'oid=51282', -137, 3, 3, -187, -87, 0, false, 0, false);
      cm.npc_ChangeController(9000124, "oid=51283", -584, -242, 9, -634, -534, 1, false, 0, false);
      cm.npc_ChangeController(3003659, "oid=51284", 198, 31, 10, 148, 220, 5, true, 0, false);
      cm.onSetMapObjectMove("attack", [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.monadForceMove("giantHit2", 0, 0);
      cm.monadForceMove('giantHit3', 0, 0);
      cm.monadForceMove("giantHit4", 0, 0);
      cm.monadForceMove('giantHit5', 0, 0);
      cm.monadForceMove("giantHit6", 0, 0);
      cm.monadForceMove("giantHit7", 0, 0);
      cm.monadForceMove("giantHit8", 0, 0);
      cm.monadForceMove("giantHit9", 0, 0);
      cm.monadForceMove("giantHit10", 0, 0);
      cm.npc_ChangeController(3003923, "oid=2183919", -205, -50, 3, -255, -155, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183919", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 95, -20);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('汉斯。', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#核心分析……结束了……", 37, 3003923, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
              cm.sendNormalTalk_Bottom("#face0#……你……", 37, 3003923, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("汉斯？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#唉……通……啊。", 37, 3003923, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2183919", "special", 1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2183919");
                        cm.npc_LeaveField("oid=2183919");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#可能是因为新登场的怪物。", 37, 3003758, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#据说他们释放出的奇怪电波，让船上的各种装置都出了错。", 37, 3003758, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("看来得去甲板上看看。", 57, 0, true, true);
                            } else if (status === V++) {
                              cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;dir300=end;dir410_1=end;dir400=end;dir410_2=end;skip=5;dir600=end;skip2=3");
                              cm.OnStartNavigation(450012310, 0, 'east01', 0);
                              cm.setStandAloneMode(false);
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
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}