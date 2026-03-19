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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540528, "oid=13025133", 28, -69, 5, -22, 78, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=13025133", "summon", 0, 0);
      cm.npc_ChangeController(1540529, "oid=13025134", 170, -69, 7, 120, 220, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=13025134", "summon", 0, 0);
      cm.npc_ChangeController(1540470, "oid=13025135", -160, -69, 3, -210, -110, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=13025135", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -70, 11);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
              cm.effect_Text(["#fn黑体##fs26#此外, 黑魔法师的军团长们"], [100, 2800, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这么做没问题吧？\r\n他们可能已经察觉了你的作战计划。", 37, 1540528, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没关系的。\r\n反正他们无力阻止黑色天堂。", 37, 1540470, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("军团长的位子可不是随便就能得到的。\r\n如果你失败，你应该准备好献出自己的生命了吧？", 37, 1540528, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("人类非常弱小。\r\n如果对他们放任不管，他们还会自己发生内讧。", 37, 1540470, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我的无敌机械兵团是不可能输给这样的人类的。\r\n你还是给我留好军团长的位置吧。嘻嘻，嘻嘻嘻……", 37, 1540470, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=13025135", -1, 200, 70);
                          cm.inGameDirectionEvent_AskAnswerTime(3300);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=13025135");
                            cm.npc_LeaveField("oid=13025135");
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("肤浅的东西…… \r\n你想讨好黑魔法师已经想疯了。", 37, 1540528, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 900, 411, 51);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(182);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("他说小飞船……？", 37, 1540529, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=13025133", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("怎么了，希拉？", 37, 1540528, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("黑色天堂的真面目，你不是也看到了吗……\r\n那可不是单纯的#e小飞船#n。\r\n那个疯博士脑袋里究竟装的是什么啊？", 37, 1540529, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#        Act 1. 黑色之翼的黑幕\r\n\r\n                        结束. ", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                    } else if (status === V++) {
                                                      cm.forceStartQuest(33121, '');
                                                      cm.updateInfoQuest(33315, "chapter1=1");
                                                      cm.dispose();
                                                      cm.warp(913050010, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;