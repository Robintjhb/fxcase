import { _decorator, Component, Node, RenderFlow } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PPFlow")
export class PPFlow extends RenderFlow {

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    rebuild () {
        
    }

    destroy () {

    }
}
