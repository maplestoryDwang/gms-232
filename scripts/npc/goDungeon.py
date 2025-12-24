# Jeff 
# 2030000
# Ice Valley II (211040200)
# Warp from Ice Valley II to Sharp Cliff I if player is 60+.

sm.sendNext("Hey, you look like you want to go farther and deeper past this place. "
"Over there, though, you'll find yourself surrounded by aggressive, dangerous monsters, "
"so even if you feel that you're ready to go, please be careful. "
"Long ago, a few brave men from our town went in wanting to elliminate anyone threatening the town, "
"but never came back out...")
if chr.getLevel() >= 60:
    response = sm.sendAskYesNo("If you are thinking of going in, I suggest you change your mind. "
    "But if you really want to go in...I'm only letting in the ones that are strong enough to stay alive in there. "
    "I do not wish to see anyone else die. Let's see... Hmmm...! You look pretty strong. "
    "All right, do you want to go in?")
    if response:
        sm.warp(211040300, 5)
    else:
        sm.sendSayOkay("I know taking the risk isn't easy. Come back if you change your mind later. It's my duty to guard this place.")
else:
    sm.sendSayOkay("I cannot let you enter the Dead Mine. Come back when you are at least Level 60.")