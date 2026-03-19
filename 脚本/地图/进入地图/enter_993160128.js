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
      cm.npc_ChangeController(3001656, "oid=375498", -4, 35, 32, -54, 46, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_OneTimeAction(29, 999999);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -100, -68);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#直到这时候还不知道。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#谁能想到只是接二连三地做杂务！", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n施展道术做的事如下所示。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n帮前辈打杂。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#偷草鞋贼.", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#在找到丢失的猫咪之前。", 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#杂务不断的每一天。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#饕餮长篇大论的唠叨。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#但是完成委托后吃的泡饭……", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n美味到能让人忘记一切。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n然后时间流逝", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#来青云谷都已经有几个月的时间了。", 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_OneTimeAction(29, 999999);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 361, -68);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Text(["#fn黑体##fs18#数月后，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 361, 33);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungStory/9", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face6#哇~果然还是这家店的泡饭最美味，\r\n就是靠这个美味，我才能战胜辛苦的杂务啊！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#哈欠……虎影你貌似已经不知不觉适应了解决师的工作呢。", 37, 3001653, true, true);
                                                      cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face11#虽说我也好想尽快摆脱这些杂务。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#有件事我之前就很好奇来着，虎影你为什么\r\n想要成为解决师？为此不惜承担那些麻烦的事。", 37, 3001653, true, true);
                                                          cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face10#这有点不好意思开口呢……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#要是有困难你大可以开口，哈欠……", 37, 3001653, true, true);
                                                              cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face11#我在书里看到过一个帮助处于困境之人的道士的故事，\r\n既然我已经来到这个世界，也想像那个道士一般潇洒地行侠仗义。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#我可绝对不能说是想在所有人面前摆架子。", 37, 3001651, true, true);
                                                                  cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（饕餮这家伙……）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#哈欠……我也曾经这样过。", 37, 3001653, true, true);
                                                                      cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face7#那现在呢？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#那件事……等下次再说吧，说起来我有个好消息\r\n要告诉虎影你，估计会让你大吃一惊哦！", 37, 3001653, true, true);
                                                                          cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/12', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face7#好消息！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/13', 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#这是正式委托，不是杂务。", 37, 3001653, true, true);
                                                                              cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face7#我终于……也有机会了……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#既然是正式委托，这么说现在就要去抓怪物了吗！？", 37, 3001651, true, true);
                                                                                  cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/16', 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#哈欠……具体情况你就回情报商店找卡琳了解吧，\r\n祝你好运，虎影解决师。", 37, 3001653, true, true);
                                                                                    cm.effect_Voice("Voice5.img/hoyoung/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.forceCompleteQuest(39519);
                                                                                        cm.gainExp(938);
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                        cm.gainItem(4036579, -15);
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
                                                                                              cm.warp(410000200, 2, false);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
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
  }
}