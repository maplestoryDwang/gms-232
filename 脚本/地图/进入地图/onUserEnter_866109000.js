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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390442, "oid=2271848", 77, 0, 9, 27, 127, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271848", 'summon', 0, 0);
      cm.npc_ChangeController(9390432, "oid=2271849", 184, 0, 9, 134, 234, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271849", "summon", 0, 0);
      cm.npc_ChangeController(9390433, "oid=2271850", 246, 0, 9, 196, 296, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271850", "summon", 0, 0);
      cm.npc_ChangeController(9390434, "oid=2271851", 327, 0, 9, 277, 377, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271851", "summon", 0, 0);
      cm.npc_ChangeController(9390435, "oid=2271852", 393, 0, 9, 343, 443, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271852", "summon", 0, 0);
      cm.npc_ChangeController(9390304, "oid=2271853", -209, 0, 9, -259, -159, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271853", 'summon', 0, 0);
      cm.npc_ChangeController(9390305, "oid=2271854", -359, 0, 9, -409, -309, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271854", 'summon', 0, 0);
      cm.npc_ChangeController(9390306, "oid=2271855", -389, 0, 9, -439, -339, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271855", 'summon', 0, 0);
      cm.npc_ChangeController(9390307, "oid=2271856", -169, 0, 9, -219, -119, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271856", "summon", 0, 0);
      cm.npc_ChangeController(9390308, "oid=2271857", -259, 0, 9, -309, -209, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271857", "summon", 0, 0);
      cm.npc_ChangeController(9390309, "oid=2271858", -409, 0, 9, -459, -359, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271858", 'summon', 0, 0);
      cm.npc_ChangeController(9390310, "oid=2271859", -459, 0, 9, -509, -409, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2271859", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1700);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2271848", 'attack1', 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2271849", "attack1", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2271850", "attack1", 0, 1);
                    cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2271848", "attack1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2271851", "attack1", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2271852", 'attack1', 0, 1);
                          cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/10"], [2000, 0, -100, 1, 0, 0, 0, 0, 0]);
                                cm.emotion(5, 1500);
                                cm.inGameDirectionEvent_AskAnswerTime(2100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/9"], [2000, 0, -100, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2271851", 1, 100, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2271852", 1, 120, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2271848", "attack1", 0, 1);
                                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2271851", "attack1", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2271849", "attack1", 0, 1);
                                            cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2271852", "attack1", 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2271850", 'attack1', 0, 1);
                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.emotion(5, 5000);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/10"], [1000, 0, -120, 1, 0, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(444, 540);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/7"], [3620, -160, 0, 1, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
                                                          cm.fieldEffect_Tremble(0, 300, 30);
                                                          cm.npc_SetSpecialAction("oid=2271852", "hit1", 0, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse1", 100);
                                                            cm.npc_SetSpecialAction("oid=2271851", "hit1", 0, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(350);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=2271852", "hit1", 0, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(50);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=2271851", "hit1", 0, 1);
                                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse2", 100);
                                                                cm.fieldEffect_Tremble(0, 600, 30);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2271852", "die1", 0, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=2271851", "die1", 0, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=2271850", 'die1', 0, 1);
                                                                      cm.npc_SetSpecialAction("oid=2271849", 'die1', 0, 1);
                                                                      cm.npc_SetSpecialAction("oid=2271848", 'die1', 0, 1);
                                                                      cm.npc_LeaveField("oid=2271852");
                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
                                                                        cm.npc_LeaveField("oid=2271851");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=2271850");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=2271849");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=2271848");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(740);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/9", 1, 1, 1, 0, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(9390383, "oid=2271883", 540, 0, 9, 490, 590, 0, true, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=2271883", "summon", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayBGM("BgmBT.img/rock'nBattleTiger", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/9", 1, 0, 0, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=2271883", "special0", 0, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("嘿~ 可爱的小孩！你是#b#h0##k吗？我从阿尔那里得到消息之后，就亲自来找你，你居然和这些弱爆了的家伙在一起！", 1, 9390383, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("额啊！！什么啊！是凶猛的猛兽！！", 3, 9390383, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("嘿~ 怕什么,好让我伤心哦。", 1, 9390383, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("呃,竟然还说话啊? \r\n难道你就是猫猫#b阿尔#k所说的#b同伴#k?", 3, 9390383, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("嘿~ 小鬼。\r\n还挺机灵的嘛。\r\n我的名字叫#b拉伊#k,是一只勇敢的#b雪豹#k。", 1, 9390383, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("哇~!你好啊。\r\n其他同伴呢?#b阿尔#k呢?", 3, 9390383, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("嘿~ 小鬼。那件事以后再说~\r\n 最好抓紧时间。\r\n 赶紧先和我签订#b守护契约#k。", 1, 9390383, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("守护契约?", 3, 9390383, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("这~ 这~ #b阿尔#k这家伙,看来连一句都没说啊?\r\n 就是让你可以使用我们#b动物英雄之力量#k的契约。", 1, 9390383, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk("#b动物英雄们的力量#k?你?", 3, 9390383, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("嘿~ 小鬼,没时间了。\r\n 赶紧出来击三次掌啊!!", 1, 9390383, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=2271883", "special0", 0, 1);
                                                                                                                cm.inGameDirectionEvent_OneTimeAction(2002, 1010);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/8"], [2000, -50, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Contract", 100);
                                                                                                                  cm.sendNormalTalk("嚓,嚓,嚓!!", 3, 9390383, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("呃?就这样结束了?", 3, 9390383, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("嘿~ #b老大#k! \r\n 契约可不一定越复杂越好哦!", 1, 9390383, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.forceCompleteQuest(59008);
                                                                                                                          cm.gainExp(10);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                          cm.dispose();
                                                                                                                          cm.warp(866110000, 0, false);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                          cm.npc_LeaveField("oid=2271883");
                                                                                                                          cm.npc_LeaveField("oid=2271853");
                                                                                                                          cm.npc_LeaveField("oid=2271854");
                                                                                                                          cm.npc_LeaveField("oid=2271855");
                                                                                                                          cm.npc_LeaveField("oid=2271856");
                                                                                                                          cm.npc_LeaveField("oid=2271857");
                                                                                                                          cm.npc_LeaveField("oid=2271858");
                                                                                                                          cm.npc_LeaveField("oid=2271859");
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