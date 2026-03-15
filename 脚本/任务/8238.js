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
      cm.askMenu("啊！你也是猎人吧？嗯，我们这儿接到了报告，幽影森林出了不少麻烦啊——钱袋子活过来袭击路人，可怕的幽灵四处出没，甚至还有人看见了一只像是雪怪的生物。为了宽抚大众，我和艾斯拜德决定悬赏打猎这些造成麻烦的生物。完成这些赏金任务，我就任命你当我的副手！有兴趣不？\r\n#b#L0#当然了！需要我做什么？\r\n #l#k", 0, 9201054);
    } else {
      if (status === v++) {
        cm.askMenu("嗯，跟你说实话。这是我们最棘手的悬赏目标。我派去的人一般两种下场：要么两星期后被发现死在幽影森林深处的一棵树里，要么音信全无。\r\n#b#L0#交给我吧，我可不像那帮菜鸟一样嫩。\r\n#b#L1#且慢，我还是先找米奇买点药水好了……\r\n#l#k  ", 0, 9201054);
      } else {
        if (status === v++) {
          cm.askMenu("你这话说的，真够大胆的啊。好吧，是这样的，我们接到了森林有某个……东西……出没的报告。\r\n#b#L0#啊？什么“东西”。\r\n#l#k", 0, 9201054);
        } else {
          if (status === v++) {
            cm.askMenu("就是个“东西”。我们也不知道它到底是什么。有个大难不死的可怜家伙，回来的时候说了句“好大的……脚……”就昏了过去。他似乎被什么东西给压伤了，但伤口并不平整，好像是被当地毯来回走了8次，最后还被重踩了一脚。我们可以想象最后那一脚踩下去的时候他的惨叫。我们不得不把它送到金银岛养伤。总之，这东西被我们命名为大脚怪。\r\n#b#L0#别跟我说，你就这点情报？\r\n#l#k", 0, 9201054);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("呃……这个……*啊哼* ", 0, 9201054, false, true);
            } else {
              if (status === v++) {
                cm.askMenu("\r\n#b#L0#你逗我呢？\r\n#l#k", 0, 9201054);
              } else {
                if (status === v++) {
                  cm.askMenu("这个嘛，至少我们知道他强大到踩死了160个英雄、100个夜王、80个大法师、190个圣骑士、90个弓圣、110个神射手、50个影贼和一头叫“穆非·斯纳格金”的宠物臭鼬。\r\n#b#L0#……妈呀……\r\n#l#k", 0, 9201054);
                } else {
                  if (status === v++) {
                    cm.askMenu("总而言之，这是桩苦差。\r\n#b#L0#哇，这还用你说？\r\n#l#k", 0, 9201054);
                  } else if (status === v++) {
                    cm.sendNormalTalk("别愁眉苦脸的啦！我相信你一定能成功的！只要干掉这大脚怪，你就能获得丰厚的赏金。快去吧！小心点，我可不想你被踩扁了！", 0, 9201054, false, true);
                    cm.forceStartQuest(8238, '');
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
      cm.sendNormalTalk("你还活着！我是说，你回来了！太好了……而且还只受了点轻伤——#t2002023# 能让你瞬间就完好如初！你还弄来了#t4032013#！战斗激烈么？给你这个——这是你应得的奖励！", 1, 9201054, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(8238);
      cm.gainExp(367848);
      cm.sendNormalTalk("请24小时之后再来，到时候我会再找你帮忙的。", 1, 9201054, true, false);
      cm.dispose();
    }
  }
}