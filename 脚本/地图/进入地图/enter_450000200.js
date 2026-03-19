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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你能听到吗…听到了吗？", 5, 1540940, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这个声音是…？", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 0, 0);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 6000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(5400);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("啊，真是太好了。你能听到我们的声音啊。", 5, 1540940, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我们被你们称为<艾尔达>…\r\n\r\n我们在世界树的保护下，构成了这个世界。不过，现在世界树被分散在世界各处，我们受到的保护也相对减弱，黑魔法师想趁机把我们带到某个地方。", 5, 1540940, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我们很害怕。#r门那边#k有双看不见的手正在牵引着我们… 只有你才能解救我们。", 5, 1540940, true, true);
                      } else {
                        if (status === V++) {
                          cm.askMenu("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L0# #b黑魔法师为什么要把你们带走？#l", 5, 1540940);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("黑魔法师打算利用我们，创造#r新世界#k。不知道从何时开始，我们艾尔达就被未知的力量牵引，像江水一样流入更高的次元…如果继续这样下去，我们会逐渐消失，最终#b这个世界将会消亡#k。", 5, 1540940, false, true);
                          } else {
                            if (status === V++) {
                              cm.askMenu("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L1# 所谓的艾尔达是？#l", 5, 1540940);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("从远古时期开始，我们就是构成这个世界的最纯粹的能量…所有生命和物质都从艾尔达中诞生，并返回到艾尔达。如果没有我们，这个世界会逐渐变得面目全非。", 5, 1540940, false, true);
                              } else {
                                if (status === V++) {
                                  cm.askMenu("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L2# 为了得到你们的力量，我该怎么做呢？#l", 5, 1540940);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("你已经足够强大，做好了接受我们力量的准备。现在你只要获得#b女神#k的一点帮助就行了。", 5, 1540940, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.askMenu("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L3# 我没有其他问题了。#l", 5, 1540940);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("我们现在又要分散，流入某个未知的地方了…… 那是我们的宿命。", 5, 1540940, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("请记住，这个世界的命运就掌握在你的手中……", 5, 1540940, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("刚刚我看到的是什么？再次和#b关照者#k对话吧。", 17, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.warp(270010111, 0, true);
                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                cm.eventSKill(0);
                                                cm.updateInfoQuest(1460, 'see=1');
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