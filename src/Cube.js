class Cube {
  constructor() {
    this.type = "cube";
    //this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
    //this.size = 5.0;
    //this.segments = 10;
    this.matrix = new Matrix4();
    this.textureNum=-1;
  }

  // render() {
  //   //var xy = this.position;
  //   var rgba = this.color;
  //   //var size = this.size;

  //   gl.uniform1i(u_whichTexture, this.textureNum);

  //   gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

  //   //gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
  //   gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

  //   // front of cube

  //   drawTriangle3DUV( [0,0,0, 1,1,0, 1,0,0], [ 0,0, 1,1, 1,0]);
  //   // drawTriangle3DUV( [0,0,0, 0,1,0, 1,1,0], [ 0,0, 0,1, 1,1]);

  //   drawTriangle3D([0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0]);
  //   drawTriangle3D([0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0]);

  //   gl.uniform4f(
  //     u_FragColor,
  //     rgba[0] * 0.9,
  //     rgba[1] * 0.9,
  //     rgba[2] * 0.9,
  //     rgba[3]
  //   );

  //   // top of cube
  //   drawTriangle3D([0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0]);
  //   drawTriangle3D([0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0]);

  //   // // Fake Lighting
  //   // gl.uniform4f(
  //   //   u_FragColor,
  //   //   rgba[0] * 0.9,
  //   //   rgba[1] * 0.9,
  //   //   rgba[2] * 0.9,
  //   //   rgba[3]
  //   // );

  //   // Draw back of the cube
  //   drawTriangle3D([0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0]);
  //   drawTriangle3D([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0]);

  //   // Fake lighting
  //   gl.uniform4f(
  //     u_FragColor,
  //     rgba[0] * 0.8,
  //     rgba[1] * 0.8,
  //     rgba[2] * 0.8,
  //     rgba[3]
  //   );

  //   // Fake lighting
  //   gl.uniform4f(
  //     u_FragColor,
  //     rgba[0] * 0.7,
  //     rgba[1] * 0.7,
  //     rgba[2] * 0.7,
  //     rgba[3]
  //   );

  //   // Draw bottom of the cube
  //   drawTriangle3D([0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0]);
  //   drawTriangle3D([0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0]);

  //   // Draw left side of cube
  //   drawTriangle3D([0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0]);
  //   drawTriangle3D([0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0]);

  //   // Draw right side of cube
  //   drawTriangle3D([1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0]);
  //   drawTriangle3D([1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0]);
  // }

  render() {
    //var xy = this.position;
    var rgba = this.color;
    //var size = this.size;
    //console.log(this.textureNum);
    gl.uniform1i(u_whichTexture, this.textureNum);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);



    //front of cubes
    drawTriangle3DUV([0,0,0, 1,1,0, 1,0,0], [0,0, 1,1, 1,0]);
    drawTriangle3DUV([0,0,0, 0,1,0, 1,1,0], [0,0, 0,1, 1,1]);

    //back of cube
    drawTriangle3DUV([0,0,1, 1,1,1, 1,0,1], [1,0, 0,1, 0,0]);
    drawTriangle3DUV([0,0,1, 0,1,1, 1,1,1], [1,0, 1,1, 0,1]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);

    //top of cube
    drawTriangle3DUV([0,1,0, 0,1,1, 1,1,1], [0,0, 0,1, 1,1]);
    drawTriangle3DUV([0,1,0, 1,1,1, 1,1,0], [0,0, 1,1, 1,0]);


    //bottom
    drawTriangle3DUV([0,0,0, 0,0,1, 1,0,1], [0,1, 0,0, 1,0]);
    drawTriangle3DUV([0,0,0, 1,0,1, 1,0,0], [0,1, 1,0, 1,1]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.8, rgba[1] * 0.8, rgba[2] * 0.8, rgba[3]);

    //right side of cube
    drawTriangle3DUV([1,0,0, 1,1,0, 1,1,1], [0,0, 0,1, 1,1]);
    drawTriangle3DUV([1,0,0, 1,1,1, 1,0,1], [0,0, 1,1, 1,0]);

    //left side of cube
    drawTriangle3DUV([0,0,0, 0,1,0, 0,1,1], [1,0, 1,1, 0,1]);
    drawTriangle3DUV([0,0,0, 0,1,1, 0,0,1], [1,0, 0,1, 0,0]);

  }
}
