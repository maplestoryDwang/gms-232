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
      cm.npc_ChangeController(1530100, "oid=20839438", 412, 179, 5, 362, 462, 0, true, false);
      cm.npc_SetSpecialAction("oid=20839438", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=20839439", 597, 179, 6, 547, 647, 1, true, false);
      cm.npc_SetSpecialAction("oid=20839439", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=20839440", 740, 179, 6, 690, 790, 1, true, false);
      cm.npc_SetSpecialAction("oid=20839440", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 180, 530, 179);
        cm.effect_Text(["#fn黑体##fs26#同时, 屋顶上"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2958);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那家伙应该就是传闻中的那个人吧？", 37, 1530100, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你是说那个关于命运之转学生什么的传闻？", 37, 1530080, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("怎么看都不像是个普通学生。就像藏着什么秘密似的……", 37, 1530090, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哈哈哈，各位前辈，你们都猜错了。", 37, 1530230, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=20839438");
                    cm.npc_LeaveField("oid=20839438");
                    cm.npc_ChangeController(1530100, "oid=20841540", 412, 179, 5, 362, 462, 1, true, false);
                    cm.npc_SetSpecialAction("oid=20841540", 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530100, cm.getPlayer().getId());
                    cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530080, cm.getPlayer().getId());
                    cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530090, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(1530230, "oid=20841855", -173, 179, 3, -223, -123, 0, true, false);
                      cm.npc_SetSpecialAction("oid=20841855", "summon", 0, 0);
                      cm.inGameDirectionEvent_PushMoveInfo(0, 500, -530, 179);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2122);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                          cm.npc_SetForceMove("oid=20841855", 1, 400, 100);
                          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 530, 179);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2122);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("命运之转学生……说的那是我啊。", 37, 1530230, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("听说几位前辈是这所学校的最强三人组？不好意思，从今天开始这个屋顶就归我了。啊哈哈哈哈！", 37, 1530230, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 1, 1500, 1530100, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 1, 1500, 1530080, cm.getPlayer().getId());
                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 1, 1500, 1530090, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=20841540", 1);
                                    cm.sendNormalTalk_Bottom("好饿啊，我们去吃点心吧？", 37, 1530100, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("咱们石头剪子布，谁输谁请客。", 37, 1530080, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=20841855"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("不是，那个……", 37, 1530230, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("点心还是奶油泡芙最好吃。", 37, 1530100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不是，我觉得蜜豆面包和纯牛奶才是绝配。", 37, 1530080, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("喂喂，你们听我说！！我不管什么前辈不前辈的！上吧！", 37, 1530230, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=20841540", 0);
                                                cm.npc_SetForceMove("oid=20841540", -1, 800, 100);
                                                cm.npc_SetForceMove("oid=20839439", -1, 800, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我先去占位置了？伊卡尔特，你要快点来，知道吧！", 37, 1530100, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=20841540");
                                                      cm.npc_LeaveField("oid=20841540");
                                                      cm.npc_LeaveField("oid=20839439");
                                                      cm.npc_LeaveField("oid=20839439");
                                                      cm.npc_SetForceMove("oid=20839440", -1, 300, 100);
                                                      cm.sendNormalTalk_Bottom("……？？？", 37, 1530230, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("想挑衅的话，我看你是找错人了。", 37, 1530090, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              cm.effect_Voice("SoundEff.img/punch", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=20841855", "die", -1, 1);
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.npc_SetForceMove("oid=20839440", -1, 800, 100);
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 180, 400, 179);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=20839440");
                                                                    cm.npc_LeaveField("oid=20839440");
                                                                    cm.sendNormalTalk_Bottom("……怎么会这样……居然又输了……居然连输两次！我才是命运之转学生……我！", 37, 1530230, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你在这儿干什么呢，儿子？", 37, 1530520, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(1530520, "oid=20853582", -173, 179, 3, -223, -123, 0, true, false);
                                                                        cm.npc_SetSpecialAction("oid=20853582", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 500, -530, 179);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1861);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, -100, 170);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                cm.effect_Text(["#fn黑体##fs26#阿烈达\r\n贪婪的董事长"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
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
                                                                                            cm.npc_setForceFlip("oid=20841855", -1);
                                                                                            cm.sendNormalTalk_Bottom("妈妈……这所学校厉害的家伙实在是太多了。以我的力量没办法接手这所学校啊。", 37, 1530230, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("谁让你通过打架来接手了？", 37, 1530520, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530230, cm.getPlayer().getId());
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("别傻了！这所学校的主人是希纳斯。你只要把希纳斯拿下，学校自然就到你的手上了。", 37, 1530520, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      cm.effect_Text(["#fn黑体##fs26#第二天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=20841855", 0);
                                                                                                      cm.forceCompleteQuest(32737);
                                                                                                      cm.forceCompleteQuest(32758);
                                                                                                      cm.dispose();
                                                                                                      cm.warp(330000000, 1);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;