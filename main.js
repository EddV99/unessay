import * as PIXI from "./pixijs";

const canvas = document.getElementById('pixi-canvas');

const app = new PIXI.Application();
await app.init({ background: '#ffffff', autoResize: true, view: canvas})


//document.body.appendChild(app.canvas);

// Create the sprite and add it to the stage
let playerData = {
    frames: { 
        walk1: { 
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: {w: 32, h: 32 },
            spriteSourceSize: {x: 0, y: 0, w: 32, h: 32 }
        }, 
        walk2: { 
            frame: { x: 32, y: 0, w: 32, h: 32 },
            sourceSize: {w: 32, h: 32 },
            spriteSourceSize: {x: 0, y: 0, w: 32, h: 32 }
        }, 
        walk3: { 
            frame: { x: 0, y: 32, w: 32, h: 32 },
            sourceSize: {w: 32, h: 32 },
            spriteSourceSize: {x: 0, y: 0, w: 32, h: 32 }
        }, 
        walk4: { 
            frame: { x: 32, y: 32, w: 32, h: 32 },
            sourceSize: {w: 32, h: 32 },
            spriteSourceSize: {x: 0, y: 0, w: 32, h: 32 }
        }, 
        walk5: { 
            frame: { x: 0, y: 64, w: 32, h: 32 },
            sourceSize: {w: 32, h: 32 },
            spriteSourceSize: {x: 0, y: 0, w: 32, h: 32 }
        }, 
    },
    meta: {
        image:'public/stickman-pixiJSMovie.png',
        format: 'RGBA8888',
        size: {w: 64, h: 96 },
        scale: 1
    },
    animations: {
        walk: ["walk1","walk2","walk3","walk4","walk5"]
    }
};

const spritesheet = new PIXI.Spritesheet(
    PIXI.Texture.from(playerData.meta.image),
    playerData
);

await spritesheet.parse();

const anim = new PIXI.AnimatedSprite(spritesheet.animations.walk);
anim.animationSpeed = 0.12;
anim.play();

app.stage.addChild(anim);

//import * as PIXI from './pixi.js';
//// Create the application helper and add its render target to the page

//const canvas = document.getElementById('pixi-canvas');

//const app = new PIXI.Application();
//await app.init({ background: '#ffffff', autoResize: true, view: canvas})
////document.body.appendChild(app.canvas);

//// Create the sprite and add it to the stage

//let playerSheet = {};

//const loader = PIXI.Loader.shared;
//PIXI.Loader.shared.add("public/stickman-pixiJSMovie.png").load(doneLoading);

////await PIXI.Assets.load('public/stickman-pixiJSMovie.png');
////let sprite = PIXI.Sprite.from('public/stickman-pixiJSMovie.png');
////app.stage.addChild(sprite);

//function doneLoading(){
//    createPlayerSheet();
//    createPlayer();
//    app.ticker.add(gameLoop);
//};

//function createPlayerSheet(){
//    let sheet = new PIXI.BaseTexture.from(app.loader.resources['player'].url);
//    let width = 32;
//    let height = 32;
//    playerSheet["walk"] = [
//        new PIXI.Texture(sheet, new PIXI.Rectangle(0 * width, 0 * height, width, height)),
//        new PIXI.Texture(sheet, new PIXI.Rectangle(1 * width, 0 * height, width, height)),
//        new PIXI.Texture(sheet, new PIXI.Rectangle(0 * width, 1 * height, width, height)),
//        new PIXI.Texture(sheet, new PIXI.Rectangle(1 * width, 1 * height, width, height)),
//        new PIXI.Texture(sheet, new PIXI.Rectangle(0 * width, 2 * height, width, height))
//    ];
//}

//function createPlayer(){
//    player = new PIXI.AnimatedSprite(playerSheet.walk);
//    player.animationSpeed = .5;
//    player.loop = true;
//    player.x =  0;
//    player.y = 0;
//    app.stage.addChild(player);
//    player.play();
//}

//function gameLoop(){

//}
