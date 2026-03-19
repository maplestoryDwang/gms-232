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
      cm.npc_ChangeController(2400012, "oid=28049", 389, -260, 56, 339, 439, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=28050", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=28051", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=28052", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=28053", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=28054', 559, -169, 77, 509, 609, 1, false, 0, false);
      cm.npc_ChangeController(2400019, 'oid=28055', 284, -230, 34, 234, 334, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=28056", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=28057", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……对不起，#p2400000#。虽然我们想了很久，但还是没法找出我们中谁是不洁者。不对，#b不是找不到，而是我们不找了#k。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("就算找到，最终…… 我们也无法杀掉对方。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face0#……那样的话，你们打算怎么做？要寻找其他觉醒成超越者的方法吗？", 33, 2400000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很简单。消灭制造出不洁者的罪魁祸首，#r军团长威尔#k。我想那样也许就能净化不洁者了。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("万一没能净化的话，到时再找净化不洁者的方法，或者其他觉醒成超越者的方法就行了。", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face0#军团长威尔并不是好对付的，我想这个你们两位应该比我更清楚。…你们有信心战胜他吗？", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face10#……不。我们没有。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("但这是我们俩最有可能同时活下去的方法…… 我们要和威尔战斗。", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("…我们只能做出这样的决定，你对我们感到失望吗？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("…不。听了两位的回答，我反而觉得心情放松了。虽然这个决定可能更危险，成功的几率更低…… 但很奇怪，我很想相信这是对的。", 33, 2400000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face0#我…… 也许只是不希望再看到有人在我面前牺牲了。", 33, 2400000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face10#虽然对女神感到很抱歉。但是……", 41, 2400005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我明白。你不需要再解释了。什么决定是对的，什么是错的，不到最后，谁都无法得知。", 33, 2400000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我是为神之子准备的神官，如果两位决定好了的话…… 我会跟随你们的决定。", 33, 2400000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("只是，我想拜托你们一件事……", 33, 2400000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face1#请你们一定要成功。请不要失败。一定要活着……", 33, 2400000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("…那是当然啦。", 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(320000000, 3, false);
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