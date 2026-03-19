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
      cm.dispelBuff(80002824);
      cm.npc_ChangeController(3001657, "oid=375315", -1749, -63, 0, -1799, -1699, 0, false, 0, false);
      cm.npc_ChangeController(3001659, "oid=375316", 1378, 35, 81, 1328, 1428, 4, true, 0, false);
      cm.npc_ChangeController(3001660, "oid=375317", 1508, 35, 81, 1458, 1518, 5, true, 0, false);
      cm.npc_ChangeController(3001661, "oid=375318", -1542, 35, 13, -1592, -1492, 5, true, 0, false);
      cm.npc_ChangeController(3001661, "oid=375319", -1470, 35, 13, -1520, -1420, 5, true, 0, false);
      cm.npc_ChangeController(3001686, 'oid=375320', -2017, 35, 12, -2073, -1984, 4, true, 0, false);
      cm.npc_ChangeController(3001687, 'oid=375321', -1893, 35, 12, -1989, -1889, 4, true, 0, false);
      cm.npc_ChangeController(3001689, "oid=375322", 1234, 35, 81, 1134, 1234, 4, true, 0, false);
      cm.npc_ChangeController(3001686, "oid=375323", 1026, 35, 66, 1015, 1115, 2, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001651, "oid=2974365", 1124, -504, 79, 1074, 1174, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2974365", "summon", 0, 0);
        cm.SitOnDummyPortableChair(3018396, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1439, 30);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
              cm.effect_Text(["#fn黑体##fs18#几日后，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#听说了吗？那个新来的解决师。", 37, 3001659, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#怎么可能不知道，大家可都议论纷纷呢！\r\n是你让寺院的修行者们回来的吧？", 37, 3001660, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#听说还在接一些重要的委托……\r\n再这样下去，我们的工作该不会都要没了吧？", 37, 3001659, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呵呵……搞不好真是这样，\r\n之前闷在法堂里祈祷的俊秀法师也回来了……", 37, 3001660, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#不仅修行者们回来了，就连法师也……\r\n没想到事情就一下子全都解决了啊。", 37, 3001659, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1600, 30);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这是法师亲手缝制的人偶，能够抵挡厄运，\r\n像这样把它挂在屋檐下吧。", 37, 3001661, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#所幸俊秀法师回来了，\r\n才刚祈祷完没多久就有这种……", 37, 3001657, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#啊，还有这些……请不要推辞，收下吧。\r\n不是什么贵重的东西，肚子饿的时候可以用来果腹。", 37, 3001657, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#愿青云谷永远宁静……", 37, 3001661, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1081, -415);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（从喜鹊怪的巢穴中救出倒下的修行者，返回寺院，\r\n发现之前消失的修行者全都已经回来了。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（他们貌似是被抓去其他巢穴了……\r\n总之事件已经告一段落，村庄再次找回了平静。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face11#看到了吗，饕餮？我虎影就是这么厉害。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你说的是那个从峭壁掉下来，差点丧命的家伙吗？", 37, 3001651, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#非得泼冷水吗？唔……即便现在回想起来，那一刻都令人胆战心惊，\r\n幸好招来了筋斗云。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#就算做解决师也要注意爱惜自己的身体，要是连命都没了，还谈什么梦想？\r\n看来以后我要谨慎行事并集中精神。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face12#啊！要是什么都不干，一切也能顺顺利利的就好了！……你说对不对，饕餮？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哼……那个流氓道士。", 37, 3001651, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.forceStartQuest(39522, '');
                                                                                    cm.forceCompleteQuest(39522);
                                                                                    cm.gainExp(660);
                                                                                    cm.gainExp(466);
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                        } else if (status === V++) {
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.warp(410000200, 0, false);
                                                                                          cm.eventSKill(0);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.npc_LeaveField("oid=2974365");
                                                                                          cm.npc_LeaveField("oid=2974365");
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}