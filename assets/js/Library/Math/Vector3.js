//imports 
import Matrix3 from '../Matrix/Matrix3.js'

class Vector3
{
  /**
  * Represents a three dimensional vector
  * @param {Number} x
  * @param {Number} y
  * @param {Number} z
  */
  constructor(x, y, z) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
    this.z = Number(z) || 0
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
   * @returns {Vector3}
   */
  normalization()
  {
    const newX = this.x / this.norm()
    const newY = this.y / this.norm()
    const newZ = this.z / this.norm()
    return new Vector3(newX, newY,newZ)
  }

  /**
   * Addition
   * 
   * @param {Vector3} v 
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
   * @param {Vector3} v 
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
   * @param {Vector3} v 
   * @returns {Number}
   */
  dot(v)
  {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }

  /**
   * Planar Angle
   * 
   * @param {Vector3} v 
   * @returns {Number}
   */
  plan(v)
  {
    const numerator = this.dot(v);
    const denominator = this.norm() * v.norm()
    return Math.acos(numerator / denominator)
  }

  /**
   * Cross product
   * 
   * @param {Vector3} v 
   * @returns {Vector3}
   */
  cross(v)
  {
    const newX = (this.y * v.z) - (this.z * v.y)
    const newY = (this.z * v.x) - (this.x * v.z)
    const newZ = (this.x * v.y) - (this.y * v.x)
    return new Vector3( newX, newY, newZ )
  }

  /**
   * Rotate vector around x-as
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rotX(α) {
    const m = new Matrix3([
      [this.x, 0, 0],
      [this.y, 0, 0],
      [this.z, 0, 0]
    ])
    m.rotX(α)
    this.x = m.items[0][0]
    this.y = m.items[1][0]
    this.z = m.items[2][0]
  }

  /**
   * Rotate vector around y-as
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rotY(α) {
    const m = new Matrix3([
      [this.x, 0, 0],
      [this.y, 0, 0],
      [this.z, 0, 0]
    ])
    m.rotY(α)
    this.x = m.items[0][0]
    this.y = m.items[1][0]
    this.z = m.items[2][0]
  }

  /**
   * Rotate vector around z-as
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rotZ(α) {
    const m = new Matrix3([
      [this.x, 0, 0],
      [this.y, 0, 0],
      [this.z, 0, 0]
    ])
    m.rotZ(α)
    this.x = m.items[0][0]
    this.y = m.items[1][0]
    this.z = m.items[2][0]
  }
}

export default Vector3