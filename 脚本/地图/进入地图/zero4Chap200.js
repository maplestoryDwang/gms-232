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
      cm.npc_ChangeController(2400012, "oid=26506", 357, -260, 57, 307, 407, 0, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=26507", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=26508", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=26509', 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=26510", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=26511", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=26512", 469, -230, 36, 419, 519, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=26513", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=26514", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face1#……啊？女神之泪说了那样的话？", 33, 2400007, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("聚集能量，断绝与超越者之间的关系，做一个普通人……女神之泪竟然说了这样的话。我们连想都没有想过。", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face11#问题是他的话可不可靠。如果他说的是真的的话，那我们就无法使用一部分女神的力量了。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("女神之泪是附属于女神，时间超越者的力量。从一开始就不能想着要摆脱……即使有了这种想法，也是无法摆脱的。不管用什么力量都不可能。", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("要想摆脱的话，只有身为超越者或者说神之子的两位#r不承认女神之泪是自身的一部分，丢弃女神之泪的那一刻#k，只有那一刻而已。", 33, 2400000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("但这真是件奇怪的事情呢。女神之泪竟然抗拒超越者……这就如同鱼不愿生活在水里，而要生活在别的地方。", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("伍龚呢？伍龚不也是像这样的吗？虽然没有这么过激。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("完全不是。我认为伍龚可能是觉得很难承担两位赋予他的重任，所以才进行反抗的。至少他没有否认过你们两位。", 33, 2400000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face1#那个人，真的是女神之泪吗？不会另有其人吧？", 33, 2400007, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("时间之力……感受到了吗？", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我觉得我们没有认错人。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#嗯……那应该没错，但真是很奇怪呢。", 33, 2400007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我也不太清楚是什么缘故。很抱歉没能帮到你们。", 33, 2400000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("唉，没人能事先料想到会出现这样的状况，没有办法。不管怎么说，我们也不能就这样放任女神之泪不管，还是得想想别的办法才行……", 41, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("怎么了，#p2400006#？你在找什么吗？", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#p2400008#……不见了。", 41, 2400006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("应该是临时去了什么地方吧？我们有事也会先暂时离开神殿，然后再回来啊。", 33, 2400007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("那我们再去一趟埃德尔斯坦吧。", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(325090210, 0, false);
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