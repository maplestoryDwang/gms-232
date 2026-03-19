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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530340, "oid=39025670", 245, 290, 4, 195, 295, 1, false, false);
      cm.npc_SetSpecialAction("oid=39025670", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=39025671", 145, 290, 4, 95, 195, 0, true, false);
      cm.npc_SetSpecialAction("oid=39025671", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=39025672", 45, 290, 4, -5, 95, 0, true, false);
      cm.npc_SetSpecialAction("oid=39025672", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 145, 289);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs26#同一时间\r\n#fs14#王都桑的校服店"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(6336);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("什么？白色的头发？那不可能。我记得那家伙是黑发，肤色也很健康。", 37, 1530340, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……嗯？你在说什么啊，大叔。", 37, 1530120, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你们见到的究竟是谁啊？你们描述的容貌与我的记忆完全不符啊。", 37, 1530340, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('啊？', 37, 1530110, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("王都桑大叔！", 37, 1530512, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1530512, "oid=39030486", -225, 290, 4, -275, -175, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=39030486", "summon", 0, 0);
                        cm.npc_setForceFlip("oid=39025671", -1);
                        cm.npc_setForceFlip("oid=39025672", -1);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=39025671"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=39025672"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 300, -155, 289);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1499);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("噢，快看看是谁来了！真是说曹操曹操就到啊。这不是神兽国际学校#b传说中的美男#k嘛！", 37, 1530340, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哈哈，好久不见。从这周开始，我将在母校进行教学实习。", 37, 1530512, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("?????", 0, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                      cm.effect_NormalSpeechBalloon("?????", 0, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=39025671", 1);
                                        cm.npc_setForceFlip("oid=39025672", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("喂，王都桑大叔……你能说明下现在的情况吗？", 37, 1530110, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("嗯？我听你们说传说中的美男学长，还以为你们在说这家伙呢！我来介绍下，这是你们学校传说中的美男“与猪共舞”。", 37, 1530340, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=39025671", -1);
                                              cm.npc_setForceFlip("oid=39025672", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我叫“与猪共舞”。你们别看我长这样，其实我只有25岁哦。", 37, 1530512, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=39030486", "twinkle", 0, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39025671"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39025672"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("那这位是……王都桑大叔所说的传说中的美男？", 37, 1530110, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那是当然啦。深邃的眼神，高挺的鼻梁，洁白的牙齿！这完全是美男的标准啊！", 37, 1530340, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("看来王都桑大叔的眼光与我们有些不同……", 37, 1530120, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("大家都在这里啊？", 37, 1530070, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(1530070, "oid=39040518", -355, 290, 4, -405, -305, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=39040518", "summon", 0, 0);
                                                                cm.npc_ChangeController(1530060, "oid=39040519", -305, 290, 4, -355, -255, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=39040519", "summon", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                                                                  cm.npc_SetForceMove("oid=39040519", 1, 180, 160);
                                                                  cm.npc_SetForceMove("oid=39040518", 1, 150, 120);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("那个，大事不好了。我们刚刚跟大学那边联系，告诉他们阿白实习老师的教学实习已经完成……", 37, 1530060, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("但他们通过身份调查，却没有在学籍部中找到阿白实习老师……", 37, 1530060, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        cm.effect_NormalSpeechBalloon("?????", 0, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                                                        cm.effect_NormalSpeechBalloon("?????", 0, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("还有，我们在学校前的垃圾桶中发现了这个。我们担心学生们伤心，就赶紧将这些东西回收了。", 37, 1530070, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_ChangeController(1530557, "oid=39044301", -35, 290, 4, -85, 15, 0, false, 1000, false);
                                                                            cm.npc_SetSpecialAction("oid=39044301", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39025671"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39025672"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("这是学生们送给实习老师的信和花束……怎么会这样，居然把这些全部丢掉了？", 37, 1530120, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("……我们看到的那个人究竟是谁？", 37, 1530110, true, true);
                                                                                  } else if (status === V++) {
                                                                                    cm.forceStartQuest(33026, '');
                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                    cm.forceCompleteQuest(33026);
                                                                                    cm.dispose();
                                                                                    cm.warp(330001900, 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;