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
      cm.npc_ChangeController(3001605, 'oid=375547', -430, 161, 0, -480, -380, 1, false, 0, false);
      cm.npc_ChangeController(3001617, "oid=375548", 724, 220, 7, 724, 774, 5, true, 0, false);
      cm.npc_ChangeController(3001618, "oid=375549", -557, -77, 0, -607, -507, 1, false, 0, false);
      cm.npc_ChangeController(3001619, 'oid=375550', -638, -136, 0, -688, -588, 0, false, 0, false);
      cm.npc_ChangeController(3001620, 'oid=375551', 550, 220, 2, 500, 600, 5, true, 0, false);
      cm.npc_ChangeController(3001621, "oid=375552", 618, 220, 2, 568, 668, 5, true, 0, false);
      cm.npc_ChangeController(3001622, "oid=375553", 269, 220, 2, 219, 319, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -320, 230);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（转告对方说自己帮助帕拉希负责解决了事件，\r\n不过对方眼神空洞，不知为何看起来有些疲惫。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#你就是那个新来的解决师吧，真的是幸会。\r\n啊……不仅态度端正，眼睛也是炯炯有神……这就是青春啊。", 36, 3001653, true, true);
                cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#额……言语里似乎没有灵魂。", 36, 3001651, true, true);
                  cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#以后好好干，后辈。", 36, 3001653, true, true);
                    cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face7#后辈？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                      cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#是，后辈。毕竟我是前辈，\r\n日后有关解决师的事也有很多要告诉你……", 36, 3001653, true, true);
                        cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face12#喳~喳~小的知道了，前辈~", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                          cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#不过那毛茸茸的耳朵，还有尾巴……看起来不像是装饰啊……\r\n你是老虎阿尼玛？", 36, 3001653, true, true);
                            cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#就是老虎没错啊，怎么了？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                              cm.effect_Voice("Voice5.img/hoyoung/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我刚刚听你说，你刚从山里出来……\r\n看样子你对阿尼玛还不太了解。", 36, 3001653, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（阿尼玛基本上都过着隐居生活，离开村庄时，\r\n则会隐藏身为阿尼玛的特征。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（那个冰蓝解决师的真实身份是住在水里的阿尼玛，\r\n将裹得严严实实的耳朵展开给对方看。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那什么，如果你想要招摇过市，我也不会拦着你，不过……\r\n太过招摇搞不好也会惹上麻烦。", 36, 3001653, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#嘻嘻……那还不是小菜一碟嘛，来，瞧好了。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.askAcceptDecline_Bottom("#face5##fc0xFFbfbfbf#（这种时候就要施展点道术才行，\r\n让耳朵和尾巴消失不见，专注一点……）", 36, 3001674 + cm.getPlayer().getGender());
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（让耳朵和尾巴消失不见了，太成功了，\r\n这个法术……就叫它变形术吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.teachSkill(160001075, 0, -1);
                                                cm.teachSkill(160001075, 1, 1);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哦……有两下子嘛？", 36, 3001653, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face12#这类法术对天才道士来说根本不算什么，嘿嘿。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#啊……这样啊，以后好好干吧。\r\n那我就正式开始给你派发委托咯？", 36, 3001653, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（什么情况……这么平平无奇的反应！？）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.forceCompleteQuest(39517);
                                                                cm.gainExp(163);
                                                                cm.gainExp(650);
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
                                                                      cm.warp(410000201, 0, false);
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