var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(34319)) {
    action1(f, E, e);
  } else if (cm.isQuestActive(34325) && cm.getNumberFromQuestInfo(34340, "enter") >= 5) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(3003241, "oid=48371", 105, 78, 39, 56, 155, 1, false, false);
      cm.npc_ChangeController(3003242, "oid=48372", 920, 78, 47, 870, 970, 0, false, false);
      cm.npc_ChangeController(3003243, "oid=48373", 678, 78, 46, 628, 728, 1, false, false);
      cm.npc_ChangeController(3003244, "oid=48374", 1787, 78, 49, 1737, 1837, 0, false, false);
      cm.npc_ChangeController(3003246, "oid=48375", 1231, 33, 29, 1181, 1281, 1, false, false);
      cm.npc_ChangeController(3003205, "oid=48376", -48, 78, 37, -98, 2, 0, false, false);
      cm.npc_ChangeController(3003224, "oid=48377", 1426, 33, 29, 1376, 1476, 1, false, false);
      cm.npc_ChangeController(3003218, "oid=48378", 1047, 78, 47, 997, 1071, 1, false, false);
      cm.npc_ChangeController(3003264, "oid=48379", 1898, 78, 52, 1891, 1948, 1, false, false);
      cm.updateInfoQuest(34340, 'enter=4');
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0##ho#，你认为拉克兰居民的真实身份究竟是什么？", 37, 3003251, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("拉克兰居民的真实身份？？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#在音乐盒被摧毁的时候，有关神秘河畔的知识也流了出来。\r\n你是从外部来的，想必你已经知道了。", 37, 3003251, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#神秘河畔是刚刚形成的未知世界。\n那么#b拉克兰的居民是从哪里来的呢？#k", 37, 3003251, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这点也让我觉得很奇怪。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##ho#，我的想法是这样的。\r\n#b居民们的身份其实是艾尔达。#k \r\n他们被梦境所迷惑，误以为自己是人类。", 37, 3003251, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("！！也对…………说不定是这样的。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#如果这是真的，那我们该怎么办？如果我们只不过是能量的凝聚物。", 37, 3003251, true, true);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("#face0##ho#，我想问问你。难道艾尔达也有“#b灵魂#k”吗？\r\n#b#L0#肯定有。#l\r\n#L1#我不太清楚。#l\r\n#L2#没有。#l", 37, 3003251);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#也许正如你所说的那样…………也许不是。", 37, 3003251, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#没有灵魂的人为了生存而挣扎……", 37, 3003251, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#说不定这么做真的毫无意义。", 37, 3003251, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm46.img/LachelntheIllusionCity", 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.dispose();
                                } else {
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
function action2(f, E, e) {
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
      cm.npc_ChangeController(3003241, "oid=48371", 105, 78, 39, 56, 155, 1, false, 0, false);
      cm.npc_ChangeController(3003242, "oid=48372", 920, 78, 47, 870, 970, 0, false, 0, false);
      cm.npc_ChangeController(3003243, "oid=48373", 678, 78, 46, 628, 728, 1, false, 0, false);
      cm.npc_ChangeController(3003244, "oid=48374", 1787, 78, 49, 1737, 1837, 0, false, 0, false);
      cm.npc_ChangeController(3003246, "oid=48375", 1231, 33, 29, 1181, 1281, 1, false, 0, false);
      cm.npc_ChangeController(3003205, "oid=48376", -48, 78, 37, -98, 2, 0, false, 0, false);
      cm.npc_ChangeController(3003224, "oid=48377", 1426, 33, 29, 1376, 1476, 1, false, 0, false);
      cm.npc_ChangeController(3003218, "oid=48378", 1047, 78, 47, 997, 1071, 1, false, 0, false);
      cm.npc_ChangeController(3003264, "oid=48379", 1898, 78, 52, 1891, 1948, 1, false, 0, false);
      cm.updateInfoQuest(34340, "enter=6");
      cm.sendNormalTalk("这究竟是怎么回事？", 5, 3003246, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我在做什么？", 5, 3003244, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("记忆又再次…呃，我的头……", 5, 3003201, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我来扶你。我们快回去吧。", 3, 0, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(450003100, 3, true);
            cm.forceCompleteQuest(34325);
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