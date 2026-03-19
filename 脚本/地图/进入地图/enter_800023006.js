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
      cm.forceCompleteQuest(58759);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3851861", 760, -40, 10, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3851861", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3851862", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3851862", "summon", 0, 0);
      cm.npc_ChangeController(9111004, "oid=3851863", 405, -40, 19, 355, 455, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3851863", "summon", 0, 0);
      cm.npc_ChangeController(9111005, "oid=3851864", 305, -40, 20, 255, 355, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3851864", "summon", 0, 0);
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
            cm.sendNormalTalk_Bottom("#face1#就是这里！", 37, 9111007, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3851862"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.sendNormalTalk_Bottom("我们贸然靠近的话，他可能会很警惕，不如泉奈先过去试试，我们在这边支援你！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#好……！", 37, 9111007, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#喂~~暗-！我来看你了！我是泉奈！", 37, 9111007, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851861"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("(棘鬼！把糖膏给我……！)", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#喏，我已经准备好了。", 37, 9111002, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#我带来了你喜欢的糖膏~！出来吧，暗！！", 37, 9111007, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851861"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851862"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851863"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851864"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3851861"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face1#暗！出来吧~有客人来了哦~！！", 37, 9111007, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851861"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851862"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851863"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3851864"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("唔……", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看来，得换个方法。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3851863"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face1#那个……糖膏，现在没用了哦？", 37, 9111004, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.sendNormalTalk_Bottom("啊……哦，怎么了？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那我拿走咯。", 37, 9111004, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("唉……这家伙来也白来……", 57, 0, true, true);
                                                    cm.effect_NormalSpeechBalloon("……鵺大人……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111005, null, cm.getPlayer().getId());
                                                    cm.effect_NormalSpeechBalloon("对这家伙无语了……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111002, null, cm.getPlayer().getId());
                                                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111007, null, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === V++) {
                                                      cm.warp(800023007, 0, false);
                                                      cm.npc_LeaveField("oid=3851861");
                                                      cm.npc_LeaveField("oid=3851861");
                                                      cm.npc_LeaveField("oid=3851862");
                                                      cm.npc_LeaveField("oid=3851862");
                                                      cm.npc_LeaveField("oid=3851863");
                                                      cm.npc_LeaveField("oid=3851863");
                                                      cm.npc_LeaveField("oid=3851864");
                                                      cm.npc_LeaveField("oid=3851864");
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