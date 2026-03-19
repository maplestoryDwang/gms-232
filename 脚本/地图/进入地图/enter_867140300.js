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
      cm.npc_ChangeController(9390300, "oid=200911", -629, 28, 8, -679, -579, 0, false, 0, false);
      cm.npc_ChangeController(9390301, "oid=200912", -703, 28, 8, -753, -653, 0, false, 0, false);
      cm.npc_ChangeController(9390302, "oid=200913", -827, 28, 8, -877, -777, 0, false, 0, false);
      cm.npc_ChangeController(9390315, "oid=200914", -98, -145, 23, -148, -48, 1, false, 0, false);
      cm.npc_ChangeController(9390304, 'oid=200915', -146, 28, 8, -196, -96, 1, false, 0, false);
      cm.npc_ChangeController(9390305, 'oid=200916', -20, 28, 8, -70, 30, 1, false, 0, false);
      cm.npc_ChangeController(9390307, "oid=200917", 188, 28, 8, 138, 238, 1, false, 0, false);
      cm.npc_ChangeController(9390308, "oid=200918", 51, 28, 8, 1, 101, 1, false, 0, false);
      cm.npc_ChangeController(9390309, 'oid=200919', 109, 28, 8, 59, 159, 1, false, 0, false);
      cm.npc_ChangeController(9390310, 'oid=200920', -481, -162, 30, -531, -431, 1, false, 0, false);
      cm.npc_ChangeController(9390312, "oid=200921", -242, 28, 8, -292, -192, 1, false, 0, false);
      cm.npc_ChangeController(9390313, "oid=200922", -181, -110, 26, -231, -131, 1, false, 0, false);
      cm.npc_ChangeController(9390303, 'oid=200923', -694, -167, 30, -744, -644, 0, false, 0, false);
      cm.npc_ChangeController(9390306, "oid=200924", -76, 28, 8, -126, -26, 1, false, 0, false);
      cm.npc_ChangeController(9390320, "oid=200925", -36, -145, 27, -86, 14, 1, false, 0, false);
      cm.npc_ChangeController(9390324, "oid=200926", -30, -236, 19, -80, 20, 1, false, 0, false);
      cm.npc_ChangeController(9390319, "oid=200927", -584, -164, 30, -634, -534, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1200, 3000, -306, -66);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3800);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18##h0#回来了呢！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390307, null, cm.getPlayer().getId());
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊！！英雄！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390310, null, cm.getPlayer().getId());
                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#拯救世界的英雄！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390306, null, cm.getPlayer().getId());
                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390309, null, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哎一古，真自豪！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390315, null, cm.getPlayer().getId());
                    cm.effect_NormalSpeechBalloon("#fn黑体##fs18#英雄回来了啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9390308, null, cm.getPlayer().getId());
                    cm.sendNormalTalk_Bottom("村长、汤姆，还有各位，好久不见啊。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，听说你拯救了世界？真有你的啊！", 37, 9390313, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你不在的时候，我和地精来了场1比100的对决。我厉害吧？", 37, 9390313, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#亚柏兰的英雄衣锦荣归了呢！", 37, 9390312, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#不对。现在应该称你为拯救世界的英雄吗？", 37, 9390312, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#Yap！我也要成为#h0#这样的英雄！", 37, 9390306, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#喜欢听英雄故事的孩子竟真的成为了拯救冒险岛世界的英雄……真是太了不起了。", 37, 9390320, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#哎呀哎呀，肯定是吃了不少苦，看这脸都瘦尖了。", 37, 9390304, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#就算是英雄，也得吃饱饭啊，快来这边。", 37, 9390304, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("奶奶，谢谢你！伙伴们，一起来吧！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你要给我吃的吗？波波喜欢投喂食物的人。嘿嘿嘿。", 37, 9390301, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哼！不知道有没有准备我能吃的东西。", 37, 9390303, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#走起~", 37, 9390300, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#很好！BOSS！尽情享受吧！", 37, 9390302, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(867140400, 0, false);
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