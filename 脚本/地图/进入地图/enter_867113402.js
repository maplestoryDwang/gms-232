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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1093, 77);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400243, "oid=23300391", 750, 80, 5, 700, 800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23300391", "summon", 0, 0);
      cm.npc_ChangeController(9400244, "oid=23300392", 500, 80, 5, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23300392", "summon", 0, 0);
      cm.npc_ChangeController(9400245, "oid=23300393", 1000, 80, 2, 950, 1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23300393", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
        cm.npc_SetForceMove("oid=23300392", 1, 220, 100);
        cm.npc_SetForceMove("oid=23300391", 1, 100, 100);
        cm.npc_SetForceMove("oid=23300393", 1, 150, 100);
        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 950, 120);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=23300393", -1);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon('果然……', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_NormalSpeechBalloon('事实正如我所料', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('你什么都没找到吧？', 37, 9400220, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b对不起……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400245, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我仔细想了一下，也不是没有办法。", 37, 9400220, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=23300392"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=23300391"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom('你有办法吗？', 37, 9400218, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("办法？能让我们有色彩的办法？", 37, 9400219, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#fs15#请把你的色彩分给我们吧。", 37, 9400220, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                        cm.sendNormalTalk_Bottom("#b这叫什么话……？！", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我们需要色彩，这是大家目前共同的想法。", 37, 9400220, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b这是不可能办到的！色彩怎么能分给你们。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('……', 37, 9400220, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=23300391", 1, 130, 100);
                                                    cm.npc_SetForceMove("oid=23300392", 1, 270, 100);
                                                    cm.npc_SetForceMove("oid=23300393", -1, 150, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(867113402, 2, 2, 20);
                                                      cm.fieldEffect_PlayFieldSound("DarkParty/laugh2", 100);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo2", 100);
                                                        cm.inGameDirectionEvent_QTE(1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("hekaton/stand", 100);
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                          cm.npc_setForceFlip("oid=23300391", -1);
                                                          cm.npc_setForceFlip("oid=23300392", -1);
                                                          cm.npc_setForceFlip("oid=23300393", 1);
                                                          cm.npc_SetForceMove("oid=23300391", -1, 80, 100);
                                                          cm.npc_SetForceMove("oid=23300392", -1, 80, 100);
                                                          cm.npc_SetForceMove("oid=23300393", 1, 80, 100);
                                                          cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, 9400243);
                                                          cm.updateInfoQuest(63089, "red=9400218");
                                                          cm.updateInfoQuest(63090, "lightning=0;green=1;red=0;DnN=0;raining=0;blue=1");
                                                          cm.fieldEffect_BackgroundCanvas(4, 150, 210, 100, 100, 0, 9400244);
                                                          cm.updateInfoQuest(63089, "green=9400219;red=9400218");
                                                          cm.updateInfoQuest(63090, "lightning=0;green=0;red=0;DnN=0;raining=0;blue=1");
                                                          cm.fieldEffect_BackgroundCanvas(4, 75, 150, 255, 100, 0, 9400245);
                                                          cm.updateInfoQuest(63089, "green=9400219;red=9400218;blue=9400220");
                                                          cm.updateInfoQuest(63090, "lightning=0;green=0;red=0;DnN=0;raining=0;blue=0");
                                                          cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas11(5, 256, 0, 0, 0, 0);
                                                          cm.emotion(18, 99999);
                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 2500, 500, 1005, 175);
                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b怎么会这样……？", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=23300391", 1);
                                                              cm.npc_setForceFlip("oid=23300392", 1);
                                                              cm.npc_setForceFlip("oid=23300393", -1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(700, 3000, 700, 1005, 175);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b我也变成白色的了！！！", 57, 0, false, true);
                                                              } else if (status === V++) {
                                                                cm.userSetFieldFloating(867113402, 0, 0, 0);
                                                                cm.forceCompleteQuest(63047);
                                                                cm.gainExp(158800);
                                                                cm.updateInfoQuest(63047, 'exp=1');
                                                                cm.dispose();
                                                                cm.warp(867113400, 0, true);
                                                                cm.setStandAloneMode(false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=23300391");
                                                                cm.npc_LeaveField("oid=23300391");
                                                                cm.npc_LeaveField("oid=23300392");
                                                                cm.npc_LeaveField("oid=23300392");
                                                                cm.npc_LeaveField("oid=23300393");
                                                                cm.npc_LeaveField("oid=23300393");
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