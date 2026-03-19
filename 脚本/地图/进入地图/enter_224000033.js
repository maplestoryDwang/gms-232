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
      cm.npc_ChangeController(2074124, "oid=2596176", 2273, 323, 566, 2223, 2323, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2596176", 'summon', 0, 0);
      cm.npc_ChangeController(2074123, "oid=2596177", 2216, 323, 564, 2166, 2266, 0, false, 500, false);
      cm.npc_SetSpecialAction("oid=2596177", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=2596178", 2091, 323, 558, 2041, 2141, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2596178", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("哈，大哥……恭喜你。", 37, 2074124, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你，你说什么？", 45, 2074123, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("……你，难道……这里也……？", 45, 2074123, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯？……难道，\r\n难道，大哥也……", 37, 2074124, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("弟弟啊。", 45, 2074123, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("大哥。", 37, 2074124, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/6", 0, 300, 0, 0, 7, 4, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("弟弟啊！", 45, 2074139, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("大哥！", 37, 2074140, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我的弟弟啊！", 45, 2074139, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("大哥啊！", 37, 2074140, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("果然，果然只有兄弟了。", 45, 2074139, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是，大哥，果然，只有我们两个。\r\n兄弟是永远的。", 37, 2074140, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#呼，到底该不该说庆幸……", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/1", 0, 500, 0, 0, 7, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/10", 0, 500, 0, 0, 8, 4, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#g(获得了嫉妒宝玉！)#k", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 500, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#……哈。\r\n既然宝玉都已经回收了，我怎么这么没力气呢？", 37, 2074100, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我的弟弟啊", 45, 2074139, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("大哥啊", 37, 2074140, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#啊……好没力气啊……\r\n我们，还是走吧？", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                        cm.updateInfoQuest(30427, "gExpCheck=1");
                                                        cm.gainExp(142059);
                                                        cm.forceCompleteQuest(30427);
                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;