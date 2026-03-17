package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PetAPI extends DwangScriptBaseApi {

    /**
         * 改变所有召唤出来的宠物的颜色
         *
         * @param hue 宠物颜色， 如果要还原颜色的话设置为0
         * @出自类 PetAPI
         */
    default void changePetHue(int hue) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PetAPI
    */
    default void gainCloseness(int closeness, int index) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PetAPI
    */
    default void gainClosenessAll(int closeness) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得宠物
         * @出自类 PetAPI
         */
    default void gainPet(int id, int quantity, String name) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得宠物
         * @出自类 PetAPI
         */
    default void gainPetItem(int id, int quantity) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PetAPI
    */
    default void isBUG宠物(int itemId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PetAPI
    */
    default void revivePet(int uniqueId, int days) {
        throw new RuntimeException("not implemented");
    }



}
