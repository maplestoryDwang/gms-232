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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003902, "oid=2178329", -643, -2200, 7, -693, -593, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2178329", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("我也要一起战斗。\r\n虽然没有对抗者的力量，但我也能战斗。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#是吗？那你说说看。", 37, 3003902, true, true);
          cm.effect_Voice("Voice4.img/BM3/orca/32", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#去救联盟的小孩，\r\n却被威尔玩弄于鼓掌之中的人是谁？", 37, 3003902, true, true);
            cm.effect_Voice("Voice4.img/BM3/orca/33", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#让艾欧娜陷入消失的危机，让事态变成这个样子的人又是谁？", 37, 3003902, true, true);
              cm.effect_Voice("Voice4.img/BM3/orca/37", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那，那个……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#你不想失去任何东西。\r\n所以你很弱。", 37, 3003902, true, true);
                  cm.effect_Voice("Voice4.img/BM3/orca/39", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#奥尔卡不一样。\r\n我已经失去了斯乌……", 37, 3003902, true, true);
                    cm.effect_Voice("Voice4.img/BM3/orca/43", 128);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#已经没有任何东西可以失去了。", 37, 3003902, false, true);
                        cm.effect_Voice("Voice4.img/BM3/orca/46", 128);
                      } else {
                        if (status === V++) {
                          cm.askMenu_Bottom("#face1#快回去。这是最后的机会。\r\n\r\n#b#L0# 还是回去的好。#l\r\n#L1# 不回去。#l", 37, 3003902);
                          cm.effect_Voice("Voice4.img/BM3/orca/47", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不，我不能后退。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是吗？很好……\r\n如果你能顺利到达顶部，我就考虑一下。", 37, 3003902, true, true);
                              cm.effect_Voice("Voice4.img/BM3/orca/52", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#当然，不会有你想像的那么容易。", 37, 3003902, true, true);
                                cm.effect_Voice("Voice4.img/BM3/orca/55", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.forceStartQuest(35803, '');
                                  cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1");
                                  cm.npc_LeaveField("oid=2178329");
                                  cm.npc_LeaveField("oid=2178329");
                                  cm.dispose();
                                  cm.warp(450012100, 0, false);
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