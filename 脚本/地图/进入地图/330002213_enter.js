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
      cm.npc_ChangeController(1530130, "oid=36464129", -100, -30, 3, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=36464129", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=36464130", 400, -30, 3, 350, 450, 1, true, false);
      cm.npc_SetSpecialAction("oid=36464130", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=36464131", 450, -30, 3, 400, 500, 1, true, false);
      cm.npc_SetSpecialAction("oid=36464131", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你今天能倾听奥尔卡的故事，谢……没，没什么。", 37, 1530130, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH2_07/17", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那个……把你的电话号码给我。", 37, 1530130, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_07/18", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#什么为什么！当然是要报警啦！必须把你这种跟踪狂从世界上铲除才行！", 37, 1530130, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH2_07/19", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b（怎么回事……竟然无意中和她变亲近了。）#k", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 400, -30);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3846);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_NormalSpeechBalloon("奥尔卡吗? ", 1, 0, 0, 2000, 1530270, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_NormalSpeechBalloon("奥尔卡? ", 1, 0, 0, 2000, 1530280, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("晕, 是奥尔卡. ", 1, 0, 0, 2000, 1530270, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("去要张签名? ", 1, 0, 0, 2000, 1530280, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 120, 0, -30);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3835);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#呃，就因为这样，所以我才不敢使用公共交通……我先下去了，别跟着我，跟踪狂！", 37, 1530130, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH2_07/20", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=36464129", -1, 100, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=36464129"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=36464129", 1, 320, 250);
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=36464129");
                                              cm.npc_LeaveField("oid=36464129");
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.forceStartQuest(32783, '');
                                              cm.forceCompleteQuest(32783);
                                              cm.dispose();
                                              cm.warp(330000000, 0);
                                              cm.inGameDirectionEvent_ForcedFlip(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;