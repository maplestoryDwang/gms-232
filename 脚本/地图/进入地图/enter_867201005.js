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
      cm.Hidden_background('close', 0);
      cm.forceCompleteQuest(64048);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1015, -24);
      cm.npc_ChangeController(9400581, "oid=3711145", 640, 0, 22, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711145", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=3711146", 550, 0, 21, 500, 600, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711146", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=3711147", 500, 0, 21, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711147", 'summon', 0, 0);
      cm.npc_ChangeController(9400593, "oid=3711148", 440, -35, 5, 390, 490, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711148", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=3711149", 380, -35, 5, 330, 430, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711149", 'summon', 0, 0);
      cm.npc_ChangeController(9400588, "oid=3711150", 325, -35, 3, 275, 375, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711150", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=3711151", 420, 0, 20, 370, 470, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711151", 'summon', 0, 0);
      cm.npc_ChangeController(9400598, "oid=3711152", 370, 0, 20, 320, 420, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711152", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=3711153", 330, 0, 20, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711153", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=3711154", 260, 0, 20, 210, 310, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711154", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=3711155", 200, 0, 19, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711155", "summon", 0, 0);
      cm.npc_ChangeController(9400584, "oid=3711156", 136, 0, 19, 86, 186, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711156", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3711157", 80, 0, 19, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711157", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3711158", 30, 0, 19, -20, 80, 0, true, false);
      cm.npc_SetSpecialAction("oid=3711158", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=3711159", 950, 0, 24, 900, 1000, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711159", "summon", 0, 0);
      cm.forceForfeitQuest(64164);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400583, "oid=3711160", 1060, -35, 25, 1010, 1110, 1, true, false);
      cm.npc_SetSpecialAction("oid=3711160", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3711151"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3711151", 1, 350, 150);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=3711147", 1);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=3711146", 1);
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=3711145", 1);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎呦喂！咳，还好你们没事！", 37, 9400597, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你们几位勇士进去之后，我不知多担心……没有受伤吧？", 37, 9400597, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……（小声嘀咕，他这是干嘛？）", 37, 9400582, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=3711151", 1, 50, 50);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你们辛苦了吧，快别站着，都进去吧？", 37, 9400597, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=3711151", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#咳，可汗村长！快进去吧！这边走~~", 37, 9400597, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=3711151", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=3711151", 1, 100, 50);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=3711145", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711146", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711147", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711148", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711149", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711150", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711152", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711153", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711154", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711155", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711156", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711157", 1, 100, 50);
                                          cm.npc_SetForceMove("oid=3711158", 1, 100, 50);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439152, 2028372, 2023795, 2023796, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face0#我真糊涂，怎么忘了覆水难收这个简单的道理……", 37, 9400587, false, true);
                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我对你也多有冒犯，之前一直把你的好意和牺牲当做理所当然地接受，做了很多自私的事。", 37, 9400587, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#这些是村里人为感激你而筹集的一点心意，托我交给你。\r\n……看来我才是卡夫塔佩最目光短浅的人。", 37, 9400587, true, true);
                                                } else if (status === V++) {
                                                  cm.forceCompleteQuest(64049);
                                                  cm.forceCompleteQuest(64051);
                                                  cm.gainItem(2439152, 1);
                                                  cm.gainItem(2028372, 1);
                                                  cm.gainItem(2023795, 1);
                                                  cm.gainItem(2023796, 1);
                                                  cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                  cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                  cm.dispose();
                                                  cm.warp(867201011, 1);
                                                  cm.monadEndingScene(-1, -1, null);
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