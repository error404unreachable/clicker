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
