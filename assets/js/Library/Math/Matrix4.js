class Matrix4
{
  constructor(items)
  {
    this.items = items || [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  }

  /**
   * Addition
   * 
   * @param {Matrix4} m 
   */
  add(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] + m[0][0], a[0][1] + m[0][1], a[0][2] + m[0][2], a[0][3] + m[0][3]]
    c[1] = [a[1][0] + m[1][0], a[1][1] + m[1][1], a[1][2] + m[1][2], a[1][3] + m[1][3]]
    c[2] = [a[2][0] + m[2][0], a[2][1] + m[2][1], a[2][2] + m[2][2], a[2][3] + m[2][3]]
    c[3] = [a[3][0] + m[3][0], a[3][1] + m[3][1], a[3][2] + m[3][2], a[3][3] + m[3][3]]
    this.items = c
  }

  /**
   * 
   * @param {Matrix3} m 
   */
  sub(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] - m[0][0], a[0][1] - m[0][1], a[0][2] - m[0][2], a[0][3] - m[0][3]]
    c[1] = [a[1][0] - m[1][0], a[1][1] - m[1][1], a[1][2] - m[1][2], a[1][3] - m[1][3]]
    c[2] = [a[2][0] - m[2][0], a[2][1] - m[2][1], a[2][2] - m[2][2], a[2][3] - m[2][3]]
    c[3] = [a[3][0] - m[3][0], a[3][1] - m[3][1], a[3][2] - m[3][2], a[3][3] - m[3][3]]
    this.items = c
  }

  /**
   * 
   * @param {Matrix3} m 
   */
  mul(m)
  {
    const a = this.items
    m = m.items

    //rij 1
    const c_0_0 = a[0][0] * m[0][0] + a[0][1] * m[1][0] + a[0][2] * m[2][0] + a[0][3] * m[3][0]
    const c_0_1 = a[0][0] * m[0][1] + a[0][1] * m[1][1] + a[0][2] * m[2][1] + a[0][3] * m[3][1]
    const c_0_2 = a[0][0] * m[0][2] + a[0][1] * m[1][2] + a[0][2] * m[2][2] + a[0][3] * m[3][2]
    const c_0_3 = a[0][0] * m[0][3] + a[0][1] * m[1][3] + a[0][2] * m[2][3] + a[0][3] * m[3][3]
    
    //rij 2
    const c_1_0 = a[1][0] * m[0][0] + a[1][1] * m[1][0] + a[1][2] * m[2][0] + a[1][3] * m[3][0]
    const c_1_1 = a[1][0] * m[0][1] + a[1][1] * m[1][1] + a[1][2] * m[2][1] + a[1][3] * m[3][1]
    const c_1_2 = a[1][0] * m[0][2] + a[1][1] * m[1][2] + a[1][2] * m[2][2] + a[1][3] * m[3][2]
    const c_1_3 = a[1][0] * m[0][3] + a[1][1] * m[1][3] + a[1][2] * m[2][3] + a[1][3] * m[3][3]

    //rij 3
    const c_2_0 = a[2][0] * m[0][0] + a[2][1] * m[1][0] + a[2][2] * m[2][0] + a[2][3] * m[3][0]
    const c_2_1 = a[2][0] * m[0][1] + a[2][1] * m[1][1] + a[2][2] * m[2][1] + a[2][3] * m[3][1]
    const c_2_2 = a[2][0] * m[0][2] + a[2][1] * m[1][2] + a[2][2] * m[2][2] + a[2][3] * m[3][2]
    const c_2_3 = a[2][0] * m[0][3] + a[2][1] * m[1][3] + a[2][2] * m[2][3] + a[2][3] * m[3][3]

    //rij 4
    const c_3_0 = a[3][0] * m[0][0] + a[3][1] * m[1][0] + a[3][2] * m[2][0] + a[3][3] * m[3][0]
    const c_3_1 = a[3][0] * m[0][1] + a[3][1] * m[1][1] + a[3][2] * m[2][1] + a[3][3] * m[3][1]
    const c_3_2 = a[3][0] * m[0][2] + a[3][1] * m[1][2] + a[3][2] * m[2][2] + a[3][3] * m[3][2]
    const c_3_3 = a[3][0] * m[0][3] + a[3][1] * m[1][3] + a[3][2] * m[2][3] + a[3][3] * m[3][3]
    
    this.items = [
      [c_0_0, c_0_1, c_0_2, c_0_3],
      [c_1_0, c_1_1, c_1_2, c_1_3],
      [c_2_0, c_2_1, c_2_2, c_2_3],
      [c_3_0, c_3_1, c_3_2, c_3_3],
    ]
  }

  /**
   * Identity Matrix
   * 
   * @returns {Function}
   */
  identity()
  {
    const c = {
      items: [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
    }
    return this.mul(c)
  }

  /**
   * Rotate the matrix around the x-as.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rotX(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const r = [
      [1, 0, 0, 0],
      [0, cos, -sin, 0],
      [0, sin, cos, 0],
      [0, 0, 0, 1]
    ]
    this.mul(r)
  }

  /**
   * Rotate the matrix around the y-as.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rotY(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const r = [
      [cos, 0, sin, 0],
      [0, 1, 0, 0],
      [-sin, 0, cos, 0],
      [0, 0, 0, 1]
    ]
    this.mul(r)
  }

  /**
   * Rotate the matrix around the z-as.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rotZ(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const r = [
      [cos, -sin, 0, 0],
      [sin, cos, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]
    this.mul(r)
  }
}

export default Matrix4