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
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      cm.spawnMobLimit(8240056, 1, 678, 28, 3);
      cm.spawnMobLimit(8240056, 1, -863, -632, 3);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.spawnMobLimit(8240056, 1, 626, -752, 3);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('队长，快趴下！', 37, 1540504, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(4);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 300, 371, -83);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1001);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那些会动的易拉罐是什么啊？\r\n这里难道不是只有出故障的机械吗？", 37, 1540503, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 300, 371, -983);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1001);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好奇怪。\r\n它好像在寻找什么东西……难道我们的行踪暴露了？", 37, 1540502, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 300, -429, -983);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1001);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#r正在搜索逃跑的智能机器人。正在搜索逃跑的智能机器人。#k", 37, 1540653, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 300, -679, 67);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1001);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哥哥们，它来这里好像不是找我们，而是在找其他东西。", 37, 1540504, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("队长，我们先在#r不被那些东西发现的前提下，通过这里#k吧。\r\n现在没有队友的帮助，如果卷入无谓的战斗，说不定会遇到危险的。", 37, 1540502, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(350040030, 0, true);
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