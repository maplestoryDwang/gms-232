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
      cm.npc_ChangeController(3001358, "oid=7086533", -340, 740, 12, -390, -290, 0, true, false);
      cm.npc_SetSpecialAction("oid=7086533", "summon", 0, 0);
      cm.npc_ChangeController(3001358, "oid=7086534", -460, 740, 12, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=7086534", "summon", 0, 0);
      cm.npc_ChangeController(3001358, "oid=7086535", -580, 740, 13, -630, -530, 0, true, false);
      cm.npc_SetSpecialAction("oid=7086535", "summon", 0, 0);
      cm.npc_ChangeController(3001358, "oid=7086536", 50, 740, 12, 0, 100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7086536", "summon", 0, 0);
      cm.npc_ChangeController(3001358, "oid=7086537", 170, 740, 12, 120, 220, 1, true, false);
      cm.npc_SetSpecialAction("oid=7086537", "summon", 0, 0);
      cm.npc_ChangeController(3001358, "oid=7086538", 290, 740, 14, 240, 340, 1, true, false);
      cm.npc_SetSpecialAction("oid=7086538", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这帮家伙怎么打不完的。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#喀，这家伙看着弱不禁风的，怎么这么厉害？", 37, 3001358, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#大家一块儿上吧。", 37, 3001358, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#慢着！", 37, 3004000, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086533"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086534"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086535"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086536"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086537"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7086538"], [0, 0, -20, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#face0#搞什么？！", 37, 3001358, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction21.img/SavageT/illust/1", 0, 2000, 0, 0, 12, 4, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你谁啊？！", 37, 3001358, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#喀，那家伙是？！", 37, 3001358, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n你们问我是谁？", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fn黑体#我是月光下一道墨色黑光，是在垃圾堆的恶臭中出淤泥而不染的#r混乱地带的英雄。#k ", 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n你有无法解决的问题吗？或者人身受到威胁？还是在寻找隐秘之物？", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("无论有什么麻烦，尽管等我来解决。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue('', 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n我是潇洒的黑鸦侦探！！", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue('', 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fn背景#―――――――――――――#fs14#<黑鸦侦探的案件日志vol.1>正在热卖中。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue('', 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(3004000, "oid=7087011", 135, 309, 5, 85, 185, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=7087011", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 24, 487);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#嘁，真倒霉。", 37, 3001358, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我们走。和那家伙搅在一起没好果子吃。", 37, 3001358, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#白费力气了。", 37, 3001358, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=7086533", -1, 900, 120);
                                                                cm.npc_SetForceMove("oid=7086534", -1, 900, 120);
                                                                cm.npc_SetForceMove("oid=7086535", -1, 900, 120);
                                                                cm.npc_SetForceMove("oid=7086536", 1, 1000, 120);
                                                                cm.npc_SetForceMove("oid=7086537", 1, 1000, 120);
                                                                cm.npc_SetForceMove("oid=7086538", 1, 1000, 120);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯？……看来他们全都被我吓跑了。", 37, 3004000, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("吓跑……？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我怎么觉得是嫌弃……", 57, 0, true, true);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(402000124, 1);
                                                                        cm.gainExp(18974824);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.setStandAloneMode(false);
                                                                        cm.updateInfoQuest(37100, "31=h0;32=h0;33=h1;dir=off;35=h0");
                                                                        cm.forceCompleteQuest(37103);
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