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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530140, "oid=41728190", 1572, 27, 21, 1522, 1622, 1, true, false);
      cm.npc_SetSpecialAction("oid=41728190", "summon", 0, 0);
      cm.npc_ChangeController(1530274, "oid=41728191", 1482, 29, 17, 1432, 1532, 0, true, false);
      cm.npc_SetSpecialAction("oid=41728191", "summon", 0, 0);
      cm.npc_ChangeController(1530284, "oid=41728192", 1392, 29, 24, 1342, 1442, 0, false, false);
      cm.npc_SetSpecialAction("oid=41728192", "summon", 0, 0);
      cm.npc_ChangeController(1530304, "oid=41728193", 1302, 29, 20, 1252, 1352, 0, true, false);
      cm.npc_SetSpecialAction("oid=41728193", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs26#大约20分钟前\r\n#fs14#神兽国际学校旧楼大门"], [100, 2500, 4, 0, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你们准备好接受命运了吗？", 33, 1530140, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯……不过，弗朗西斯，一定要去旧楼才行吗？", 33, 1530274, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("就……就是说啊，我们不到这里，去学校不行吗？", 33, 1530284, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("阴气越重的地方，Darkness的力量就越强，就能召唤出更灵验的精灵。还有，这附近阴气最重的地方就是这里了。", 33, 1530140, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("虽说是这样……但……我从刚刚开始就听见某处传来呢喃声。", 33, 1530304, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呃呃~ 我听到了小孩的哭声……", 33, 1530274, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不是的！我听见有个女人在喊我的名字！！！！！", 33, 1530284, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 1000, 1530274, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1000, 1530284, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("..........", 1, 0, 0, 1000, 1530304, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=41728191", 'suprise', 0, 0);
                              cm.npc_SetSpecialAction("oid=41728192", "suprise", 0, 0);
                              cm.npc_SetSpecialAction("oid=41728193", "suprise", 0, 0);
                              cm.fieldEffect_PlayFieldSound("flowervioleta/appear", 100);
                              cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 1452, 22);
                              cm.effect_NormalSpeechBalloon("呀啊啊啊啊啊啊咳啊！", 0, 0, 0, 2000, 1530274, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(4100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("冷……冷静点！这只是我们内心深处的Darkness创造出的幻听而已！如果我们现在放弃，就无法见到黑暗精灵，也无法得知我们想知道的事情了！", 33, 1530140, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("没……没错。我一定要问问我以后能不能上大学。如果精灵说我上不了大学，反正我上不了，以后就不用学习了。如果精灵说我能上大学，反正我能上大学，那我以后也不用学习了！嘿嘿。", 33, 1530274, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我……我想问问我们班的美英究竟喜不喜欢我。嘿嘿，虽然我感觉美英100%喜欢我，但我还是觉得有必要确认下。", 33, 1530284, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("没……没错！我要问问我未来老公年薪是多少！", 33, 1530304, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("(我要问问精灵，奥尔卡会不会成为我的老婆。)", 33, 1530140, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    cm.effect_NormalSpeechBalloon("噢噢噢噢, 我们鼓起勇气吧！", 1, 0, 0, 1000, 1530274, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      cm.effect_NormalSpeechBalloon("唔哦！", 1, 0, 0, 500, 1530284, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                                        cm.effect_NormalSpeechBalloon("呀吼！", 1, 0, 0, 800, 1530304, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          cm.effect_NormalSpeechBalloon('嗬嗬！', 1, 0, 0, 1500, 1530274, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                            cm.effect_NormalSpeechBalloon("如果情况不妙, 我就用右手臂上的黑龙之力来击退精灵就行了。", 1, 0, 0, 3000, 1530140, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              cm.effect_NormalSpeechBalloon('真不愧是弗朗西斯！', 0, 0, 0, 2000, 1530274, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                cm.effect_NormalSpeechBalloon("勇……勇士们, 我们继续前进吧。", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=41728190", 1, 500, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(330003002, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;