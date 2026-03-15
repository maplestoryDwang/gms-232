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
      cm.sendNormalTalk_Bottom("#face3#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，没时间了。我们分头行动吧！", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#我去取水。" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你去收集摩沙的鳍！\r\n10个左右应该就够了！", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b明白了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#那我先走了~！", 36, 9401277, true, true, 1);
          } else if (status === v++) {
            cm.OnStartNavigation(875001101, 0, '', 0);
            cm.forceStartQuest(65933, '');
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
      cm.sendNormalTalk_Bottom("#face4#呼，呼……我比你快，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b哈哈，不错嘛。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b来，给你。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#水也取回来了！", 36, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("让我……看看……没错。", 36, 9401297, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face8#但是灵物喝了这种水都倒下了，人也会很危险吧？", 36, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("不会运气……的普通人……就算喝了也不会有什么事……", 36, 9401297, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face8#啊！那么那些武林人士呢？", 36, 9401277, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("那个嘛……还不能确定，但是……\r\n……如果这个水中含有阻断气血的某种东西，运用内功的瞬间……就会很危险……", 36, 9401297, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "! ", 36, 9401277, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0##b虽然还无法确定，但小心一点总没有坏处。\r\n快点回玄山派去确认一下吧。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("你们走吧……林达尔由我来照顾……", 36, 9401297, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#谢谢！", 36, 9401277, true, true, 1);
                            } else if (status === v++) {
                              cm.forceCompleteQuest(65933);
                              cm.gainExp(1063);
                              cm.gainExp(936);
                              cm.gainItem(4036712, -10);
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