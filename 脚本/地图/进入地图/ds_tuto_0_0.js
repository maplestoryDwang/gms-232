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
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.teachSkill(30011109, 1, 1);
      cm.teachSkill(30010110, 1, 1);
      cm.teachSkill(30010185, 1, 1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(2159307, "oid=922975", 1430, 50, 10, 1380, 1480, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=922975", "summon", 0, 0);
      cm.setSessionValue("mastema", "922975");
      cm.fieldEffect_ScreenMsg("demonSlayer/back");
      cm.fieldEffect_ScreenMsg("demonSlayer/text0");
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("demonSlayer/text1");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("demonSlayer/text2");
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("demonSlayer/text3");
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("demonSlayer/text4");
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ScreenMsg("demonSlayer/text5");
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ScreenMsg("demonSlayer/text6");
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ScreenMsg("demonSlayer/text7");
                      cm.teachSkill(80011957, 1, 1);
                      cm.sendNormalTalk("军团长！这段时间联系都没有，你到哪儿去了？你也知道，#p2159309#老是喜欢挑我的毛病，经常为难我……", 1, 2159307, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("真让人气愤。你去时间神殿抓到了女神，他一定是在嫉妒你。哼！#p2159309#做的事情只不过是蒙蔽了女神的眼睛而已，而且还是利用原来的地位！", 1, 2159307, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.curNodeEventEnd(true);
                          cm.sendNormalTalk("嗯？……平时的话，你应该会责备我，让我别说这种废话的啊……发生什么事了吗？我现在才发现，你的脸色好像非常不好……有什么地方不舒服吗？在之前的战斗中受伤了吗？！", 1, 2159307, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……#p2151009#。你……在黑魔法师和我之中，你是谁的部下？", 3, 2159307, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("嗯？干嘛突然问这种问题……？", 1, 2159307, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("请你回答。", 3, 2159307, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("当……当然是效忠于那位伟大的人。但是自从你救了我之后，我就决定为你献出生命……！你不是知道吗？！为什么要问这个……？", 1, 2159307, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("……我想拜托你一件事。", 3, 2159307, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("请帮我把这封信……交给他们，被称为#r英雄#k的人。", 3, 2159307, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("嗯？为什么要把这个交给他们……光是你这段时间不在，可能就已经不太好了。如果和他们接触的事情被人知道，你一定会背上背叛黑魔法师的污名！一定会那样的！你在想什么啊，军团长！", 1, 2159307, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("……我已经不再是军团长了。", 3, 2159307, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("难道……你背叛了黑魔法师？！原来比谁都忠诚的你？！占领时间神殿才刚刚不久！现在应该是领取奖励的时候……为什么……为什么？！", 1, 2159307, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("……没时间了。如果你觉得太为难，就算了……我不想和你战斗。", 3, 2159307, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("没什么为难的！我只是担心你……！", 1, 2159307, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("......", 3, 2159307, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("家人们你想怎么处理呢？！这样的话，家人们也许会受到危害……！", 1, 2159307, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("不要再说了！这件事就说到这里！", 3, 2159307, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("……为什么……难道……难道他们出了什么事……？", 1, 2159307, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk('......', 3, 2159307, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("你又这样……不说话了……好吧，你本来就不喜欢说这些。", 1, 2159307, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("好的。我就是拼了命，也会把这封信交给他们。", 1, 2159307, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("对不起，#p2151009#……", 3, 2159307, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("用不着道歉。我的生命是为你而存在的。你能把这件事交给我，我感到很高兴。", 1, 2159307, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("既然接到了命令，我马上就走。希望你能实现自己的目标……", 1, 2159307, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction('oid=922975', "teleportation", 0, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(720);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=922975");
                                                                        cm.sendNormalTalk("(真是谢谢你了，#p2151009#。)", 3, 2159307, false, true);
                                                                      } else if (status === V++) {
                                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                                        cm.curNodeEventEnd(true);
                                                                        cm.updateInfoQuest(65585, '');
                                                                        cm.updateInfoQuest(65585, '');
                                                                        cm.curNodeEventEnd(true);
                                                                        cm.dispose();
                                                                        cm.warp(927000080, 0, false);
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