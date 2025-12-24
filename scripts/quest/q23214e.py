#23214 | Sparring with Mastema
ds = chr.getJob() == 3110
newSec = 1099003 if ds else 1099008
newJob = 3111 if ds else 3121

sm.setSpeakerID(2450017)
sm.sendNext("How did it go? Did my copy give you any trouble? Hey... it didn't... say anything weird, did it? Well anyway, let me record your status in my little book here...")
item = chr.getEquippedInventory().getItemBySlot(10) # Secondary
if item is not None:
    chr.consumeItem(item)
sm.giveNewSecondary(newSec) # New secondary
sm.setJob(newJob)
sm.addSP(5)
sm.completeQuest(parentID)
sm.sendNext("I'm glad I could help you. Now, if you'll excuse me, I used up too much of my power, so I'm going to pass out...")
sm.sendSayOkay("I used too much power, that's why I turned red!")