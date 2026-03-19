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
      cm.setPartner(0, 9400580, 0, 0);
      cm.Hidden_background('guide', 0);
      cm.updateInfoQuest(64086, "dir01=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400667, "oid=7619841", 486, 440, 1, 436, 536, 1, true, false);
      cm.npc_SetSpecialAction("oid=7619841", 'summon', 0, 0);
      cm.npc_ChangeController(9400580, "oid=7619842", 170, 440, 12, 120, 220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7619842", 'summon', 0, 0);
      cm.forceStartQuest(64162, "fight");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 70, 440);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7619842", "attack1", -1, 0);
        cm.npc_SetSpecialAction("oid=7619841", "jumpattack", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=7619841");
          cm.inGameDirectionEvent_AskAnswerTime(250);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b艾丽卡！小心！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=7619841", -1, 100, 50);
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                cm.setNpcSpecialActionReset("oid=7619842");
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=7619842", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=7619842", -1, 100, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(5, 0);
                      cm.npc_SetForceMove("oid=7619841", 1, 50, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack7", 100);
                        cm.npc_SetSpecialAction("oid=7619841", 'howl', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b呃！这家伙还真不是一般的难对付啊。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7619842"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face3#怪物军团已经走远了！", 37, 9400580, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0##b不行。", 37, 9400580, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3##b先上树吧！", 37, 9400580, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else {
                                  if (status === V++) {
                                    cm.Hidden_background('guide', 1);
                                    cm.sendNewEffects(12, [2000, -50, 20, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=7619842");
                                        cm.npc_LeaveField("oid=7619842");
                                        cm.setPartner(1, 9400580, 80011692, 0);
                                        cm.sendNewEffects(19, [0]);
                                      } else if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=7619841");
                                        cm.npc_SetForceMove("oid=7619841", -1, 300, 50);
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