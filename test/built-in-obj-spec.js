describe("BUILT IN OBJECTS", function(){
  it("Easily mistake numbers with leading zeroes in ES5", function(){
    let octal = 071;
    expect(parseInt(octal)).toBe(57);
  });
  it("Supports Octal Literals, use smaller or bigger 0o", function(){
    let octal = 0o71;
    expect(parseInt(octal)).toBe(57);
  });
  it("Supports Binary Literals, use 0b", function(){
    let bin = 0b1101;
    expect(parseInt(bin)).toBe(13);
  });
  it("Supports Octal Literals using number functions when passed as string", function(){
    let octal = Number("0o71");
    expect(parseInt(octal)).toBe(57);
  });
  it("Supports Binary Literals using number functions when passed as string", function(){
    let octal = Number("0b101");
    expect(parseInt(octal)).toBe(5);
  });
  //ES6 exposes parseInt and parseFloat on number object
  it("Should expose parseInt and parseFloat on number obj", function(){
    expect(Number.parseInt("1")).toBe(1);
    expect(Number.parseFloat("1.5")).toBe(1.5);
  });
  //ES5 Global isFinite and isNaN converts string to number and then converts
  //ES6 Number.isFinite() and Number.isNaN() does not convert string to number
  it("Should not convert strings when calling Number.isFinite() Vs global", function(){
    expect(isFinite("1")).toBe(true);
    expect(Number.isFinite("1")).toBe(false);
  });
  it("Should not convert strings when calling Number.isNaN() Vs global", function(){
    expect(isNaN("NaN")).toBe(true);
    expect(Number.isNaN("NaN")).toBe(false);
  });
  it("Should correctly detect integers with isInteger", function(){
    expect(Number.isInteger(1)).toBe(true);
    expect(Number.isInteger(1.0)).toBe(true);
    expect(Number.isInteger(1.5)).toBe(false);
    expect(Number.isInteger("1")).toBe(false);
  });
});
