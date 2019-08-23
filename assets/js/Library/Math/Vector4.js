//imports
import Matrix4 from '../Matrix/Matrix4.js'

class Vector4
{
  /**
  * Represents a four dimensional vector
  * @param {Number} x
  * @param {Number} y
  * @param {Number} z
  * @param {Number} w
  */
  constructor(x, y, z, w) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
    this.z = Number(z) || 0
    this.w = Number(w) || 0
  }

  /**
   * Length of the vector
   * 
   * @returns {Number}
   */
  norm()
  {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
  }

  /**
   * Normalization of the vector
   * 
   * @returns {Vector4}
   */
  normalization()
  {
    const newX = this.x / this.norm()
    const newY = this.y / this.norm()
    const newZ = this.z / this.norm()
    const newW = this.w
    return new Vector4(newX, newY,newZ,newW)
  }

  /**
   * Addition
   * 
   * @param {Vector4} v 
   */
  add(v)
  {
    this.x += v.x
    this.y += v.y
    this.z += v.z
  }

  /**
   * Subtraction
   * 
   * @param {Vector4} v 
   */
  sub(v)
  {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
  }

  /**
   * Scalar multiplication
   * 
   * @param {Number} a 
   */
  scalar(a)
  {
    this.x *= a
    this.y *= a
    this.z *= a
  }

  /**
   * Dot product
   * 
   * @param {Vector4} v 
   * @returns {Number}
   */
  dot(v)
  {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }

  /**
   * Planar Angle
   * 
   * @param {Vector4} v 
   * @returns {Number}
   */
  plan(v)
  {
    const numerator = this.dot(v);
    const denominator = this.norm() * v.norm()
    return Math.acos(numerator / denominator)
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const m = new Matrix4([
      [this.x, 0, 0, 0],
      [this.y, 0, 0, 0],
      [this.z, 0, 0, 0],
      [this.w, 0, 0, 0],
    ])
    m.rot(α)
    this.x = m.items[0][0]
    this.y = m.items[1][0]
    this.z = m.items[2][0]
    this.w = m.items[3][0]
  }
}

export default Vector4