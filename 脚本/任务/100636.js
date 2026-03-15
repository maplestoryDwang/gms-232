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
      cm.sendNormalTalk("呼，很好。能一路坚持修炼到现在，我很欣赏你的毅力。\r\n看着你修炼的模样，我心里激动得都要掉眼泪了。", 4, 9062317, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("没必要因为我掉眼泪吧……", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嗯？不是因为你，我是为自己感到自豪。想我当年！\r\n经常亲手用原木削制修炼用的木剑呢！", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这不知不觉地就正儿八经地当起了师父……\r\n心里真是感慨万千……", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("不过，你没必要亲手制作修炼用剑。因为曾是熊猫仙人中最强剑客的#b#e天公留下了一件宝物#n#k！", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.askYesNo("怎么样，你要领取#b#e天公的宝物#n#k吗？", 4, 9062317);
              } else {
                if (status === v++) {
                  cm.forceCompleteQuest(100636);
                  cm.updateInfoQuest(100638, "count=0");
                  cm.updateInfoQuest(100638, "count=0;stage=0");
                  cm.playerMessage(5, "获得了<天公之剑>技能。");
                  cm.playerMessage(5, "从现在开始，你去等级范围怪物出没的地方，就可以使用<天公之剑>。");
                  cm.sendNormalTalk("#b<天公之剑>#k是天公注入自己的气息打造的剑。\r\n据说当天公跳起剑舞时，山川都会为之震撼。", 4, 9062317, false, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("不过，经过上千年的岁月，气息减弱了许多。\r\n\r\n给剑上充入气息的话，它就能重现往日的威风，天公也会苏醒！", 4, 9062317, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("在狩猎#e#b等级范围怪物#k#n的过程中，有一定概率\r\n给#e剑上充入气息#n，\r\n气息全部蓄满后，就会出现#e#b巨型修炼人偶#k#n。\r\n\r\n\r\n#r※ 等级范围怪物是以角色等级为准，等级差异在#e-20级~+20级范围#n内的怪物。", 4, 9062317, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("每当#e#b剑上蓄满气息#k#n时，会获得#e#r1个#k#n觉醒铸币，\r\n每次消灭#e#b修炼人偶#k#n后，可以获得#e#r10个#k#n觉醒铸币。", 4, 9062317, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("消灭两次#e修炼人偶#n后，剑的气息就会蓄满，\r\n#e#r第三次#k#n将不再出现修炼人偶，而将欣赏到#e#r天公的剑舞#k#n。", 4, 9062317, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("天公跳起剑舞时，根据#e#b剑舞种类#k#n，可以一次获得大量#e#b觉醒铸币#k#n。\r\n\r\n\r\n#r※ <天公之剑1级> 可随机获得#e10/20/30#n个觉醒铸币 \r\n    <天公之剑2级> 可随机获得#e20/40/60#n个觉醒铸币", 4, 9062317, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("等你修炼完#e天公的秘籍<第1章>#n，就来找我。\r\n我会让你在天公跳剑舞的时候获得更多#e#b觉醒铸币#k#n。", 4, 9062317, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("好，那赶紧开始剑术修炼吧。\r\n这次也期待看到你的坚强毅力哦！", 4, 9062317, true, true);
                              } else if (status === v++) {
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