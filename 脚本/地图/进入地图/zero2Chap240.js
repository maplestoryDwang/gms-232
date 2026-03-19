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
      cm.npc_ChangeController(2400012, "oid=25297", 724, -189, 40, 674, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25298", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25299", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=25300', 697, -410, 54, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25301", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25302", 215, -230, 36, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25303", 569, -300, 48, 522, 619, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=25304", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25305", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("女神之泪，#p2430000#无法控制自己的力量，召唤出怪物给村里造成危害……是这意思吗。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("有这种可能性，因为女神之泪是时间之力的结晶，如果没有控制好力量的话……", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("看样子也是，#p2430000#的日记里写到，不是自己愿意才发生事情的，他还为此感到愧疚。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("真是遗憾啊……", 33, 2400018, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#那么#p2430000#到底去哪里了？这个不在日记里吧？", 33, 2400007, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("没有写到那里，占卜术也把位置指向射手村了吧？", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("是的。", 33, 2400018, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("这么说的话，不可能是被逐出村子，又不能把问题人物放任不管……有可能被#r隔离#k在某处。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("……隔离？", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("就是让他不要再引发事件，关在某处的意思。", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("…………", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#可恶！#p2430000#还是个孩子啊！有必要这么做吗？", 33, 2400007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("连怪物都召唤出来了，这么危险的人物肯定不会就那么放着的。虽然很无情，但也是有必要才那么做的吧。", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk('…………', 41, 2400006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不管怎样，如果#p2430000#还在射手村的话，一定要找到并回收他。我们再去找下之前的那个小朋友吧。", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("我会告诉你情况的，我买走，#p2400006#。", 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('嗯……', 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(323090100, 0, false);
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