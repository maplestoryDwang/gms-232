var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.npc_ChangeController(3004431, "oid=532656", -140, 206, 5, -303, -3, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=532656", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#face0#我们要带着这样的矛盾打仗吗？", 37, 3004431, false, true);
      cm.effect_Voice("Voice5.img/CH2/Idea/29", 128);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#也不是没有解决办法。", 37, 3004433, true, true);
        cm.effect_Voice("Voice5.img/CH2/Carlyle/31", 128);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我们到王宫去吧。我有东西要给两位看。", 37, 3004433, true, true);
          cm.effect_Voice("Voice5.img/CH2/Carlyle/32", 128);
        } else {
          if (status === v++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === v++) {
              cm.npc_LeaveField("oid=532656");
              cm.npc_LeaveField("oid=532656");
              cm.forceStartQuest(39808, '');
              cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2750, 0, 510, 353);
            } else {
              if (status === v++) {
                cm.npc_ChangeController(3004446, "oid=532745", 455, 200, -1, 400, 500, 1, true, 100, false);
                cm.npcMove(3004446, 145, 100, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === v++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === v++) {
                    cm.npc_SetSpecialAction('oid=532745', "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3004446, false, true);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === v++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === v++) {
                          cm.OnStartNavigation(410000680, 0, '', 39808);
                          cm.warp(410000500, 2);
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.npc_LeaveField('oid=532745');
                          cm.npc_LeaveField('oid=532745');
                          cm.dispose();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 22, -103);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 120, -83);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#这是蕴含太阳神密特拉之力的#b圣剑阿索尔#k。\r\n据说，将圣剑指向天空，空中就会射下神圣光芒，消灭邪恶。", 37, 3004433, false, true);
              cm.effect_Voice("Voice5.img/CH2/Carlyle/36", 128);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#虽然是把好剑……可我没感觉到它有什么特别的力量。", 37, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/31", 128);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#和其他许多圣遗物一样，随着#r古代神#k的时代落下帷幕，这把剑也失去了它的光芒。", 37, 3004433, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Carlyle/37", 128);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#可如今，很多事情都发生了变化。", 37, 3004433, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Carlyle/38", 128);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#许多超越者已不在人世，分割冒险岛世界和格兰蒂斯的次元封印也破碎了。", 37, 3004433, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Carlyle/39", 128);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#现在正是圣剑重拾光芒的时候。", 37, 3004433, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Carlyle/40", 128);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#沉睡了漫长岁月的太阳神之剑重拾光芒…… ", 37, 3004431, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Idea/32", 128);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#若真能实现，对期待古代神再临的人来说，将是个鼓舞人心的大好消息。", 37, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/32-1", 128);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#是的。这把剑会使塞尔提乌团结为一个整体。", 37, 3004433, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Carlyle/41", 128);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#但是，我们该怎么做呢？", 37, 3004431, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Idea/33", 128);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#教典中是这么写的。\r\n“天国的荣耀，将在#b高洁之人#k的手中，重拾光芒。”", 37, 3004433, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/42", 128);
                                } else {
                                  if (status === v++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#即使在古代，圣剑也不是什么人都能使用的。", 37, 3004433, false, true);
                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/43", 128);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#在#b天选之人#k出现之前，它就像现在这样，看起来和普通的剑没什么两样。", 37, 3004433, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/44", 128);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#高洁之人…… ", 37, 3004431, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Idea/34", 128);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("（好像感觉到了两人意味深长的目光。）", 57, 0, true, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face1#你战胜了堕落的超越者，如此成就，应该称得上是高洁之人了吧？", 37, 3004431, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Idea/35", 128);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#试一试又不会有损失。", 37, 3004433, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/45", 128);
                                              } else {
                                                if (status === v++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else if (status === v++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.eventSKill(0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.setStandAloneMode(false);
                                                      cm.forceCompleteQuest(39808);
                                                      cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                      cm.dispose();
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}