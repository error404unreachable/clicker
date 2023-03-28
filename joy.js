var joy = new JoyStick('joyDiv');
var joy = new JoyStick('joyDiv',{
    // The ID of canvas element
    title: 'joystick',
    // width/height
    width: undefined,
    height: undefined,
    // Internal color of Stick
    internalFillColor: 'black',
    // Border width of Stick
    internalLineWidth: 2,
    // Border color of Stick
    internalStrokeColor: 'white',
    // External reference circonference width
    externalLineWidth: 2,
    //External reference circonference color
    externalStrokeColor: 'white',
    // Sets the behavior of the stick
    autoReturnToCenter: true
    
});
var Joy = new JoyStick('joyDiv', {}, function(stickData) {
    joy1IinputPosX.value = stickData.xPosition;
    joy1InputPosY.value = stickData.yPosition;
    joy1Direzione.value = stickData.cardinalDirection;
    joy1X.value = stickData.x;
    joy1Y.value = stickData.y;
});

joy.GetPosX();
joy.GetPosY();
joy.GetDir();
joy.GetX();
joy.GetY();
