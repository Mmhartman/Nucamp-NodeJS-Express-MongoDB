module.exports = (x, y, callback) =>  {
      if (x <= 0 || y <= 0) {
        //ERROR CALL BACK PATTERN. STNDARD PRACTICE IN NODE.JS FOR ASYNC FUNC TO RETURN AN ERROR OBJ AS THE 1ST ARGUMNT //
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() => // error function that contains the callback 
            callback(null, {
                perimeter: () => 2 * (x + y),
                area:() => x * y
            }),
            2000 // MS to wait // 
            );
        }
    };
