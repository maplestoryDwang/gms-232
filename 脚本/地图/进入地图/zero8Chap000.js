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
      cm.npc_ChangeController(2400012, "oid=28022", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=28023", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, 'oid=28024', -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=28025", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=28026", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=28027', 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=28028", 421, -276, 35, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=28029", 887, -298, 146, 837, 937, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=28030", 360, 5, 4, 310, 410, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face0#两位中的一个被军团长的力量所污染…… 那样被污染的不洁者无法成为超越者……你是这个意思吗？", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#……唉。虽然他的话不是完全可信，但有一样可以确认。不洁者无法成为超越者……", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face0#如果两位中有一位是不洁者的话…… 说不定找出并除去那位…… 才是正确的。", 33, 2400000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face2##p2400000# 神官！", 33, 2400007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#……很抱歉。但是…… 但是女神赋予我的使命是引导神之子成为超越者…… 不论什么时候，我都不能动摇我的使命。", 33, 2400000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face0#你们是女神牺牲自己而诞生的神之子。我……我必须完成这个任务……！", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face0#……我也不想失去两位中的任何一位……真希望不存在这样的事情。绝不……", 33, 2400000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#因此拜托你们。请前往时间神殿。那里有人比我经历过更长岁月、更多事情，去向他们求助吧。", 33, 2400000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face1#在他们那里…… 请一定要找出两位能一同成为超越者的方法。一定……一定要……", 33, 2400000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face11#…………", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(328000000, 2, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;