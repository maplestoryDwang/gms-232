var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.sendNext("#b(I didn't touch this hidden item covered in grass)");
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(4646) == 1) {
      if (cm.haveItem(4031921)) {
        cm.sendNext("#b(What's this... eww... a pet's poop was in there!)");
        cm.dispose();
      } else {
        cm.askYesNo("#b(I can see something covered in grass. Should I pull it out?)");
      }
    } else {
      cm.sendOk("#b(I couldn't find anything.)");
      cm.dispose();
    }
  } else if (status == 1) {
    cm.sendNext("I found the item that Pet Trainer Bartos hid... this note.");
    cm.gainItem(4031921, 1);
    cm.dispose();
  }
}