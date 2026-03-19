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
      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(5, 256, 0, 0, 0, 0);
      cm.setMobImage("SoundEff.img/PL_AfterLand/clear_day", 200);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(63250, "disappear");
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400246, "oid=23308303", -120, 100, 4, -170, -70, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23308303", 'summon', 0, 0);
      cm.npc_ChangeController(9400207, "oid=23308304", -528, 100, 1, -578, -478, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23308304", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, -50, 170);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("不瞒你说，我也为了找钥匙漂泊了很长时间。\r\n可惜仅仅找到这一个钥匙，只好在这里定居下来！哈哈。", 37, 9400221, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这地方也不错。四周很安静，可以沉浸在思索中，享受我一个人的时光。", 37, 9400221, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b这个……这真的是可以打开巨门，通往冒险岛那道巨门的钥匙吗？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("哎呀~~你怎么对人这么缺乏信赖？去开锁试试不就知道了", 37, 9400221, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b这么宝贵的东西你要给我吗？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我来到异逝界已经数十年了。但我不久前才刚刚定居下来。知道之前我都在做什么吗？\r\n当然是到处找钥匙！", 37, 9400221, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("在数十年的岁月中，我只找到一个钥匙。现在我累了，对这地方也有感情了。所以我把钥匙给你。", 37, 9400221, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b(数十年……)", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("在那段时间里我走遍异逝界，在探险中学到了很多。", 37, 9400221, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -350, 170);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=23308303", -1, 200, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.sendNormalTalk_Bottom("换句话说！我有很多东西可以教给你。", 37, 9400221, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 250);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("比如说……这里这棵树就是#p9400205#！", 37, 9400221, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.forceStartQuest(63250, "appear");
                                    cm.npc_SetSpecialAction("oid=23308304", "appear", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_PlayMusic("SoundEff.img/12thMiniGame/bonus");
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我正打算跟#fc0xfff3ddff##h0#说呢！", 37, 9400205, false, true);
                                      cm.effect_NormalSpeechBalloon("...(阿依赖？！)", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你？真的是？", 37, 9400221, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b(他们俩似乎认识。)", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("在各个世界里看上去千篇一律的树木中肯定有一棵是这家伙！它就像神一样观望着一切。", 37, 9400221, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("虽然它挺讨人厌的，却是个很有用的家伙。通过它你可以自由移动到其他世界。美中不足的就是必须按照规定的顺序一个世界一个世界地走。", 37, 9400221, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不知你有没有发现，这地方的各世界虽然彼此独立，又像一个整体一样运作。看似没有任何限制自由自在，其实都在按照各自规定的法则运作。其中一个法则就是循环。这名称是我起的，呵呵", 37, 9400221, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这是你到的第几个世界？", 37, 9400221, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b第一个是勇士之地，第二个是财物之地，现在在思索之地，是第三个。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("呵呵，果然你也一样。不管是从哪里开始的，都会按着#e勇士之地，财物之地，思索之地，童心之地，然后再到勇士之地，财物之地……#n这样的顺序行动。就像小白鼠跑转轮一样，反反复复地在相同的世界里来回跑，日久天长回家的意志就会消磨殆尽……\r\n就像我这样。", 37, 9400221, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("真不好意思，本来要给你提供些信息，结果好像反而在给你泼冷水了……", 37, 9400221, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呵呵，不管怎样，你有什么好奇的随时可以来问我。", 37, 9400221, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("对了！你结束跟我的对话后，去跟那边的阿依赖聊聊吧。", 37, 9400221, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.forceCompleteQuest(63049);
                                                              cm.updateInfoQuest(63049, "speak=1");
                                                              cm.gainExp(317600);
                                                              cm.updateInfoQuest(63049, "speak=1;exp=1");
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(867113400, 2, true);
                                                                cm.setStandAloneMode(false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=23308303");
                                                                cm.npc_LeaveField("oid=23308303");
                                                                cm.npc_LeaveField("oid=23308304");
                                                                cm.npc_LeaveField("oid=23308304");
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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