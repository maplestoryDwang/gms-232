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
      if (cm.getNumberFromQuestCustomData(1849) != 1) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(9075306, "oid=290914", 530, 56, 2, 480, 580, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(9075304, "oid=2289017", 270, 45, 1, 220, 320, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2289017", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("首先，已经采取了所有可行的医疗措施。但是，奥尔卡伤得很重，仍然没有恢复意识。何况奥尔卡的体力原本就很弱，不知道她还能支撑多久……", 5, 9075304, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我们已经无能为力了。现在是生是死，全凭奥尔卡的意志。我们只能在一旁守护着她。\r\n还有，我已经拜托贝尔去调查攻击奥尔卡的进化系统的变化。啊，他正好回来了。", 5, 9075304, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9075305, "oid=2289104", 150, 48, 1, 100, 200, 0, false, 0, false);
              cm.npc_SetSpecialAction("oid=2289104", "summon", 0, 0);
              cm.sendNormalTalk("我回来了。啊啊，不到万不得已，我真不想去那个地方。真是令人毛骨悚然。", 1, 9075305, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("辛苦你了。调查结果怎么样？", 5, 9075304, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我先从结果开始说吧……进化系统自我#r#e进化#k#n了，而且是在没有进行任何内部操作的情况下。虽然我很不想承认，但格里梅尔确实是天才，这点没人可以否认。", 1, 9075305, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("贝尔，你先不要激动，跟我们详细说明一下吧。自我进化的机器，这究竟是怎么回事？", 5, 9075304, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("正如我所说的那样。进化系统已经完全不同了。现在的进化系统能够防御外部的攻击，发起反击，它的能力远远不止这样，总之进化系统已经#r强化为更强大的系统#k了。还有，这一切都是人工智能自我判断后得到的结果。", 1, 9075305, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -120, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", "oid=2289017"], [2000, 0, -120, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("啊啊，人工智能好像把奥尔卡识别为强大的敌人，因此做出判断必须强化系统。格里梅尔，那个疯子真的制作出了很了不起的东西。", 1, 9075305, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("那样的话，以后进化系统将会怎么样呢？", 5, 9075304, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("那个我也不清楚。它或许会维持目前的状态，或许会再次变化，这就要看人工智能的决定了。", 1, 9075305, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("详细的情况你还是亲自去看一下为好。即便我跟你解释一百遍，也不如你亲自去看一遍来得清楚。", 1, 9075305, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("没错。#h0#，你自己去亲自看看进化系统究竟发生了什么样的变化吧。还有，如果你有什么特别的发现，请立即联系我。", 5, 9075304, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                      cm.effect_NormalSpeechBalloon('斯乌…斯乌……', 1, 0, 0, 3000, 1, 50, -80, 0, 4, 9075306, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("即便她已经处于生死边缘，但还是那样喊着斯乌的名字。斯乌究竟能不能听到奥尔卡的呼唤呢？", 5, 9075304, false, true);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(957020003, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;