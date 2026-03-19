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
      cm.npc_ChangeController(1530160, "oid=37630268", 691, 62, 5, 641, 741, 1, true, false);
      cm.npc_SetSpecialAction("oid=37630268", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哎呀……你是？", 37, 1530160, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你，不是上次崴脚的那个同学吗？该不会又在体育课上受伤了吧？", 37, 1530160, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不是，我因为午饭吃得太快好像是噎着了。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("是吗？那边抽屉里有红色药膏，你涂在不舒服的地方就行了。", 37, 1530160, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b（难道红色药膏是包治百病的？）#k\r\n好的，不过老师。不好意思，能问一下您今年多大了吗？您应该是二十刚出头吧？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 600, 58);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=37630268"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#呃，哎呦，这孩子。什么二十出头啊，我眼看都三十岁了。这孩子，哈哈哈。\r\n啊，这里有#b消化药#k，把这个吃了吧。", 37, 1530160, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b（明明都已经三十多了，还在那儿说瞎话……）#k是啊！我第一眼见老师的时候，还以为您是学生呢。那么学校老师中就是希拉老师您最年轻了吧。第二年轻的是麦格纳斯老师吗？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……应，应该是吧。#b（一副事不关己的样子）#k", 37, 1530160, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("听说差四岁的话连八字都不用看，#b差三岁的话都可以直接结婚#k……#fs12#（喃喃自语着）……", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#？", 37, 1530160, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("没什么，哈哈哈。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("刚才噎着，现在好多了。那我就先走啦。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯，好，走吧。", 37, 1530160, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("对了，您知道吗？听说麦格纳斯老师正好和希拉老师你差三岁呢？", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#嗯？是……是吗？", 37, 1530160, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("真的很神奇。我父母也是差三岁呢！而且听说我姑姑也要和跟她差三岁的男人结婚呢！", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#…………？", 37, 1530160, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那么我真的走喽，老师再见……", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 130, 550, 58);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(884);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37630268"], [0, 18, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("这孩子该不会是真病了吧？", 37, 1530160, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#嗯哼……", 37, 1530160, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.forceCompleteQuest(32814);
                                                                                cm.dispose();
                                                                                cm.warp(330000010, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;