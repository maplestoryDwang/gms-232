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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155122, "oid=1275275", 760, 0, 17, 710, 810, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1275275", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1275276", 1600, 0, 15, 1550, 1650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1275276", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1275277", 1630, 0, 3, 1580, 1680, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1275277", "summon", 0, 0);
        cm.npc_ChangeController(2155113, "oid=1275278", 1670, 0, 3, 1620, 1720, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1275278", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("唉，我可算是死里逃生了…………", 37, 2155122, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1600, 0, 700, 50);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##fs22#这里是哪里啊？", 37, 2155123, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这是机械坟墓空地。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1700, 0, 700, 50);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#fs22#你，是谁？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##fs25#对…………\r\n#fs20#对哦，#fs16#我是谁？", 37, 2155123, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这是我问你的问题……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2##fs22#我是谁？\r\n#fs18#我…… #fs14#啊，我的头……\r\n#fs20#我不能待在这里。#fs14#我要走……", 37, 2155123, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1800, 0, 700, 50);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2##fs18#没错，我要走！#fs16#\r\n不然会发生很糟糕的事。一切都会#fs22#爆炸！#fs14#还有她……\r\n#fs18#我一定要重新回去！", 37, 2155123, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('请冷静下。', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#fs22#不过………… #fs18#我要去哪里呢？", 37, 2155122, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('…………', 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 300, 1350, 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm41.img/BigMachine", 0, 0);
                                          cm.npc_SetForceMove("oid=1275276", -1, 200, 200);
                                          cm.npc_SetForceMove("oid=1275277", -1, 170, 200);
                                          cm.npc_SetForceMove("oid=1275278", -1, 150, 200);
                                          cm.sendNormalTalk_Bottom("这是贝塔组。\r\nA级清除对象找到了。位置传送完成。\r\n我先开始清除。", 37, 2155113, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=1275275", -1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("超级人造人居然会到这里？\r\n这究竟是怎么回事？", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##fs22#呃啊啊！#fs16#那是什么啊！\r\n朋友，救救我。", 37, 2155123, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.eventSKill(0);
                                                  cm.npc_LeaveField("oid=1275275");
                                                  cm.npc_LeaveField("oid=1275275");
                                                  cm.npc_LeaveField("oid=1275276");
                                                  cm.npc_LeaveField("oid=1275276");
                                                  cm.npc_LeaveField("oid=1275277");
                                                  cm.npc_LeaveField("oid=1275277");
                                                  cm.npc_LeaveField("oid=1275278");
                                                  cm.npc_LeaveField("oid=1275278");
                                                  cm.dispose();
                                                  var O = cm.getEventManager("避风港_笨蛋故事_战斗1");
                                                  O.startInstance(cm.getPlayer());
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