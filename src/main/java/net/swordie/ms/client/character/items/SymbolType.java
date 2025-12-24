package net.swordie.ms.client.character.items;

import net.swordie.ms.constants.ItemConstants;

public enum SymbolType {
    Arcane,
    Authentic,
    ;

    public static SymbolType byItemId(int itemId) {
        if (ItemConstants.isArcaneSymbol(itemId)) {
            return Arcane;
        } else if (ItemConstants.isAuthenticForceSymbol(itemId)) {
            return Authentic;
        }

        return null;
    }
}
