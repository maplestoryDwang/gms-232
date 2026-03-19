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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2, -60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004461, "oid=505526", 369, -1011, 29, 319, 419, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=505526', "summon", 0, 0);
        cm.npc_ChangeController(3004461, 'oid=505527', 175, -1011, 29, 125, 225, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=505527", "summon", 0, 0);
        cm.npc_ChangeController(3004460, "oid=505528", -192, -762, 26, -242, -142, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=505528", "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=505529", -390, -751, 25, -440, -340, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=505529", 'summon', 0, 0);
        cm.npc_ChangeController(3004460, "oid=505530", 427, -696, 6, 377, 477, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=505530", "summon", 0, 0);
        cm.npc_ChangeController(3004461, 'oid=505531', 221, -696, 27, 171, 271, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=505531', "summon", 0, 0);
        cm.npc_ChangeController(3004433, "oid=505532", -386, -36, 3, -436, -336, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=505532', "summon", 0, 0);
        cm.npc_ChangeController(3004431, "oid=505533", -216, -36, 3, -266, -166, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=505533", 'summon', 0, 0);
        cm.npc_ChangeController(3004437, 'oid=505534', 10, -36, 5, -40, 60, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=505534', "summon", 0, 0);
        cm.npc_ChangeController(3004436, "oid=505535", -100, -36, 5, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=505535', "summon", 0, 0);
        cm.npc_ChangeController(3004460, "oid=505536", 418, -281, 11, 368, 468, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=505536", "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=505537", 262, -279, 10, 212, 312, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=505537', "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=505538", -14, -282, 9, -64, 36, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=505538", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=505538", "special4", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
              cm.sendNormalTalk_Bottom("#face0#是王子。其他都是些不认识的家伙。", 37, 3004460, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 2, -901);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我们好像被包围了。", 37, 3004437, false, true);
                    cm.effect_Voice("Voice5.img/CH2/Knight/2", 128);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 2, -60);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是翼人军吗？", 37, 3004431, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Idea/6", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#不。他们……是一群#r抗拒神的统治#k，企图#r破坏圣地#k的不法之徒。", 37, 3004433, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/3", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#什么？", 37, 3004431, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Idea/7", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#毕竟神之语音已经消失数百年了。", 37, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/4", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.askYesNo_Bottom("#face1##b#h ##k，你能击退那帮家伙吗？", 3004433);
                                    } else {
                                      if (status === V++) {
                                        if (f > 0) {
                                          cm.inGameDirectionEvent_AskAnswerTime(0);
                                        } else {
                                          cm.sendOkS_Bottom("（……现在不是开玩笑的时候。得做好战斗准备。）");
                                        }
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#在正式上战场之前，你必须先知道一件事。", 37, 3004433, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#最近，包括塞尔提乌在内的多个大陆空间都好像有一股#r压抑的未知气息#k在阻碍力量的施展发挥。", 37, 3004433, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#为了战胜这股气息，我们发现了一种特殊的力量，并将其命名为#b原初之力#k。", 37, 3004433, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#详细情况等以后再向冒险岛联盟那边解释说明。", 37, 3004433, true, true);
                                                  } else if (status === V++) {
                                                    cm.warp(410000520, 0, false);
                                                    cm.forceStartQuest(39802);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField('oid=505526');
                                                    cm.npc_LeaveField("oid=505527");
                                                    cm.npc_LeaveField("oid=505528");
                                                    cm.npc_LeaveField("oid=505529");
                                                    cm.npc_LeaveField('oid=505530');
                                                    cm.npc_LeaveField("oid=505531");
                                                    cm.npc_LeaveField("oid=505532");
                                                    cm.npc_LeaveField("oid=505532");
                                                    cm.npc_LeaveField("oid=505533");
                                                    cm.npc_LeaveField('oid=505533');
                                                    cm.npc_LeaveField("oid=505534");
                                                    cm.npc_LeaveField("oid=505534");
                                                    cm.npc_LeaveField('oid=505535');
                                                    cm.npc_LeaveField("oid=505535");
                                                    cm.npc_LeaveField("oid=505536");
                                                    cm.npc_LeaveField('oid=505536');
                                                    cm.npc_LeaveField('oid=505537');
                                                    cm.npc_LeaveField("oid=505537");
                                                    cm.npc_LeaveField("oid=505538");
                                                    cm.npc_LeaveField("oid=505538");
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
          }
        }
      }
    }
  }
}