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
      cm.npc_ChangeController(3004430, "oid=63488904", -670, -30, 19, -720, -620, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63488904", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=63488905", -880, -30, 22, -930, -830, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63488905", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -738, -35);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(5500);
        cm.effect_Text(["#fn黑体##fs18#黎明, 翼人军营地附近。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.setAmbience("SoundEff.img/ArcaneRiver/night", 300, 100);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#都逃到这里，我们可以先缓口气了。", 37, 3004431, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#你看到了吗？标志……", 37, 3004430, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#标志发光了。", 37, 3004430, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#他……#r奇勒摩#k就是那个天选之人。", 37, 3004430, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯，我也看到了。", 37, 3004431, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63488904"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#你是说，你明知道这一点……却仍旧攻击了他？", 37, 3004430, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯。我一字不落地听完了他说的话。", 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我要成为圣剑的主人。", 37, 3004456, false, true);
                                    cm.effect_Voice("Voice5.img/CH3/4_21", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#是时候该扫清这片大地上所有不信神者和异教徒。\r\n建立真正的神之城市了。", 37, 3004456, true, true);
                                      cm.effect_Voice("Voice5.img/CH3/4_22", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#与其说他是在守护圣地，倒不如说是在破坏圣地。", 37, 3004431, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#……", 37, 3004430, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#但是……他的确是圣剑的主人。", 37, 3004430, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#如果唤不回圣剑之光，那#r暗红的阴霾#k……\r\n#r近天峰的灾难#k又会重演了。", 37, 3004430, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……塞伦。", 37, 3004431, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我今天一早就开始查阅启动#b圣遗物#k的条件了。", 37, 3004431, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#即使有高洁之人、正义之人、纯洁之人、天族等一系列要求在前，但……", 37, 3004431, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#从命运来看，压根不存在那个主人#r“已经被选中”#k的说法。", 37, 3004431, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#你……想说什么呢？", 37, 3004430, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#如果标志只是个用来证明资格的物件……\r\n那么就算是你拿着这个标志，它也会发光。", 37, 3004431, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63488904"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#现在还不晚。", 37, 3004431, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#回去拿起圣剑吧。\r\n请你成为#b圣剑之主#k。", 37, 3004431, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#不要再将圣地的命运交付于他人之手了。", 37, 3004431, false, true);
                                                                              } else if (status === V++) {
                                                                                cm.eventSKill(0);
                                                                                cm.warp(993151014, 0, true);
                                                                                cm.npc_LeaveField("oid=63488904");
                                                                                cm.npc_LeaveField("oid=63488904");
                                                                                cm.npc_LeaveField("oid=63488905");
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