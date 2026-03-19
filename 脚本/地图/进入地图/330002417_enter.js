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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=37955478", -220, 20, 1, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=37955478", "summon", 0, 0);
      cm.npc_ChangeController(1530190, "oid=37955479", 200, 20, 3, 150, 250, 1, true, false);
      cm.npc_SetSpecialAction("oid=37955479", 'summon', 0, 0);
      cm.npc_ChangeController(1530330, "oid=37955480", 130, 20, 3, 80, 180, 1, false, false);
      cm.npc_SetSpecialAction("oid=37955480", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯？你刚刚在和猫对话吗？", 37, 1530190, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37955478"], [0, 0, 30, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("怎，怎么可能啊。哈哈哈哈。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你不用担心，我完全明白你的心情。我有时候也很想和小猫对话。", 37, 1530190, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("话说，你的小猫长得好可爱啊。", 37, 1530190, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=37955478", 1, 200, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("喵呜，喵，喵呜……！", 37, 1530050, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=37955479"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哎呀，好可爱！", 37, 1530190, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……但它叫得怎么这么生疏啊？", 37, 1530190, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37955478"], [0, 0, 30, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2500, 0, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("总之，你还是尽快离开吧。", 37, 1530190, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=37955479", -1, 350, 150);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=37955479");
                                    cm.npc_LeaveField("oid=37955479");
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你应该练习下猫叫了，莉莉。", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("切……", 37, 1530050, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                          cm.fieldEffect_InsertCanvas(1, 200, 255, 255, 255, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                          cm.effect_Voice("UI.img/CameraShutter", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("刚刚那是什么，难道是闪电？", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不，那是拍照时的闪光灯。\r\n这幢建筑不是#r没有任何人居住#k吗？", 37, 1530050, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("啊，快看那边！", 37, 1530050, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(1530183, "oid=37966283", 648, 20, 5, 598, 698, 0, true, false);
                                                    cm.npc_SetSpecialAction("oid=37966283", "summon", 0, 0);
                                                    cm.npc_SetForceMove("oid=37966283", 1, 400, 100);
                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 400, 448, 78);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1998);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你看到了吗？刚刚有个可疑的影子闪过。", 37, 1530050, false, true);
                                                        } else if (status === V++) {
                                                          cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                          cm.forceStartQuest(32867, '');
                                                          cm.forceCompleteQuest(32867);
                                                          cm.dispose();
                                                          cm.warp(330004100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;