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
      cm.npc_ChangeController(9062194, "oid=358443", 796, 362, 102, 746, 846, 1, false, 0, false);
      cm.npc_ChangeController(3004201, "oid=358444", 1487, 339, 0, 1437, 1537, 0, false, 0, false);
      cm.npc_ChangeController(3004202, 'oid=358445', 2547, 385, 0, 2497, 2597, 0, false, 0, false);
      cm.npc_ChangeController(3004210, "oid=358446", 1628, 312, 0, 1578, 1678, 1, false, 0, false);
      cm.npc_ChangeController(3004215, "oid=358447", 1420, 327, 0, 1370, 1470, 0, false, 0, false);
      cm.npc_ChangeController(3004216, "oid=358448", 1698, 329, 0, 1648, 1748, 1, false, 0, false);
      cm.npc_ChangeController(3004204, "oid=358449", 877, 570, 144, 827, 927, 4, true, 0, false);
      cm.npc_ChangeController(3004205, "oid=358450", 710, 359, 102, 660, 760, 4, true, 0, false);
      cm.npc_ChangeController(3004211, 'oid=358451', 2667, 402, 0, 2617, 2717, 0, false, 0, false);
      cm.npc_ChangeController(3004212, "oid=358452", 1828, 585, 0, 1778, 1878, 1, false, 0, false);
      cm.npc_ChangeController(3004213, "oid=358453", 1735, 579, 0, 1685, 1785, 0, false, 0, false);
      cm.npc_ChangeController(3004217, "oid=358454", 1775, 327, 0, 1725, 1825, 1, false, 0, false);
      cm.npc_ChangeController(3004219, 'oid=358455', 1333, 330, 0, 1283, 1383, 0, false, 0, false);
      cm.npc_ChangeController(3004218, 'oid=358456', 1258, 329, 0, 1208, 1308, 0, false, 0, false);
      cm.npc_ChangeController(3004220, "oid=358457", 3241, 386, 0, 3191, 3291, 1, false, 0, false);
      cm.npc_ChangeController(3004220, "oid=358458", 974, 344, 0, 924, 1024, 1, false, 0, false);
      cm.npc_ChangeController(3004220, "oid=358459", 3171, 413, 0, 3121, 3221, 1, false, 0, false);
      cm.npc_ChangeController(3004221, "oid=358460", 396, 549, 0, 346, 446, 0, false, 0, false);
      cm.npc_ChangeController(3004221, "oid=358461", 2891, 626, 0, 2841, 2941, 1, false, 0, false);
      cm.npc_ChangeController(3004224, "oid=358462", 473, 343, 0, 423, 523, 0, false, 0, false);
      cm.npc_ChangeController(3004224, "oid=358463", 2115, 370, 0, 2065, 2165, 0, false, 0, false);
      cm.npc_ChangeController(3004225, "oid=358464", 2589, 623, 0, 2539, 2639, 1, false, 0, false);
      cm.npc_ChangeController(3004225, "oid=358465", 133, 549, 0, 83, 183, 0, false, 0, false);
      cm.npc_ChangeController(3004226, "oid=358466", 50, 372, 101, 0, 100, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 112, 275);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("听说你获得了新阶位，#h0#。祝贺你。", 37, 3004203, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("谢谢，南哈特。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("每次升阶，都会获得与之相符的力量。你被授予阶位时，有没有#r感觉自己在某方面变得更强#k了呢？", 37, 3004203, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("（一股温暖又强烈的气息涌入体内，这就是变强的感觉吗？好像有点不一样……)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("（要怎么回答呢？）\r\n#L0# #b当然了！真想快点试试新力量！#k #l\r\n#L1# #b好像还不太够……请继续努力吧？#k #l\r\n#L2# #b哎？您这是什么意思……#k #l", 57, 0);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哦吼……有趣的反应。我还压根没有赋予你任何力量呢，#h0#。", 37, 3004203, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好了。我现在就赋予你与阶位相符的力量，#b荣耀特攻队之力#k。", 37, 3004203, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("来，把手放上来，#h0#。", 37, 3004203, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 70);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("Effect/EventEffect.img/glorionForce/0");
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/wakeUp_boom", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/compass", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1650);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这就是荣耀特攻队之力？这次我终于感觉到有某种新力量进入体内了。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("之后你每次升至新的荣耀特攻队阶位，都会获得#b荣耀特攻队之力#k。", 37, 3004203, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("此外，与荣耀特攻队之力匹配的一种叫#b力量训练#k的修炼方法也会同样变强。想了解更多，就请去#b荣耀特攻队练武场#k参与一次修炼吧。", 37, 3004203, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("方法我已经告诉你了，之后就看你自己的了。\r\n\r\n#r※ 可以在0转技能栏查看荣耀特攻队之力和力量训练。#k", 37, 3004203, true, true);
                                        } else if (status === V++) {
                                          cm.warp(993120000, 4, false);
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.getTopMsgFont("凝聚荣耀特攻队之力，获得攻击普通怪物时，伤害增加30%的效果。", 3, 20, 10, 0, 0);
                                          cm.playerMessage(5, "凝聚荣耀特攻队之力，攻击普通怪物时，获得伤害增加30%的效果。");
                                          cm.playerMessage(5, "获得了力量训练技能。");
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