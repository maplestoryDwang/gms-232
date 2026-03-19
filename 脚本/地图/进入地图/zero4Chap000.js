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
      cm.npc_ChangeController(2400012, "oid=26464", 382, -260, 57, 332, 432, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=26465", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=26466", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=26467', 697, -410, 54, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=26468", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=26469", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=26470", 547, -167, 61, 497, 597, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=26471", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=26472', 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=26473", 455, -230, 36, 405, 505, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这么快就该开始寻找第四个女神之泪了……找到这第四个女神之泪的话，就只剩下最后一个了。前往冒险岛世界的日子也指日可待了。呜呼。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不能这么乐观。继射手村之后，武陵也出现了影子骑士团……这意味着他们的踪迹遍布了更多的地方。另外，他们的手段也变得更高明了。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("即使这样，我们也得……寻找女神之泪啊。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我不是说不找了。是让你不要放松警惕。不要转移视线！我是对你说的！", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("所以接下来是哪个村庄？", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face0#不要无视我！", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("下个女神之泪在一个叫做#b埃德尔斯坦#k的地方。这个地方也是第一次听说呢……", 33, 2400008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嗯。我们被困在镜世界期间，出现了很多新的村庄吗？因为我们也算去过很多地方了，但是不认识的村庄却陆续出现。", 33, 2400007, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("……这个嘛。也许正是如此呢。", 33, 2400008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("反正，不管影子骑士团是否出现！两位不是都接连不断地获得胜利了嘛？我相信这次你们也能顺利找到女神之泪的！", 33, 2400007, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("嗯，我们已经见过三次女神之泪了，也知道变成人的女神之泪的特征了。应该不难找到。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("特征吗？是什么样的特征？", 33, 2400007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("他们都拥有蓝色的……毛。", 41, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你说毛？女神之泪又不是动物，说什么……啊，不过我好像是听说过伍龚原本是只熊猫。你说的毛是指头发之类的东西，对吧？", 33, 2400007, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("没错。沙马尔、拉尔汉、还有伍龚他们都共同拥有着#b蓝色的头发#k。虽说伍龚的是毛……女神之泪应该是受原来形态的影响，才拥有蓝色的头发的。", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("这种颜色的头发并不常见，所以只要寻找拥有蓝色头发的人，应该很快就能找到。不过，如果这个女神之泪也像伍龚那样麻烦的话，就得多花费点时间了。", 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("啊哈，原来是这样！哇，竟然能发现那个共同点，两位真的很了不起啊！我完全没能察觉呢！#p2400008#，你也是吧？", 33, 2400007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("…………", 33, 2400008, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#p2400008#？#p2400008#？你们在想什么呢？", 33, 2400007, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("没什么。那么，两位……到了埃德尔斯坦，也要注意身体啊。", 33, 2400008, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(325090010, 0, false);
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