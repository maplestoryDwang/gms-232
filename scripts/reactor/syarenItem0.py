from net.swordie.ms.constants import SharenianConstants

#Sharenian Purple Gems | Drop Protector Rock
reactor.incHitCount()
if reactor.getHitCount() >= 4:
    x, y = sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY()
    sm.dropItem(SharenianConstants.PROTECTOR_ROCK, x, y)
    sm.removeReactor()