var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("好，这里就是我们的内心世界！嗯……看来还没有完全受你们的影响，还是和以前女神的神殿有很多相似。", 33, 2400009, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("女神的神殿是这样的吗？", 41, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯嗯！虽然……我们也不记得女神了，但无意之间女神的影响把内心世界创造成这种样子了。如果和你们相处得更亲近了，到时候就会变成和你们的神殿一样的模样。", 33, 2400010, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("女神的神殿原来是这样啊……", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那么就告诉我们使用圣物的方法。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face1#啊，对了。应该……嗯……从哪开始说明呢？", 33, 2400009, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……唉，不管了！还是切身体会一下吧！那就开始了？去吧，稻草人！", 33, 2400009, true, true);
                } else if (status === V++) {
                  cm.spawnMobLimit(9300809, 1, -150, 179, 100);
                  cm.playerMessage(-1, "攻击拉比斯和拉兹丽召唤的稻草人。");
                  cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;