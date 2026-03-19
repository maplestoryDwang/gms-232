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
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390382, "oid=2272488", -707, -650, 39, -757, -657, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272488", "summon", 0, 0);
      cm.npc_ChangeController(9390383, "oid=2272489", -641, -550, 36, -691, -591, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272489", "summon", 0, 0);
      cm.npc_ChangeController(9390384, "oid=2272490", -936, -550, 33, -986, -886, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272490", "summon", 0, 0);
      cm.sendNormalTalk("啊,怎么办?我们也赶紧下去帮忙吧!", 3, 9390381, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9390381, "oid=2272491", -776, -484, 34, -826, -726, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2272491", 'summon', 0, 0);
          cm.npc_SetSpecialAction('oid=72634', "attack1", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('没必要那样喵!', 1, 9390381, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("啊,阿尔!!!你什么时候过来的?", 3, 9390381, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("现在来了喵。\r\n比这更重要的是,没时间喵!赶紧和我签订契约喵。", 1, 9390381, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2272491", "special1", 0, 1);
                  cm.inGameDirectionEvent_OneTimeAction(2019, 540);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/14"], [2000, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(750);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2272491", "special4", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嚓,嚓,嚓!!", 1, 9390381, false, true);
                      cm.updateInfoQuest(65890, "count=609;todayCount=579;lastDate=20210530");
                      cm.updateInfoQuest(65890, "count=609;todayCount=609;lastDate=20210530");
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Contract", 100);
                        cm.sendNormalTalk("嗯,那我就设法帮助村民们能够消灭怪物好了喵!", 1, 9390381, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("释放吧，猫咪的本领和力量！", 1, 9390381, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/3"], [3850, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al1", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(50);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2272491");
                                cm.inGameDirectionEvent_AskAnswerTime(450);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9390381, "oid=2272577", -776, -484, 34, -826, -726, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2272577", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -676, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1032);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/4"], [1190, 380, 480, 1, 0, 0, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al4", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/4"], [1190, 300, 480, 1, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al4", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/4"], [1190, 220, 480, 1, 0, 0, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al4", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/4"], [1190, 120, 480, 1, 0, 0, 0, 0, 0]);
                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al4", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("再一次！！！！！", 1, 9390381, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/5"], [1540, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al2", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(40);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=2272577");
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -676, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1004);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/6"], [2200, 260, 480, 1, 0, 0, 0, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Al3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(9390381, "oid=2272587", -776, -484, 34, -826, -726, 1, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=2272587", "summon", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("这是怎么回事？力量好像释放了！！！！", 1, 9390307, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("我感受到了无比强大的力量！我已经30多年没这样的感受了！", 1, 9390308, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("那我们来战斗吧？！！！", 1, 9390304, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/16", 1, 1, 1, 0, 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/16", 1, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                    cm.sendNormalTalk("哇!村民们变得好厉害哦!!! \r\n 啊,罗斯娜奶奶在那边轻松对付怪物呢!!", 3, 9390304, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("喵!这就是我的力量喵喵!!", 1, 9390381, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("嗯,厉……厉害……不过……为何……会这么困……呢?", 3, 9390381, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.emotion(3, 10000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_OneTimeAction(25, 3000);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/10"], [2000, 169, -260, 1, 0, 0, 0, 0, 0]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [2000, 100, -120, 1, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/10"], [2000, 235, -220, 1, 0, 0, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [2000, -60, -220, 1, 0, 0, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.updateInfoQuest(59021, "fly=2");
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(866135000, 0, false);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=2272488");
                                                                                                    cm.npc_LeaveField("oid=2272489");
                                                                                                    cm.npc_LeaveField("oid=2272490");
                                                                                                    cm.npc_LeaveField("oid=2272587");
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}