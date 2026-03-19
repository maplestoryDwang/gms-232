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
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -290, -1251);
        } else {
          if (status === V++) {
            cm.setPartner(0, 1540765, 0, 0);
            cm.setPartner(0, 1540766, 0, 0);
            cm.setPartner(0, 1540767, 0, 0);
            cm.npc_ChangeController(1540502, "oid=22210744", -400, -1300, 8, -450, -350, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22210744", "summon", 0, 0);
            cm.npc_ChangeController(1540503, "oid=22210745", -300, -1300, 9, -350, -250, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22210745", "summon", 0, 0);
            cm.npc_ChangeController(1540504, "oid=22210746", -500, -1300, 16, -550, -450, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22210746", 'summon', 0, 0);
            cm.npc_setForceFlip("oid=22210745", -1);
            cm.npc_SetForceMove("oid=22210744", 1, 200, 200);
            cm.npc_SetForceMove("oid=22210745", 1, 200, 200);
            cm.npc_SetForceMove("oid=22210746", 1, 200, 200);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 10, -1251);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_setForceFlip("oid=22210745", 0);
                cm.npc_SetForceMove("oid=22210745", -1, 10, 50);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嘻嘻嘻！！！\r\n古皮哥哥是放屁精。", 37, 1540503, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哥哥们，请你们别闹了。", 37, 1540504, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(1);
                      cm.inGameDirectionEvent_AskAnswerTime(100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("莉皮不是说没闻到嘛，德皮！", 37, 1540502, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("嘻嘻嘻！！！", 37, 1540503, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哥哥们，如果你们再吵吵闹闹的，那……", 37, 1540504, true, true);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(350040040, 20, 30, 20);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22210744"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22210745"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22210746"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.userSetFieldFloating(350040040, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
                                    cm.npc_setForceFlip("oid=22210745", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(2);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 300, 1210, -1251);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(350040040, 20, 30, 20);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1000, -1290, 1, 0, 1, 1, 0]);
                                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                            cm.npc_ChangeController(1540654, "oid=22211107", 1000, -1295, 24, 950, 1050, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=22211107", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                            cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1200, -1290, 1, 0, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                              cm.npc_ChangeController(1540654, "oid=22211109", 1200, -1295, 26, 1150, 1250, 1, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=22211109", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1400, -1290, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                cm.npc_ChangeController(1540654, "oid=22211110", 1400, -1295, 18, 1350, 1450, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=22211110", "summon", 0, 0);
                                                cm.userSetFieldFloating(350040040, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#r发现敌对对象。\r\n发现敌对对象。#k", 37, 1540654, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 300, 10, -1251);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#！！！队长，我们被敌人发现了！", 37, 1540504, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("德皮！你负责右边，我负责左边！莉皮，你掩护队长！", 37, 1540502, true, true);
                                                          } else if (status === V++) {
                                                            cm.setNumberForQuestInfo(33200, "underAttack", 1);
                                                            cm.playerMessage(5, "必须在限制时间内支撑住敌人的攻击. ");
                                                            cm.dispose();
                                                            cm.warp(350040050, 0, false);
                                                            cm.setInGameDirectionMode(false, true, false);
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