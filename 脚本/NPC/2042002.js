var status = -1;
var rank = 'D';
var exp = 0;
function start() {
  if (cm.getCarnivalParty() != null) {
    status = 99;
  }
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (f == -1) {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askMenu("What would you like to do? If you have never participated in the Monster Carnival, you'll need to know a thing or two about it before joining.\r\n#b#L0# Go to the Monster Carnival Field.#l");
  } else {
    if (status == 1) {
      switch (U) {
        case 0:
          {
            var V = cm.getLevel();
            if (V < 30) {
              cm.sendOk("I'm sorry, but only the users Level 30+ may participate in Monster Carnival.");
            } else {
              cm.warp(980000000, 'st00');
            }
            cm.dispose();
          }
        default:
          {
            cm.dispose();
            break;
          }
          break;
      }
    } else {
      if (status == 100) {
        var w = cm.getCarnivalParty();
        if (w.getTotalCP() >= 501) {
          rank = 'A';
          exp = 7500;
        } else {
          if (w.getTotalCP() >= 251) {
            rank = 'B';
            exp = 6000;
          } else {
            if (w.getTotalCP() >= 101) {
              rank = 'C';
              exp = 3000;
            } else if (w.getTotalCP() >= 0) {
              rank = 'D';
              exp = 1000;
            }
          }
        }
        cm.getPlayer().endPartyQuest(1301);
        if (w.isWinner()) {
          cm.sendOk("You won the battle, despite your amazing performance. Victory is yours. \r\n#bMonster Carnival Rank : " + rank);
        } else {
          cm.sendOk("Unfortunately, you have either tied or lost the battle, despite your amazing performance. Victory should be yours the next time up. \r\n#bMonster Carnival Rank : " + rank);
        }
      } else {
        if (status == 101) {
          var w = cm.getCarnivalParty();
          var N = parseInt(cm.getPlayer().getOneInfo(1301, "lose"));
          var u = parseInt(cm.getPlayer().getOneInfo(1301, 'vic'));
          if (w.isWinner()) {
            u++;
            cm.getPlayer().updateOneInfo(1301, "vic", '' + u);
            w.removeMember(cm.getPlayer());
            cm.gainExpR(exp);
          } else {
            N++;
            cm.getPlayer().updateOneInfo(1301, "lose", '' + N);
            w.removeMember(cm.getPlayer());
            cm.gainExpR(exp / 2);
          }
          cm.getPlayer().updateOneInfo(1301, 'VR', '' + java.lang.Math.ceil(u * 100 / N));
          cm.warp(980000000);
          cm.dispose();
        }
      }
    }
  }
}