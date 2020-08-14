const {ccclass, property} = cc._decorator;

@ccclass
export default class DomHelper extends cc.Component {
    private static domId = 0;
    private divDom: HTMLDivElement = null;
    onLoad () {
        this.divDom = this.createDom();
    }
    private _visible = true;
    public get visible() {
        return this._visible;
    }
    public set visible(b: boolean) {
        this._visible = b;
        if(b) {
            this.divDom.style.visibility = 'visible';
        }else {
            this.divDom.style.visibility = 'hidden';
        }
    }

    public getDom() {
        return this.divDom;
    }

    onEnable() {
        this.visible = true;
    }
    onDisable() {
        this.visible = false;
    }

    start () {}
  
    private createDom() {
        let rect = this.node.getBoundingBoxToWorld();
    
        /** 屏幕尺寸 */
        let screenHeight = cc.view.getFrameSize().height;
        let screenWidth = cc.view.getFrameSize().width;
        /** 设计尺寸 */
        let viewHeight = cc.view.getVisibleSize().height;
        let viewWidth = cc.view.getVisibleSize().width;

        let left = rect.x;
        let bottom = rect.y;
        /** 缩放比例, fillHeight模式下用height，fillwidth模式下用width */
        let scale = (screenHeight/viewHeight);

        let div = document.createElement('div');
        div.id = `CocosDiv${DomHelper.domId++}`;
        div.style.width = `${scale * rect.width}px`;
        div.style.height = `${scale * rect.height}px`;
        div.style.position = 'absolute';
        div.style.left = `${scale * left}px`;
        div.style.bottom = `${scale * bottom}px`

        document.body.appendChild(div);
        return div;
    }
    // update (dt) {}
}
