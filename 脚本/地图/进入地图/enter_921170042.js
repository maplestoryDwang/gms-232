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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2192031, "oid=2533378", -493, 63, 17, -543, -443, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2533378", 'summon', 0, 0);
        cm.npc_ChangeController(2192032, "oid=2533379", -590, 63, 16, -640, -540, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2533379", 'summon', 0, 0);
        cm.npc_ChangeController(2192019, "oid=2533380", 303, -12, 19, 253, 353, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2533380", 'summon', 0, 0);
        cm.npc_ChangeController(2192029, "oid=2533381", -215, -12, 19, -265, -165, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2533381", "summon", 0, 0);
        cm.npc_ChangeController(2192030, "oid=2533382", 9, -12, 19, -41, 59, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2533382", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("这是怎么回事？", 1, 0, 0, 2000, 2, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
              cm.effect_NormalSpeechBalloon("之，之前明明说这会是个惊险刺激的体验来着……", 1, 0, 0, 2000, 2, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [2000, 50, -12, 0, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                    cm.effect_NormalSpeechBalloon('是惊险刺激的体验啊。', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                      cm.effect_NormalSpeechBalloon("在踏足此地的情侣之中，\r\n还从未有一对情侣\r\n没有分手的。", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                        cm.effect_NormalSpeechBalloon("对我来说，那当然是\r\n最为惊险刺激的地方了。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("欢迎来到单身的天堂，\r\n情侣的地狱演出！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon('喔！喔！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2192019, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2533381", "attack2", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8145100/Attack2", 128);
                              cm.npc_SetSpecialAction("oid=2533382", "attack2", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8145200/Attack2", 128);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("额啊！！！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2192029, cm.getPlayer().getId());
                              cm.effect_NormalSpeechBalloon("额啊！！！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2192030, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(19, [2000]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2533379", "faint", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_NormalSpeechBalloon("#e#r啊呀！！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2192032, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2533378", -1, 1, 150);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("多檀智！！", 1, 0, 0, 2000, 2, 0, 0, 0, 4, 2192031, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("有危险！！\r\n#b(消灭塔尔加和斯卡利昂。)", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else if (status === V++) {
                                              cm.playerMessage(5, "进入梦幻动物秀<公演场>。");
                                              cm.dispose();
                                              cm.warp(921170043, 0);
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