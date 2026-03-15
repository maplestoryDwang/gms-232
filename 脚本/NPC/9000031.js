var a;
var destinyweapons;
var sel;
function start() {
  cm.sendOk("Hi, I'm currently disabled. Enjoy AstralMS!");
  cm.dispose();
  return;
}
function action(f, W, U) {
  if (f != 1) {
    cm.dispose();
    return;
  }
  a++;
  if (a == 1) {
    sel = U;
  }
  if (sel == 0) {
    switch (a) {
      case 1:
        cm.askMenu("The #bDestiny Weapons#k are regular weapons, which enhances as you level.\r\n\r\nTheir new stats are never known, and they may obtain stats which they do not have upon leveling. These stats will be enhanced as you level aswell. \r\n\r\n#bStat Enhancements Maximum#k:\r\n#gHp & Mp#k: If level is lower than 150, then 500 else, 1000.\r\n#gSpeed & Jump#k: If level is lower than 150, then 20 else, 40.\r\n#gAttack & Magic#k: If level is lower than 150, then 150 else, 200.\r\n#gOther Stats#k: If level is lower than 150, then 100 else, 150.\r\n\r\nYou may only hold one #bDestiny Weapon#k, and #rSecondary Destiny Weapons#k are not found yet.\r\n\r\nThere is only one way to know if a weapon is a #bDestiny Weapon#k.\r\n#L0#How do I know if my weapon is a #bDestiny Weapon#k?#l\r\n ");
        break;
      case 2:
        cm.askMenu("There is an uncompleted list of #bDestiny Weapons#k which is being updated.\r\nHowever, the weapons look like regular weapons. The #bDestiny Weapons#k will have their crafter's name signed on it, and there is only one person who can craft them, which is the legendary #rShadow Knight#k.\r\n#L0#May I see the list?#l\r\n ");
        break;
      case 3:
        var V = "Yes of course,";
        for (var w = 0; w < destinyweapons.length; w++) {
          V += "\r\n#v" + destinyweapons[w] + "##t" + destinyweapons[w] + '#';
        }
        V += "\r\n#L0#How can I obtain the #bDestiny Weapons#k?#l\r\n ";
        cm.askMenu(V);
        break;
      case 4:
        cm.askMenu("Since these weapons are very unique, the only way to obtain them is to purchase them from the only seller who knows to craft them, #rThe Shadow Knight#k.\r\nHe can be found at the #rFree Market#k, since it is the best place to trade.\r\nThe Shadow Knight had been found to have some suspicious activities related to the #rBlack Mage#k, he was found trading #i4251202# with the Black Wings for some materials to craft the #bDestiny Weapons#k...\r\n#L0#What is the payment he accepts?#l\r\n ");
        break;
      case 5:
        cm.askMenu("He sells them for some old coins whose were found to be hold by monsters. You shall go and see him yourself!\r\n#L0#Alright, thanks for you help.#l\r\n ");
        cm.dispose();
        break;
      default:
        cm.dispose();
        return;
    }
  } else {
    switch (sel) {
      case 1:
        switch (a) {
          case 1:
            cm.sendOk("The reward system is a new system, which allows you to obtain #dItems#k, #rMaple Points#k, #bMesos#k, or #gExp#k.\r\nYou can access your Rewards by clicking the #fEffect/BasicEff.img/MainNotice/userReward/Default/0##bReward UI#k.\r\nThe Reward UI will appear when you have any rewards you can claim.\r\nYou can get #bRewards#k by creating a character, or leveling up.");
            cm.dispose();
            break;
          default:
            cm.dispose();
            return;
        }
        break;
      default:
        cm.dispose();
        return;
    }
  }
}
var status = -1;