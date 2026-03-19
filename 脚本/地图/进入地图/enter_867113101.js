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
      cm.setStandAloneMode(true);
      cm.updateInfoQuest(63098, "FirstEnter=1;FirstEnterC=1");
      cm.forceCompleteQuest(63025);
      cm.gainExp(317600);
      cm.updateInfoQuest(63025, "exp=1");
      cm.npc_ChangeController(9400207, "oid=23056702", -443, 83, 3, -493, -393, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23056702", "summon", 0, 0);
      cm.forceStartQuest(63250, "disappear");
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(18, 15000);
      cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 0, 120);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 350, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 350, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(800);
                cm.effect_NormalSpeechBalloon("#fs12#.……醒醒！……你醒醒！", 1, 0, 0, 6000, 0, 0, 0, 0, 4, 9400207, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 350, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 350, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(3);
                          cm.emotion(38, 15000);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.forceStartQuest(63250, "appear");
                            cm.npc_SetSpecialAction("oid=23056702", 'appear', 0, 0);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_NormalSpeechBalloon("#fs13##e哈~你醒了！你好，#h0#！\r\n欢迎你来到异逝界！", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 9400207, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, -200, 120);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b树，是你在说话吗？", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#fc0xffffdddd#没错！唔哈哈，我叫#p9400205#。很高兴认识你！", 37, 9400205, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b会说话的树耶，我好像听说过在魔法密林某处有这样的树。\r\n#p9400205#，这里是魔法密林吗？我刚才明明在林中之城的蝙蝠怪神殿里找小狗……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#fc0xffffdddd#这里是#e“异逝界”#n！人们不知从什么时候起就这么叫了。", 37, 9400205, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#fc0xffffdddd#这里和冒险岛世界不一样，这是个可以整日做自己喜欢的事情过日子的好地方！#e可以说是个让梦想变成现实的魔法世界吧？#n ", 37, 9400205, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#fc0xfff3ddff#你在这里待久了也会爱上这地方的！", 37, 9400205, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b哇，居然有这种地方……\r\n但是我……我必须回冒险岛世界。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#为什么？大家都说冒险岛世界是个辛苦又忙碌的地方！你回去的话，工作肯定已经堆成小山了不是吗？", 37, 9400205, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#fc0xffffdddd#如果你留在这里，你要做的事情只有一个，那就是#e找个喜欢的地方开开心心地生活！#n~！放着这么好的地方不待，跑回去干嘛？", 37, 9400205, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b你说的没错。我回去的话，肯定有很多事情要做。因此，我必须回去！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#嗯……可是至今为止从来没人离开异逝界返回冒险岛世界啊？", 37, 9400205, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b呃……该不是没有回去的办法吧？", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("\r\n#fs20##e#fc0xffd9d9d9#应该没有哦？", 37, 9400205, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                        cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.setStandAloneMode(false);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.forceStartQuest(63026, '');
                                                                              cm.sendNormalTalk("#b一定有办法回去的。\r\n我先在这里仔细找找吧。", 3, 0, false, true);
                                                                            } else if (status === V++) {
                                                                              cm.npc_LeaveField("oid=23056702");
                                                                              cm.npc_LeaveField("oid=23056702");
                                                                              cm.dispose();
                                                                              cm.warp(867113100, 0, true);
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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