var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(41163)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("在这里潜伏，肯定能抓到犯人的。", 3, 2440022, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2440022, "oid=2501953", -237, 186, 1, -287, -187, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=2501953", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
              cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon3");
            } else {
              if (status === V++) {
                cm.sendNormalTalk('那个……不是武旦吗？', 3, 2440022, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(8);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk("武旦，果然犯人是你啊！抓到你了，你这家伙！", 3, 2440022, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("啊，你……该不会是为了抓我在这里一直埋伏的吧？", 1, 2440022, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("必须的！犯人肯定会回到现场来看的。好，你说不说实话？昨晚在药材室里吃肉的是不是你？", 3, 2440022, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……对，吃肉的犯人就是我。因为日复一日的健康修炼，我忍不住……我自己也非常后悔！所以今天已经开始了禁食修炼。", 1, 2440022, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("这句话到诺功跟前再说吧，我现在就把你抓起来。", 3, 2440022, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("如果诺功知道我是犯人的话，我肯定会被赶出去的。除了这里我没地方可以去了，能不能网开一面？拜托你了……", 1, 2440022, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("很抱歉，我已经和诺功约定……", 3, 2440022, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("那么我就相信你了，我们说好不告诉诺功了？对吧？", 1, 2440022, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2501953");
                                      cm.sendNormalTalk("喂，喂！我没跟你约定……喂！你怎么能就这么跑掉！", 3, 2440022, true, true);
                                    } else if (status === V++) {
                                      cm.forceCompleteQuest(41163);
                                      cm.gainExp(1150000);
                                      cm.updateInfoQuest(41164, '');
                                      cm.forceStartQuest(41164, '');
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;