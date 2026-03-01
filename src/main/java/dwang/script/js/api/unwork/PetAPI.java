package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PetAPI extends DwangScriptBaseApi {

    default void gainClosenessAll(int closeness) { }

    default void isBUG宠物(int itemId) { }

    default void gainPetItem(int id, int quantity) { }

    default void revivePet(int uniqueId, int days) { }

    default void gainCloseness(int closeness, int index) { }

    default void gainPet(int id, int quantity, String name) { }

    default void changePetHue(int hue) { }

}
