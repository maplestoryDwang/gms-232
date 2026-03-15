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
      cm.sendNormalTalk_Bottom("#face0#切，干嘛摆出一副下任掌门人的架子！\r\n不，就算是掌门人，也不会说那种话。", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b大师兄确实是下一任掌门人最合适的人选。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face5#嗯？不对！自古以来，只有对教诲理解最深的人才能成为掌门人。", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b那就更是这样了。对玄山派武学理解最深的人，难道不是大师兄吗？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哎嘿！武学当然很重要，但你忘了“拥有力量者面对需要帮助的人，决不能袖手旁观”的教诲。", 36, 9401277, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1#那忠实地遵循教诲的人又是谁呢！", 36, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#那不就是墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '吗！哈哈哈！', 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2##b哈哈哈！这家伙，你可别奉承我。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.askAcceptDecline_Bottom("#face2#嘿嘿，那就去实践一下学过的东西吧！", 36, 9401277, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#等着我，河津！素笑来了！", 36, 9401277, false, true, 1);
                      } else if (status === v++) {
                        cm.dispose();
                        cm.warp(875003009, 0, true);
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
      cm.sendNormalTalk_Bottom("#face4#啊！大海的味道，生活的味道！", 36, 9401277, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(65927);
      cm.gainExp(910);
      cm.dispose();
    }
  }
}