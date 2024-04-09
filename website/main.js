// Create the application helper and add its render target to the page

const canvas = document.getElementById('pixi-canvas');

const app = new PIXI.Application();
await app.init({ background: '#ff00ff', autoResize: true, view: canvas})
//document.body.appendChild(app.canvas);

// Create the sprite and add it to the stage
await PIXI.Assets.load('public/stickman-pixiJSMovie.png');
let sprite = PIXI.Sprite.from('public/stickman-pixiJSMovie.png');
app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});
