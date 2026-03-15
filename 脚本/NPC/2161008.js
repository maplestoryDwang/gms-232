var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你…是怎么知道这条路的？这条路只有王族、我和伊帕娅知道的啊…你还要撒谎说见过伊帕娅了吗？", 0, 2161008, false, true);
      cm.effect_Voice("Voice.img/vonleon/5", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我真的见到伊帕娅了，而且这次我带着伊帕娅一起来了。你亲自和伊帕娅说说吧。", 2, 2161008, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("雷昂，你看不见我吗？你听不见我说话吗？", 4, 2161009, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你在胡说什么……伊帕娅在哪里啊？你要耍我吗？", 0, 2161008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你听不见伊帕娅的声音吗？为什么…？为什么她的声音无法传递给你？", 2, 2161008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("说得好像真的一样，不…也许你说的是真的。说不定伊帕娅真的在这里，还和我说话。但那又有什么用呢？我的手已经不再干净了…", 0, 2161008, true, true);
                cm.effect_Voice("Voice.img/vonleon/6", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("…为什么要说这么悲伤的话语…", 4, 2161009, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("啊啊…也许是因为那件事。是因为我把我的灵魂出卖给了黑魔法师…由于我杀了太多的人，才听不见她的声音…这就是我所犯下罪孽的代价吗…", 0, 2161008, true, true);
                    cm.effect_Voice("Voice.img/vonleon/7", 100);
                  } else {
                    if (status === V++) {
                      cm.askYesNo("认识伊帕娅的人啊，请收下这个。", 0, 2161008);
                      cm.effect_Voice("Voice.img/vonleon/8", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这个吊坠里装有很久以前宫廷画家画的伊帕娅的画像…我时长看着它回忆帕娅，但现在，这个已经不适合我了。", 1, 2161008, false, true);
                        cm.gainItem(4032839, 1);
                        cm.effect_Voice("Voice.img/vonleon/9", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("出卖灵魂以满足复仇之心…最后什么都没有剩下。这样我没有资格回忆她。", 1, 2161008, true, true);
                          cm.effect_Voice("Voice.img/vonleon/10", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("如果能再回到当时，我会不会再做这样的决定？想过数万遍，但还是不知道答案。愤怒和虚无…选择哪一方，最终也不会有改变。", 1, 2161008, true, true);
                            cm.effect_Voice("Voice.img/vonleon/11", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你还是回去吧，现在我不想打架…", 1, 2161008, true, true);
                              cm.effect_Voice("Voice.img/vonleon/12", 100);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(211061001, 1, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;