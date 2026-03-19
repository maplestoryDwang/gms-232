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
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1;5=1;6=1;7=1;8=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3853258", 760, -40, 10, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3853258", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3853259", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3853259", 'summon', 0, 0);
      cm.npc_ChangeController(9111004, "oid=3853260", 405, -40, 19, 355, 455, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3853260", "summon", 0, 0);
      cm.npc_ChangeController(9111005, "oid=3853261", 305, -40, 20, 255, 355, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3853261", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3853259"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3853259", 1, 300, 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#咦？！这里怎么有钱？！是谁掉的呢？？", 37, 9111002, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3853258"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3853261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face2#啊。", 37, 9111002, false, true);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=3853259", -1);
                        cm.sendNormalTalk_Bottom("#face2#计划失败。", 37, 9111002, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("……棘鬼……？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3853258"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3853261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#很遗憾。\r\n暗对金币没反应。", 37, 9111002, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3853258"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3853261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("棘鬼！你为什么没有用这些金币！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#唔……就算我撒了金币，暗也不一定会有反应。\r\n我觉得用说的就够了……", 37, 9111002, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=3853259", 1);
                                          cm.sendNormalTalk_Bottom("#face1#嘿嘿，你就当是我有点起贪心了吧。", 37, 9111002, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3853258"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3853261"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.sendNormalTalk_Bottom("这叫什么话！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#乐观点，我们过来这一路上不是很开心嘛。", 37, 9111002, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('棘鬼！', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=3853259", -1);
                                                  cm.sendNormalTalk_Bottom("#face2##h0#，我们之间的友情都不值这点金币吗？", 37, 9111002, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#你这家伙还真是遇人不淑。", 37, 9111005, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#棘鬼真是个不靠谱的同伴啊……", 37, 9111007, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("唉……", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3853259"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=3853259", 1);
                                                              cm.sendNormalTalk_Bottom("#face2#……咳！咳咳！！暗！你再不快点出来，我就把门拆了直接冲进去咯！", 37, 9111002, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哼！我才不怕你威胁！！！\r\n你们都回去吧！！", 37, 9111015, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("棘鬼……真是一点都帮不上忙……", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.warp(800023007, 0, false);
                                                                    cm.npc_LeaveField("oid=3853258");
                                                                    cm.npc_LeaveField("oid=3853258");
                                                                    cm.npc_LeaveField("oid=3853259");
                                                                    cm.npc_LeaveField("oid=3853259");
                                                                    cm.npc_LeaveField("oid=3853260");
                                                                    cm.npc_LeaveField("oid=3853260");
                                                                    cm.npc_LeaveField("oid=3853261");
                                                                    cm.npc_LeaveField("oid=3853261");
                                                                    cm.eventSKill(0);
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