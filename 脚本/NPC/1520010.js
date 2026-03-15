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
      if (cm.isQuestActive(32280)) {
        cm.sendNormalTalk('那封信是干嘛的？', 0, 1520010, false, true);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.forceStartQuest(32367, '1');
        cm.sendNormalTalk("这是刚刚我所说的，真正犯人的线索。这可是由冒险骑士团的谋士亲笔所写，所以是很可靠的情报。", 4, 1520008, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("仅凭一张纸就能证明你不是犯人？你以为黑暗领主会相信那种东西吗？", 0, 1520010, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不过，这总比没有强吧。虽然是很微小的证据，不过我已经将其握在手里，因此现在去见黑暗领主也不会让我感到害怕了。不管是盗贼公会，还是其他地方，你只管带路就行。", 4, 1520008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哼，挺理直气壮的嘛。反正结果会由黑暗领主来定夺。现在赶快去废弃都市吧。还有，#h0#……我跟你没完。", 0, 1520010, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#h0#，真是多亏你了，谢谢。等我洗脱罪名后，我们再相见吧。", 4, 1520008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那两人之间的问题好像解决得差不多了。把到目前为止发生的事情告诉赫丽娜吧。", 16, 1520010, true, true);
                } else if (status === V++) {
                  cm.gainItem(4033887, -1);
                  cm.forceStartQuest(32367, '2');
                  cm.dispose();
                  cm.warp(100000201, 4, false);
                }
              }
            }
          }
        }
      }
    }
  }
}