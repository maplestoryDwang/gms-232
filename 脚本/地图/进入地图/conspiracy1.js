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
      cm.npc_ChangeController(1105000, "oid=221209", -405, 37, 57, -455, -355, 1, false, 0, false);
      cm.npc_ChangeController(1105002, "oid=221210", -133, 37, 57, -183, -83, 1, false, 0, false);
      cm.npc_ChangeController(1105003, "oid=221211", -482, 37, 57, -532, -432, 1, false, 0, false);
      cm.npc_ChangeController(1105004, "oid=221212", -721, 88, 14, -771, -671, 1, false, 0, false);
      cm.npc_ChangeController(1105005, "oid=221213", -700, 88, 13, -750, -650, 1, false, 0, false);
      cm.npc_ChangeController(1105006, "oid=221214", -775, 88, 14, -825, -725, 1, false, 0, false);
      cm.npc_ChangeController(1105007, 'oid=221215', -842, -88, 39, -892, -792, 1, false, 0, false);
      cm.npc_ChangeController(1105008, "oid=221216", -66, 37, 57, -116, -16, 1, false, 0, false);
      cm.npc_ChangeController(1105009, "oid=221217", 1, 37, 57, -49, 37, 1, false, 0, false);
      cm.npc_ChangeController(1105010, "oid=221218", 79, 88, 3, 29, 129, 1, false, 0, false);
      cm.npc_ChangeController(1105011, "oid=221219", 122, 88, 2, 72, 172, 1, false, 0, false);
      cm.npc_ChangeController(1105012, "oid=221220", 165, 88, 2, 115, 215, 1, false, 0, false);
      cm.npc_ChangeController(1105013, "oid=221221", 206, 88, 23, 156, 256, 1, false, 0, false);
      cm.npc_ChangeController(1105014, "oid=221222", -555, 37, 57, -605, -505, 1, false, 0, false);
      cm.npc_ChangeController(2142938, 'oid=221223', -204, 37, 57, -254, -154, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("未来我们会背叛联盟？怎么可能！反抗者绝对不会背信弃义。", 1, 1105002, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("镇静。我再说一遍，未来之门那边的情况是虚假的未来。", 1, 1105000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但并不是说可能性就是0。", 1, 1105003, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('你说什么？', 1, 1105002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("开个玩笑。之前你说过，必须考虑到所有的可能性。", 1, 1105003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("各位，请安静！现在不是为这种事情争吵的时候。#e我们终于发现了敌人的目的。#n", 1, 1105001, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那是几天前的事情。冒险岛世界各地开始出现病得非常严重的人。", 1, 1105001, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("病得非常严重……？", 1, 1105009, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("他们好像被迷住了，混淆了梦境和现实，到处跟人说“只要女皇还活着，我们就没有未来。反抗者是背叛者，不能相信联盟”……", 1, 1105001, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……天哪。未来之门那边的世界也许不单纯是虚假的未来。", 1, 1105013, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("为什么会出现这种症状呢？", 1, 1105012, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("他们是“中了梦之毒的人”……关于这个，汉斯应该可以解释。", 1, 1105001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("梦属于潜意识。反过来说，梦就是将人的意识引向指定的方向的有效手段。", 1, 1105004, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("也就是说，只要让人们重复做相同的梦……", 1, 1105002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("在精神方面的免疫力不是很强的人，就会受到强烈的催眠。现在他们的脑海中，一定充满了“女皇是危险的人”、“反抗者是背叛者”这样的想法。", 1, 1105004, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("原来敌人的目的是这个。", 1, 1105000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("首先要做的，是治好那些中了梦之毒的人。各位，可能要麻烦你们再到未来之门那边去一趟。", 1, 1105001, true, true);
                                        } else if (status === V++) {
                                          cm.forceCompleteQuest(31910);
                                          cm.warp(913050010, 0, false);
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
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