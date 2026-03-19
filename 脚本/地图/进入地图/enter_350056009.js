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
      cm.dispelBuff(80001592);
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
      cm.forceCompleteQuest(33276);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("大家都无事吧？", 37, 1540452, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("肯定没事的。\r\n我们都不是好对付的。", 37, 1540453, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……嗯。\r\n既然来到这里，我们就互相信任，一起前进吧。", 37, 1540452, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("现在只剩下最后一个区域了吧，南哈特？", 37, 1540452, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("……啊，很抱歉。\r\n我刚刚在想其他事情。", 37, 1540451, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('其他事情？', 37, 1540453, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你不觉得奇怪吗？\r\n我从一进入这空间开始，就一直在想……", 37, 1540451, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我们之前认为黑色天堂内肯定到处都是机械士兵。\r\n不过，实际上机械士兵的数量好像并没有我们想象的那么多。", 37, 1540451, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("兵力的补充源自机械坟墓，所以这不是理所当然的吗？", 37, 1540452, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我想问的不是这个。\r\n那，#r黑色天堂的巨大装载室#k里究竟装的是什么呢？", 37, 1540451, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……！", 37, 1540452, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('我忽视了这一点。', 37, 1540453, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我们或许到了下一区域就知道了。", 37, 1540451, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(350058000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;