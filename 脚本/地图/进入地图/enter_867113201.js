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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400233, "oid=23076635", 220, 80, 6, 170, 270, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23076635", 'summon', 0, 0);
      cm.npc_ChangeController(9400234, "oid=23076636", 446, 80, 7, 396, 496, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23076636", "summon", 0, 0);
      cm.npc_ChangeController(9400235, "oid=23076637", -146, 80, 5, -196, -96, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23076637", 'summon', 0, 0);
      cm.npc_ChangeController(9400236, "oid=23076638", -233, 80, 4, -283, -183, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23076638", "summon", 0, 0);
      cm.npc_ChangeController(9400237, "oid=23076639", -321, 80, 4, -371, -271, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23076639", "summon", 0, 0);
      cm.npc_ChangeController(9400232, "oid=23076640", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23076640", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=23076635", "attack2", 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402065/Attack1", 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=23076640", 'up', 0, 0);
          cm.npc_SetSpecialAction("oid=23076635", "attack2", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=23076635", "attack2", 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402065/Attack1", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=23076635", "attack2", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=23076635", "attack2", 0, 0);
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402065/Attack1", 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.updateInfoQuest(63090, "lightning=0;green=1;red=1;DnN=0;raining=0;blue=1");
                    cm.forceForfeitQuest(63092);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                    cm.updateInfoQuest(63095, 'angle=90');
                    cm.forceStartQuest(63096, "happy");
                    cm.forceStartQuest(63253, "not");
                    cm.playSoundEffDirectly("SoundEff.img/PL_AfterLand/clear_day");
                    cm.playSoundEffDirectly("SoundEff.img/PL_AfterLand/clear_night");
                    cm.playSoundEffDirectly("SoundEff.img/PL_AfterLand/raining");
                    cm.playSoundEffDirectly("SoundEff.img/PL_AfterLand/lightning");
                    cm.playSoundEffDirectly("SoundEff.img/PL_AfterLand/rainNlightning");
                    cm.setMobImage("SoundEff.img/PL_AfterLand/clear_day", 200);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/lamp_cle_on", 100);
                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, -90, 100, 1);
                    cm.afterlandChangeMapObject('nightObj', 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("FB_cle", 1, 1, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("FB_lig_day", 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("FB_lig_night", 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("FB_rai", 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("FB_rainlig", 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("lamp_cle_on", 1, 1, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("lamp_lig_on", 1, 0, 3000, 0, 0, 0, 0);
                    cm.afterlandChangeMapObject("lamp_rai_on", 1, 0, 3000, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("#fs15##e今天的任务是生存！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400233, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_NormalSpeechBalloon("#fs15##e活到最后的人才是最强的勇士！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400233, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=23076637", 1, 200, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=23076639", 1, 250, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=23076638", 1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_NormalSpeechBalloon("#fs15##e呜哇啊啊啊！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400235, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_NormalSpeechBalloon("#fs15##e哇啊啊啊啊啊啊！！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400236, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("#fs15##e唔！！唔！！唔！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400237, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=23076635", "attack", 0, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402065/Attack1", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=23076636", 'attack', 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402066/Attack1", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=23076637", "attack", 0, 0);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402067/Attack1", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=23076638", "attack", 0, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402068/Attack1", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=23076639", "attack", 0, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402069/Attack1", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=23076635", 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 332, 72);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=23076635", "attack", 0, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402065/Attack1", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                          cm.emotion(1, 1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=23076636", "attack", 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402066/Attack1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.emotion(5, 3000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b(这冷不丁的是闹哪样！)", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b(我也一起战斗吧！)", 57, 0, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.updateInfoQuest(63098, "FirstEnter1=1;FirstEnter=1;FirstEnterC=1");
                                                                    cm.setStandAloneMode(false);
                                                                    cm.forceStartQuest(63027, '');
                                                                    cm.npc_LeaveField("oid=23076635");
                                                                    cm.npc_LeaveField("oid=23076635");
                                                                    cm.npc_LeaveField("oid=23076636");
                                                                    cm.npc_LeaveField("oid=23076636");
                                                                    cm.npc_LeaveField("oid=23076637");
                                                                    cm.npc_LeaveField("oid=23076637");
                                                                    cm.npc_LeaveField("oid=23076638");
                                                                    cm.npc_LeaveField("oid=23076638");
                                                                    cm.npc_LeaveField("oid=23076639");
                                                                    cm.npc_LeaveField("oid=23076639");
                                                                    cm.npc_LeaveField("oid=23076640");
                                                                    cm.npc_LeaveField("oid=23076640");
                                                                    cm.dispose();
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.openNpc("异逝界_勇士之地挑战");
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