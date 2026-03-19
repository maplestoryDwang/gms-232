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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530060, "oid=21078539", 1111, 92, 6, 1061, 1161, 1, true, false);
      cm.npc_SetSpecialAction("oid=21078539", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=21078540", 911, 92, 8, 861, 961, 1, true, false);
      cm.npc_SetSpecialAction("oid=21078540", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=21078541", 1011, 92, 7, 961, 1061, 1, true, false);
      cm.npc_SetSpecialAction("oid=21078541", 'summon', 0, 0);
      cm.npc_ChangeController(1530230, "oid=21078542", 311, 92, 1, 261, 361, 0, true, false);
      cm.npc_SetSpecialAction("oid=21078542", "summon", 0, 0);
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
          cm.effect_Text(["#fn黑体##fs26#第二天\r\n#fs14#~午休时间, 后院~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#啊~肚子好饿。为什么这么饿呢？难道我伊莉娜被饿死鬼附身了吗。", 37, 1530120, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH1_03/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#看来大家的午休时间都过得这么艰辛啊……", 37, 1530060, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH1_03/2", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("小卖部现在还能有面包吗。", 37, 1530120, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH1_03/3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那个……要是小卖部的面包卖完了的话，吃蛋糕不就行了吗？", 37, 1530060, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_03/4", 100);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=21078540", 1);
                    cm.npc_setForceFlip("oid=21078541", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这家伙又在说什么。", 37, 1530120, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH1_03/5", 100);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=21078540", 0);
                        cm.npc_setForceFlip("oid=21078541", 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=21078540", -1, 200, 120);
                          cm.npc_SetForceMove("oid=21078541", -1, 200, 120);
                          cm.npc_SetForceMove("oid=21078539", -1, 200, 120);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……嗯？ #r那是#k什么？", 37, 1530120, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH1_03/6", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=21078542", 1, 230, 100);
                              cm.inGameDirectionEvent_PushMoveInfo(0, 150, 611, 92);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3342);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("喂，小姐。有时间吗？", 37, 1530230, false, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH1_03/7", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=21078539"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("就算没有也最好说有哦。因为我……就是来俘获你芳心的命运之转学生啊。噢哈哈哈哈。", 37, 1530230, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH1_03/8", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21078540"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21078541"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=21078539"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你说什么，你这个丑陋的家伙。", 37, 1530120, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH1_03/9", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("……什……什么？", 37, 1530230, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH1_03/10", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我们现在很忙。赶紧走开，别在那儿碍手碍脚的！", 37, 1530120, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH1_03/11", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我原本还打算好言相说呢……你以为你是女的我就会手下留情，嗯？用不用我教训你一次试试？", 37, 1530230, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH1_03/12", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=21078540"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=21078540", 1);
                                                    cm.sendNormalTalk_Bottom("#face0#……哈，希纳斯。可以稍等一下吗？", 37, 1530120, false, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH1_03/13", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("嗯？要等多久呢？", 37, 1530060, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH1_03/14", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('30秒就够了。', 37, 1530120, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH1_03/15", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=21078540", 0);
                                                            cm.npc_SetSpecialAction("oid=21078542", "die", -1, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.effect_Voice("SoundEff.img/punch", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我竟然会败给一个女的……竟然会……", 37, 1530230, false, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/CH1_04/1", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("妈妈……我到底为什么要来这所学校……", 37, 1530230, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH1_04/2", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("喂，用不用我给你一句忠告啊？", 37, 1530120, true, true);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH1_04/3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("……？", 37, 1530230, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH1_04/4", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=21078540"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.sendNormalTalk_Bottom("自古以来最不能得罪的就是脾气暴躁的女人和欲壑难填的女人。", 37, 1530120, true, true);
                                                                          cm.effect_Voice("Voice2.img/Friends/CH1_04/5", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("可你就在刚才让一个欲壑难填的女人脾气暴躁了。", 37, 1530120, true, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH1_04/6", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('……！', 37, 1530230, true, true);
                                                                              cm.effect_Voice("Voice2.img/Friends/CH1_04/4", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("以后你可要小心了。", 37, 1530120, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH1_04/7", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=21078540", -1, 1000, 120);
                                                                                  cm.npc_SetForceMove("oid=21078541", -1, 1000, 120);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21078539"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=21078539", -1, 1000, 160);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_ChangeController(1530520, "oid=21092809", 1111, 92, 6, 1061, 1161, 1, true, false);
                                                                                      cm.npc_SetSpecialAction("oid=21092809", "summon", 0, 0);
                                                                                      cm.npc_SetForceMove("oid=21092809", -1, 200, 120);
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 150, 911, 92);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1998);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=21078539");
                                                                                          cm.npc_LeaveField("oid=21078539");
                                                                                          cm.npc_LeaveField("oid=21078540");
                                                                                          cm.npc_LeaveField("oid=21078540");
                                                                                          cm.npc_LeaveField("oid=21078541");
                                                                                          cm.npc_LeaveField("oid=21078541");
                                                                                          cm.sendNormalTalk_Bottom("唉，真让人郁闷！你一个人能办成什么事啊！", 37, 1530520, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("妈妈……", 37, 1530230, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=21092809"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.sendNormalTalk_Bottom("唉，没办法了。非得让你老妈我出马吗？现在儿子，你就老实呆在一旁吧。我儿子长得这么帅，只要老实站在那里就行了。", 37, 1530520, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else if (status === V++) {
                                                                                                cm.dispose();
                                                                                                cm.warp(330002111, 0);
                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
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