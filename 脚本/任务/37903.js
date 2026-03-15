var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("有#b发光的东西#k沉到了水底？", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#是的。", 36, 3003500, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("那是什么样的东西，你有头绪吗？", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#不，我们没掌握任何相关信息。\r\n在直接将它打捞出来之前，根本不知道究竟是什么样的物品。", 36, 1540451, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#但那是#r光明超越者#k身上携带的东西。\r\n我认为不是寻常之物。", 36, 1540451, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("嗯……为了找个毫无线索的东西，就要潜入未知的海底吗……", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#是的……\r\n老实说，我也不太愿意开展此次作战……\r\n但这种不想放过任何一丝希望的心情，希望你们能理解。", 36, 1540451, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#想到接下来我们#r联盟要去的地方#k，说真的，\r\n心里不得不期待能出现侥幸。", 36, 1540451, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom('(嗯……)', 56, 0, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face2#所以我准备组织这次的作战队伍，\r\n首先第一位队员就是你，\r\n#b#h0##k。", 36, 1540451, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face2#对付未知的怪物，没人比你更拿手。\r\n当然，是否参加全看#b#h0##k你自己的意思。", 36, 1540451, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.askYesNo_Bottom("(沉没的某物……。去找找吧？)", 56, 3003530, 1);
                          } else if (status === v++) {
                            cm.forceStartQuest(37903, '');
                            cm.sendNormalTalk_Bottom("#face2#谢谢你这次也欣然答应。\r\n让我松了口气。", 36, 1540451, false, true, 1);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#好，那第二位队员……", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#是我。虽然我拒绝了。", 36, 3003502, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#休麦，很少有人像你一样水下作战经验这么丰富……\r\n好可惜。", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#所以我才拒绝。现在一提到大海，我都犯恶心。", 36, 3003502, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#……。", 36, 1540451, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#没办法。那第三位队员……", 36, 1540451, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#是我！我自愿申请的。", 36, 3003500, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#沃莉？你不是在接受治疗吗？", 36, 3003502, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#沃莉是唯一有过埃斯佩拉水下经历的队员。\r\n那什么，能让我也说句话吗？", 36, 1540451, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#再怎么样也不行啊，前几天才晕倒过……", 36, 3003502, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我已经得到了医护人员的许可。没事的。", 36, 3003500, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('#face3#……。', 36, 3003502, true, true, 1);
                          } else if (status === v++) {
                            cm.forceCompleteQuest(37903);
                            cm.gainExp(132738181);
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