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
      cm.sendNormalTalk_Bottom("#face0#你好像有事要谈，需要我们先回避一下吗？", 36, 3004431, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#不必。我原本也要请二位来旁听的。", 36, 3004430, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3004431, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#王子陛下说，二位可以帮忙一起寻找圣剑的主人。", 36, 3004430, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#话虽如此……可我们这些外人也能插手吗？", 36, 3004431, true, true);
              cm.npc_LeaveField('oid=553897');
              cm.npc_ChangeController(3004414, "oid=368321", 5, 85, 2, -45, 55, 1, false, 0, false);
              cm.npc_ChangeController(3004415, "oid=368322", -125, 85, 2, -175, -75, 0, false, 0, false);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#重新寻回#b圣剑阿索尔#k的光芒，是我们教团一直以来的夙愿，\r\n但是至今为止，只依靠我们的力量，并没有取得什么进展。", 36, 3004430, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#说不定……有时候我们也需要换个角度来思考。", 36, 3004430, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom('#face0#嗯……', 36, 3004431, true, true);
                  } else {
                    if (status === v++) {
                      cm.askYesNo_Bottom("#face0#我可以请求二位帮忙吗？", 36, 3004430);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#那就恭敬不如从命了。", 36, 3004431, false, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#有什么线索吗？", 36, 3004431, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#我也是最近才知道这件事，圣剑虽然在古代战争中失去了光芒，但那之后，它好像一直在近天峰找寻主人。", 36, 3004430, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#我想看看有没有相关的记录。", 36, 3004430, true, true);
                            } else if (status === v++) {
                              cm.forceStartQuest(39812, '');
                              cm.OnStartNavigation(410000690, 0, "east00", 39812);
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
function stage0(g, w, a) {
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
  } else if (status == v++) {
    cm.warp(993141013);
    cm.dispose();
  }
}