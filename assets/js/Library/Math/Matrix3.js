class Matrix3
{
  constructor(items)
  {
    this.items = items || [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  }

  /**
   * Addition
   * 
   * @param {Matrix3} m 
   */
  add(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] + m[0][0], a[0][1] + m[0][1], a[0][2] + m[0][2]]
    c[1] = [a[1][0] + m[1][0], a[1][1] + m[1][1], a[1][2] + m[1][2]]
    c[2] = [a[2][0] + m[2][0], a[2][1] + m[2][1], a[2][2] + m[2][2]]
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
    c[0] = [a[0][0] - m[0][0], a[0][1] - m[0][1], a[0][2] - m[0][2]]
    c[1] = [a[1][0] - m[1][0], a[1][1] - m[1][1], a[1][2] - m[1][2]]
    c[2] = [a[2][0] - m[2][0], a[2][1] - m[2][1], a[2][2] - m[2][2]]
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
    const c_0_0 = a[0][0] * m[0][0] + a[0][1] * m[1][0] + a[0][2] * m[2][0]
    const c_0_1 = a[0][0] * m[0][1] + a[0][1] * m[1][1] + a[0][2] * m[2][1]
    const c_0_2 = a[0][0] * m[0][2] + a[0][1] * m[1][2] + a[0][2] * m[2][2]
    
    //rij 2
    const c_1_0 = a[1][0] * m[0][0] + a[1][1] * m[1][0] + a[1][2] * m[2][0]
    const c_1_1 = a[1][0] * m[0][1] + a[1][1] * m[1][1] + a[1][2] * m[2][1]
    const c_1_2 = a[1][0] * m[0][2] + a[1][1] * m[1][2] + a[1][2] * m[2][2]

    //rij 3
    const c_2_0 = a[2][0] * m[0][0] + a[2][1] * m[1][0] + a[2][2] * m[2][0]
    const c_2_1 = a[2][0] * m[0][1] + a[2][1] * m[1][1] + a[2][2] * m[2][1]
    const c_2_2 = a[2][0] * m[0][2] + a[2][1] * m[1][2] + a[2][2] * m[2][2]
    
    this.items = [
      [c_0_0, c_0_1, c_0_2],
      [c_1_0, c_1_1, c_1_2],
      [c_2_0, c_2_1, c_2_2],
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
      items: [[1,0,0],[0,1,0],[0,0,1]]
    }
    return this.mul(c)
  }

  /**
   * Inverse Matrix
   */
  inverse()
  {
    let a = this.items
    const deta1 = a[0][0] * ((a[1][1] * a[2][2]) - (a[1][2] * a[2][1]))
    const deta2 = -(a[0][1]) * ((a[1][0] * a[2][2]) - (a[1][2] * a[2][0]))
    const deta3 = a[0][2] * ((a[1][0] * a[2][1]) - (a[1][1] * a[2][0]))
    const det = deta1 + deta2 + deta3
    if(det !== 0){
      this.transposed()
      a = this.items
      console.log((a[1][0] * a[2][2]) - (a[1][2] * a[2][0]))
      const minora00 = (a[1][1] * a[2][2]) - (a[1][2] * a[2][1])
      const minora01 = -((a[1][0] * a[2][2]) - (a[1][2] * a[2][0]))
      const minora02 = (a[1][0] * a[2][1]) - (a[1][1] * a[2][0])
      const minora10 = -((a[0][1] * a[2][2]) - (a[0][2] * a[2][1]))
      const minora11 = (a[0][0] * a[2][2]) - (a[0][2] * a[2][0])
      const minora12 = -((a[0][0] * a[2][1]) - (a[0][1] * a[2][0]))
      const minora20 = (a[0][1] * a[1][2]) - (a[0][2] * a[1][1])
      const minora21 = -((a[0][0] * a[1][2]) - (a[0][2] * a[1][0]))
      const minora22 = (a[0][0] * a[1][1]) - (a[0][1] * a[1][0])
      this.items = [
        [(1/det) * minora00, (1/det) * minora01, (1/det) * minora02],
        [(1/det) * minora10, (1/det) * minora11, (1/det) * minora12],
        [(1/det) * minora20, (1/det) * minora21, (1/det) * minora22],
      ]

    } else {
      console.log('This matrix is a "Singular" and has in addition no inverse.')
    }
  }

  /**
   * Transposed Matrix
   */
  transposed()
  {
    const a = this.items
    this.items = [
      [a[0][0], a[1][0], a[2][0]],
      [a[0][1], a[1][1], a[2][1]],
      [a[0][2], a[1][2], a[2][2]]
    ]
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
      [1, 0, 0],
      [0, cos, -sin],
      [0, sin, cos]
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
      [cos, 0, sin],
      [0, 1, 0],
      [-sin, 0, cos]
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
      [cos, -sin, 0],
      [sin, cos, 0],
      [0, 0, 1]
    ]
    this.mul(r)
  }
}

export default Matrix3