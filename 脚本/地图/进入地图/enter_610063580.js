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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063580");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.forceForfeitQuest(61342);
      cm.forceStartQuest(61348, '');
      cm.forceCompleteQuest(61348);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face5#好了。这就是我要给你看的记忆。之后……", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("纳瑞坎来到了冒险岛世界，击败了绯红之心，夺得了幻日。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("但宗师们摧毁了幻日，苏巴尼还把纳瑞坎封印在雕像中。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face5#……是这样没错。\r\n谁告诉你的？", 37, 9201539, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我亲身体验了卢坎的记忆。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#啊，我也体验了纳瑞坎的记忆。", 37, 9201539, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#我感受到了他的痛苦、他的孤独还有他失去家人的悲伤。\r\n我的感觉渐渐与他同步了。", 37, 9201539, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("他是在欺骗你。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#真是这样该多好……", 37, 9201539, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#但他的痛苦都是货真价实的。\r\n你现在也应该清楚这点了。", 37, 9201539, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#他想要幻日不是为了荣耀或者欲望。", 37, 9201539, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#你是来自冒险岛世界的英雄。\r\n你也为自身信仰多次豁出性命。", 37, 9201539, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#纳瑞坎跟你也没什么不同，也是为了信仰牺牲一切。", 37, 9201539, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#你们唯一的区别就是没人愿意理解他。", 37, 9201539, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.askMenu_Bottom("#face1##r你最后获得的奖励取决于你的回答，请谨慎选择。#k\r\n#b#L0#他的痛苦并不是给他人造成痛苦的理由。\r\n    (你将会获得#i1662090#)#l\r\n#L1#我理解了纳瑞坎的动机，现在我不认为他是个坏人。\r\n    (你将会获得#i1662091#)#l", 37, 9201539);
                                            } else {
                                              if (status === V++) {
                                                cm.updateInfoQuest(61349, 'r1=' + (e + 1));
                                                if (e == 0) {
                                                  cm.sendNormalTalk_Bottom("绯红之心告诉卢坎幻日太过强大，不能被一个人所占有。\r\n因此索求它依然是错误的。", 57, 0, false, true);
                                                } else {
                                                  cm.sendNormalTalk_Bottom("纳瑞坎忽视了他的行为给他人带来的痛苦。\r\n无论他的动机有多么高尚，我都不能原谅他。", 57, 0, false, true);
                                                }
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#看来……你的心意已决。\r\n你有权拥有自己的看法。", 37, 9201539, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.warp(610063590, 0, true);
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
  }
}