import Sub from './Sub';

let instanceSub = new Sub();

describe('strip', () => {

  it('simple test', () => {
    let a = [];
    a[1] = `/* strip-start */ 1234 /* strip-end */`;
    expect(instanceSub.strip(a)).toBe("");
  });

  it('simple test width {}', () => {
    let a = [];
    a[1] = `{/* strip-start */} 1234 {/* strip-end */}`;
    expect(instanceSub.strip(a)).toBe("");
  });

  it('test for spaces ', () => {
    let a = [];
    a[1] =
    `1
    /* strip-start */
    1234 
    /* strip-end */
    1`;
    let b =
    `1
    1`;
    expect(instanceSub.strip(a)).toBe(b);
  });

  it('test for spaces width {}', () => {
    let a = [];
    a[1] =
      `1
    { /* strip-start */}
    1234 
    { /* strip-end */}
    1`;
    let b =
      `1
    1`;
    expect(instanceSub.strip(a)).toBe(b);
  });

});

