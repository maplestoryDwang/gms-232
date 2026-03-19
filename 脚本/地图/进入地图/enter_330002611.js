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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530340, "oid=40035906", 300, 290, 2, 250, 350, 1, false, false);
      cm.npc_SetSpecialAction("oid=40035906", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=40035907", 86, 290, 2, 36, 136, 0, true, false);
      cm.npc_SetSpecialAction("oid=40035907", 'summon', 0, 0);
      cm.npc_ChangeController(1530120, "oid=40035908", 176, 290, 2, 126, 226, 0, true, false);
      cm.npc_SetSpecialAction("oid=40035908", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=40035909", -93, 290, 2, -143, -43, 0, true, false);
      cm.npc_SetSpecialAction("oid=40035909", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=40035910", -193, 290, 2, -243, -143, 0, true, false);
      cm.npc_SetSpecialAction("oid=40035910", "summon", 0, 0);
      cm.npc_ChangeController(1530656, "oid=40035911", -25, 218, 1, -75, 25, 1, false, false);
      cm.npc_SetSpecialAction("oid=40035911", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 0, 260);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4155);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("有什么事吗？", 37, 1530340, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("您需不需要兼职生呢？", 37, 1530120, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯，需要是需要……但你们知道怎么开动机器吗？", 37, 1530340, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=40035908", -1);
                    cm.npc_setForceFlip("oid=40035907", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("(悄悄话) 会吗？", 37, 1530110, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(悄悄话) 不会。", 37, 1530120, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("(悄悄话) 不会。", 37, 1530090, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(悄悄话) 快说不会！", 37, 1530100, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我来试试吧。", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom(" 好啊，那你来试试缝一下这个裤子吧。", 37, 1530340, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), 110, 178);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.inGameDirectionEvent_QTE(1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 0, 200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=40035911"], [0, 0, -100, 1, 0, 1, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/Weapon.img/spear/Attack", 100);
                                            cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(470);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=40035911", 'boom', -1, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=40035911", "broken", -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这是什么啊，衣服都变成抹布了啊！你们这些家伙快出去！！", 37, 1530340, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这可不是那么做的。", 37, 1530621, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哦哦，我们勤快的兼职生来了啊？", 37, 1530340, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('……这个声音是？？', 37, 1530604, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=40035910", -1);
                                                              cm.npc_setForceFlip("oid=40035909", -1);
                                                              cm.fieldEffect_PlayBGM("Bgm42.img/TheBeast2", 0, 0);
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                    cm.npc_ChangeController(1530651, "oid=40051494", -350, 290, 2, -400, -300, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=40051494", "summon", 0, 0);
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, -350, 260);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3304);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#让我来……缝一下吧？", 37, 1530621, false, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_04/1", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40035907"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40035908"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40035910"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40035909"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                        } else if (status === V++) {
                                                                          cm.dispose();
                                                                          cm.warp(330002613, 7);
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