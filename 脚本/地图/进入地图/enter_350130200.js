var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33990, "check") > 0) {
    cm.Hidden_background("party_Tuto4", 1, 0, 0, 0);
    cm.mapleHeroSetList([9]);
    cm.setNumberForQuestCustomData(33900, 9);
    cm.showMapleHero();
    cm.dispose();
    var V = cm.getNumberFromQuestInfo(33990, 'check1') > 0;
    var O = cm.getNumberFromQuestInfo(33990, "check2") > 0;
    var b = cm.getNumberFromQuestInfo(33990, "check3") > 0;
    var w = cm.getNumberFromQuestInfo(33990, 'check7') == 0 || cm.getNumberFromQuestInfo(33990, "check8") > 0;
    var L = cm.getNumberFromQuestInfo(33990, 'check5') > 0;
    if (V) {
      cm.Hidden_background("party_Tuto", 1, 0, 0, 0);
    }
    if (O) {
      cm.Hidden_background("party_Tuto2", 1, 0, 0, 0);
    }
    if (b) {
      cm.Hidden_background("party_Tuto3", 1, 0, 0, 0);
    }
    if (w) {
      cm.Hidden_background("party_Tuto4", 1, 0, 0, 0);
    }
    if (V && O && b && !L) {
      cm.sendNormalTalk_Bottom("好吧，这里能够收集的情报似乎已经都到手了，\r\n前往下一个地点吧？", 37, 1540879, true, true);
    }
    cm.Hidden_background("party_Tuto4", 1, 0, 0, 0);
    return;
  }
  status++;
  selectionLog[status] = e;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350130200");
      cm.Hidden_background("party_Tuto4", 1, 0, 0, 0);
      cm.mapleHeroSetList([9]);
      cm.setNumberForQuestCustomData(33900, 9);
      cm.showMapleHero();
      cm.Hidden_background("party_Tuto", 1, 0, 0, 0);
      cm.Hidden_background("party_Tuto2", 1, 0, 0, 0);
      cm.Hidden_background("party_Tuto3", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 220, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === S++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === S++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === S++) {
            cm.sendNormalTalk_Bottom("#face13#我们的作战计划很简单，大家应该不会忘了吧？\r\n尽可能减少骚乱，找到超越石的位置，并且尽可能偷到手。", 37, 1540805, false, true);
          } else {
            if (status === S++) {
              cm.sendNormalTalk_Bottom("#face4#不是尽可能，而是绝对要！\r\n我下定决心偷的东西，可从来没有失败过。", 37, 1540879, true, true);
            } else {
              if (status === S++) {
                cm.sendNormalTalk_Bottom("#face13#真的吗？", 37, 1540805, true, true);
              } else {
                if (status === S++) {
                  cm.sendNormalTalk_Bottom("#face10#其实只有一次，不过那段故事等你再稍微大一点我再讲给你听。", 37, 1540879, true, true);
                } else {
                  if (status === S++) {
                    cm.sendNormalTalk_Bottom("#face13#总之大家不要忘了，超越石有可能会不见。\r\n阿布拉克萨斯虽然可以看到超越石的位置，但也只能知道个大概。", 37, 1540805, true, true);
                  } else {
                    if (status === S++) {
                      cm.sendNormalTalk_Bottom("就是说没什么是百分之百肯定的呗。", 37, 1540879, true, true);
                    } else {
                      if (status === S++) {
                        cm.sendNormalTalk_Bottom("#face11#如果情况糟糕，有可能那东西并不在那幢建筑物里，而是被埋在了江河之下。", 37, 1540805, true, true);
                      } else {
                        if (status === S++) {
                          cm.sendNormalTalk_Bottom("那我们就只能希望那个来历不明的石块一定要在那栋建筑物里。", 37, 1540879, true, true);
                        } else {
                          if (status === S++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === S++) {
                              cm.sendNewEffects(13, [5000, 1700, 0, 0, 0]);
                            } else {
                              if (status === S++) {
                                cm.inGameDirectionEvent_AskAnswerTime(5300);
                              } else {
                                if (status === S++) {
                                  cm.sendNormalTalk_Bottom("哇哦，有种回到故乡的感觉。", 37, 1540879, false, true);
                                } else {
                                  if (status === S++) {
                                    cm.sendNormalTalk_Bottom("#face13#夜光法师和双弩精灵应该也开始行动了，\r\n我们就看状况加入吧。", 37, 1540805, true, true);
                                  } else {
                                    if (status === S++) {
                                      cm.sendNormalTalk_Bottom("#face1#好吧，那就开始吧？", 37, 1540879, true, true);
                                    } else {
                                      if (status === S++) {
                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === S++) {
                                          cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 3-\r\n#fs28#陌生的世界：#fs20#太古的遗物", 1);
                                          cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                        } else {
                                          if (status === S++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === S++) {
                                              cm.sendNormalTalk_Bottom("最好是先和周围的人聊一聊，获得情报。", 37, 1540879, false, true);
                                            } else {
                                              if (status === S++) {
                                                cm.Hidden_background('party_Tuto', 1, 1, 0, 0);
                                                cm.Hidden_background("party_Tuto2", 1, 1, 0, 0);
                                                cm.Hidden_background("party_Tuto3", 1, 1, 0, 0);
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                              } else {
                                                if (status === S++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                  if (status === S++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else if (status === S++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.warp(350130200, 0, true);
                                                    cm.updateInfoQuest(33990, "check=1");
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