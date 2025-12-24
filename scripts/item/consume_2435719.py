# Tradable Nodestone - 2435719

from net.swordie.ms.constants import CustomConstants

nodestone_amount = sm.getQuantityOfItem(parentID)
open_amount = CustomConstants.MULTI_OPEN_NODESTONE_AMOUNT \
        if nodestone_amount > CustomConstants.MULTI_OPEN_NODESTONE_AMOUNT \
        else nodestone_amount

sm.openMultiNodestones(parentID, open_amount)
