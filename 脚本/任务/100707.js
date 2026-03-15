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
      cm.sendNormalTalk("#b#e#h0##n#k，你好？\r\n刚刚打过招呼了吧？", 4, 9062453, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e#h0##n#k，我有东西要给你看看，\r\n你难道就不好奇吗？", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这是我亲手做成的美丽#b#e魔法珠#n#k，\r\n呵呵，要是能答应我的请求，我就给你看看。", 4, 9062453, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("莫名是有点好奇……\r\n到底是什么呢？", 2, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("我的魔法珠可不单单只是一颗漂亮的珠子，\r\n我可是为它倾注了#b#e神秘的魔法#n#k，可以让它吸收\r\n艾尔达。", 4, 9062453, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("你也知道，焕新城堡纯粹是由#b#e艾尔达#n#k建成的，所以城堡之外必须源源不断地供应艾尔达。", 4, 9062453, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("那不用我开口，你应该也很清楚#r#e我想要请你帮什么忙#n#k了吧？", 4, 9062453, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("啊，不是，等一下……", 2, 0, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("呵呵，放心好了，我也不会白让你帮忙。\r\n\r\n只要你能帮我们，到时候就会送你可以用于#b#e焕新城堡#n#k的\r\n#b#e#i4310306:# #t4310306##n#k！", 4, 9062453, true, true);
                    } else {
                      if (status === v++) {
                        cm.askYesNo("我们的时间不多了，\r\n快和我一起去帮帮焕新城堡吧？\r\n收下我的#b#e魔法珠#n#k吧！", 4, 9062453);
                      } else {
                        if (status === v++) {
                          cm.teachSkill(80003016, 0, -1);
                          cm.teachSkill(80003016, 1, 1);
                          cm.teachSkill(80003016, 1, 0);
                          cm.updateInfoQuest(100708, "fever=0");
                          cm.forceCompleteQuest(100707);
                          cm.playerMessage(5, "从现在起，等级范围怪物出现的地方可以使用<勒内的魔法珠>技能。");
                          cm.sendNormalTalk("呵呵，好！\r\n这个我亲自做好的美丽#b#e魔法珠#n#k给你。", 4, 9062453, false, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("魔法珠中可以填充惊人的#b#e艾尔达#n#k，\r\n因魔法珠与焕新城堡相连，一旦充入艾尔达就会立即传给城堡。", 4, 9062453, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("那要怎么做才能得到#b#e艾尔达#n#k？", 2, 0, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("狩猎#r#e等级范围怪物#n#k后时不时能得到艾尔达，\r\n每当你收集到艾尔达时，我都会送你1块焕新城堡的宝石，\r\n#b#e#i4310306:# #t4310306##n#k的。", 4, 9062453, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("然后当魔法珠内的艾尔达#b#e充满时#n#k，珠子就会开始发光，\r\n获得发光的魔法珠之力就可以瞬间找到#r#e更多的艾尔达#n#k。", 4, 9062453, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("啊，对了，有时候还会很罕见地出现#r#e巨型艾尔达#n#k，\r\n一旦得到巨型艾尔达，一眨眼的工夫就能得到珠子的力量了呢。", 4, 9062453, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("那为了收集艾尔达，就快去狩猎#r#e等级范围怪物#n#k吧，\r\n#b#e焕新城堡#n#k需要你！", 4, 9062453, true, true);
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