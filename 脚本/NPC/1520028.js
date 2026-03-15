var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (!cm.isQuestFinished(32312)) {
    cm.sendNormalTalk("黑魔法师好像陷入了沉睡。", 1, 1520028, false, false);
    cm.dispose();
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestFinished(32312) && cm.getQuestStatus(32313) == 0) {
        cm.sendNormalTalk("黑，黑魔法师？！已经苏醒了？", 3, 1520028, false, true);
      } else {
        cm.sendNormalTalk("黑魔法师好像陷入了沉睡。", 1, 1520028, false, false);
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.askMenu("\r\n\r\n\r\n\r\n不堪一击的家伙，把你的手从那该死的封印上拿开。不要做愚蠢的事情。\r\n#b#L0#反驳他的话。#l\r\n#L1#老老实实地听从黑魔法师的话。#l", 1, 1520028);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("愚蠢的事情？我做的可不是愚蠢的事情，而是正确的事情！", 3, 1520028, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n\r\n\r\n\r\n\r\n\r\n愚蠢的家伙……。是与非只不过是形式上的东西……。是柔弱的人们弄出来的假象罢了。", 1, 1520028, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n\r\n\r\n\r\n\r\n\r\n把自己相信的东西冠以正义的名义，而把不相信的东西定义为邪恶。仅此而已罢了……。", 1, 1520028, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n\r\n\r\n\r\n\r\n\r\n你应该已经感觉到我的力量了吧。而且这是无法抗拒的力量。先不说被别人制造出的假象所愚弄，如果连自己所认定的真实都违背的话……，那你就真的很愚蠢了。无比愚蠢……。", 1, 1520028, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("(老实说，这股力量确实很强大，不过……。)", 3, 1520028, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("\r\n\r\n\r\n\r\n\r\n\r\n我马上就要复活了，世界的秩序将由我来主宰。", 1, 1520028, true, true);
                  } else {
                    if (status === V++) {
                      cm.askMenu("\r\n\r\n\r\n\r\n\r\n\r\n靠我的力量进行主宰。你如果违背的话，就将成为另一个扰乱秩序的人。不要违抗……这力量以及这吞噬你的黑暗。\r\n#b#L0#听从黑魔法师的话。#l\r\n#L1#封印他。#l\r\n#L2#想想其他人。#l", 1, 1520028);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("不用再多想了。把黑魔法师封印起来。把带来的封印石放上去吧！！", 3, 1520028, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("\r\n\r\n\r\n\r\n\r\n\r\n愚蠢的……。", 1, 1520028, true, true);
                        } else {
                          if (status === V++) {
                            cm.forceStartQuest(32313, '2');
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, true, false);
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 240, 0, -500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(809);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=1683674", "break", 0, 1);
                                cm.fieldEffect_PlayFieldSound("advStory/sealBreak", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2400);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                  cm.inGameDirectionEvent_AskAnswerTime(3600);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(1520029, "oid=1685215", 0, -500, 11, -50, 50, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=1685215", "summon", 0, 0);
                                    cm.fieldEffect_ScreenMsg("adventureStory/brokenSeal");
                                    cm.inGameDirectionEvent_AskAnswerTime(6000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ScreenMsg("adventureStory/screenMsg/1");
                                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("adventureStory/screenMsg/2");
                                        cm.inGameDirectionEvent_AskAnswerTime(8000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=1685215", 'escape', 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(2700);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=1685215");
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                              } else if (status === V++) {
                                                cm.gainExp(125000);
                                                cm.forceCompleteQuest(32313);
                                                cm.fieldEffect_PlayBGM("Bgm26.img/SpeakInTheVoid", 0, 0);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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