var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("噢噢，你们是来当神仙的吧！来得正好！我是武陵道场的#p2440001#！我负责指引你们成为神仙！那么就先申请一下！", 32, 2440021, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('申请？什么申请？', 44, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("当然是#b申请神仙课程#k啊！", 32, 2440021, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我可不想当神仙……", 44, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你在说什么？不想当神仙，你来武陵做什么？", 32, 2440021, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我们只要找个人就行了，对神仙什么的没兴趣。你走开。", 44, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("哎哟喂，既然到了武陵还说对神仙不感兴趣？别开玩笑了！武陵是想要成为神仙的修炼生们所在的村子！如果不是修炼生，那就没有必要来这里！", 32, 2440021, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你们两个神经肯定有些问题！到了这里除了修炼还是修炼！我来替你们申请吧！#r你面目可憎，就叫面包。你呆呆傻傻，就叫呆包#k！", 32, 2440021, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                      cm.sendNormalTalk("#face0#什么呀，名字这么奇怪！？#p2400005#、#p2400006#都不够难听，还叫面包和呆包！", 44, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("面包……？听起来很好吃。", 44, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("少啰嗦！我说修炼就修炼！准备好上课了，就来找我对话！", 32, 2440021, true, true);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(324000000, 8, false);
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