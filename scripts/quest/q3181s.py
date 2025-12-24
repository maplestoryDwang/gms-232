#Murt's Letter | Lionheart Castle Questline
sm.setSpeakerID(2160000)
if sm.sendAskYesNo("Can anybody out there hear me?! Someebody, please listen up!"):
    sm.sendNext("Can you hear me? That's great! I thought I was talking to thin air!")
    sm.sendNext("I'm #b#p2160000##k, I came here looking for the legendary #bLion King's Medal#k, but I guess it didn't work out. I was searching the castle when everything started shaking and monsters started popping out of nowhere! I tried to run, when a man appeared in front of me.")
    sm.sendNext("He was a real mopey lookin' guy who calimed to be #bVon Leon the Lion King#k. I don't remember much after that, but I guess I'm a ghost now. It must be a curse or something! I can still feel my body... and it's super itchy!")
    sm.sendNext("I need to get this letter to #bAlcaster#k in El Nath, He acn get it to my family.")
    if sm.canHold(4032859):
        sm.sendNext("I'd been saving this scroll to get back one day, but I guess you can have it. Just get to #bEl Nath#k and give my letter to Alcaster!")
        sm.giveItem(4032859)
        sm.startQuest(parentID)
        sm.warp(211000000)
    else:
        sm.sendNext("Please make some space in your inventory.")