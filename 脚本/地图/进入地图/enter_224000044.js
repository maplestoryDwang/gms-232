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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2294, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2597334", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2597334", "summon", 0, 0);
        cm.npc_ChangeController(2074143, "oid=2597335", -2318, -74, 132, -2368, -2268, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2597335", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face0#那个，那个，是不是有点感觉了啊？\r\n小荳和红豆的小荳原本可不会有这种表情啊，\r\n她原本可是个开朗诚实的孩子啊……", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#难道被宝玉附身了吗，要不看一看？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2597335"], [5000, 0, 0, 1, 0, 1, 0, 0]);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#果然！小荳被宝玉附身了。\r\n那，终结者小可爱出动了！", 37, 2074100, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1##b#fs25#小#fs20#~可爱~ #fs25#小#fs20#~可爱~ #g#fs25#小↗ ~可↑ ~爱~~！#k", 37, 2074100, false, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                              cm.sendNormalTalk_Bottom("#face1##fs12#小~可~爱~小~可~爱~", 37, 2074100, false, true);
                              cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                    cm.sendNormalTalk_Bottom("啊……好烦啊。", 37, 2074143, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2597334", -1, 50, 100);
                                      cm.sendNormalTalk_Bottom("#face0#那个，难道有什么事情吗？\r\n你怎么这副表情呢？", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2597335", 1);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2597335"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("什么？你哪位啊？", 37, 2074143, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我可是帮助这里的人解决苦恼的终结者。\r\n我在你的脸上感受到了某种烦恼。", 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我不信道，你走吧。", 37, 2074143, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#不是，我们不是那种人。", 37, 2074100, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(2074144, "oid=2597389", -2383, -74, 132, -2433, -2333, 0, false, 500, false);
                                                  cm.npc_SetSpecialAction("oid=2597389", "summon", 0, 0);
                                                  cm.npc_ChangeController(2074145, "oid=2597390", -2434, -74, 131, -2484, -2384, 0, false, 500, false);
                                                  cm.npc_SetSpecialAction("oid=2597390", "summon", 0, 0);
                                                  cm.sendNormalTalk_Bottom("哞哞，小荳，你又这样？\r\n拜托你能不能也出去找点事儿干啊？", 37, 2074144, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呱呱呱呱，就是说啊，\r\n现在是不是也该觉得烦了啊。", 37, 2074145, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=2597335", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("哎……抱歉。\r\n麻烦让我一个人待会儿。", 37, 2074143, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哞哞哞，知道了。\r\n现在我们也不想再说了。", 37, 2074144, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("呱呱！所以说啊！\r\n现在真的都对你绝望了！", 37, 2074145, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=2597389");
                                                              cm.npc_LeaveField("oid=2597390");
                                                              cm.sendNormalTalk_Bottom("#face0#刚刚他们算是朋友吗？\r\n看上去都是好孩子啊，怎么都这样呢……", 37, 2074100, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=2597335", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("你还是走吧，\r\n我烦着呢，你还是请回吧。", 37, 2074143, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……知道了。\r\n那要是你需要我们的帮助就叫我们，知道了吧？", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2597335", -1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=2597334", 1);
                                                                        cm.npc_SetForceMove("oid=2597334", 1, 50, 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#该死……大事不妙啊，你看到小荳是怎么待朋友的吗？\r\n只要一走到那孩子跟前，她就什么都觉得烦……", 37, 2074100, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这好像是#b“怠惰”宝玉#k，哎。\r\n该怎么办呢？我好像也因为那股气息……都开始觉得烦躁了……", 37, 2074100, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#得先去小荳朋友那里找点线索才好吧。", 37, 2074100, true, true);
                                                                            } else if (status === V++) {
                                                                              cm.forceStartQuest(30437, '');
                                                                              cm.dispose();
                                                                              cm.warp(224000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;