var status = -1;
function action(f, W, U) {
  status++;
  switch (cm.getMapId()) {
    case 807100000:
      cm.sendNormalTalk_Bottom("#face0#越过本能寺的外墙，帮忙打开东门吧。", 37, 9130000, false, true, 1);
      cm.dispose();
      break;
    case 807100002:
      var V = -1;
      if (status <= V++) {
        cm.dispose();
      } else {
        if (status === V++) {
          cm.forceStartQuest(57101, '');
          cm.sendNormalTalk_Bottom("#face0#做得好。真是越来越想让你加入我的门下了。", 37, 9130000, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("根本就没有什么难度。尤其是现在已经正式开战，就显得更加简单了。不过到底是怎么回事？难道是北侧的上杉军和南边的士兵们已经先一步冲进去了吗？", 57, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#原定计划是各方面同时闯入，只要没有人临时变卦无视行动信号，就不可能出现这种情况。虽然我心里隐隐有个猜测，不过……无法证实的事情，就算告诉你也没有意义。", 37, 9130000, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#本能寺内已经是一片混乱，我们也更容易冲进去了。就现状而言，对我们完全是有利无弊的。就等打倒信长之后再来研究这到底是怎么一回事吧。现在，先让我们趁势攻入本能寺的正殿吧。", 37, 9130000, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我明白了！那就上吧！！", 57, 0, true, true, 1);
                } else if (status === V++) {
                  cm.dispose();
                }
              }
            }
          }
        }
      }
      break;
    default:
      cm.dispose();
      break;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;