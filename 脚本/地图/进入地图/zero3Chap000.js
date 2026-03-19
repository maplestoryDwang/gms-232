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
      cm.npc_ChangeController(2400012, "oid=25915", 572, 5, 13, 522, 622, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25916", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25917", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25918", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, 'oid=25919', 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25920", 125, 5, 6, 75, 175, 0, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=25921", 444, 5, 3, 394, 494, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25922", 200, 5, 5, 150, 250, 0, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=25923', 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25924", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("这么快就到第三次占卜的时候了吗？时间过得可真快啊，都已经快找到一半的女神之泪了。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("也许以后就没有这么快了，说不定已经被影子骑士团给盯上了。这真是托了某人的福。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('那是谁？', 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#不就是你嘛，你！……算了，不说了。那么下一个女神之泪在哪里？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("第三个女神之泪在#b武陵#k。以前我和#p2400007#去过一次，那里是可以修道成仙的很安静的地方。", 33, 2400008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('神仙？神仙是什么？', 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                    cm.sendNormalTalk("也是人类，但是比人类更了不起的人类！", 33, 2400007, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("不过也没有这么简单……", 33, 2400008, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("不过也没关系，我们又不是去当神仙。我们不是要当超越者吗？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('是这样吗？', 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('就是这样。', 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("对了，生活在武陵的种族有点特殊。他们全身毛茸茸的，不知道被谁打了，#r双眼带着瘀伤#k。如果两位不想太惹人眼，就建议你们也……", 33, 2400007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face0#瘀伤？！……你不是说很安静吗，我以为他们热爱和平，原来不是啊？！", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("那是因为生活在武陵的种族是熊猫才会那样的，不是瘀伤。#p2400007#你不要说出那些奇怪的话，误导他们。", 33, 2400008, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face1#什么？不是瘀伤吗？我还以为他们真的被谁打了，还特地给他们买了很多药！太打击我了！", 33, 2400007, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk('…………', 33, 2400008, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("好了，闲聊到此为止吧。两位，快去武陵寻找第三个女神之泪吧。就像#p2420000#和#p2430000#一样，第三个女神之泪也肯定在孤独地等着两位。", 33, 2400000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("好，我们要在影子骑士团妨碍我们之前快速找到。", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(324090010, 0, false);
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