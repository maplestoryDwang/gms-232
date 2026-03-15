var status;
var mounts;
var price;
var itemprice;
function start() {
  status = -1;
  loadMounts(cm.getJob());
  if (mounts != null) {
    sendMountSelection();
  } else {
    cm.sendNext("Sorry but I can't give you any mounts.");
  }
}
function action(f, W, U) {
  if (f == -1 || f == 0 && status == 0) {
    cm.dispose();
    return;
  }
  if (f == 0) {
    status--;
  } else {
    status++;
  }
  switch (status) {
    case 0:
      sendPrice(mounts[U]);
      break;
    case 1:
      giveMount(mounts[U]);
      break;
    default:
      cm.dispose();
      break;
  }
}
function loadMounts(f) {
  switch (f - f % 1000) {
    case 0:
      mounts = [[1902000, 1912000], [1902001, 1912000], [1902002, 1912000]];
      if (f - f % 100 == 51) {
        mounts.push([1203, 0]);
      } else if (f - f % 100 == 51) {
        mounts.push([1204, 0]);
      }
      break;
    case 1:
      mounts = [[1902005, 1912005], [1902006, 1912005], [1902007, 1912005]];
      break;
    default:
      mounts = null;
  }
  if (mounts == null) {
    switch (f - f % 100) {
      case 21:
        mounts = [[1902015, 191201], [1902016, 1912000], [1902017, 1912000], [1902018, 1912000]];
        break;
      case 22:
        mounts = [[1902040, 1912033], [1902041, 1912034], [1902042, 1912035]];
        break;
      case 23:
        mounts = [[20021160, 0], [20021161, 0]];
        break;
      case 24:
        mounts = [[20031160, 0], [20031161, 0]];
        break;
      case 31:
        mounts = [[30011109, 0], [30011159, 0]];
        break;
      default:
        mounts = null;
    }
  }
}
function sendMountSelection() {
  var f = "Hello！I sell Mounts！It seems that you are eligible for the following:\r\n";
  for (var W = 0; W < mounts.length; W++) {
    if (mounts[W][1] == 0) {
      f += '#L' + W + "##s" + mounts[W][0] + '##q' + mounts[W][0] + "##l\r\n";
    } else {
      f += '#L' + W + "##i" + mounts[W][0] + '##z' + mounts[W][1] + "##l\r\n";
    }
  }
  cm.askMenu(f);
}
function sendPrice(f) {
  if (cm.getSkillLevel(f[0][0]) > 0 && !cm.haveItem(f[0][0], 1) || cm.getSkillLevel(f[0][0]) < 1 && !cm.haveItem(f[0][0], 1)) {
    cm.sendOk("You already have this mount.");
    cm.dispose();
    return;
  }
  var W = "Are you sure you want this mount? You will need the following...\r\n\r\n#r";
  if (getItemPrice(f[0]) != 0) {
    if (getItemPrice(f[0])[1] == 0) {
      W += '#s' + getItemPrice(f[0])[0] + "# skill obtained\r\n";
    } else {
      W += '#i' + getItemPrice(f[0])[0] + "# x1\r\n";
      W += '#i' + getItemPrice(f[0])[1] + "# x1\r\n";
    }
  }
  W += '' + getPrice(f) + " mesos\r\n";
  cm.askYesNo(W);
}
function getPrice(f) {
  for (var W = 0; W < mounts.length; W++) {
    if (mounts[W][0] == f && W == 0) {
      return 15000000;
    }
  }
  return 25000000;
}
function getItemPrice(f) {
  for (var W = 0; W < mounts.length; W++) {
    if (mounts[W][0] == f) {
      return W == 0 ? 0 : mounts[W - 1];
    }
  }
  return 0;
}
function hasMount(f) {
  return cm.getSkillLevel(f[0]) > 0 && !cm.haveItem(f[0], 1) || cm.getSkillLevel(f[0]) < 1 && !cm.haveItem(f[0], 1);
}
function giveMount(f) {
  cm.gainMeso(-getPrice(f[0]));
  if (f[1] == 0) {
    cm.teachSkill(f[0], 1);
  } else {
    cm.gainItem(f[0], 1);
    cm.gainItem(f[1], 1);
  }
  cm.sendOk("That was easy, wasn't it?");
  cm.dispose();
}
var status = -1;