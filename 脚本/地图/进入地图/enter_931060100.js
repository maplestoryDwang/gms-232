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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("我来说明一下机械人的核心技术——支援系统。", 1, 2159380, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你先确认一下画面右上方的支援条。", 1, 2159380, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/summon"], [1200, 300, -300, 1, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/0"], [50000, 300, -300, 1, 1, 0, 0, 0, 0]);
                  cm.sendNormalTalk("对机械人来说，支援系统非常重要。但是其核心非常简单。那就是聚集并使用能量！", 1, 2159380, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("积累备用能量的方法更加简单！由于使用了机械人的最新充能技术，可以#b自动#k补充。", 1, 2159380, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/1"], [50000, 300, -300, 1, 2, 0, 0, 0, 0]);
                          cm.sendNormalTalk("此外，受到敌人攻击或回避敌人攻击时，也有一定概率可以获得备用能量。", 1, 2159380, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/2"], [50000, 300, -300, 1, 3, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("还有，虽然现在你还没学会，但是成长之后还能学习供应备用能量的技能。", 1, 2159380, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/3"], [50000, 300, -300, 1, 4, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("为什么要一点一点说，不一下子都告诉你？其实我是在等你的备用能量逐渐充满！。好了，看吧！。已经储存了1转时的最大数量5个。有没有看见5个在闪烁？", 1, 2159380, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/4"], [50000, 300, -300, 1, 5, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/chatBalloon/0"], [0, -2, 20, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("...", 1, 2159380, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("……还剩1个？嗯……啊，现在应该已经满了。你再看一下。", 1, 2159380, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/full"], [50000, 300, -300, 1, 6, 0, 0, 0, 0]);
                                          cm.sendNormalTalk("机械人在每次备用能量充满的时候，所有能力值就会上升。如果没什么特别的事情，最好让它一直保持充满状态。", 1, 2159380, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("好的，现在我来告诉你备用能量的使用方法。你已经完成了1转，在1转技能中应该有个名叫超能力量的技能。什么？没看见？我现在就给你看。", 1, 2159380, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/skill_inventory"], [2400, -300, -300, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2520);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("从现在开始，每次转职时，都能学习消耗备用能量的技能。超能力量是第一个。消耗一定量的备用能量，可以提高攻击力。", 1, 2159380, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("你想试着使用一下技能吗？", 1, 2159380, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/skillEffect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/2"], [50000, 300, -300, 1, 7, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1620);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/supplySystemTuto/gaugeUI/3"], [50000, 300, -300, 1, 8, 0, 0, 0, 0]);
                                                      cm.sendNormalTalk("看到了吧？消耗备用能量的技能的图标是蓝色的。使用技能的时候，可以参考。", 1, 2159380, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(120);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askYesNo("理解了吗？如果不理解，就点击“否”。\r\n（点击是时，回到原来所在的地图。）", 1, 2159380);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.forceCompleteQuest(23606);
                                                          cm.gainExp(1000);
                                                          cm.dispose();
                                                          cm.warp(310010000, 0, false);
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