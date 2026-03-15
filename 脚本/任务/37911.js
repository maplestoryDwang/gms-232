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
      cm.sendNormalTalk_Bottom("#face0#那，现在走吧？", 36, 3004850, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#是，准备好了！", 36, 3004851, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom('去哪里？', 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#嗯？那当然是……", 36, 3004850, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#寻找塔纳遗落的物品……！", 36, 3004851, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#返回总部吧。", 36, 3004850, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#什么？", 36, 3004851, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#没办法呀。声呐什么都没探测到。", 36, 3004850, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#但你刚才不是说有办法提高声呐的功率？", 36, 3004851, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我只说有办法，没说要按那办法做呀？", 36, 3004850, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face1#呃……。", 36, 3004851, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#氧气和电池都在持续消耗。\r\n继续待在未知的大海里，还不知会面临什么样的危险。", 36, 3004850, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face3#虽，虽然是这样……。\r\n那东西或许会对将来的战斗起到很大帮助。\r\n我认为值得为它冒点风险。", 36, 3004851, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#沃莉，大海是比你想象中还要可怕得多的地方。", 36, 3004850, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face3#不过……你的话也有道理，要不先听听#h0#的想法吧？", 36, 3004850, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.askYesNo_Bottom("#face3##h0#，你怎么想？\r\n你觉得我们应该继续推进作战吗？", 36, 3004850, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom('再推进一下也无妨吧？', 56, 0, false, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face3#嗯……这么一来，就是2对1了。", 36, 3004850, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face3#我负责指挥，决定权也在我手里，但……", 36, 3004850, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face3#休麦，我们说不定会找到很了不起的东西。\r\n就这么回去，太可惜了。", 36, 3004851, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face3#嗯……。", 36, 3004850, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face3#嘁，没办法。", 36, 3004850, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我丑话说在前，如果放大信号后，声呐依然没反应，我们就立刻返回总部。", 36, 3004850, true, true, 1);
                                                  } else if (status === v++) {
                                                    cm.dispose();
                                                    cm.warp(993185005, 0, false);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}