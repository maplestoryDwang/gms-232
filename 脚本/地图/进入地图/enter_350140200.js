var status = -1;
var selectionLog = [];
function action(V, n, N) {
  if (status == 0 && V == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = N;
  var c = -1;
  if (status <= c++) {
    cm.dispose();
  } else {
    if (status === c++) {
      cm.npc_ChangeController(1540901, "oid=293528775", -65, 210, 4, -115, -15, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528775", "summon", 0, 0);
      cm.npc_ChangeController(1540902, "oid=293528777", -500, 210, 16, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528777", "summon", 0, 0);
      cm.npc_ChangeController(1540903, "oid=293528778", -580, 210, 13, -630, -530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528778", "summon", 0, 0);
      cm.npc_ChangeController(1540904, "oid=293528780", 130, 210, 7, 80, 180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528780", "summon", 0, 0);
      cm.npc_ChangeController(1540905, "oid=293528782", 175, 210, 7, 125, 225, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=293528782", "summon", 0, 0);
      cm.npc_ChangeController(1540906, "oid=293528783", 230, 210, 6, 180, 280, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528783", "summon", 0, 0);
      cm.npc_ChangeController(1540907, "oid=293528785", 70, 210, 5, 20, 120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528785", "summon", 0, 0);
      cm.npc_ChangeController(1540908, "oid=293528787", 25, 210, 5, -25, 75, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528787", "summon", 0, 0);
      cm.npc_ChangeController(1540909, "oid=293528788", 275, 210, 9, 225, 325, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528788", 'summon', 0, 0);
      cm.npc_ChangeController(1540910, "oid=293528790", 325, 210, 9, 275, 375, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293528790", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(34020, "check1=1;check2=1;check4=1");
      cm.setAmbience("Ambience.img/warfare2", 100, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -420, -190);
      cm.curNodeEventEnd(true);
    } else {
      if (status === c++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === c++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs18#金银岛, #fs15##fn黑体#受到魔族袭击的射手村"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === c++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -420, 210);
          } else {
            if (status === c++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === c++) {
                cm.npc_SetForceMove("oid=293528777", 1, 220, 197);
                cm.npc_SetForceMove("oid=293528778", 1, 230, 197);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === c++) {
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -195, 210);
                } else {
                  if (status === c++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === c++) {
                      cm.npc_SetForceMove("oid=293528775", -1, 10, 197);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === c++) {
                        cm.playSoundEffDirectly("Ambience.img/warfare2");
                        cm.sendNormalTalk_Bottom("赫丽娜，驻扎在村庄周围的魔族部队全都被消灭了。\r\n这样一来应该能消停一阵子了。", 37, 1540902, false, true);
                      } else {
                        if (status === c++) {
                          cm.sendNormalTalk_Bottom("不过，以后可能会遇到问题，\r\n我们不仅负伤严重，而且防御设备也遭到了破坏，如果对方大军继续发动超前一步的空袭……", 37, 1540903, true, true);
                        } else {
                          if (status === c++) {
                            cm.sendNormalTalk_Bottom("在人数上，我们也完全占劣势，继续这么下去，就算打防御战也很有限啊？", 37, 1540902, true, true);
                          } else {
                            if (status === c++) {
                              cm.sendNormalTalk_Bottom("只要能打倒敌人的首领就可以解决问题了。", 37, 1540453, true, true);
                            } else {
                              if (status === c++) {
                                cm.sendNormalTalk_Bottom("包括龙神在内的英雄正在前往敌将所在的地方。", 37, 1540453, true, true);
                              } else {
                                if (status === c++) {
                                  cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 130, 210);
                                } else {
                                  if (status === c++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === c++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293528780"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293528782"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293528783"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.npc_SetForceMove("oid=293528780", -1, 0, 197);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === c++) {
                                        cm.sendNormalTalk_Bottom("你，你说的龙神，难道是我儿子龙神？", 37, 1540904, false, true);
                                      } else {
                                        if (status === c++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === c++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -195, 210);
                                          } else {
                                            if (status === c++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === c++) {
                                                cm.sendNormalTalk_Bottom("#face1#一旦首领消失了踪迹，团结在一起的士兵也会被瓦解的，到时候我们就竭尽全力撑下去就好。", 37, 1540453, false, true);
                                              } else {
                                                if (status === c++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === c++) {
                                                    cm.sendNormalTalk_Bottom("但是赫丽娜，你看看那边。", 37, 1540903, false, true);
                                                  } else {
                                                    if (status === c++) {
                                                      cm.npc_SetForceMove("oid=293528777", 1, 5, 197);
                                                      cm.npc_SetForceMove("oid=293528778", 1, 10, 197);
                                                      cm.npc_SetForceMove("oid=293528775", 1, 5, 197);
                                                      cm.npc_SetForceMove("oid=293528780", 1, 0, 197);
                                                      cm.npc_setForceFlip("oid=293528782", 1);
                                                      cm.npc_SetForceMove("oid=293528783", 1, 0, 197);
                                                      cm.npc_SetForceMove("oid=293528785", 1, 0, 197);
                                                      cm.npc_SetForceMove("oid=293528787", 1, 0, 197);
                                                      cm.npc_SetForceMove("oid=293528788", 1, 0, 197);
                                                      cm.npc_SetForceMove("oid=293528790", 1, 0, 197);
                                                      cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 100, 210);
                                                    } else {
                                                      if (status === c++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === c++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === c++) {
                                                          cm.dispose();
                                                          cm.warp(350140210, 0, true);
                                                          cm.npc_LeaveField("oid=293528775");
                                                          cm.npc_LeaveField("oid=293528775");
                                                          cm.npc_LeaveField("oid=293528777");
                                                          cm.npc_LeaveField("oid=293528777");
                                                          cm.npc_LeaveField("oid=293528778");
                                                          cm.npc_LeaveField("oid=293528778");
                                                          cm.npc_LeaveField("oid=293528780");
                                                          cm.npc_LeaveField("oid=293528780");
                                                          cm.npc_LeaveField("oid=293528782");
                                                          cm.npc_LeaveField("oid=293528782");
                                                          cm.npc_LeaveField("oid=293528783");
                                                          cm.npc_LeaveField("oid=293528783");
                                                          cm.npc_LeaveField("oid=293528785");
                                                          cm.npc_LeaveField("oid=293528785");
                                                          cm.npc_LeaveField("oid=293528787");
                                                          cm.npc_LeaveField("oid=293528787");
                                                          cm.npc_LeaveField("oid=293528788");
                                                          cm.npc_LeaveField("oid=293528788");
                                                          cm.npc_LeaveField("oid=293528790");
                                                          cm.npc_LeaveField("oid=293528790");
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