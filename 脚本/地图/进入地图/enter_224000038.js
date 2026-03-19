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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 325);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074127, "oid=2599592", 180, 288, 118, 130, 230, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2599592", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2599593", 4, 288, 115, -46, 54, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2599593", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("呼……", 37, 2074127, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#发现一个很有可能被宝玉附身的嫌疑人！\r\n小可爱，这就去确认！", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b(用万花筒观察山神。)", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哎？哎哟，没有被宝玉附身啊……\r\n嗯，可是为什么表情这么暗淡呢？", 37, 2074100, false, true);
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
                            cm.sendNormalTalk_Bottom("哎……这该如何是好，\r\n那边的几位异乡人，能不能……请你们帮我个忙啊？", 37, 2074127, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#什么？我们吗？您有什么事情吗？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那个……能借我点钱吗？", 37, 2074127, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=2599593"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#…………", 37, 2074100, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('…………', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我并没有在开玩笑，我现在很需要钱，\r\n没时间了……", 37, 2074127, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#原本山神就是个需要钱的职业吗？", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哎……其实吧……是因为樵夫……\r\n我把钱都花光了。", 37, 2074127, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#樵夫吗？", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("从前他弄丢斧头的时候，我念在他本分老实，\r\n曾经把金斧银斧都给过他。\r\n可是他最近却突然找上门来，说是弄丢了东西，跟我要些贵重物品……\r\n他原本可不是这样的人啊……难道是我教导错了吗……", 37, 2074127, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗯……\r\n你不能不给他吗？", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("若是按照我们神灵的法则，状况会变得很复杂，\r\n我是绝对不能不给他的。\r\n哎……樵夫绝不是那样的人啊，为什么会变成这样了。\r\n该死，他又该来了。", 37, 2074127, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(2074128, "oid=2599801", 69, 280, 117, 19, 119, 0, false, 500, false);
                                                      cm.npc_SetSpecialAction("oid=2599801", "summon", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("嗯，今天也来干干活吧。", 37, 2074128, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#嗯~是不是有种感觉啊？\r\n就是那种樵夫好像被宝玉附身的感觉……\r\n要不要确认看看？", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2599801"], [7500, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你看！果然樵夫是被宝玉附身了。\r\n额……这种感觉……", 37, 2074100, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我要获得一切，这些都是我的，我还要更多……", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#没错，肯定是贪婪宝玉！", 37, 2074100, true, true);
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
                                                                              cm.sendNormalTalk_Bottom("呵呵呵，今天拿到的钱买点什么好呢，\r\n来，今天也来挣笔钱吧？\r\n哎哟喂，我的钱袋子掉下去了呢？", 37, 2074128, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("嗯……我可在这里都看着呢，\r\n你好像并不是失手弄掉的，而是故意弄掉的吧……", 37, 2074127, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("哎哟喂，这有什么关系。\r\n赶紧帮我找到我的袋子。", 37, 2074128, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("哎……\r\n……在这里呢。", 37, 2074127, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("嗯？这并不是我原先的钱袋子啊。\r\n搞什么？赶紧把我的钱袋子还给我。", 37, 2074128, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……我说，你为什么要这样？\r\n你难道不知道古话是怎么说的吗？善恶终有报。\r\n求你不要再贪心了，你要是继续这么活下去，会有鬼来抓你走的。", 37, 2074127, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("哼，又给我提什么鬼故事吗？一开始我还有些害怕，可我什么事儿都没有啊。\r\n别废话了，赶紧的，给我钱，赶紧！！！", 37, 2074128, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……我们出面吧？", 37, 2074100, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.forceStartQuest(30921, '1');
                                                                                              cm.updateInfoQuest(30430, "gExpCheck=1");
                                                                                              cm.forceStartQuest(30430, '');
                                                                                              cm.gainExp(198883);
                                                                                              cm.forceCompleteQuest(30430);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                            } else if (status === V++) {
                                                                                              cm.dispose();
                                                                                              cm.warp(224000102, 3, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;