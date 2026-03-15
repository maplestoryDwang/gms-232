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
      cm.sendNormalTalk_Bottom("#face0#刚刚真是千钧一发，所幸顺利地赶走了圣地里的翼人军。", 37, 3004433, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#现在就放心还为时过早，修复城门也还需要点时间……", 37, 3004431, true, true);
      } else {
        if (status == v++) {
          cm.sendNormalTalk_Bottom("#face0#说得没错，不过眼下不如就稍微放松一些，至少我们可以享受一下这一刻胜利吧？", 37, 3004433, false, true);
        } else {
          if (status == v++) {
            cm.sendNormalTalk_Bottom("#face0#我要感谢冒险岛联盟的诸位。", 37, 3004433, false, true);
          } else if (status == v++) {
            cm.forceStartQuest();
            cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#这会是一场漫长的战斗，你有信心吗，王子？", 37, 3004431, true, true);
    } else {
      if (status == v++) {
        cm.sendNormalTalk_Bottom("#face0#伊黛娜似乎觉得这一战我们还有胜算。", 37, 3004433, false, true);
      } else {
        if (status == v++) {
          cm.sendNormalTalk_Bottom("#face0#如果圣地被攻陷，你们一定会以最快的速度回到冒险岛世界，准备下一个作战计划吧。", 37, 3004433, false, true);
        } else {
          if (status == v++) {
            cm.sendNormalTalk_Bottom("#face0#实际上几天前，我确实有过这样的担忧。", 37, 3004431, true, true);
          } else {
            if (status == v++) {
              cm.sendNormalTalk_Bottom("#face0#但是现在……", 37, 3004431, true, true);
            } else {
              if (status == v++) {
                cm.sendNormalTalk_Bottom("#face0#在城中找到的所有钝剑，全部磨锋利。", 37, 3004430, true, true);
              } else {
                if (status == v++) {
                  cm.sendNormalTalk_Bottom("#face0#大炮里也不能少了火药。", 37, 3004430, true, true);
                } else {
                  if (status == v++) {
                    cm.sendNormalTalk_Bottom("#face0#明白！", 37, 3004437, true, true);
                  } else {
                    if (status == v++) {
                      cm.sendNormalTalk_Bottom("#face1#我总觉得状况好像变了不少啊？", 37, 3004431, true, true);
                    } else {
                      if (status == v++) {
                        cm.sendNormalTalk_Bottom("#face0#真希望剑之主人能尽快出现。", 37, 3004433, false, true);
                      } else {
                        if (status == v++) {
                          cm.sendNormalTalk_Bottom("#face0#我开始觉得，也许远在天边近在眼前。", 37, 3004431, true, true);
                        } else {
                          if (status == v++) {
                            cm.sendNormalTalk_Bottom("#face0#无论如何我都要真心感谢联盟的劳苦功高。", 37, 3004433, false, true);
                          } else {
                            if (status == v++) {
                              cm.sendNormalTalk_Bottom("#face0##h0 #，我有东西要给你\r\n也算是对你在塞尔提乌赫赫战功的一点小小的报答吧。\r\n#b（#i1143218##z1143218#）", 37, 3004433, false, true);
                            } else if (status == v++) {
                              cm.gainItem(1143218, 1);
                              cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                              cm.forceCompleteQuest(39818);
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