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
      cm.sendNormalTalk_Bottom("#face5##b（掌门人…）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face5##b（……那我走了。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face4##b（现在出发吧。）\r\n\r\n#r（※接受时，自动移动到任务地图。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65950, '');
          cm.dispose();
          cm.warp(875001001, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0#准备好了吗？", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b嗯……虽然我很担心素笑和年幼的弟子们，但相信他们一定能做得很好。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#哈，你们真是太体贴了。\r\n素笑姑娘也经常一大早来找我，表达对你的担心之情。你们两个真的非常非常~", 36, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b哈哈，原来如此。\r\n素笑，你果然很厉害。把玄山派打理得井井有条。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#没错！笑起来就对了，呵呵。\r\n好了，我们走吧。现在该想想今后你该怎么办了。", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#哎呀，对了。给，这是素笑姑娘让我给你的。\r\n她说自己给的话，你可能不肯要。", 36, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#据说是只传给玄山掌门人的秘籍。\r\n不管在任何地方都能回到玄山派。如果有什么不放心，你可以随时回来。", 36, 9401278, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face4##b……素笑……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.teachSkill(170001000, 0, -1);
                      cm.teachSkill(170001000, 1, 1);
                      cm.getTopMsgFont("获得了<回归玄山>技能。", 3, 20, 20, 0, 0);
                      cm.openUIWithOption(3, 170001000);
                      cm.forceCompleteQuest(65950);
                      cm.gainExp(13192);
                      cm.sendNormalTalk_Bottom("#face0#好！现在出发吧！", 36, 9401278, false, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#前面这艘船就是开往金银岛明珠港的船。好像马上就要出发了。快上船吧。", 36, 9401278, true, true, 1);
                      } else if (status === v++) {
                        cm.OnStartNavigation(875001001, 1, "9401359", 65951);
                        cm.forceStartQuest(65951, '');
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