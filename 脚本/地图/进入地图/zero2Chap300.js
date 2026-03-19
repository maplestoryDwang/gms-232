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
      cm.npc_ChangeController(2400012, "oid=25319", 667, 5, 10, 617, 717, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25320", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25321", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=25322', 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, 'oid=25323', 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=25324', 233, 5, 11, 183, 283, 0, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=25325", 159, 5, 5, 109, 209, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=25326", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25327", 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2430022, "oid=1824607", 357, -5, 4, 307, 407, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1824607", 'summon', 0, 0);
        cm.sendNormalTalk("#face11#…………", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#…………。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=1824607");
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face11#……这家伙，要沉默到什么时候？到底要怎么样啊。和影子骑士团针锋相对，我们也没什么好处。如果就这么一个女神之泪，我早就进去救出#p2430000#了。", 41, 2400005, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face10#但这样可不行啊，万一被影子骑士团发现了，那么我们以后注定要被他们追杀……我们没有必要这么做吧？为什么像个小孩子一样，在这里耍脾气呢？你到底要我怎么办！", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你也理解下吧，#p2400005#。#p2400006#也不是不理解#p2400005#的判断。只是……她不放心那个叫做#p2430000#的女神之泪而已。", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face1#我也很想去救出#p2430000#！但现在不是没有办法吗？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#p2400005#的无奈和#p2400006#的无奈，这两个分量可不一样，至少对这件事来说的话。", 33, 2400000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11#什么意思？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你想想看，#p2400005#。#p2400005#是从小在影子之村长大的，同时也享受到了自由。", 33, 2400000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face1#我自由？影子之村只不过是欺骗我的一个舞台而已，你忘记了？这样的我有什么自由可言？", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("至少可以有欣赏太阳感受微风的自由啊。", 33, 2400000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face11#…………！", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("但是，#p2400006#却被长久地关在神殿里。像变成石头的我和其他神官们，反倒是幸福的。可是，被困在蜘蛛网里，带着所有的意识……却熬过数百年的岁月，这种感觉旁人又岂能知晓。", 33, 2400000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face10#……和#p2430000#不一样，那小子才不过几天……", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("对于#p2400006#来说，那几天也不正是很痛苦的吗？所以她才想救出#p2430000#。", 33, 2400000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face10#可恶……", 41, 2400005, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("呵呵呵，我料到#p2400005#要怎么行动了。", 33, 2400000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face1#别说没用的话，告诉我#p2400006#去哪里了。", 41, 2400005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("最近她经常去#p2430000#的家里。呵呵呵，快去吧，你们一定要和好哦。", 33, 2400000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(323090310, 0, false);
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