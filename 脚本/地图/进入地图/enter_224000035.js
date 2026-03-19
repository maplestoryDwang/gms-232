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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -100, 450);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074102, "oid=2596897", -196, 378, 56, -246, -146, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2596897", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2596897", 1, 200, 50);
        cm.inGameDirectionEvent_AskAnswerTime(8000);
        cm.effect_Text(["#fn黑体##fs18#两年前, 鬼怪岭#fs15##fn黑体#重大火灾后的第二天"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯……那场大火的原因到底是什么……\r\n还有宝玉到底去哪儿了呢。", 37, 2074102, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("实在是找不到任何的踪迹啊……", 37, 2074102, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 1000, 0, 400);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2596897", 1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2596897"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯？那是……？那是什么？", 37, 2074102, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 5000, 100, 400);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2596897", 1, 200, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                          cm.sendNormalTalk_Bottom('天啊，这是？', 37, 2074102, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -236, 300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/illust/17", 0, 500, 0, 0, 9, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我的天……怎么会有个少女在这里……\r\n喂，你还好吗？", 37, 2074102, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#…………", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("喂，喂，你醒醒。\r\n你能说话吗？", 37, 2074102, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#……小……可爱……", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你说什么？#b小可爱#k？喂，我说！\r\n……该死，完全晕过去了。", 37, 2074102, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('back2', "Map/Effect2.img/downtown2015/illust/18", 0, 500, 0, 0, 10, 4, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("正在调查火灾的威兹发现了你，并将你带了回来，\r\n那时候你已经差不多快要断气了。", 37, 2074105, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("靠童话村的设备是很难对你进行治疗的。", 37, 2074105, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(224000036, 3);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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